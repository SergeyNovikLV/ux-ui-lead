// Opt-in CI bridge; never a connection to a local Cursor editor or this chat.
export async function dispatch({ github, context, pr, history, tasks, fetchImpl = fetch }) {
  if (process.env.CURSOR_QA_ENABLED !== 'true') return 'disabled';
  if (!process.env.CURSOR_API_KEY) throw new Error('Cursor key missing');
  const limit = Number(process.env.CURSOR_QA_MAX_ROUNDS || 2);
  if (!Number.isInteger(limit) || limit < 1 || limit > 5) throw new Error('Invalid Cursor round limit');
  if (history.filter(c=>c.user?.login === 'github-actions[bot]' && c.body?.startsWith('<!-- portfolio-cursor-dispatch -->')).length >= limit) return 'round limit reached';
  if (history.some(c=>c.user?.login === 'github-actions[bot]' && c.body?.startsWith(`<!-- portfolio-cursor-dispatch --> ${pr.head.sha}`))) return 'already attempted';
  const {data: latest} = await github.rest.pulls.get({...context.repo, pull_number: pr.number});
  if (latest.state !== 'open' || latest.head.sha !== pr.head.sha) return 'stale';
  // Durable at-most-once reservation BEFORE a paid API call; failures require human reset.
  await github.rest.issues.createComment({...context.repo, issue_number:pr.number, body:`<!-- portfolio-cursor-dispatch --> ${pr.head.sha}\nCursor repair dispatch reserved. No automatic retry; human approval remains required.`});
  const response = await fetchImpl('https://api.cursor.com/v1/agents', { method:'POST', signal:AbortSignal.timeout(30000), headers:{Authorization:`Bearer ${process.env.CURSOR_API_KEY}`,'Content-Type':'application/json'}, body:JSON.stringify({prompt:{text:tasks},repos:[{url:`https://github.com/${context.repo.owner}/${context.repo.repo}`,prUrl:pr.html_url}],workOnCurrentBranch:true,autoCreatePR:false}) });
  if (!response.ok) throw new Error(`Cursor HTTP ${response.status}`);
  return 'submitted';
}
