import './ElevingCase.css';

export default function ElevingCase() {
  return (
    <article className="eleving">
      {/* HERO */}
      <section className="case__section eleving-hero">
        <div className="case__wrap">
          <div className="eleving-hero__grid">
            <div>
              <div className="case__hero-label">01 · Fintech · Multi-brand · Design Systems</div>
              <h1 className="eleving-hero__title">Eleving — Product Design Operating System</h1>
              <p className="eleving-hero__subtitle">
                Product foundation for 3 fintech brands across 7 markets: shared design language, QA process, and governance so Mogo, Primero, and MyMogo ship consistently — not just a design system, but how design operates.
              </p>
              <div className="case__hero-divider" aria-hidden />
            </div>
          </div>
          <div className="case__meta-grid">
            {[
              { label: 'TIMELINE', value: '06.2025–Present' },
              { label: 'ROLE', value: 'Lead Product Designer' },
              { label: 'SCOPE', value: 'Mogo · Primero · MyMogo' },
              { label: 'MARKETS', value: 'LV · LT · EE · RO · AM · GE · MD' },
            ].map(item => (
              <div key={item.label}>
                <div className="case__meta-label">{item.label}</div>
                <div className="case__meta-value">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="case__placeholder case__placeholder--hero">
            HERO IMAGE — Design system overview
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="case__section eleving-context">
        <div className="case__wrap">
          <div className="eleving-context__grid">
            <div>
              <div className="case__section-label">CONTEXT</div>
              <h2 className="case__h2">Three brands. No shared foundation. One team. One month to prove it works.</h2>
              <p className="case__body">
                Eleving operates 3 fintech brands across 7 markets. Each product evolved
                independently — separate token logic, no dark mode support, duplicated
                components, no shared QA standard, and Figma that didn't match production.
              </p>
              <p className="case__body">
                The problem wasn't visual inconsistency. It was structural: no token layer
                meant every UI decision was manual, every brand change was a rebuild, and
                every release carried risk of silent drift.
              </p>
            </div>
            <div className="eleving-context__stats">
              <div className="case__stat">
                <div className="case__stat-num">40%+</div>
                <div className="case__stat-label">Component duplication</div>
                <div className="case__stat-desc">Across Mogo, Primero and MyMogo codebases</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">0</div>
                <div className="case__stat-label">Shared QA process</div>
                <div className="case__stat-desc">No definition of "design-ready" existed</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">3</div>
                <div className="case__stat-label">Brands diverging</div>
                <div className="case__stat-desc">UI drift accumulating with every release</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY ROLE — 4 cards 2x2 */}
      <section className="case__section eleving-role">
        <div className="case__wrap">
          <div className="case__section-label">MY ROLE</div>
          <h2 className="eleving-role__title">What I owned, influenced, decided, delivered</h2>
          <div className="eleving-role__cards">
            <div className="case__card">
              <span className="case__card-num" aria-hidden>01</span>
              <h3 className="case__card-title">Owned</h3>
              <ul className="case__card-list">
                <li className="case__card-item">Token architecture rebuild</li>
                <li className="case__card-item">Typography system — Inter Variable</li>
                <li className="case__card-item">Design QA process from scratch</li>
                <li className="case__card-item">Figma file architecture and governance</li>
                <li className="case__card-item">Component library contribution</li>
              </ul>
            </div>
            <div className="case__card">
              <span className="case__card-num" aria-hidden>02</span>
              <h3 className="case__card-title">Influenced</h3>
              <ul className="case__card-list">
                <li className="case__card-item">Engineering adoption of token system</li>
                <li className="case__card-item">Storybook ↔ Figma token alignment</li>
                <li className="case__card-item">QA gate integrated into release cycle</li>
                <li className="case__card-item">Brand migration sequencing roadmap</li>
              </ul>
            </div>
            <div className="case__card">
              <span className="case__card-num" aria-hidden>03</span>
              <h3 className="case__card-title">Decided</h3>
              <ul className="case__card-list">
                <li className="case__card-item">Theme-based token layering for brand switching</li>
                <li className="case__card-item">Definition of "design-ready" standard</li>
                <li className="case__card-item">Extend vs reuse component rules</li>
                <li className="case__card-item">AI-ready token boundaries</li>
              </ul>
            </div>
            <div className="case__card">
              <span className="case__card-num" aria-hidden>04</span>
              <h3 className="case__card-title">Delivered</h3>
              <ul className="case__card-list">
                <li className="case__card-item">Klevo — new brand launched in 4 weeks</li>
                <li className="case__card-item">Mogo full redesign shipped</li>
                <li className="case__card-item">Zero critical failures post-launch audit</li>
                <li className="case__card-item">3→1 token sources consolidated</li>
              </ul>
            </div>
          </div>
          <blockquote className="case__quote">
            "This wasn't a Design System update. I established a Product Design Operating
            Model — infrastructure that makes delivery predictable and brand drift
            structurally impossible."
          </blockquote>
        </div>
      </section>

      {/* KEY DECISIONS */}
      <section className="case__section eleving-decisions">
        <div className="case__wrap">
          <div className="case__section-label">KEY DECISIONS</div>
          <h2 className="case__h2">Four decisions that defined the system.</h2>
          <div className="case__decision">
            <span className="case__decision-num">01</span>
            <div>
              <div className="case__decision-title">Global token architecture as the foundation</div>
              <p className="case__decision-body">
                <strong>Problem:</strong> Each brand managed styles manually. Color, typography, spacing decisions lived in designer heads — not in a system. Any change meant touching every component.<br />
                <strong>Decision:</strong> Build a global semantic token layer first. Primitive tokens → semantic tokens → component tokens. Three tiers. One source.<br />
                <strong>Trade-off:</strong> No visible UI output for weeks. Accepted — everything built before this would need rebuilding after.
              </p>
            </div>
          </div>
          <div className="case__decision">
            <span className="case__decision-num">02</span>
            <div>
              <div className="case__decision-title">Automatic dark/light mode via token switching</div>
              <p className="case__decision-body">
                <strong>Problem:</strong> Dark mode wasn't supported across any of the brands. Adding it later would mean touching every component individually.<br />
                <strong>Decision:</strong> Design the token system with mode-awareness from day one. Light/dark values mapped at semantic token level — switching mode = one variable change, not a component rebuild.<br />
                <strong>Trade-off:</strong> More complex token structure upfront. Accepted — retrofitting dark mode costs 10× more than building it in from the start.
              </p>
            </div>
          </div>
          <div className="case__decision">
            <span className="case__decision-num">03</span>
            <div>
              <div className="case__decision-title">Multi-brand theming without component duplication</div>
              <p className="case__decision-body">
                <strong>Problem:</strong> Mogo, Primero, and MyMogo had diverging components. Maintaining 3 separate systems at current team size was impossible.<br />
                <strong>Decision:</strong> Single component layer. Brand identity expressed entirely through theme token overrides — not separate components. New brand = new theme file. Same components.<br />
                <strong>Trade-off:</strong> Tighter constraints on brand expression. Accepted — system scalability outweighs marginal brand differentiation at this scale.
              </p>
            </div>
          </div>
          <div className="case__decision">
            <span className="case__decision-num">04</span>
            <div>
              <div className="case__decision-title">Design QA as a structural release gate</div>
              <p className="case__decision-body">
                <strong>Problem:</strong> Figma ≠ production. Drift was discovered after deployment. No one owned the gap between design intent and shipped UI.<br />
                <strong>Decision:</strong> Define "design-ready" formally. Mandatory QA pass before every release. Token validation, typography checks, component state coverage — all documented.<br />
                <strong>Trade-off:</strong> Slower release cycle initially. Accepted — post-deploy fixes cost more and erode team trust in the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I BUILT — DESIGN SYSTEM */}
      <section className="case__section eleving-built">
        <div className="case__wrap">
          <div className="case__section-label">DESIGN SYSTEM</div>
          <h2 className="case__h2">Product Design Operating System</h2>
          <p className="case__body">
            This wasn't a Design System update. I built the infrastructure layer that makes
            consistent, scalable, multi-brand product delivery structurally possible.
          </p>
          <div className="eleving-built__grid">
            <div className="case__card">
              <div className="eleving-built__card-num">01</div>
              <h3 className="eleving-built__card-title">Global Token Architecture</h3>
              <p className="eleving-built__card-body">
                3-tier system: primitive → semantic → component. Single source of truth
                across Figma and Storybook. Token naming aligned to code variables — no
                manual interpretation by developers. Multi-brand theming via theme file swap.
              </p>
              <p className="eleving-built__card-result">Result: Brand change = theme file. No component rebuilds.</p>
            </div>
            <div className="case__card">
              <div className="eleving-built__card-num">02</div>
              <h3 className="eleving-built__card-title">Typography System</h3>
              <p className="eleving-built__card-body">
                Rebuilt scale using Inter Variable across all 3 brands. Desktop and mobile
                modes defined. Every text style mapped to a code token — ad-hoc font
                overrides eliminated in production. 1:1 parity between Figma and Storybook.
              </p>
              <p className="eleving-built__card-result">Result: Typography decided once. Applied everywhere automatically.</p>
            </div>
            <div className="case__card">
              <div className="eleving-built__card-num">03</div>
              <h3 className="eleving-built__card-title">Design Sign-off Process</h3>
              <p className="eleving-built__card-body">
                QA teams checked functionality — not design. Visual bugs and token errors
                shipped silently. I introduced a formal Design Sign-off stage before QA in
                the product development flow. Defined "design-ready": token coverage,
                component states, typography, accessibility.
              </p>
              <p className="eleving-built__card-result">Result: Visual bugs caught before shipping. Design intent became verifiable.</p>
            </div>
            <div className="case__card">
              <div className="eleving-built__card-num">04</div>
              <h3 className="eleving-built__card-title">Governance & Contribution Standards</h3>
              <p className="eleving-built__card-body">
                Contribution rules for new components. Versioning logic and naming
                conventions for long-term scalability. Figma file architecture standardized
                across brands. Rules for when to extend vs reuse. AI-ready token boundaries
                for predictable AI-assisted UI generation.
              </p>
              <p className="eleving-built__card-result">Result: Design shifted from screen-level execution to system-level thinking.</p>
            </div>
          </div>
          <div className="case__placeholder case__placeholder--section">
            DESIGN SYSTEM — Token structure / Component library
          </div>
        </div>
      </section>

      {/* PROCESS — Research & Product Process */}
      <section className="case__section eleving-process">
        <div className="case__wrap">
          <div className="case__section-label">PROCESS</div>
          <h2 className="case__h2">Embedding research into product delivery</h2>
          <p className="case__body">
            Before I joined, product decisions were made without structured user insight.
            No personas, no JTBD framework, no systematic feedback analysis. QA checked
            functionality — design intent was largely unverifiable.
          </p>
          <p className="case__body">
            I introduced a research and analysis layer directly into the product development flow.
          </p>
          <div className="eleving-process__grid">
            <div className="case__card">
              <div className="eleving-process__card-label">USER UNDERSTANDING</div>
              <h3 className="case__card-title">Personas · JTBD · User Stories</h3>
              <p className="eleving-process__card-body">
                Introduced user personas, Jobs-to-be-Done framework, and user stories as
                mandatory inputs to the product design flow. Redesigned the customer
                duplication flow based on real user mental models — not assumptions. Added
                a product checklist as part of the Design OS to ensure every feature is
                validated against user goals before moving to execution.
              </p>
            </div>
            <div className="case__card">
              <div className="eleving-process__card-label">FEEDBACK ANALYSIS</div>
              <h3 className="case__card-title">NPS · Reviews · In-app Feedback</h3>
              <p className="eleving-process__card-body">
                Established a monthly feedback analysis cycle — NPS scores, Google Play and
                App Store reviews, and in-app feedback modals. Synthesized findings into
                monthly summary reports for the product team: what happened, why it
                happened, what to act on. Gave the team a shared language around user
                problems — based on data, not opinion.
              </p>
              <div className="case__placeholder case__placeholder--evidence">MONTHLY FEEDBACK SUMMARY — evidence</div>
            </div>
            <div className="case__card">
              <div className="eleving-process__card-label">BEHAVIORAL ANALYTICS</div>
              <h3 className="case__card-title">Heatmaps · GA · Clarity</h3>
              <p className="eleving-process__card-body">
                Introduced Microsoft Clarity heatmap analysis and structured Google
                Analytics reporting as standard tools in the design process. Before this,
                no behavioral data informed design decisions. I ran the analysis and
                translated findings into actionable design changes — identifying friction
                points, drop-off patterns, and underused features.
              </p>
              <div className="case__placeholder case__placeholder--evidence">GA + CLARITY ANALYSIS — evidence</div>
            </div>
            <div className="case__card">
              <div className="eleving-process__card-label">AI-ASSISTED INSIGHTS</div>
              <h3 className="case__card-title">AI integrated into Product Design OS</h3>
              <p className="eleving-process__card-body">
                Integrated an AI layer into the product design workflow — connected to
                Google Analytics and Clarity reports. The tool generates behavioral
                insights automatically, surfaces patterns across sessions, and reduces
                manual analysis time per cycle. Design decisions now start from data
                signals, not from gut feel or stakeholder opinion.
              </p>
            </div>
          </div>
          <div className="eleving-process__outcomes">
            <h3 className="eleving-process__outcomes-title">What this research layer changed</h3>
            <p className="eleving-process__outcomes-text">
              Mogo webpage performance improved after removing heavy unnecessary hero
              animations identified through Clarity heatmap analysis and Core Web Vitals data.
            </p>
            <p className="eleving-process__outcomes-text">
              All 3 brands migrated to Inter Variable font in digital products — decision
              driven by readability data and cross-brand consistency audit, not aesthetic preference.
            </p>
            <p className="eleving-process__outcomes-text">
              Monthly analytics summaries created a shared team language around user
              problems — product decisions became traceable to evidence, not opinion.
            </p>
          </div>
        </div>
      </section>

      {/* EVIDENCE — 3 columns */}
      <section className="case__section eleving-evidence">
        <div className="case__wrap">
          <div className="case__section-label">EVIDENCE</div>
          <h2 className="case__h2">From operating model to shipped product</h2>
          <div className="eleving-evidence__grid">
            <div className="eleving-evidence__block">
              <div className="eleving-evidence__label">MOGO REDESIGN</div>
              <h3 className="eleving-evidence__title">Mogo — full redesign on new foundation</h3>
              <p className="case__body">
                First major product migrated to the global token system. Full redesign shipped
                with dark/light mode, new component library, and QA gate integrated into
                delivery cycle.
              </p>
              <div className="case__placeholder case__placeholder--evidence">MOGO SCREENS</div>
            </div>
            <div className="eleving-evidence__block">
              <div className="eleving-evidence__label">MULTI-BRAND SYSTEM</div>
              <h3 className="eleving-evidence__title">One system. Three brand expressions.</h3>
              <p className="case__body">
                Mogo, Primero, and MyMogo running on a single component layer. Brand
                differentiation via theme tokens only — no duplicated components, no separate
                design files per brand.
              </p>
              <div className="case__placeholder case__placeholder--evidence">MULTI-BRAND SCREENS</div>
            </div>
            <div className="eleving-evidence__block">
              <div className="eleving-evidence__label">DARK / LIGHT MODE</div>
              <h3 className="eleving-evidence__title">Automatic mode switching — all brands</h3>
              <p className="case__body">
                Dark and light mode shipped across all surfaces without component-level
                changes. Mode awareness built into the token layer — switching is a single
                variable change.
              </p>
              <div className="case__placeholder case__placeholder--evidence">DARK/LIGHT SCREENS</div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="case__section eleving-impact">
        <div className="case__wrap">
          <div className="case__section-label">IMPACT</div>
          <h2 className="case__h2">Measured outcomes</h2>
          <div className="eleving-impact__metrics">
            <div className="eleving-impact__metric">
              <div className="case__metric-num">3→1</div>
              <div className="case__metric-label">Token sources unified</div>
              <div className="case__metric-desc">Three separate brand token sets consolidated into one global system</div>
            </div>
            <div className="eleving-impact__metric">
              <div className="case__metric-num">0</div>
              <div className="case__metric-label">Component rebuilds for dark mode</div>
              <div className="case__metric-desc">Mode switching via token layer — zero component-level changes required</div>
            </div>
            <div className="eleving-impact__metric">
              <div className="case__metric-num">40%→8%</div>
              <div className="case__metric-label">Component duplication</div>
              <div className="case__metric-desc">Shared component layer eliminated redundancy across all 3 brand codebases</div>
            </div>
          </div>
          <p className="eleving-impact__signals">
            Design QA integrated as a formal release gate — Figma-to-production drift
            structurally eliminated across all brands. New brand theming reduced from weeks
            of design work to a theme token file. AI-assisted UI generation enabled by
            predictable token boundaries and consistent component contracts.
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <nav className="eleving-nav" aria-label="Case study navigation">
        <div className="eleving-nav__wrap">
          <a href="#work" className="eleving-nav__link">← Back to Work</a>
          <a href="#fleet" className="eleving-nav__link">Next: Fleet Operations Platform →</a>
        </div>
      </nav>
    </article>
  );
}
