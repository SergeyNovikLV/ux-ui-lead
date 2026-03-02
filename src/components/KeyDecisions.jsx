export default function KeyDecisions({ sectionLabel, title, description, decisions }) {
  return (
    <section className="case__section case__key-decisions">
      <div className="case__wrap case__key-decisions__wrap">
        <div className="case__key-decisions__left">
          <div className="case__section-label">{sectionLabel ?? 'KEY DECISIONS'}</div>
          <h2 className="case__h2">{title}</h2>
          {description && <p className="case__body">{description}</p>}
        </div>
        <div className="case__key-decisions__right">
          <div className="case__key-decisions__list">
            {decisions.map((d) => (
              <div key={d.num} className="case__decision">
                <span className="case__decision-num">{d.num}</span>
                <div>
                  <div className="case__decision-title">{d.title}</div>
                  <p className="case__decision-body">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
