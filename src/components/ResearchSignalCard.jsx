import './ResearchSignalCard.css';

/**
 * Shared research/evidence card with METHOD / SIGNAL / DECISION rows.
 * Used in 03 — EVIDENCE, "Signals that drove decisions" sections.
 * Props: eyebrow, title, method, signal, decision, variant ("large" | "default")
 */
export default function ResearchSignalCard({
  eyebrow,
  title,
  method,
  signal,
  decision,
  rows,
  variant = 'default',
}) {
  const displayRows =
    rows ??
    [
      { label: 'METHOD', text: method },
      { label: 'SIGNAL', text: signal },
      { label: 'DECISION', text: decision },
    ];

  return (
    <div className={`rs-card ${variant === 'large' ? 'rs-card--large' : ''}`}>
      <div className="rs-card__eyebrow">{eyebrow}</div>
      <h3 className="rs-card__title" data-case-card-title>
        {title}
      </h3>
      <div className="rs-card__body">
        {displayRows.map((row) => (
          <div key={row.label} className="rs-row">
            <div className="rs-label">{row.label}</div>
            <div className="rs-text">{row.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
