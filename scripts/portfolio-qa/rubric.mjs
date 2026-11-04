// Owner-supplied baseline weights; evidence-check decomposition is an explicit implementation choice.
export const rubric = {
  version: 'owner-baseline-v2', confirmed: true, maximum: 100,
  source: 'Owner criteria supplied on 2026-11-04; no market benchmark.',
  checkMethod: 'Three equally weighted evidence checks per criterion; model judgments, not measured hiring performance.',
  timing: '30-second comprehension is a target only; no timed participant test has been supplied.',
  criteria: [
    ['relevance', 'Relevance', 20, ['Target role is explicit', 'Specialisation and problem domain are explicit', 'Relevant projects are easy to identify; timed comprehension remains untested']],
    ['product-thinking', 'Product thinking', 25, ['Concrete decisions and their reasons are explained', 'Constraints and tradeoffs are explained', 'Alternatives and the reasons for rejecting them are explained']],
    ['craft', 'Visual craft', 20, ['Typography and composition are legible in supplied screenshots', 'Images are clear and appropriate in supplied screenshots', 'Mobile sample is readable and usable within observed coverage']],
    ['ownership', 'Ownership and evidence', 25, ['Personal contribution is distinguished from team contribution', 'Working results are evidenced and prototype versus shipped status is explicit', 'Claims have verifiable support and outcomes and limitations are reported honestly']],
    ['clarity', 'Clarity and navigation', 10, ['Content is easy to scan', 'Text is concise and understandable', 'Cases are quickly accessible through clear navigation within observed evidence']],
    ['ai-evidence', 'AI-assisted product evidence', null, ['Concrete product artifact demonstrated', 'Human decisions and AI contribution distinguished', 'Validation and limitations explained']],
  ].map(([id, label, weight, checks]) => ({ id, label, weight, supplemental: weight === null,
    checks: checks.map((label, i) => ({ id: `${id}-${i + 1}`, label })) })),
};
export const checkIds = rubric.criteria.flatMap(c => c.checks.map(x => x.id));
export const round = number => Math.round((number + Number.EPSILON) * 100) / 100;

export function scores(assessment) {
  return rubric.criteria.map(c => {
    const met = c.checks.filter(x => assessment.find(a => a.id === x.id)?.status === 'met').length;
    const assessed = c.checks.filter(x => ['met', 'gap'].includes(assessment.find(a => a.id === x.id)?.status)).length;
    const total = c.checks.length;
    return { id: c.id, label: c.label, weight: c.weight, supplemental: c.supplemental, met, assessed, total,
      points: c.weight !== null && assessed === total ? round(c.weight * met / total) : null,
      lower: c.weight === null ? null : round(c.weight * met / total),
      upper: c.weight === null ? null : round(c.weight * (met + total - assessed) / total),
    };
  });
}

export function baseline(rows) {
  const core = rows.filter(c => c.weight !== null);
  // Sum unrounded contributions; rounding each displayed row first can turn 100 into 99.99.
  const lower = core.reduce((sum, c) => sum + c.weight * c.met / c.total, 0);
  const upper = core.reduce((sum, c) => sum + c.weight * (c.met + c.total - c.assessed) / c.total, 0);
  return { score: core.every(c => c.assessed === c.total) ? round(lower) : null,
    lower: round(lower), upper: round(upper), maximum: rubric.maximum,
    assessedWeight: round(core.reduce((sum, c) => sum + c.weight * c.assessed / c.total, 0)) };
}
