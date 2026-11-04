import { checkIds } from '../../scripts/portfolio-qa/rubric.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { loadEvidence, review, renderReview, validateReview } from '../../scripts/portfolio-qa/review.mjs';

const result = { assessment: checkIds.map(id => ({id, status:'unknown', evidence:'Test fixture: no evidence supplied'})), summary: 'Evidence reviewed', findings: [], limitations: ['No baseline comparison.'] };
const args = { apiKey: 'test-only', model: 'configured-vision-model', context: 'Verified context', rules: 'Review rules', diff: 'patch', evidence: { pages: [], images: [{ name: 'home-mobile.png', url: 'data:image/png;base64,test' }] } };

test('API request is stateless, includes images and rules, and bounds output', async () => {
  let calls = 0;
  const output = await review({ ...args, fetchImpl: async (url, options) => {
    calls++;
    assert.equal(url, 'https://api.openai.com/v1/responses');
    const payload = JSON.parse(options.body);
    assert.equal(payload.store, false);
    assert.equal(payload.model, args.model);
    assert.equal(payload.max_output_tokens, 6500);
    assert.equal(payload.previous_response_id, undefined);
    assert.equal(payload.tools, undefined);
    assert.equal(payload.text.format.strict, true);
    assert.ok(payload.input[0].content.some(item => item.type === 'input_image'));
    assert.match(payload.input[0].content[0].text, /Review rules/);
    return { ok: true, json: async () => ({ status: 'completed', model: args.model, output: [{ content: [{ type: 'output_text', text: JSON.stringify(result) }] }] }) };
  } });
  assert.deepEqual(output.result, result);
  assert.equal(calls, 1);
});

test('HTTP failures never expose raw errors or retry the API', async () => {
  let calls = 0;
  await assert.rejects(review({ ...args, fetchImpl: async () => { calls++; return { ok: false, status: 429 }; } }), /OpenAI HTTP 429/);
  assert.equal(calls, 1);
});

for (const body of [
  { status: 'incomplete', output: [] },
  { status: 'completed', output: [{ content: [{ type: 'refusal', refusal: 'No' }] }] },
  { status: 'completed', output: [{ content: [{ type: 'output_text', text: '{"summary":"OK"}' }] }] },
]) {
  test(`incomplete, refused or malformed output never becomes a pass: ${JSON.stringify(body)}`, async () => {
    await assert.rejects(review({ ...args, fetchImpl: async () => ({ ok: true, json: async () => body }) }));
  });
}

test('findings must use known routes, severity and actionable evidence', () => {
  assert.throws(() => validateReview({ ...result, findings: [{ severity: 'approved', route: 'unknown' }] }));
  const report = renderReview({ ...result, summary: '<script>@someone</script>' });
  assert.ok(!report.includes('<script>'));
  assert.ok(!report.includes('@someone'));
});

test('incomplete evidence cannot trigger a review', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'portfolio-qa-'));
  try {
    await writeFile(join(directory, 'home-desktop.json'), JSON.stringify({ route: 'home', viewport: 'desktop', text: 'bad', headings: [], overflow: true, brokenImages: [], errors: [] }));
    await assert.rejects(loadEvidence(directory), /failing browser evidence/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
