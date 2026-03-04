import { getIcon } from '../data/roleScopeData';

/**
 * Reusable Section 01 — ROLE & SCOPE for all case pages.
 * Renders: eyebrow, title, optional intro, meta row (YEAR/ROLE/PLATFORMS), 3×3 grid (I led / I shaped / I decided).
 * Props: pass full data from roleScopeData (year, role, platforms, intro, led, shaped, decided).
 * Each card: { title, desc, icon } — icon is Lucide component name.
 */
export default function RoleAndScope({ year, role, platforms, intro, led, shaped, decided }) {
  const Card = ({ title, desc, icon }) => {
    const IconComponent = getIcon(icon);
    return (
      <div className="role-scope__card">
        <div className="role-scope__card-icon-wrap">
          <IconComponent size={20} strokeWidth={2} className="role-scope__card-icon" aria-hidden />
        </div>
        <div className="role-scope__card-content">
          <div className="role-scope__card-title">{title}</div>
          <p className="role-scope__card-desc">{desc}</p>
        </div>
      </div>
    );
  };

  const Row = ({ label, items }) => (
    <div className="role-scope__row">
      <h3 className="role-scope__row-title">{label}</h3>
      <div className="role-scope__row-cards">
        {items.map((item, i) => (
          <Card key={i} title={item.title} desc={item.desc} icon={item.icon} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="case__section mogo-section role-scope">
      <div className="case__wrap">
        <div className="case__section-label">01 — ROLE & SCOPE</div>
        <h2 className="case__h2">My role and scope</h2>
        {intro && <p className="case__body role-scope__intro">{intro}</p>}
        <div className="role-scope__meta">
          <div className="role-scope__meta-item">
            <div className="role-scope__meta-label">YEAR</div>
            <div className="role-scope__meta-value">{year}</div>
          </div>
          <div className="role-scope__meta-item">
            <div className="role-scope__meta-label">ROLE</div>
            <div className="role-scope__meta-value">{role}</div>
          </div>
          <div className="role-scope__meta-item">
            <div className="role-scope__meta-label">PLATFORMS</div>
            <div className="role-scope__meta-value">{platforms}</div>
          </div>
        </div>
        <div className="role-scope__rows">
          <Row label="I led" items={led} />
          <Row label="I shaped" items={shaped} />
          <Row label="I decided" items={decided} />
        </div>
      </div>
    </section>
  );
}
