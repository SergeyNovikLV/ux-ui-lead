import './MogoCase.css';
import './AIWorkflowCase.css';
import ZoomableImage from '../components/ZoomableImage';
import CaseCardTitleGroup from '../components/CaseCardTitleGroup';
import FleetSectionVideo from '../components/FleetSectionVideo';
import { getIcon } from '../data/roleScopeData';
import { ArrowLeft, ArrowRight, FileText, Layers, Library, LineChart, PackageCheck, Route, ScanSearch } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const HERO_CARDS = [
  {
    num: '01',
    title: 'Faster product framing',
    desc: 'Structured workflows reduced repeated clarification before design execution.',
  },
  {
    num: '02',
    title: 'Earlier validation',
    desc: 'More product directions reviewed before engineering implementation started.',
  },
  {
    num: '03',
    title: 'Design ↔ Storybook delivery',
    desc: 'Shared component workflows reduced implementation drift between Figma and production.',
  },
];

const FUNCTION_ROWS = [
  {
    label: 'PRODUCT FRAMING',
    items: [
      { title: 'Structured briefs', desc: 'Turns fragmented requests into structured product direction.', icon: 'FileText' },
      { title: 'JTBD extraction', desc: 'Defines goals, states, constraints, and dependencies.', icon: 'Compass' },
      { title: 'UX risk review', desc: 'Flags weak flows and missing edge cases early.', icon: 'SearchCheck' },
    ],
  },
  {
    label: 'ANALYTICS & VALIDATION',
    items: [
      { title: 'GA4 interpretation', desc: 'Transforms funnel metrics into operational UX signals.', icon: 'LineChart' },
      { title: 'Behavior review', desc: 'Detects hesitation, confusion, and friction patterns.', icon: 'ScanSearch' },
      { title: 'Flow validation', desc: 'Connects behavioral signals to UX and product decisions.', icon: 'Route' },
    ],
  },
  {
    label: 'DELIVERY & IMPLEMENTATION',
    items: [
      { title: 'Design review', desc: 'Checks hierarchy, accessibility, and consistency.', icon: 'Layers' },
      { title: 'Storybook delivery', desc: 'Prepares reusable implementation-ready components.', icon: 'Library' },
      { title: 'QA support', desc: 'Supports release checks and implementation consistency.', icon: 'PackageCheck' },
    ],
  },
];

const DELIVERY_WORKFLOW = [
  { stage: 'FRAME', title: 'Figma exploration', icon: 'Figma' },
  { stage: 'STRUCTURE', title: 'Cursor refinement', icon: 'BrainCircuit' },
  { stage: 'VALIDATE', title: 'Interactive prototype', icon: 'MousePointerClick' },
  { stage: 'PREPARE', title: 'Storybook components', icon: 'Library' },
  { stage: 'DELIVER', title: 'Implementation support', icon: 'ClipboardCheck' },
];

const WORKFLOW_OUTCOMES = [
  {
    num: '01',
    title: 'Earlier validation before engineering',
    text: 'More concepts were reviewed before implementation work started.',
  },
  {
    num: '02',
    title: 'Lower implementation ambiguity',
    text: 'Developers received clearer flow structure, reusable logic, and delivery direction earlier.',
  },
  {
    num: '03',
    title: 'Closer design ↔ production alignment',
    text: 'Storybook delivery reduced drift between Figma, design system logic, and production components.',
  },
];

const DELIVERY_EVIDENCE = [
  {
    category: 'EVENT',
    title: 'Europe People Forum 2026',
    desc: 'Conference landing page designed for rapid implementation using Figma Make, Cursor, and AI-assisted delivery workflows.',
    contribution:
      'Concept structure, UX direction, layout validation, and implementation-ready delivery for a time-critical event.',
    icon: 'Zap',
  },
  {
    category: 'INTERNAL',
    title: 'People & Culture platform',
    desc: 'Employee-facing platform pages designed for reusable content structure and scalable internal communication flows.',
    contribution:
      'Content architecture, UX hierarchy validation, reusable layouts, and implementation support for internal tools.',
    icon: 'Users',
  },
  {
    category: 'TOOLING',
    title: 'ProductBuddy operational tooling',
    desc: 'Operational workflow connecting product framing, analytics interpretation, UX validation, and Storybook delivery preparation.',
    contribution:
      'Structured briefs, UX review, analytics interpretation, reusable component preparation, and QA support workflows.',
    icon: 'Bot',
  },
  {
    category: 'PORTAL',
    title: 'New MyMogo portal',
    desc: 'Portal exploration focused on reusable flow structure, component logic, and implementation-ready product direction.',
    contribution:
      'Flow validation, Storybook alignment, reusable component preparation, and delivery direction before engineering.',
    icon: 'Smartphone',
  },
];

const IMPACT_TAKEAWAYS = [
  {
    title: 'Less ambiguity before implementation',
    text: 'Product, UX, and implementation direction became clearer before development started.',
  },
  {
    title: 'Faster reusable delivery',
    text: 'Structured workflows reduced repeated clarification and preparation work.',
  },
  {
    title: 'Closer design ↔ production consistency',
    text: 'Shared Storybook delivery reduced implementation drift across teams.',
  },
  {
    title: 'AI became part of delivery operations',
    text: 'AI supported framing, validation, and implementation preparation inside daily product delivery workflows.',
  },
];

function FunctionCard({ title, desc, icon }) {
  const IconComponent = getIcon(icon);
  return (
    <div className="role-scope__card">
      <div className="role-scope__card-icon-wrap">
        <IconComponent size={20} strokeWidth={2} className="role-scope__card-icon" aria-hidden />
      </div>
      <div className="role-scope__card-content">
        <div className="role-scope__card-title" data-case-card-title>
          {title}
        </div>
        <p className="role-scope__card-desc">{desc}</p>
      </div>
    </div>
  );
}

function HeroCard({ num, title, desc }) {
  return (
    <div className="role-scope__card ai-case__hero-card">
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

function DeliveryEvidenceCard({ category, title, desc, contribution, icon, row = '0' }) {
  const IconComponent = getIcon(icon);
  return (
    <div className="role-scope__card ai-case__delivery-card" data-case-card-row={row}>
      <div className="ai-case__delivery-card__icon">
        <div className="role-scope__card-icon-wrap">
          <IconComponent size={20} strokeWidth={2} className="role-scope__card-icon" aria-hidden />
        </div>
      </div>
      <div className="role-scope__row-title ai-case__delivery-card__category">{category}</div>
      <div className="role-scope__card-title ai-case__delivery-card__title" data-case-card-title>
        {title}
      </div>
      <p className="role-scope__card-desc ai-case__delivery-card__desc">{desc}</p>
      <p className="ai-case__delivery-contribution-label">Workflow contribution</p>
      <p className="role-scope__card-desc ai-case__delivery-card__contribution">{contribution}</p>
    </div>
  );
}

export default function AIWorkflowCase() {
  const deliveryFlowAria = DELIVERY_WORKFLOW.map((s) => `${s.stage}: ${s.title}`).join(' → ');

  return (
    <article className="eleving mogo-case ai-case">
      <section className="case__section eleving-hero">
        <div className="case__wrap">
          <div className="eleving-hero__grid">
            <div className="eleving-hero__text">
              <div className="case__hero-label">PRACTICE · PRODUCT DELIVERY · DESIGN ↔ DEVELOPMENT OPERATIONS</div>
              <h1 className="eleving-hero__title">Reducing the gap between design and production</h1>
              <p className="eleving-hero__subtitle">
                Building operational workflows that connect product framing, UX validation, Storybook delivery, and implementation-ready outputs across
                fintech product teams.
              </p>
              <div className="eleving-hero__divider" aria-hidden />
            </div>
          </div>

          <CaseCardTitleGroup className="role-scope__row-cards ai-case__hero-cards">
            {HERO_CARDS.map((card) => (
              <HeroCard key={card.num} {...card} />
            ))}
          </CaseCardTitleGroup>

          <div className="hero-split ai-case__hero-media">
            <FleetSectionVideo
              src={`${base}videos/productbuddy-workflow.mp4`}
              caption="Operational workflow connecting product framing, validation, reusable component delivery, and implementation support."
            />
          </div>
        </div>
      </section>

      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">01 — OPERATIONAL DELIVERY SYSTEM</div>
          <h2 className="case__h2">Why I built ProductBuddy</h2>
          <p className="case__body">
            ProductBuddy started as a response to a real delivery problem: product work arrived fragmented, unclear, and difficult to translate into
            implementation-ready direction.
          </p>
          <p className="case__body">
            Generic AI tools helped generate output, but they did not understand product logic, reusable systems, analytics signals, delivery constraints, or
            implementation structure.
          </p>
          <p className="case__body">
            I built ProductBuddy as an operational layer between product, design, and engineering — combining structured prompts, analytics interpretation, UX
            review, reusable component preparation, and implementation support inside one workflow.
          </p>
          <p className="case__body">
            The goal was not &ldquo;more AI&rdquo;. The goal was reducing ambiguity before engineering starts.
          </p>

          <div className="role-scope__rows ai-case__pb-functions">
            {FUNCTION_ROWS.map((row) => (
              <div key={row.label} className="role-scope__row">
                <h3 className="role-scope__row-title">{row.label}</h3>
                <CaseCardTitleGroup className="role-scope__row-cards">
                  {row.items.map((item) => (
                    <FunctionCard key={item.title} title={item.title} desc={item.desc} icon={item.icon} />
                  ))}
                </CaseCardTitleGroup>
              </div>
            ))}
          </div>

          <div className="mogo-section__image ai-case__pb-section-media">
            <ZoomableImage
              src={`${base}ai-case/product-health.png`}
              alt="Operational analytics interpretation with UX risks and recommendations"
              caption="Operational analytics interpretation translated into UX risks, recommendations, and implementation-ready direction."
              className="mogo-section__img"
            />
          </div>
        </div>
      </section>

      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">02 — DESIGN ↔ DEVELOPMENT SYNERGY</div>
          <h2 className="case__h2">Reducing implementation drift before release</h2>
          <p className="case__body">
            The workflow evolved beyond UX support into shared delivery operations between design and engineering.
          </p>
          <p className="case__body">
            Instead of stopping at Figma handoff, I started preparing reusable Storybook components directly inside the same operational workflow — aligned with
            the design system foundations and implementation structure.
          </p>
          <p className="case__body">
            This reduced repeated clarification, improved consistency between design and production, and accelerated implementation preparation across product
            teams.
          </p>

          <div className="ai-case__workflow-panel" role="region" aria-label={deliveryFlowAria}>
            <div className="ai-case__workflow-panel__steps">
              {DELIVERY_WORKFLOW.map((step, index) => {
                const StepIcon = getIcon(step.icon);
                const isLast = index === DELIVERY_WORKFLOW.length - 1;
                return (
                  <div key={step.stage} className="ai-case__workflow-panel__step">
                    <div className="ai-case__workflow-panel__icon-wrap">
                      <StepIcon size={20} strokeWidth={2} className="ai-case__workflow-panel__icon" aria-hidden />
                    </div>
                    <span className="ai-case__workflow-panel__stage">{step.stage}</span>
                    <div className="ai-case__workflow-panel__title-row">
                      <p className="ai-case__workflow-panel__label">{step.title}</p>
                      {!isLast ? (
                        <ArrowRight size={16} strokeWidth={2} className="ai-case__workflow-panel__arrow" aria-hidden />
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="ai-case__workflow-outcomes" role="list">
            {WORKFLOW_OUTCOMES.map((item) => (
              <div key={item.num} className="ai-case__workflow-outcome" role="listitem">
                <span className="ai-case__workflow-outcome__num">{item.num}</span>
                <p className="ai-case__workflow-outcome__title">{item.title}</p>
                <p className="ai-case__workflow-outcome__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case__section ai-case__delivery-section">
        <div className="case__wrap">
          <div className="case__section-label">03 — REAL PRODUCT DELIVERY</div>
          <h2 className="case__h2">Where the workflow was applied</h2>
          <p className="case__body ai-case__delivery-intro">
            The workflow was used across internal tooling, conference experiences, portal exploration, and design-system delivery support at Eleving — helping
            teams move from fragmented product input to implementation-ready delivery faster.
          </p>
          <CaseCardTitleGroup className="ai-case__delivery-grid">
            {DELIVERY_EVIDENCE.map((item, index) => (
              <DeliveryEvidenceCard key={item.title} {...item} row={String(Math.floor(index / 2))} />
            ))}
          </CaseCardTitleGroup>
        </div>
      </section>

      <section className="case__section mogo-takeaways">
        <div className="case__wrap">
          <div className="case__section-label">04 — OPERATIONAL IMPACT</div>
          <h2 className="case__h2">What changed operationally</h2>
          <p className="case__body">
            The workflow improved implementation readiness, reduced ambiguity before development, and brought product, design, and engineering closer through
            shared operational delivery foundations.
          </p>
          <CaseCardTitleGroup className="mogo-takeaways__numbered">
            {IMPACT_TAKEAWAYS.map((item, i) => (
              <div key={item.title} className="mogo-takeaways__num-item">
                <span className="mogo-takeaways__num-digit">{String(i + 1).padStart(2, '0')}</span>
                <p className="mogo-takeaways__num-title" data-case-card-title>
                  {item.title}
                </p>
                <p className="mogo-takeaways__num-text">{item.text}</p>
              </div>
            ))}
          </CaseCardTitleGroup>
        </div>
      </section>

      <nav className="eleving-nav" aria-label="Case study navigation">
        <div className="eleving-nav__wrap">
          <a href="#work" className="eleving-nav__link">
            <ArrowLeft size={16} strokeWidth={2} aria-hidden /> Back to Work
          </a>
          <a href="#design-systems" className="eleving-nav__link">
            Next: Design Systems at scale <ArrowRight size={16} strokeWidth={2} aria-hidden />
          </a>
        </div>
      </nav>
    </article>
  );
}
