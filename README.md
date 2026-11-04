# UX/UI Lead Portfolio

Senior UX/UI / Product designer portfolio.

## Live site

https://sergeynoviklv.github.io/ux-ui-lead/

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Deploys to GitHub Pages on push to `main`. Repository: `ux-ui-lead`.

## PR quality checks

See [Portfolio PR QA](docs/portfolio-qa.md) for browser checks, independent OpenAI review, activation requirements and the proposed human publication gate. The existing deployment is unchanged; a direct push to main still publishes immediately.

## Integrated QA scorecard and Cursor loop

See [QA loop setup, version history, limits and rollback](docs/portfolio-qa-loop.md).
The independent review artifact contains an HTML dashboard, evidence scorecard,
version deltas and Cursor repair tasks. The five owner-supplied criteria preserve a baseline /100; AI evidence remains
a separate unweighted supplement. No benchmark ratings are seeded. Cloud Agent repair is opt-in and bounded.
