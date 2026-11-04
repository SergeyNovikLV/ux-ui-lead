# Portfolio PR QA

## Findings from repository inspection (4 November 2026)

- Public repository: SergeyNovikLV/ux-ui-lead. Default branch: main; inspected head: da5bb6b2b5ae12e3901b824fce089840905e3167.
- React 18 + Vite 5, npm lockfile, hash navigation. This is not a Next.js project. Vite base is `/ux-ui-lead/` and output is `dist/`.
- Existing workflow: `.github/workflows/deploy.yml`, **Deploy to GitHub Pages**. Every push to main builds and publishes. Its last visible run, [30073828086](https://github.com/SergeyNovikLV/ux-ui-lead/actions/runs/30073828086), succeeded on 24 July 2026.
- Before this branch: no PR CI, Playwright, test scripts or API QA. The existing Cursor design-system rule is retained.
- GitHub's branch API reports `main.protected: false`. Private environment rules, external hosting integrations and secrets were not inspected; their absence is not assumed.
- This branch does not modify the existing deployment workflow, hosting, secrets or repository settings. It adds PR validation, not a second deployment.

## Workflow

1. Cursor edits a feature branch and opens a PR against main.
2. **Portfolio PR checks** runs npm ci, QA unit tests, Vite production build, then Playwright against the built site at `/ux-ui-lead/`.
3. Playwright visits home, mogo, ai-workflow, design-systems, fleet, banking, ukmedia and about at 1440×1000 and 390×844. It captures full-page PNGs and rendered text, and checks uncaught errors, broken images, horizontal overflow and navigation to the six cases/About. It does not perform pixel-baseline comparisons or a complete accessibility audit.
4. **Portfolio independent QA**, called after the PR browser job, runs code pinned to a reviewed immutable commit. It checks that the PR is open, current and from this repository. Fork PRs receive browser CI only; no API call or privileged comment.
5. If enabled and configured, one stateless Responses API call receives versioned context/rules from the pinned reviewer commit, rendered text from all 8 routes, up to 30000 characters of PR patches, and 6 full-page screenshots: home, mogo and ai-workflow at both sizes. Other screenshots remain available to the human. Text is capped at 16000 characters per route/viewport. This is a limited visual sample, not whole-site visual approval.
6. One bot comment is updated in the PR with the head SHA, prioritized findings, evidence, suggested changes, limitations and artifact link. An error, incomplete response or missing key is never presented as a pass. A newer PR revision invalidates the older report. Build failures are reported without an API call.
7. Cursor addresses findings and pushes to the same PR. A human inspects the latest report/screenshots and decides whether to merge and publish.

The review workflow uses no PR checkout, npm install, artifact scripts or tools with the API key. Evidence files have fixed names and size/type limits and are treated as untrusted data. Workflow permissions are limited to reading source/artifacts and writing PR comments. The API step is opt-in and never approves/merges a PR or publishes.

## Local checks

```sh
npm ci
npx playwright install chromium
npm run test:qa
npm run build
npm run test:browser
```

Artifacts: `qa-evidence/`, `playwright-report/`, `test-results/`. Open the Playwright HTML report locally with `npx playwright show-report`. Outputs are ignored by git. GitHub retains browser evidence for 7 days and independent report artifacts for 90 days.

## Activation requiring human approval

No key, model, paid request or settings change is made by this branch.

1. Review the pinned reviewer code in this draft. The PR workflow now calls the existing reviewer as a reusable workflow at an immutable commit, with its script checkout pinned to the same commit. No merge/default-branch installation is needed for the acceptance test. Each PR run has one review; the obsolete workflow_run trigger is removed. Keep production unchanged until explicitly approved.
2. Approve the external data transfer and API budget. The text, patches and selected screenshots are sent to OpenAI, with `store: false`. This is not a promise of zero provider retention. Reports are posted in this public repository. Do not add confidential material to the evidence or context files.
3. Add a dedicated project API key as Actions secret `OPENAI_API_KEY`; select a supported image-input/Structured Outputs model using repository variable `PORTFOLIO_QA_MODEL`. No default model is silently chosen. Set `PORTFOLIO_QA_ENABLED=true` only when approved. Keep the key out of Cursor/browser/build jobs. Do not paste it into chat.
4. Set a suitable provider project budget/alerts and monitor real usage. The implementation allows one request per successful same-repository PR run, no automatic API retries, at most 6 images (2 MB each) and 6500 output tokens. These limits bound each request, not monthly spend or a fixed monetary cost. Repeated pushes can make repeated calls. Disable immediately with `PORTFOLIO_QA_ENABLED=false`.
5. Approve and apply the publication gate below. Until then, human approval is a documented operating rule only. It is not enforced: main pushes still publish immediately.

## Proposed publication gate — not applied

The smallest enforceable deployment gate for a solo owner is a protected GitHub environment, because an author cannot approve their own PR review. After approval:

- Configure the `github-pages` environment with the human owner as a required reviewer. For a solo owner, allow that owner to approve their own workflow run. Restrict deployment branches to main and disable administrator bypass where available.
- Associate the existing build/deploy job with that environment by adding exactly this line under `jobs.build` in the existing deploy workflow:

```yaml
    environment: github-pages
```

- Add a main branch rule requiring PRs and **Build and browser QA**, disallow direct/force pushes and deletion, and apply the rule to administrators. Do not require another person's PR review if none is available. Independent AI findings remain advisory and are reviewed by the human at the deployment gate.
- Verify enforcement using a harmless PR: pushing the PR must not publish; after merge, deployment must wait for the human's environment approval. A rejected deployment must not update the live site. Recheck after any permission/ruleset change.

This needs explicit approval because it changes production publication and repository settings. Do not call the pipeline publication-gated until these settings and the environment association have been verified.

## Rollback and limitations

Disable the API variable to stop new calls. Remove the two new portfolio workflows/rules and Playwright dependency to remove the added QA; the original deployment remains unchanged. Cancelling an in-flight request may not prevent API billing.

This branch does not fix pre-existing site/content defects or dependency advisories. Browser failures should be repaired in a separate portfolio change rather than hidden or given a false green result. Unit tests mock the API contract; live API access, GitHub comment permissions and the branch workflow chain still need an activation PR test. No ChatGPT conversation memory transfers to the API. Independent means a separate review invocation with explicit evidence, not guaranteed objective judgement.

References: [OpenAI images and vision](https://developers.openai.com/api/docs/guides/images-vision), [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs), [GitHub workflow_run](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run), [Playwright webServer](https://playwright.dev/docs/test-webserver).

The owner-weighted /100 baseline, separate unweighted AI supplement and version
comparison rules are documented in [the integrated loop](portfolio-qa-loop.md).
