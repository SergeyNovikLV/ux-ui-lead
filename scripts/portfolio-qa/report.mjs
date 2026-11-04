import { dashboard, snapshot, fingerprint, readHistory, historyMarker, tasks, scoreSummary } from './dashboard.mjs';
import { dispatch } from './cursor.mjs';
import { readFile, writeFile } from 'node:fs/promises';
import { loadEvidence, review, renderReview, visualSample } from './review.mjs';

const marker = '<!-- portfolio-independent-qa -->';
export async function run({ github, context, core }) {
  const workflow = context.payload.workflow_run ?? {
    id: context.runId, run_attempt: Number(process.env.GITHUB_RUN_ATTEMPT || 1),
    head_sha: context.payload.pull_request.head.sha, conclusion: process.env.BUILD_RESULT,
    html_url: `${context.serverUrl || 'https://github.com'}/${context.repo.owner}/${context.repo.repo}/actions/runs/${context.runId}`,
  };
  const issue_number = Number(process.env.PR_NUMBER);
  const { data: pr } = await github.rest.pulls.get({ ...context.repo, pull_number: issue_number });
  const current = value => value.state === 'open' && value.head.sha === workflow.head_sha
    && value.head.repo?.full_name === context.payload.repository.full_name && value.base.ref === 'main';
  if (!current(pr)) return;

  const reviewContext = await readFile(new URL('../../docs/portfolio-context.md', import.meta.url), 'utf8');
  const rules = await readFile(new URL('../../docs/portfolio-review-rules.md', import.meta.url), 'utf8');
  let report;
  let failure = false;
  let apiReview;
  if (workflow.conclusion !== 'success') {
    report = `**NOT REVIEWED:** build/browser workflow concluded \`${workflow.conclusion}\`. Fix technical failures first; the API was not called.`;
  } else if (process.env.PORTFOLIO_QA_ENABLED !== 'true') {
    report = '**NOT REVIEWED:** OpenAI QA is disabled. A human must approve activation and configure PORTFOLIO_QA_ENABLED, PORTFOLIO_QA_MODEL and OPENAI_API_KEY. Browser checks alone are not content/visual approval.';
  } else if (!process.env.OPENAI_API_KEY || !process.env.OPENAI_MODEL) {
    report = '**NOT REVIEWED:** OpenAI key or model configuration is missing. The API was not called.';
    failure = true;
  } else {
    try {
      const evidence = await loadEvidence('qa-evidence');
      const files = await github.paginate(github.rest.pulls.listFiles, { ...context.repo, pull_number: issue_number, per_page: 100 });
      const diff = JSON.stringify(files.map(file => ({ filename: file.filename, status: file.status, patch: file.patch ?? '(binary or patch unavailable)' }))).slice(0, 30000);
      apiReview = await review({
        apiKey: process.env.OPENAI_API_KEY, model: process.env.OPENAI_MODEL, evidence,
        context: reviewContext,
        rules,
        diff: `${diff}\n[Diff input limited to 30000 characters; omitted patches are not reviewed.]`,
      });
      report = `**Advisory OpenAI review completed** (not publication approval). Model: ${apiReview.model}; response: ${apiReview.responseId}.\n\n${renderReview(apiReview.result)}`;
    } catch (error) {
      // Only expose controlled errors; unexpected parser/network exceptions may contain input.
      core.warning(`QA did not complete (${error.name}).`);
      const reason = /^OpenAI HTTP \d{3}$/.test(error.message) ? error.message : 'evidence validation or OpenAI request failed';
      report = `**NOT REVIEWED:** ${reason}. No QA pass can be inferred. Check configuration, artifact size/completeness and API access, then rerun the PR checks.`;
      failure = true;
    }
  }
  let body = `${marker}\n## Portfolio QA\n\nPR head: \`${pr.head.sha}\` · [Build, screenshots and traces](${workflow.html_url})\n\n${report}\n\nConfigured coverage: browser checks and text on 8 public routes, desktop + mobile. API visual sample: ${visualSample.join(', ')}. Full-page screenshots for all routes are in the build artifact. Legacy eleving/product-os aliases, pixel-baseline comparison, cross-browser and complete accessibility audits are outside this MVP.\n\n**Download the portfolio-qa-report artifact from this review workflow run for the HTML dashboard, version ledger and Cursor repair tasks.**\n\n**Human approval required before merge/publication.** Current deployment still publishes every push to main. This report cannot block a direct push; branch/deployment protection requires separate approved setup.`;

  // A newer Cursor push may have arrived while the API was running.
  const { data: latest } = await github.rest.pulls.get({ ...context.repo, pull_number: issue_number });
  if (!current(latest)) return;
  const comments = await github.paginate(github.rest.issues.listComments, { ...context.repo, issue_number, per_page: 100 });
  const history = readHistory(comments);
  const id = `${workflow.id}-${workflow.run_attempt ?? 1}`;
  const currentSnapshot = snapshot({ id, head: pr.head.sha, model: apiReview?.model || process.env.OPENAI_MODEL || '',
    fingerprint: fingerprint(reviewContext, rules, apiReview?.model || process.env.OPENAI_MODEL || ''),
    result: apiReview?.result, technical: workflow.conclusion });
  const taskText = tasks(apiReview?.result, pr.head.sha);
  let cursorStatus = 'not requested: no completed AI review with actionable findings';
  if (apiReview?.result.findings.length) {
    try { cursorStatus = await dispatch({github, context, pr, history: comments, tasks: taskText}); }
    catch (error) {
      cursorStatus = /^(Cursor HTTP |Cursor key missing|Invalid Cursor round limit)/.test(error.message) ? error.message : 'dispatch failed; inspect reservation/agent before retrying';
      core.warning('Cursor dispatch failed; task artifact remains available. No automatic retry.');
    }
  }
  body += `\n\nCursor feedback: ${cursorStatus}. At most two approved correction attempts per PR.\nReviewer code: ${process.env.REVIEWER_REF || 'legacy default-branch runner'}.`;
  await writeFile('portfolio-qa-report.md', body);
  if (apiReview) await writeFile('portfolio-qa-result.json', JSON.stringify({ head: pr.head.sha, ...apiReview }, null, 2));
  await writeFile('portfolio-qa-dashboard.html', dashboard(currentSnapshot, history.filter(v=>v.id!==id), apiReview?.result, `${report} Cursor feedback: ${cursorStatus}.`));
  await writeFile('portfolio-cursor-tasks.md', taskText);
  await writeFile('portfolio-qa-history.json', JSON.stringify([...history.filter(v=>v.id!==id), currentSnapshot], null, 2));
  if (!history.some(v=>v.id===id)) await github.rest.issues.createComment({ ...context.repo, issue_number, body: `${historyMarker}\n${JSON.stringify(currentSnapshot)}\n\nVersion scorecard: ${pr.head.sha} · ${scoreSummary(currentSnapshot)}. Owner baseline; AI supplement unweighted; human approval required.` });
  // Cursor may push quickly after dispatch; do not overwrite a newer report.
  const { data: afterDispatch } = await github.rest.pulls.get({ ...context.repo, pull_number: issue_number });
  if (!current(afterDispatch)) return;
  const old = comments.find(comment => comment.user?.login === 'github-actions[bot]' && comment.body?.startsWith(marker));
  if (old) await github.rest.issues.updateComment({ ...context.repo, comment_id: old.id, body });
  else await github.rest.issues.createComment({ ...context.repo, issue_number, body });
  await core.summary.addRaw(body).write();
  if (failure) core.setFailed('Independent QA did not complete; see PR report.');
}
