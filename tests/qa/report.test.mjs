import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { run } from '../../scripts/portfolio-qa/report.mjs';

async function scenario({ conclusion = 'success', enabled = 'false', stale = false, existing = false } = {}) {
  const directory = await mkdtemp(join(tmpdir(), 'portfolio-report-'));
  const previous = process.cwd();
  const oldEnv = { ...process.env };
  const comments = [];
  const failures = [];
  const pr = { state: 'open', head: { sha: 'abc123', repo: { full_name: 'owner/repo' } }, base: { ref: 'main' } };
  let reads = 0;
  try {
    process.chdir(directory);
    process.env.PR_NUMBER = '12';
    process.env.PORTFOLIO_QA_ENABLED = enabled;
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    await run({
      context: { repo: { owner: 'owner', repo: 'repo' }, payload: { repository: { full_name: 'owner/repo' }, workflow_run: { conclusion, head_sha: 'abc123', html_url: 'https://github.com/owner/repo/actions/runs/1' } } },
      github: {
        rest: {
          pulls: { get: async () => ({ data: { ...pr, head: { ...pr.head, sha: stale && ++reads > 1 ? 'new-sha' : 'abc123' } } }) },
          issues: { listComments: () => {}, createComment: async value => comments.push(value), updateComment: async value => comments.push(value) },
        },
        paginate: async () => existing ? [{ id: 44, user: { login: 'github-actions[bot]' }, body: '<!-- portfolio-independent-qa --> old' }] : [],
      },
      core: { warning: () => {}, setFailed: message => failures.push(message), summary: { addRaw() { return this; }, async write() {} } },
    });
    return { comments: comments.filter(c => !c.body?.startsWith('<!-- portfolio-scorecard-v1 -->')), failures };
  } finally {
    process.chdir(previous);
    process.env = oldEnv;
    await rm(directory, { recursive: true, force: true });
  }
}

test('missing opt-in posts NOT REVIEWED, never approval', async () => {
  const { comments } = await scenario();
  assert.equal(comments.length, 1);
  assert.match(comments[0].body, /NOT REVIEWED.*disabled/);
  assert.match(comments[0].body, /abc123/);
});
test('build failure reports technical failure without API use', async () => {
  const { comments } = await scenario({ conclusion: 'failure' });
  assert.match(comments[0].body, /NOT REVIEWED.*failure/);
});
test('enabled but unconfigured QA posts failure and fails its job', async () => {
  const { comments, failures } = await scenario({ enabled: 'true' });
  assert.match(comments[0].body, /configuration is missing/);
  assert.equal(failures.length, 1);
});
test('report is updated rather than adding repeat comments', async () => {
  const { comments } = await scenario({ existing: true });
  assert.equal(comments.length, 1);
  assert.equal(comments[0].comment_id, 44);
});
test('a newer PR push suppresses stale comment publication', async () => {
  const { comments } = await scenario({ stale: true });
  assert.equal(comments.length, 0);
});
