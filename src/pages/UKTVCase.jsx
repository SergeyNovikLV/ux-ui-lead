import './UKTVCase.css';
import '../styles/tokens.css';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const caseAssets = {
  hero: 'uk-tv-hero-placeholder.jpg',
  before: 'uk-tv-before.jpg',
  after: 'uk-tv-after.jpg',
  audit: 'uk-tv-ui-audit-board.jpg',
  figma: 'uk-tv-figma-library.jpg',
  accessibility: 'uk-tv-accessibility-comparison.jpg',
  testing: 'uk-tv-testing-prototype.jpg',
};

const assetBase = '/uktv';

function MediaPlaceholder({ assetKey, label }) {
  const file = caseAssets[assetKey] || assetKey;
  return (
    <div className="uktv-media-placeholder" data-asset={assetKey}>
      <span className="uktv-media-placeholder__label">{label || assetKey}</span>
      <span className="uktv-media-placeholder__file">TODO: {file}</span>
    </div>
  );
}

export default function UKTVCase() {
  return (
    <article className="uktv">
      {/* SECTION 1: HERO */}
      <section className="case__section uktv-hero">
        <div className="case__wrap">
          <div className="uktv-hero__grid">
            <div className="uktv-hero__text">
              <div className="case__hero-label">MEDIA & ENTERTAINMENT</div>
              <h1 className="uktv-hero__title">Reimagining the UK's top TV app</h1>
              <p className="uktv-hero__subtitle">
                Led cross-platform rebrand and accessibility overhaul for one of the UK's largest public TV apps — improving engagement, design consistency, and delivery velocity across iOS and Android.
              </p>
              <div className="uktv-hero__divider" aria-hidden />
            </div>
          </div>
          <div className="uktv-hero__meta-wrap">
            <div className="case__meta-grid">
              {[
                { label: 'YEAR', value: '2020–2022' },
                { label: 'ROLE', value: 'Senior Product Designer' },
                { label: 'TEAM', value: 'PM · 2 BA · 14 Mobile Engineers · 4 QA · 4 Designers' },
                { label: 'PLATFORMS', value: 'iOS Native · Android Native' },
              ].map(item => (
                <div key={item.label} className="uktv-hero__meta-item">
                  <div className="case__meta-label">{item.label}</div>
                  <div className="case__meta-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="uktv-hero__media">
            <div className="uktv-hero__media-inner">
              <MediaPlaceholder assetKey="hero" label="UK TV app — iOS & Android" />
            </div>
            <p className="uktv-hero__media-caption">UK public TV app — iOS & Android</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTEXT */}
      <section className="case__section uktv-context">
        <div className="case__wrap uktv-context__wrap">
          <div className="uktv-context__grid">
            <div className="uktv-context__narrative">
              <div className="uktv-context__eyebrow">CONTEXT</div>
              <h2 className="uktv-context__title">Rebrand under scale and accessibility pressure</h2>
              <p className="uktv-context__lead">
                The UK's largest public TV app served 28M+ users but suffered from inconsistent cross-platform UX and fragmented component logic.
              </p>
              <p className="uktv-context__lead">
                Accessibility gaps, inconsistent UI patterns, and outdated design tooling slowed both user engagement and delivery velocity.
              </p>
              <p className="uktv-context__statement">
                <strong>System misalignment</strong> — not just visual aging.
              </p>
            </div>
            <div className="uktv-context__evidence">
              <div className="uktv-context__evidence-item">
                <div className="uktv-context__evidence-num">37%</div>
                <div className="uktv-context__evidence-title">Cross-platform inconsistency</div>
                <div className="uktv-context__evidence-desc">Users reported navigation differences between iOS and Android.</div>
              </div>
              <div className="uktv-context__evidence-divider" aria-hidden />
              <div className="uktv-context__evidence-item">
                <div className="uktv-context__evidence-num">7.9%</div>
                <div className="uktv-context__evidence-title">Accessibility compliance gap</div>
                <div className="uktv-context__evidence-desc">Visually impaired users struggled with navigation and text scaling.</div>
              </div>
              <div className="uktv-context__evidence-divider" aria-hidden />
              <div className="uktv-context__evidence-item">
                <div className="uktv-context__evidence-num">61%</div>
                <div className="uktv-context__evidence-title">Collaboration inefficiency</div>
                <div className="uktv-context__evidence-desc">UI audits uncovered 40+ inconsistencies delaying implementation.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MY ROLE & SCOPE */}
      <section className="case__section uktv-role">
        <div className="case__wrap">
          <div className="uktv-role__eyebrow">MY ROLE & SCOPE</div>
          <h2 className="uktv-role__title">What I owned, influenced, decided</h2>
          <p className="uktv-role__intro">
            As senior product designer, I aligned brand, accessibility, engineering, and design tooling across platforms — transforming rebranding into a structural system shift.
          </p>
          <div className="uktv-role__ledger">
            <div className="uktv-role__col">
              <span className="uktv-role__col-num" aria-hidden>01</span>
              <h3 className="uktv-role__col-title">Owned</h3>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Cross-platform UX direction</span></div>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Accessibility implementation (WCAG + text scaling 200%)</span></div>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">UI audit and inconsistency mapping</span></div>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Design system restructuring</span></div>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Design QA and mobile collaboration</span></div>
            </div>
            <div className="uktv-role__col">
              <span className="uktv-role__col-num" aria-hidden>02</span>
              <h3 className="uktv-role__col-title">Influenced</h3>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Platform unification strategy (HIG + Material mapping)</span></div>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Figma migration roadmap</span></div>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Component reuse standards</span></div>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Accessibility compliance targets</span></div>
            </div>
            <div className="uktv-role__col">
              <span className="uktv-role__col-num" aria-hidden>03</span>
              <h3 className="uktv-role__col-title">Decided</h3>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Unified design language across iOS & Android</span></div>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Text resizing up to 200% with layout preservation</span></div>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Move from Sketch → Figma system library</span></div>
              <div className="uktv-role__row"><span className="uktv-role__row-dot" aria-hidden /><span className="uktv-role__row-text">Accessibility as release requirement</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BEFORE → AFTER */}
      <section className="case__section uktv-before-after">
        <div className="case__wrap">
          <div className="case__section-label">BEFORE → AFTER</div>
          <h2 className="case__h2">From fragmented to unified</h2>
          <div className="uktv-before-after__slider-wrap">
            <BeforeAfterSlider
              beforeSrc={`${assetBase}/${caseAssets.before}`}
              afterSrc={`${assetBase}/${caseAssets.after}`}
              caption="Same content. Unified UI language. Reduced friction. Increased accessibility."
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: DESIGN WORK */}
      <section className="case__section uktv-artifacts">
        <div className="case__wrap">
          <div className="case__section-label">DESIGN WORK</div>
          <h2 className="case__h2">System, accessibility, and tooling</h2>

          <div className="uktv-artifact">
            <div className="uktv-artifact__text">
              <p className="uktv-artifact__body">Mapped iOS (HIG) and Android (Material) components to identify structural inconsistencies.</p>
              <p className="uktv-artifact__caption">UI audit: 40+ inconsistencies across platforms.</p>
            </div>
            <div className="uktv-artifact__media">
              <MediaPlaceholder assetKey="audit" label="UI audit" />
            </div>
          </div>

          <div className="uktv-artifact">
            <div className="uktv-artifact__text">
              <p className="uktv-artifact__body">Built unified component library and token logic to support platform parity.</p>
              <p className="uktv-artifact__caption">Shared Figma component library.</p>
            </div>
            <div className="uktv-artifact__media">
              <MediaPlaceholder assetKey="figma" label="Figma library" />
            </div>
          </div>

          <div className="uktv-artifact">
            <div className="uktv-artifact__text">
              <p className="uktv-artifact__body">Implemented 200% text scaling and improved VoiceOver support.</p>
              <p className="uktv-artifact__caption">Regular vs 200% text scaling.</p>
            </div>
            <div className="uktv-artifact__media">
              <MediaPlaceholder assetKey="accessibility" label="Accessibility" />
            </div>
          </div>

          <div className="uktv-artifact">
            <div className="uktv-artifact__text">
              <p className="uktv-artifact__body">Validated navigation improvements through usability testing and A/B prototypes.</p>
              <p className="uktv-artifact__caption">Prototype comparison — interaction testing.</p>
            </div>
            <div className="uktv-artifact__media">
              <MediaPlaceholder assetKey="testing" label="Testing" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: VALIDATION */}
      <section className="case__section uktv-validation">
        <div className="case__wrap uktv-validation__wrap">
          <div className="uktv-validation__grid">
            <div className="uktv-validation__text">
              <div className="case__section-label">VALIDATION</div>
              <h2 className="case__h2">Validation through iteration</h2>
              <p className="case__body">
                Usability testing cycles improved navigation clarity and reduced abandonment in accessibility-heavy flows.
              </p>
              <div className="uktv-validation__chips">
                <span className="uktv-validation__chip">Improved navigation comprehension</span>
                <span className="uktv-validation__chip">Reduced UI confusion across platforms</span>
                <span className="uktv-validation__chip">Better VoiceOver discoverability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: IMPACT — Fleet-style 3-col, no card wrapper */}
      <section className="case__section uktv-impact">
        <div className="case__wrap">
          <div className="case__section-label">IMPACT</div>
          <h2 className="case__h2">Measured impact</h2>
          <div className="uktv-impact__metrics">
            <div className="uktv-impact__metric">
              <div className="case__metric-num">9%</div>
              <div className="case__metric-label">Increase in user engagement</div>
              <div className="case__metric-desc">Improved navigation and UI clarity increased retention.</div>
            </div>
            <div className="uktv-impact__metric">
              <div className="case__metric-num">15%</div>
              <div className="case__metric-label">Faster design-to-development handoff</div>
              <div className="case__metric-desc">Structured Figma library reduced iteration cycles.</div>
            </div>
            <div className="uktv-impact__metric">
              <div className="case__metric-num">7%</div>
              <div className="case__metric-label">Increase in accessible usage</div>
              <div className="case__metric-desc">Improved text scaling and VoiceOver expanded usability.</div>
            </div>
          </div>
        </div>
      </section>

      <nav className="uktv-nav" aria-label="Case study navigation">
        <div className="uktv-nav__wrap">
          <a href="#work" className="uktv-nav__link">← Back to Work</a>
          <a href="#banking" className="uktv-nav__link">Next: Banking Platform Efficiency →</a>
        </div>
      </nav>
    </article>
  );
}
