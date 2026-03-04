import './ResearchSignalCard.css';

/**
 * Shared research/evidence card with METHOD / SIGNAL / DECISION rows.
 * Used in 03 — EVIDENCE, "Signals that drove decisions" sections.
 * Props: eyebrow, title, method, signal, decision, variant ("large" | "default")
 */
export default function ResearchSignalCard({ eyebrow, title, method, signal, decision, variant = 'default' }) {
  return (
    <div className={`rs-card ${variant === 'large' ? 'rs-card--large' : ''}`}>
      <div className="rs-card__eyebrow">{eyebrow}</div>
      <h3 className="rs-card__title">{title}</h3>
      <div className="rs-card__body">
        <div className="rs-row">
          <div className="rs-label">METHOD</div>
          <div className="rs-text">{method}</div>
        </div>
        <div className="rs-row">
          <div className="rs-label">SIGNAL</div>
          <div className="rs-text">{signal}</div>
        </div>
        <div className="rs-row">
          <div className="rs-label">DECISION</div>
          <div className="rs-text">{decision}</div>
        </div>
      </div>
    </div>
  );
}
