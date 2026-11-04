import test from 'node:test';
import assert from 'node:assert/strict';
import { rubric, checkIds, scores, baseline } from '../../scripts/portfolio-qa/rubric.mjs';
import { validateReview } from '../../scripts/portfolio-qa/review.mjs';
import { dashboard, fingerprint, snapshot, readHistory, historyMarker, deltas } from '../../scripts/portfolio-qa/dashboard.mjs';
import { dispatch } from '../../scripts/portfolio-qa/cursor.mjs';
const result = {summary:'fixture',findings:[],limitations:[],assessment:checkIds.map(id=>({id,status:'unknown',evidence:'Not supplied'}))};
test('unknown is never counted as assessed or met; duplicate checks fail validation',()=>{
  assert.ok(scores(result.assessment).every(s=>s.met===0 && s.assessed===0));
  assert.throws(()=>validateReview({...result,assessment:checkIds.map(()=>result.assessment[0])}));
});
test('comparison identity changes with context, rules or model',()=>{
  const a=fingerprint('a','r','m');
  assert.notEqual(a,fingerprint('b','r','m'));
  assert.notEqual(a,fingerprint('a','s','m'));
  assert.notEqual(a,fingerprint('a','r','n'));
});
test('history accepts bot snapshots only; HTML escapes model output and has no fabricated scores',()=>{
  const current=snapshot({id:'1',head:'a'.repeat(40),technical:'success',model:'test',fingerprint:'a'});
  assert.equal(readHistory([{user:{login:'attacker'},body:`${historyMarker}\n${JSON.stringify(current)}`}]).length,0);
  const html=dashboard(current,[],{...result,limitations:['<script>alert(1)</script>']},'NOT REVIEWED');
  assert.ok(!html.includes('<script>'));
  assert.match(html,/Not reviewed/);
  assert.equal(rubric.confirmed,true);
});
test('Cursor dispatch reserves before call, binds PR, stops at round limit or stale head',async()=>{
  const old={...process.env};
  try {
    process.env.CURSOR_QA_ENABLED='true';process.env.CURSOR_QA_APPROVED_PR='1';process.env.CURSOR_API_KEY='test';process.env.CURSOR_QA_MAX_ROUNDS='1';
    const order=[];
    const pr={number:1,state:'open',head:{sha:'a'.repeat(40)},html_url:'https://github.com/o/r/pull/1'};
    const args={pr,context:{repo:{owner:'o',repo:'r'}},history:[],tasks:'fix',github:{rest:{pulls:{get:async()=>({data:pr})},issues:{createComment:async()=>{order.push('reserved');return {data:{id:7}}},updateComment:async value=>{assert.equal(value.comment_id,7);order.push('receipt')}}}},fetchImpl:async(url,opts)=>{order.push('called');const b=JSON.parse(opts.body);assert.equal(b.repos[0].prUrl,pr.html_url);assert.equal(b.autoCreatePR,false);return {ok:true,json:async()=>({agent:{id:'bc-fixture'},run:{id:'run-fixture'}})}}};
    assert.equal(await dispatch(args),'submitted: https://cursor.com/agents/bc-fixture (run run-fixture)');assert.deepEqual(order,['reserved','called','receipt']);
    assert.equal(await dispatch({...args,history:[{user:{login:'github-actions[bot]'},body:'<!-- portfolio-cursor-dispatch --> old'}]}),'round limit reached');
    process.env.CURSOR_QA_MAX_ROUNDS='5';
    await assert.rejects(dispatch(args), /Invalid Cursor round limit/);
    process.env.CURSOR_QA_MAX_ROUNDS='2';
    assert.equal(await dispatch({...args,history:[1,2].map(i=>({user:{login:'github-actions[bot]'},body:'<!-- portfolio-cursor-dispatch --> '+i}))}),'round limit reached');
    delete process.env.CURSOR_QA_APPROVED_PR;
    assert.match(await dispatch(args), /awaiting owner approval/);
    process.env.CURSOR_QA_APPROVED_PR='1';
    assert.equal(await dispatch({...args,github:{rest:{pulls:{get:async()=>({data:{...pr,head:{sha:'new'}}})}}}}),'stale');
  } finally {process.env=old;}
});

const assessment = status => checkIds.map(id => ({ id, status, evidence: 'Synthetic arithmetic fixture, not a portfolio rating.' }));
const rated = (items, head = 'a'.repeat(40), identity = 'same') => snapshot({
  id: head, head, model: 'test', fingerprint: identity, technical: 'success', result: { ...result, assessment: items },
});
test('owner weights total 100; AI supplement has no agreed weight', () => {
  assert.deepEqual(rubric.criteria.map(c => c.weight), [20, 25, 20, 25, 10, null]);
  assert.equal(rubric.criteria.reduce((sum, c) => sum + (c.weight ?? 0), 0), 100);
});
test('fully unknown, proven gaps and full attainment remain distinct', () => {
  const unknown = baseline(scores(assessment('unknown')));
  assert.deepEqual(unknown, { score: null, lower: 0, upper: 100, maximum: 100, assessedWeight: 0 });
  assert.equal(baseline(scores(assessment('gap'))).score, 0);
  assert.equal(baseline(scores(assessment('met'))).score, 100);
  assert.ok(scores(assessment('unknown')).every(c => c.points === null));
});
test('partial evidence shows a range without normalising to an invented final score', () => {
  const items = assessment('unknown');
  items[0].status = 'met'; items[1].status = 'gap';
  const rows = scores(items);
  assert.equal(rows[0].points, null);
  assert.equal(rows[0].lower, 6.67);
  assert.equal(rows[0].upper, 13.33);
  assert.deepEqual(baseline(rows), { score: null, lower: 6.67, upper: 93.33, maximum: 100, assessedWeight: 13.33 });
});
test('round only after summing unrounded weighted contributions', () => {
  const items = assessment('gap').map((a, i) => ({ ...a, status: i % 3 === 0 ? 'met' : 'gap' }));
  assert.equal(baseline(scores(items)).score, 33.33);
  assert.equal(scores(items).filter(c => c.weight !== null).reduce((sum, c) => sum + c.points, 0), 33.33);
  const twoOfThree = items.map((a, i) => ({ ...a, status: i % 3 !== 2 ? 'met' : 'gap' }));
  assert.equal(baseline(scores(twoOfThree)).score, 66.67);
  const fractional = assessment('gap'); fractional[0].status = 'met'; fractional[6].status = 'met';
  const rows = scores(fractional);
  assert.equal(rows[0].points + rows[2].points, 13.34);
  assert.equal(baseline(rows).score, 13.33);
  const delta = deltas(rated(twoOfThree, 'b'.repeat(40)), [rated(items)]);
  assert.equal(delta.baseline, 33.33);
  assert.equal(delta.criteria[0].points, 6.67);
});
test('unassessed AI checks do not block or alter a complete base score', () => {
  const items = assessment('met').map(a => a.id.startsWith('ai-evidence') ? { ...a, status: 'unknown' } : a);
  assert.equal(baseline(scores(items)).score, 100);
  assert.equal(scores(items).at(-1).points, null);
});
test('deltas require compatible complete values; gaps differ from unknown', () => {
  const previous = rated(assessment('gap'));
  const current = rated(assessment('met'), 'b'.repeat(40));
  assert.equal(deltas(current, [previous]).baseline, 100);
  assert.deepEqual(deltas(current, [previous]).criteria.map(c => c.points), [20, 25, 20, 25, 10, null]);
  assert.equal(deltas(current, [{ ...previous, fingerprint: 'old-rubric' }]).baseline, null);
  assert.equal(deltas(current, [{ ...previous, head: current.head }]).baseline, null);
  assert.equal(deltas(current, [rated(assessment('unknown'))]).baseline, null);
});
test('history roundtrips weighted snapshots, rejects altered arithmetic and preserves legacy without conversion', () => {
  const current = rated(assessment('met'));
  const comment = v => ({ user: { login: 'github-actions[bot]' }, body: `${historyMarker}\n${JSON.stringify(v)}` });
  assert.deepEqual(readHistory([comment(current)]), [current]);
  assert.equal(readHistory([comment({ ...current, baseline: { ...current.baseline, score: 99 } })]).length, 0);
  assert.equal(readHistory([comment({ ...current, scores: current.scores.map(c => ({ ...c, points: 42 })) })]).length, 0);
  const legacy = { ...current, schemaVersion: undefined, rubric: 'provisional-v1', scores: current.scores.map(c => ({ id: c.id, met: 1, assessed: 2, total: 3 })), baseline: undefined };
  assert.equal(readHistory([comment(legacy)]).length, 1);
  assert.match(dashboard(current, [legacy], result, 'fixture'), /Legacy \/3 checks/);
  assert.equal(deltas(current, [legacy]).baseline, null);
});
test('HTML and Markdown display unknown and supplemental status without fabricated timed test claims', async () => {
  const { renderReview } = await import('../../scripts/portfolio-qa/review.mjs');
  const current = rated(assessment('unknown'));
  const html = dashboard(current, [], result, 'fixture');
  const markdown = renderReview(result);
  assert.match(html, /Not fully assessed/);
  assert.match(html, /30-second comprehension: <strong>untested/);
  assert.match(html, /Weight unagreed; excluded/);
  assert.match(markdown, /Not fully assessed \/100/);
  assert.match(markdown, /30-second comprehension: untested/);
});
