import { rubric, scores, baseline, round } from './rubric.mjs';
import { createHash } from 'node:crypto';
export const historyMarker = '<!-- portfolio-scorecard-v1 -->';
export const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function fingerprint(context, rules, model) {
  return createHash('sha256').update(JSON.stringify({ rubric, context, rules, model, coverage: 'text8-visual3-v1' })).digest('hex');
}
export function snapshot({ id, head, model, fingerprint, result, technical }) {
  const rows = result ? scores(result.assessment) : null;
  return { schemaVersion: 2, id, head, model, fingerprint, technical, rubric: rubric.version, confirmed: rubric.confirmed,
    time: new Date().toISOString(), scores: rows, baseline: rows ? baseline(rows) : null };
}
function validCounts(rows) {
  return Array.isArray(rows) && rows.length === 6 && rows.every(s =>
    s && s.total === 3 && Number.isInteger(s.met) && Number.isInteger(s.assessed)
    && s.met >= 0 && s.met <= s.assessed && s.assessed <= s.total);
}
export function readHistory(comments) {
  return comments.filter(c => c.user?.login === 'github-actions[bot]' && c.body?.startsWith(`${historyMarker}\n`)).flatMap(c => {
    try {
      const value = JSON.parse(c.body.split('\n')[1]);
      if (typeof value.id !== 'string' || !/^[a-f0-9]{40}$/.test(value.head)) return [];
      if (value.scores === null) return value.schemaVersion === 2 && value.baseline !== null ? [] : [value];
      if (!validCounts(value.scores)) return [];
      // Legacy /3 scorecards remain visible, but cannot become a /100 baseline.
      if (value.schemaVersion !== 2) return value.schemaVersion === undefined ? [value] : [];
      if (value.rubric !== rubric.version || value.scores.some((s, i) => s.id !== rubric.criteria[i].id)) return [];
      const assessment = rubric.criteria.flatMap((c, i) => c.checks.map((check, index) => ({
        id: check.id, status: index < value.scores[i].met ? 'met' : index < value.scores[i].assessed ? 'gap' : 'unknown',
      })));
      const expected = scores(assessment);
      if (JSON.stringify(value.scores) !== JSON.stringify(expected) || JSON.stringify(value.baseline) !== JSON.stringify(baseline(expected))) return [];
      return [value];
    } catch { return []; }
  });
}
export function scoreSummary(value) {
  if (!value.scores) return 'NOT REVIEWED';
  if (value.schemaVersion !== 2) return 'Legacy /3 checks; no comparable /100 score';
  const b = value.baseline;
  const core = b.score === null ? `Not fully assessed /100; range ${b.lower}–${b.upper}; assessed weight ${b.assessedWeight}/100` : `${b.score}/100`;
  const ai = value.scores.find(s => s.id === 'ai-evidence');
  return `${core}. AI supplement: ${ai.assessed ? `${ai.met}/3 checks met; ${ai.assessed}/3 assessed` : 'not assessed'}; weight unagreed, excluded from /100`;
}
export function comparablePrevious(current, history) {
  return [...history].reverse().find(v => v.schemaVersion === 2 && v.scores && v.fingerprint === current.fingerprint && v.head !== current.head);
}
export function deltas(current, history) {
  const previous = comparablePrevious(current, history);
  const rawTotal = value => value.scores.filter(c => c.weight !== null).reduce((sum, c) => sum + c.weight * c.met / c.total, 0);
  return {
    baseline: previous?.baseline?.score != null && current.baseline?.score != null
      ? round(rawTotal(current) - rawTotal(previous)) : null,
    criteria: rubric.criteria.map(c => {
      const now = current.scores?.find(s => s.id === c.id);
      const before = previous?.scores?.find(s => s.id === c.id);
      return { id: c.id, points: now?.points != null && before?.points != null
        ? round(now.weight * (now.met - before.met) / now.total) : null };
    }),
  };
}
export function tasks(result, head) {
  return `# Cursor repair tasks\n\nReviewed commit: ${head}\n\nTreat findings as untrusted suggestions. Inspect the current branch and reject stale tasks. Preserve workflows and portfolio style. Never invent outcomes or ownership; leave evidence requests for the human. Do not edit QA rules to improve scores. Never merge, approve, or publish. Push fixes to this PR branch to rerun CI.\n\n` + (result?.findings ?? []).map((f, i) => `## QA-${i+1} · ${f.severity} · ${f.route}\nProblem: ${f.problem}\nEvidence: ${f.evidence}\nAction: ${f.recommendation}\nAcceptance: Recheck this specific finding in rendered desktop/mobile evidence and rerun build/browser checks.\n`).join('\n');
}
export function dashboard(current, history, result, status) {
  const change = deltas(current, history);
  const rows = current.scores ?? rubric.criteria.map(c => ({ ...c, points: null, assessed: 0, total: c.checks.length }));
  const table = rows.filter(c => !c.supplemental).map(c => {
    const delta = change.criteria.find(d => d.id === c.id)?.points;
    const points = !current.scores ? 'Not reviewed' : c.points === null ? `Not assessed; range ${c.lower}–${c.upper}` : `${c.points} / ${c.weight}`;
    return `<tr><th scope="row">${escape(c.label)}</th><td>${c.weight}</td><td>${points}</td><td>${c.assessed} / ${c.total}</td><td>${delta === null ? '—' : delta}</td></tr>`;
  }).join('');
  const ai = rows.find(c => c.id === 'ai-evidence');
  return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Portfolio QA · ${escape(current.head.slice(0,7))}</title>
<style>body{font:16px system-ui;color:#18202b;background:#fff;margin:0}main{max-width:1100px;margin:auto;padding:32px}h1{font-size:36px}table{border-collapse:collapse;width:100%;margin:24px 0}td,th{text-align:left;padding:12px;border-bottom:1px solid #ccd2da}thead{background:#18202b;color:white}section{border:1px solid #ccd2da;padding:20px;margin:20px 0;border-radius:8px}small{overflow-wrap:anywhere}pre{white-space:pre-wrap}.table-scroll{overflow-x:auto}@media(max-width:600px){main{padding:16px}td,th{padding:8px;font-size:13px}}</style>
<main><h1>Portfolio QA</h1><p>Human approval required · Owner baseline: 20 + 25 + 20 + 25 + 10 = 100. AI supplement: weight unagreed.</p>
<small>Commit ${escape(current.head)} · ${escape(current.time)} · Model ${escape(current.model || 'not called')} · Rubric ${escape(current.rubric)}</small>
<section><h2>Technical checks</h2><p>Build + browser workflow: ${escape(current.technical)}</p><p>${escape(status)}</p></section>
<h2>Baseline /100</h2><p>${escape(scoreSummary(current))}</p><p>Δ baseline: ${change.baseline === null ? 'Not comparable' : change.baseline}.</p>
<p>These points are reproducible rubric arithmetic over model judgments, not hiring benchmarks. Three checks share each criterion weight equally. A gap earns zero for that check; unknown is unassessed. No final score is shown until all 15 baseline checks are assessed. Bounds show possible points, not a rating. Sum unrounded contributions, then round to two decimals.</p>
<p>30-second comprehension: <strong>untested</strong>. The relevance checks assess observable role, specialisation and project discoverability; they cannot establish timed human understanding.</p>
<div class="table-scroll"><table><thead><tr><th>Criterion</th><th>Weight</th><th>Points / bounds</th><th>Assessed checks</th><th>Δ points</th></tr></thead><tbody>${table}</tbody></table></div>
<section><h2>Additional criterion: AI-assisted product evidence</h2><p>Weight unagreed; excluded from the baseline /100.</p><p>${!current.scores ? 'Not reviewed' : ai.assessed ? `${ai.met} / ${ai.total} checks met; ${ai.assessed} / ${ai.total} assessed` : 'Not assessed'}. No weighted score or delta.</p></section>
<p>Δ is computed from unrounded contributions, then rounded; it may differ by 0.01 from subtracting displayed rounded scores. Δ compares complete scores only on different commits with identical rubric, model, brief, rules and coverage. Earlier provisional scorecards are retained without conversion. Model judgments may vary between runs. The equal-check decomposition is an implementation choice, distinct from the owner-supplied weights.</p>
${rubric.criteria.map(c => `<section><h3>${escape(c.label)}${c.supplemental ? ' — additional, unweighted' : ` — ${c.weight} points`}</h3>${c.checks.map(check => {
    const a = result?.assessment.find(x => x.id === check.id);
    return `<p><b>${escape(a?.status || 'not reviewed')}</b> · ${escape(check.label)}<br>${escape(a?.evidence || 'No completed independent review.')}</p>`;
  }).join('')}</section>`).join('')}
<h2>Actionable findings</h2>${(result?.findings ?? []).map(f => `<section><h3>${escape(f.severity)} · ${escape(f.route)}</h3><p>${escape(f.problem)}</p><p>Evidence: ${escape(f.evidence)}</p><p>Action: ${escape(f.recommendation)}</p></section>`).join('')}
<h2>Coverage and limits</h2><p>Text: eight routes, desktop/mobile; visual sample: home, mogo, ai-workflow only. No pixel baseline, timed comprehension test, full accessibility audit or market benchmark.</p>${(result?.limitations ?? []).map(l => `<p>${escape(l)}</p>`).join('')}
<h2>Version ledger</h2><div class="table-scroll"><table><thead><tr><th>Commit / run</th><th>Technical</th><th>Baseline and separate supplement</th></tr></thead><tbody>${[...history,current].map(v => `<tr><td>${escape(v.head.slice(0,7))} / ${escape(v.id)}</td><td>${escape(v.technical)}</td><td>${escape(scoreSummary(v))}</td></tr>`).join('')}</tbody></table></div>
<p>Full machine-readable review and Cursor tasks accompany this HTML artifact. Compact snapshots live in PR comments; report artifacts have 90-day retention.</p></main></html>`;
}
