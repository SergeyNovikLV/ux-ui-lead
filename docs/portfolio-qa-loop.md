# Portfolio QA review loop

Cursor pushes a PR branch → existing Portfolio PR checks builds Vite and captures
16 route/viewport evidence sets → pinned Portfolio independent QA
calls a separate, stateless OpenAI Responses reviewer → version scorecard, HTML
report and actionable Cursor task artifact → optional Cloud Agent fixes that PR
branch → a new push repeats checks. A human reviews and merges.

## One-time activation

The existing PR workflow calls portfolio-review.yml at a reviewed immutable commit.
The caller's reviewer_ref points to that same commit for its script checkout.
Only same-repository PRs are eligible; the secret-free browser job executes PR code
in a separate runner. The reviewer never executes PR code or artifact scripts.
This works on the draft branch: no merge or production publication is needed to
test it. When updating QA code, review/commit it, then update both pins in the
caller to that commit. Portfolio-only edits do not need a pin change. There is no
second workflow_run trigger, so each build has one review.

Existing deployment is unchanged: every push to main still publishes. The proposed publication gate is documented in portfolio-qa.md: require PRs and
build/browser checks and protect the deployment environment with human approval.
For a solo owner, do not require another person to approve their own PR; the
owner can approve the protected deployment when self-review is allowed. These
production settings require separate approval and are not applied here. This implementation never calls merge or deploy.

Set repository secret `OPENAI_API_KEY` and variables `PORTFOLIO_QA_ENABLED=true`,
`PORTFOLIO_QA_MODEL` to an available image-input/Structured Outputs model.
No API key or model is bundled; no paid request has been made during development.
One request per review, max 6500 output tokens, no automatic retries, 120s timeout.
Use project spend limits. Failed, disabled and incomplete reviews show NOT REVIEWED,
never a quality pass. Technical failures skip paid review.

For automatic repairs, connect the GitHub repo in Cursor, supply secret
`CURSOR_API_KEY`, variables `CURSOR_QA_ENABLED=true` and `CURSOR_QA_MAX_ROUNDS=2`
(allowed 1–2 attempts per PR; hard maximum two). After inspecting actual review findings, set `CURSOR_QA_APPROVED_PR` to the PR
number (for this draft: `1`) to approve its bounded correction attempts, then use
**Re-run all jobs** on its latest Actions run. This is permission to edit the PR
branch only, never approval to merge or publish. It remains valid for up to two
attempts on this PR, including the second review; clear it to revoke approval.
These settings are optional; without them task artifacts
remain available to Cursor. A durable bot reservation precedes every API attempt;
reruns do not resubmit the same commit. Network failures consume an attempt rather
than risking duplicate paid agents. Inspect the reservation and agent
state before any manual intervention. Never delete reservation comments to reset
the counter on a live PR; that would defeat the two-attempt bound.

Accepted dispatches record the real Cursor agent and run ID in the PR reservation
comment and main report. A submission is not proof of completed fixes: verify the
agent outcome, PR commit, and subsequent GitHub build/review before calling the
correction loop demonstrated.

The bridge calls POST https://api.cursor.com/v1/agents with repos[].prUrl,
workOnCurrentBranch=true and autoCreatePR=false. It does not control the user's
local Cursor editor or inherit this chat. The prompt asks the agent to preserve QA
and deploy workflows, repair only observed findings, and never merge/publish.
Review changes as untrusted; prompt instructions are not access controls.
Cloud Agent source-control permissions must be restricted through branch rules.
Pushes must use Cursor's connected provider credentials: commits made with a GitHub
Actions GITHUB_TOKEN generally do not trigger new workflows. Confirm a real agent
push starts Portfolio PR checks before relying on hands-off operation.

## Reports and durable versions

Download `portfolio-qa-report` from the independent review run and open
`portfolio-qa-dashboard.html` locally. It includes technical status, six criterion
rows, evidence for every check, comparable deltas, findings and version history.
The JSON ledger and tasks Markdown accompany it. The current PR report points to
the build evidence run. GitHub artifacts expire after 90 days. Compact immutable
scorecard snapshots live as separate bot PR comments and remain after artifact
expiry; keep the downloaded artifacts for long-term full evidence. Versions are
keyed by build run + attempt and commit; rerunning the same attempt is idempotent.
History is per PR; cross-PR baselines are deliberately not inferred.

The owner supplied the original baseline on 4 November 2026:
Relevance 20, Product thinking 25, Visual craft 20, Ownership and evidence 25,
Clarity and navigation 10. These five weights sum to 100. AI-assisted product
evidence is separate, with no agreed weight and no effect on the /100 total.

Version owner-baseline-v2 decomposes each criterion into three equally weighted
evidence checks (an implementation choice). Classify each met / gap / unknown
with evidence. Deterministic points = criterion weight × met checks / 3, shown
only when all three checks are assessed; unknown is not zero. If any baseline
check is unknown, show no final /100: report the possible lower/upper bounds and
assessed weight instead. Sum unrounded contributions and round at the end to two
decimals. AI check counts are unweighted. There are no seeded portfolio ratings,
market benchmarks or approval thresholds. "30 seconds" is an untested target,
not a result; observable relevance checks cannot verify human comprehension time.

Deltas need a different commit, identical rubric/model/context/rules/coverage and
complete compared values. Previous provisional snapshots remain in the ledger
without converting their check counts to /100. Missing data and different rubric
versions have no numeric delta. Model judgments can vary despite fixed arithmetic.

Text coverage: eight routes, desktop/mobile. Visual API sample: home, mogo and
ai-workflow at both sizes. Other routes have captured screenshots but are not
visually reviewed by the API. No pixel baseline or complete accessibility audit.

## Current integration research (2026-11-04)

Cursor officially documents CI-compatible Cloud Agents API and Automation webhook
triggers. API v1 is public beta and may change. Automations generate a webhook URL
and authentication key when saved; this is an alternative, not a second trigger
to enable alongside the API bridge. Account access and credentials must be checked
in the user's Cursor account; this implementation has not made a live Cursor call.

- https://cursor.com/docs/cloud-agent/api/endpoints
- https://cursor.com/docs/cloud-agent/automations
- https://developers.openai.com/api/docs/guides/structured-outputs

## Verification / rollback

Run npm run test:qa, npm run build, npm run test:browser.
Disable CURSOR_QA_ENABLED first to stop repair submissions; disable
PORTFOLIO_QA_ENABLED to stop paid review. Existing build/browser checks and original
deploy remain intact. No website source files are changed by this QA addition.

Deltas also use unrounded contributions before rounding; subtracting two displayed
rounded scores can differ by 0.01 from the correctly rounded delta.

## Exact activation for draft PR #1

- [Actions secrets](https://github.com/SergeyNovikLV/ux-ui-lead/settings/secrets/actions): add `OPENAI_API_KEY` from an OpenAI API project with billing and Responses API access.
- [Actions variables](https://github.com/SergeyNovikLV/ux-ui-lead/settings/variables/actions): `PORTFOLIO_QA_ENABLED=true`, `PORTFOLIO_QA_MODEL=gpt-5.4-mini` (example image/Structured Outputs model; it must be enabled in your project). The implementation does not silently choose a model.
- Re-run all jobs on the latest PR #1 run. The build and review will run on the branch, post a PR report and upload `portfolio-qa-report`. Open its existing `portfolio-qa-dashboard.html`. Missing credentials produce NOT REVIEWED, not placeholder scores.
- Optional corrections: connect this repository in Cursor Cloud Agents with write access to PR branches, add secret `CURSOR_API_KEY`, and set `CURSOR_QA_ENABLED=true`, `CURSOR_QA_MAX_ROUNDS=2`. After reading the findings, set `CURSOR_QA_APPROVED_PR=1` and re-run all jobs. Leave main protected against agent writes before enabling it. These repository/production permission changes require owner configuration; this PR does not make them.
- Do not paste keys into chats or commit them. GitHub secrets are unreadable to this local session; credential names and run results are sufficient for verification.

References: [GitHub reusable workflow pinning](https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows), [Cursor API](https://cursor.com/docs/cloud-agent/api/endpoints), [example OpenAI model](https://developers.openai.com/api/docs/models/gpt-5.4-mini).
