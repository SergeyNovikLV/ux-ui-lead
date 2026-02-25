import './BankingCase.css';
import '../styles/tokens.css';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

/* Asset paths — swap with real files when available. Use placeholders in UI until then. */
const caseAssets = {
  heroDesktop: '/db/hero-desktop.png',
  researchBoard: '/db/research-board.png',
  wireframes: '/db/wireframes.png',
  tokens: '/db/tokens.png',
  accessibility: '/db/accessibility.png',
  testingLaptop: '/db/testing-laptop.png',
  beforeImg: '/db/before.png',
  afterImg: '/db/after.png',
};

function MediaPlaceholder({ assetKey, label }) {
  const fileByKey = {
    heroDesktop: 'hero-desktop.png',
    researchBoard: 'research-board.png',
    wireframes: 'wireframes.png',
    tokens: 'tokens.png',
    accessibility: 'accessibility.png',
    testingLaptop: 'testing-laptop.png',
    beforeImg: 'before.png',
    afterImg: 'after.png',
  };
  return (
    <div className="banking-media-placeholder" data-asset={assetKey}>
      <span className="banking-media-placeholder__label">{label || assetKey}</span>
      <span className="banking-media-placeholder__file">TODO: {fileByKey[assetKey] || assetKey}</span>
    </div>
  );
}

export default function BankingCase() {
  return (
    <article className="banking">
      {/* SECTION 1: HERO */}
      <section className="case__section banking-hero">
        <div className="case__wrap">
          <div className="banking-hero__grid">
            <div className="banking-hero__text">
              <div className="case__hero-label">FINANCE & BANKING</div>
              <h1 className="banking-hero__title">Boosting banking platform efficiency through structural UX redesign</h1>
              <p className="banking-hero__subtitle">
                Redesigned navigation, restructured compliance flows, and rebuilt accessibility across web and tablet — reducing task time, clicks, and support load.
              </p>
            </div>
          </div>
          <div className="banking-hero__meta-wrap">
            <div className="case__meta-grid">
              {[
                { label: 'YEAR', value: '2021–2022' },
                { label: 'ROLE', value: 'Senior UX/UI Designer' },
                { label: 'TEAM', value: '2 Designers · 5 FE · 2 BE · PM · BA' },
                { label: 'PLATFORMS', value: 'Desktop · Web · Tablet' },
              ].map(item => (
                <div key={item.label} className="banking-hero__meta-item">
                  <div className="case__meta-label">{item.label}</div>
                  <div className="case__meta-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="banking-hero__media">
            <div className="banking-hero__media-inner">
              <MediaPlaceholder assetKey="heroDesktop" label="Hero — desktop view" />
            </div>
            <p className="banking-hero__media-caption">Banking platform — desktop view</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTEXT */}
      <section className="case__section banking-context">
        <div className="case__wrap banking-context__wrap">
          <div className="banking-context__grid">
            <div className="banking-context__narrative">
              <h2 className="banking-context__title">Legacy navigation and workflow inefficiencies</h2>
              <p className="banking-context__lead">
                The internal banking platform had grown without a coherent information architecture. Core workflows required excessive navigation depth and cross-referencing.
              </p>
              <p className="banking-context__lead">
                Compliance flows were fragmented, increasing support load and operational risk. The business required structural redesign — not a visual refresh.
              </p>
              <p className="banking-context__statement">
                <strong>Structural inefficiency — not a cosmetic redesign.</strong>
              </p>
            </div>
            <div className="banking-context__evidence">
              <div className="banking-context__evidence-item">
                <div className="banking-context__evidence-num">17%</div>
                <div className="banking-context__evidence-title">Longer task completion</div>
                <div className="banking-context__evidence-desc">Baseline vs benchmark for core workflows</div>
              </div>
              <div className="banking-context__evidence-divider" aria-hidden />
              <div className="banking-context__evidence-item">
                <div className="banking-context__evidence-num">9%</div>
                <div className="banking-context__evidence-title">Low feature discoverability</div>
                <div className="banking-context__evidence-desc">Key functions buried in navigation</div>
              </div>
              <div className="banking-context__evidence-divider" aria-hidden />
              <div className="banking-context__evidence-item">
                <div className="banking-context__evidence-num">13%</div>
                <div className="banking-context__evidence-title">Increase in support inquiries</div>
                <div className="banking-context__evidence-desc">Confusion around compliance workflows</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ROLE & DECISION AUTHORITY */}
      <section className="case__section banking-role">
        <div className="case__wrap">
          <h2 className="banking-role__title">What I owned, influenced, decided</h2>
          <p className="banking-role__intro">
            Led cross-functional alignment across product, engineering, and compliance on navigation structure and accessibility standards.
          </p>
          <div className="banking-role__ledger">
            <div className="banking-role__col">
              <h3 className="banking-role__col-title">Owned</h3>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">End-to-end UX of navigation and workflows</span></div>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">Research synthesis and workflow mapping</span></div>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">Wireframes and interaction specs</span></div>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">WCAG audit and remediation</span></div>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">Design QA and dev handoff</span></div>
            </div>
            <div className="banking-role__col">
              <h3 className="banking-role__col-title">Influenced</h3>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">Scope and prioritization with PM/BA</span></div>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">Compliance flow restructuring</span></div>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">Component and token system expansion</span></div>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">Phased rollout and validation plan</span></div>
            </div>
            <div className="banking-role__col">
              <h3 className="banking-role__col-title">Decided</h3>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">Unified primary navigation (reduced depth)</span></div>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">Guided compliance flows</span></div>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">WCAG 2.1 AA as release requirement</span></div>
              <div className="banking-role__row"><span className="banking-role__row-dot" aria-hidden /><span className="banking-role__row-text">Light/dark accessibility parity</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BEFORE → AFTER */}
      <section className="case__section banking-before-after">
        <div className="case__wrap">
          <h2 className="case__h2">From fragmented navigation to structured workflows</h2>
          <div className="banking-before-after__slider-wrap">
            <BeforeAfterSlider
              beforeSrc={caseAssets.beforeImg}
              afterSrc={caseAssets.afterImg}
              caption="Same task. Fewer clicks. Clear hierarchy. Reduced cognitive load."
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: DESIGN WORK (4 blocks: left text + right media) */}
      <section className="case__section banking-artifacts">
        <div className="case__wrap">
          <h2 className="case__h2">Research, structure, and system</h2>

          <div className="banking-artifact">
            <div className="banking-artifact__text">
              <p className="banking-artifact__body">Synthesized interviews and usability findings into workflow bottlenecks and IA opportunities.</p>
            </div>
            <div className="banking-artifact__media">
              <MediaPlaceholder assetKey="researchBoard" label="Research synthesis" />
            </div>
          </div>

          <div className="banking-artifact">
            <div className="banking-artifact__text">
              <p className="banking-artifact__body">Rebuilt navigation depth and screen structure around task paths, not feature lists.</p>
            </div>
            <div className="banking-artifact__media">
              <MediaPlaceholder assetKey="wireframes" label="Wireframes" />
            </div>
          </div>

          <div className="banking-artifact">
            <div className="banking-artifact__text">
              <p className="banking-artifact__body">Expanded tokens and components to keep desktop, web, and tablet consistent during rollout.</p>
            </div>
            <div className="banking-artifact__media">
              <MediaPlaceholder assetKey="tokens" label="Design system tokens" />
            </div>
          </div>

          <div className="banking-artifact">
            <div className="banking-artifact__text">
              <p className="banking-artifact__body">Closed WCAG gaps and ensured light/dark parity for readability and focus states.</p>
            </div>
            <div className="banking-artifact__media">
              <MediaPlaceholder assetKey="accessibility" label="Accessibility" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: VALIDATION */}
      <section className="case__section banking-validation">
        <div className="case__wrap banking-validation__wrap">
          <div className="banking-validation__grid">
            <div className="banking-validation__text">
              <h2 className="case__h2">Validation through iterative testing</h2>
              <p className="case__body">
                Multiple test cycles with internal staff validated faster navigation and clearer compliance flows. Findings fed back into IA and guided steps.
              </p>
              <div className="banking-validation__chips">
                <span className="banking-validation__chip">Reduced misclicks</span>
                <span className="banking-validation__chip">Fewer compliance backtracks</span>
                <span className="banking-validation__chip">Higher core task success</span>
              </div>
            </div>
            <div className="banking-validation__media">
              <MediaPlaceholder assetKey="testingLaptop" label="Testing — laptop" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: IMPACT */}
      <section className="case__section banking-impact">
        <div className="case__wrap">
          <h2 className="case__h2">Measured impact</h2>
          <div className="banking-impact__metrics">
            <div className="banking-impact__metric">
              <div className="case__metric-num">16%</div>
              <div className="case__metric-label">Faster task completion</div>
            </div>
            <div className="banking-impact__metric">
              <div className="case__metric-num">33%</div>
              <div className="case__metric-label">Fewer clicks per task</div>
            </div>
            <div className="banking-impact__metric">
              <div className="case__metric-num">21%</div>
              <div className="case__metric-label">Higher user satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <nav className="banking-nav" aria-label="Case study navigation">
        <div className="banking-nav__wrap">
          <a href="#work" className="banking-nav__link">← Back to Work</a>
          <a href="#fleet" className="banking-nav__link">Next: Fleet Operations Platform →</a>
        </div>
      </nav>
    </article>
  );
}
