import './MogoCase.css';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Truck,
  Landmark,
  Tv,
  Layers,
  Type,
  Code2,
  Shield,
} from 'lucide-react';
import CaseCardTitleGroup from '../components/CaseCardTitleGroup';
import FleetSectionVideo from '../components/FleetSectionVideo';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const base = import.meta.env.BASE_URL;

const HERO_METRICS = [
  {
    num: '01',
    title: '3+ brands aligned',
    desc: 'Shared system logic across Mogo, Primero, MyMogo, and related products.',
  },
  {
    num: '02',
    title: 'Design ↔ Storybook parity',
    desc: 'Design foundations moved closer to reusable front-end implementation.',
  },
  {
    num: '03',
    title: 'Lower delivery drift',
    desc: 'Reusable rules reduced mismatch between design decisions and production output.',
  },
];

const DELIVERY_DRIFT_SYMPTOMS = [
  {
    title: 'Duplicated foundations',
    desc: 'Multiple brands evolved separate component logic, creating repeated design and implementation work.',
  },
  {
    title: 'Design ↔ development drift',
    desc: 'Different design and implementation patterns made delivery less predictable across products.',
  },
  {
    title: 'Scaling overhead',
    desc: 'More QA effort, maintenance work, and release friction appeared as products expanded.',
  },
];

function HeroMetricCard({ num, title, desc }) {
  return (
    <div className="role-scope__card design-systems-case__hero-card">
      <span className="mogo-takeaways__num-digit">{num}</span>
      <div className="role-scope__card-content">
        <div className="role-scope__card-title" data-case-card-title>
          {title}
        </div>
        <p className="role-scope__card-desc">{desc}</p>
      </div>
    </div>
  );
}

function DriftSymptomCard({ title, desc }) {
  return (
    <div className="role-scope__card design-systems-case__drift-card">
      <div className="role-scope__card-content">
        <div className="role-scope__card-title" data-case-card-title>
          {title}
        </div>
        <p className="role-scope__card-desc">{desc}</p>
      </div>
    </div>
  );
}

export default function DesignSystemsCase() {
  return (
    <article className="eleving mogo-case design-systems-case">
      <section className="case__section eleving-hero design-systems-case__hero">
        <div className="case__wrap">
          <div className="eleving-hero__grid">
            <div className="eleving-hero__text design-systems-case__hero-text">
              <div className="case__hero-label">PRACTICE · DESIGN SYSTEMS · DESIGN ↔ DEVELOPMENT OPERATIONS</div>
              <h1 className="eleving-hero__title design-systems-case__hero-title">
                Reducing delivery drift across multi-brand product teams
              </h1>
              <p className="eleving-hero__subtitle design-systems-case__hero-subtitle">
                I helped rebuild fragmented brand libraries into shared design and implementation foundations — making multi-brand delivery more predictable
                across Mogo, Primero, MyMogo, and related fintech products.
              </p>
              <div className="eleving-hero__divider" aria-hidden />
            </div>
          </div>

          <CaseCardTitleGroup className="role-scope__row-cards design-systems-case__hero-cards">
            {HERO_METRICS.map((card) => (
              <HeroMetricCard key={card.num} {...card} />
            ))}
          </CaseCardTitleGroup>

          <div className="hero-split design-systems-case__hero-media">
            <FleetSectionVideo
              src={`${base}ai-case/ds2.mp4`}
              caption="Multi-brand delivery demo: theme switching, typography modes, and reusable component behavior."
            />
          </div>
        </div>
      </section>

      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">01 — DELIVERY DRIFT</div>
          <h2 className="case__h2">When the system stopped scaling</h2>
          <p className="case__body">
            As brands and products evolved separately, the design system stopped behaving like one operational foundation.
          </p>
          <p className="case__body">
            The problem was no longer only visual inconsistency. Separate component logic, typography behavior, token structures, and brand overrides created
            growing mismatch between Figma and implementation.
          </p>
          <p className="case__body">
            Over time, this became a delivery problem: more QA effort, more implementation drift, more maintenance overhead, and less predictable product
            releases.
          </p>

          <CaseCardTitleGroup className="role-scope__row-cards design-systems-case__drift-cards">
            {DELIVERY_DRIFT_SYMPTOMS.map((card) => (
              <DriftSymptomCard key={card.title} {...card} />
            ))}
          </CaseCardTitleGroup>
        </div>
      </section>

      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">02 — REBUILDING THE FOUNDATION</div>
          <h2 className="case__h2">From fragmented libraries to shared delivery foundations</h2>
          <p className="case__body">
            The goal was not to make a cleaner UI library. The goal was to rebuild the foundation so design decisions could scale safely into implementation
            across brands and teams.
          </p>
          <p className="case__body">
            The system moved from duplicated brand-specific structures toward shared rules, reusable themes, clearer token logic, and Storybook-aligned
            component behavior.
          </p>
          <div className="fleet-section__slider-wrap">
            <BeforeAfterSlider
              beforeSrc={base + 'ai-case/ds1.png'}
              afterSrc={base + 'ai-case/ds2.png'}
              beforeCaption="Separate brand libraries, duplicated component logic, inconsistent typography, and weak token structure."
              afterCaption="Shared foundations, reusable themes, typography modes, clearer token logic, and Storybook-aligned components."
            />
          </div>
          <div className="case__key-decisions__list design-systems-case__system-restructure-principles">
            <div className="case__decision">
              <span className="case__decision-num">01</span>
              <div>
                <div className="case__decision-title">Shared foundations</div>
                <p className="case__decision-body">
                  Core spacing, typography, radius, and behavior moved into reusable shared layers.
                </p>
              </div>
            </div>
            <div className="case__decision">
              <span className="case__decision-num">02</span>
              <div>
                <div className="case__decision-title">Clearer token logic</div>
                <p className="case__decision-body">
                  Token structure became easier to understand, maintain, and align with implementation.
                </p>
              </div>
            </div>
            <div className="case__decision">
              <span className="case__decision-num">03</span>
              <div>
                <div className="case__decision-title">Theme-based brands</div>
                <p className="case__decision-body">
                  Brand differences moved into reusable theme layers instead of duplicated libraries.
                </p>
              </div>
            </div>
            <div className="case__decision">
              <span className="case__decision-num">04</span>
              <div>
                <div className="case__decision-title">Storybook alignment</div>
                <p className="case__decision-body">
                  Design foundations aligned closer to reusable front-end component logic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">03 — DESIGN ↔ DEVELOPMENT ALIGNMENT</div>
          <h2 className="case__h2">Making the system usable in real delivery</h2>
          <p className="case__body">
            The restructure also changed how design work moved into implementation. Shared rules and Storybook alignment made the system easier to use during
            daily product delivery, not only inside Figma.
          </p>
          <CaseCardTitleGroup className="mogo-system__grid mogo-system__grid--two-col">
            <div className="mogo-system__item">
              <Layers size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>
                Foundation consistency
              </h3>
              <p className="mogo-system__desc">Shared rules reduced uncontrolled visual divergence across brands.</p>
            </div>
            <div className="mogo-system__item">
              <Type size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>
                Typography modes
              </h3>
              <p className="mogo-system__desc">Type behavior became predictable across products and responsive contexts.</p>
            </div>
            <div className="mogo-system__item">
              <Code2 size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>
                Design/dev parity
              </h3>
              <p className="mogo-system__desc">Figma structure aligned closer to Storybook and implementation logic.</p>
            </div>
            <div className="mogo-system__item">
              <Shield size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>
                Governance support
              </h3>
              <p className="mogo-system__desc">Reusable rules made multi-brand delivery safer across teams and releases.</p>
            </div>
          </CaseCardTitleGroup>
        </div>
      </section>

      <section className="case__section mogo-section design-systems-case__experience">
        <div className="case__wrap">
          <div className="case__section-label">EXPERIENCE ACROSS SYSTEMS</div>
          <h2 className="case__h2">Scaling consistency across different product environments</h2>
          <p className="case__body">
            Similar scaling problems appeared across fintech, logistics, enterprise, and media products. Eleving was the strongest example, but the same
            pattern repeated across different environments: products grew faster than their foundations.
          </p>
          <CaseCardTitleGroup className="mogo-system__grid mogo-system__grid--two-col">
            <div className="mogo-system__item">
              <Building2 size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>
                Eleving Group
              </h3>
              <p className="mogo-system__desc">
                Multi-brand fintech system restructure across Mogo, Primero, MyMogo, and related products.
              </p>
              <p className="mogo-system__desc">
                <strong>Focus:</strong> semantic foundations, theme architecture, Storybook parity, design/dev consistency.
              </p>
            </div>
            <div className="mogo-system__item">
              <Truck size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>
                Mapon
              </h3>
              <p className="mogo-system__desc">Operational UI consistency across complex logistics and fleet-management workflows.</p>
              <p className="mogo-system__desc">
                <strong>Focus:</strong> reusable patterns, data-heavy layouts, scalable product foundations.
              </p>
            </div>
            <div className="mogo-system__item">
              <Landmark size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>
                Deutsche Bank
              </h3>
              <p className="mogo-system__desc">Enterprise workflow standardization across internal banking tools.</p>
              <p className="mogo-system__desc">
                <strong>Focus:</strong> complex flows, shared interaction logic, accessibility, release consistency.
              </p>
            </div>
            <div className="mogo-system__item">
              <Tv size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>
                Channel 4
              </h3>
              <p className="mogo-system__desc">Cross-platform consistency across a large-scale streaming platform.</p>
              <p className="mogo-system__desc">
                <strong>Focus:</strong> responsive behavior, accessibility, shared library migration, platform parity.
              </p>
            </div>
          </CaseCardTitleGroup>
        </div>
      </section>

      <section className="case__section mogo-takeaways">
        <div className="case__wrap">
          <div className="case__section-label">05 — OPERATIONAL IMPACT</div>
          <h2 className="case__h2">The system became operational infrastructure</h2>
          <p className="case__body">
            The result was not just a cleaner design system. The system became a shared operational foundation that reduced implementation drift, improved
            consistency across brands, and made delivery easier to maintain.
          </p>
          <CaseCardTitleGroup className="mogo-takeaways__numbered">
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">01</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                Delivery drift became easier to control
              </p>
              <p className="mogo-takeaways__num-text">
                Shared rules reduced repeated overrides and inconsistent implementation behavior.
              </p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">02</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                Brand scaling became more predictable
              </p>
              <p className="mogo-takeaways__num-text">Reusable themes reduced duplicated work across multi-brand delivery.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">03</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                Implementation alignment improved
              </p>
              <p className="mogo-takeaways__num-text">Design and front-end behavior became easier to align across products.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">04</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                The system became shared infrastructure
              </p>
              <p className="mogo-takeaways__num-text">
                The value was scalable delivery consistency across teams, products, and releases.
              </p>
            </div>
          </CaseCardTitleGroup>
        </div>
      </section>

      <nav className="eleving-nav" aria-label="Case study navigation">
        <div className="eleving-nav__wrap">
          <a href="#work" className="eleving-nav__link">
            <ArrowLeft size={16} strokeWidth={2} aria-hidden /> Back to Work
          </a>
          <a href="#fleet" className="eleving-nav__link">
            Next: Fleet Operations Platform <ArrowRight size={16} strokeWidth={2} aria-hidden />
          </a>
        </div>
      </nav>
    </article>
  );
}
