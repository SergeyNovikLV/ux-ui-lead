import './MogoCase.css';
import './AIWorkflowCase.css';
import CaseCardTitleGroup from '../components/CaseCardTitleGroup';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FleetSectionVideo from '../components/FleetSectionVideo';
import ResearchSignalCard from '../components/ResearchSignalCard';
import ZoomableImage from '../components/ZoomableImage';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const WORKFLOW_CARDS = [
  {
    eyebrow: 'STEP 1',
    title: 'Structure the request',
    rows: [
      { label: 'INPUT', text: 'Raw request from Jira, Teams or a stakeholder.' },
      { label: 'OUTPUT', text: 'Problem, user, goal, states and constraints.' },
    ],
  },
  {
    eyebrow: 'STEP 2',
    title: 'Plan the screens',
    rows: [
      { label: 'INPUT', text: 'Structured product and design brief.' },
      { label: 'OUTPUT', text: 'Required screens, variants and DS2 components.' },
    ],
  },
  {
    eyebrow: 'STEP 3',
    title: 'Build the DS2 draft',
    rows: [
      { label: 'INPUT', text: 'Approved screen and component plan.' },
      { label: 'OUTPUT', text: 'Initial design using real shared DS2 patterns.' },
    ],
  },
  {
    eyebrow: 'STEP 4',
    title: 'Run QA and review',
    rows: [
      { label: 'CHECK', text: 'Brief, consistency and accessibility.' },
      { label: 'GATE', text: 'Human design review before approval.' },
    ],
  },
];

export default function AIWorkflowCase() {
  return (
    <article className="eleving mogo-case ai-case">
      <section className="case__section eleving-hero">
        <div className="case__wrap">
          <div className="eleving-hero__grid">
            <div className="eleving-hero__text">
              <div className="case__hero-label">DESIGN OPERATIONS · DESIGN SYSTEMS · AI DELIVERY</div>
              <h1 className="eleving-hero__title">Building a scalable design workflow across three brands</h1>
              <p className="eleving-hero__subtitle">
                I led the design-side work to consolidate three legacy systems into one DS2, align Figma with Storybook,
                and introduce an AI-assisted workflow from stakeholder request to working MVP.
              </p>
              <p className="case__body ai-case__role-line">
                Scope: Design System operations, stakeholder intake, design QA, AI workflow design, and delivery with
                development.
              </p>
              <div className="eleving-hero__divider" aria-hidden />
            </div>
          </div>

          <div className="mogo-hero__under">
            <CaseCardTitleGroup className="mogo-hero__metrics">
              <div className="case__stat">
                <div className="case__stat-num">1</div>
                <div className="case__stat-label" data-case-card-title>
                  Multi-brand foundation
                </div>
                <div className="case__stat-desc">3 legacy systems → 1 DS2 supporting three brand modes.</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">2</div>
                <div className="case__stat-label" data-case-card-title>
                  Repeatable AI workflow
                </div>
                <div className="case__stat-desc">
                  4 connected stages from structured request to reviewed DS2 draft.
                </div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">3</div>
                <div className="case__stat-label" data-case-card-title>
                  Working product earlier
                </div>
                <div className="case__stat-desc">
                  Around 50% of the MyPortal front-end MVP built before full development.
                </div>
              </div>
            </CaseCardTitleGroup>
          </div>

          <div className="hero-split">
            <FleetSectionVideo
              src={`${base}ai-case/myportal20.mp4`}
              caption="Working MyPortal MVP with real navigation, reusable components and customer states."
            />
          </div>
        </div>
      </section>

      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">01 — DESIGN SYSTEM</div>
          <h2 className="case__h2">From three legacy systems to one multi-brand DS2</h2>
          <p className="case__body">
            Three brands had separate tokens, components and rules. I consolidated the design-side foundation into one
            DS2, where Figma variable modes apply each brand style to the same component structure.
          </p>
          <p className="case__body">
            One library now supports cross-brand work, shared governance and one system for designers to learn.
          </p>
          <ul className="case__list">
            <li>Before: separate tokens, components and rules for each brand.</li>
            <li>After: one shared DS2 supporting three brand modes.</li>
            <li>Governance: common component structure, states and usage rules.</li>
            <li>Adoption: one library reused across cross-brand work.</li>
          </ul>
          <p className="case__body case__body--strong">
            Before → After: three separate foundations became one multi-brand DS2
          </p>
          <div className="fleet-section__slider-wrap">
            <BeforeAfterSlider
              beforeSrc={`${base}ai-case/ds1.png`}
              afterSrc={`${base}ai-case/ds2.png`}
              beforeCaption="Separate brand libraries, duplicated component logic, inconsistent typography, and weak token structure."
              afterCaption="Shared foundations, reusable themes, typography modes, clearer token logic, and Storybook-aligned components."
            />
          </div>
        </div>
      </section>

      <section className="case__section case__key-decisions">
        <div className="case__wrap">
          <div className="case__key-decisions__wrap">
          <div className="case__key-decisions__left">
            <div className="case__section-label">02 — DESIGN ↔ DEVELOPMENT</div>
            <h2 className="case__h2">A shared component workflow from Figma to Storybook</h2>
            <p className="case__body">
              DS2 only creates value when coded components follow the same logic. Working with development, I established
              a shared contribution and review flow between Figma and Storybook.
            </p>
            <p className="case__body">
              Design defines the structure and behavior. Development validates the implementation and merges the code.
            </p>
          </div>
          <div className="case__key-decisions__right">
            <div className="case__key-decisions__list">
              <div className="case__decision">
                <span className="case__decision-num">01</span>
                <div>
                  <div className="case__decision-title">Define the component</div>
                  <p className="case__decision-body">Structure, modes and states are prepared in Figma.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">02</span>
                <div>
                  <div className="case__decision-title">Document the behavior</div>
                  <p className="case__decision-body">Usage rules, edge cases and expected behavior are recorded.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">03</span>
                <div>
                  <div className="case__decision-title">Review with development</div>
                  <p className="case__decision-body">Technical feasibility and implementation logic are validated.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">04</span>
                <div>
                  <div className="case__decision-title">Release in Storybook</div>
                  <p className="case__decision-body">The approved coded component becomes available for product work.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="pb-analytics03__compare">
            <div className="ai-case__compare-col">
              <p className="pb-analytics03__eyebrow">Figma</p>
              <ZoomableImage
                src={`${base}ai-case/cardfigma.png`}
                alt="Figma component — structure, modes and states"
                className="mogo-section__img"
              />
            </div>
            <div className="ai-case__compare-col">
              <p className="pb-analytics03__eyebrow">Storybook</p>
              <ZoomableImage
                src={`${base}ai-case/sb2.png`}
                alt="Storybook component — same logic in code"
                className="mogo-section__img"
              />
            </div>
          </div>
          <p className="fleet-section__video-caption">
            The same component structure carried from design into coded implementation.
          </p>
        </div>
      </section>

      <section className="case__section fleet-process fleet-research">
        <div className="case__wrap">
          <div className="case__section-label">03 — AI-ASSISTED WORKFLOW</div>
          <h2 className="case__h2">From stakeholder request to reviewed DS2 draft</h2>
          <p className="case__body">
            I created and shared a Claude-based workflow that standardizes how stakeholders bring work into design. It
            keeps the problem, business goal, states and constraints connected through planning, DS2 creation and QA.
          </p>
          <p className="case__body">
            The workflow also helps stakeholders understand what a useful product and design request should contain.
          </p>
          <CaseCardTitleGroup className="fleet-process__grid mogo-evidence__grid ai-case__workflow-grid">
            {WORKFLOW_CARDS.map((card) => (
              <ResearchSignalCard key={card.eyebrow} {...card} />
            ))}
          </CaseCardTitleGroup>
          <p className="case__body ai-case__tools-line">Tools: Claude, Figma MCP, Cursor and Claude Code.</p>
        </div>
      </section>

      <section className="case__section mogo-impact">
        <div className="case__wrap">
          <div className="case__section-label">04 — MYPORTAL 2.0</div>
          <h2 className="case__h2">A working MVP became a shared Scenario Hub</h2>
          <p className="case__body mogo-impact__intro">
            A developer helped establish the Nuxt/Vue project and AI-assisted setup. Using DS2 and Claude Code, I
            independently built around 50% of the working front-end MVP.
          </p>
          <p className="case__body">
            I then designed the Scenario Hub so product, design and development could review customer states, journeys
            and market-specific features before production implementation.
          </p>
          <ul className="mogo-impact__list">
            <li>Around 50% of the working front-end MVP was created before full development.</li>
            <li>Customer states and complete journeys became testable in one shared hub.</li>
            <li>Market variants could be reviewed across LV, LT, EE, RO, BG, AM and GE.</li>
            <li>Reusable components and flows remained accessible through the Pattern Catalog.</li>
            <li>Missing states and market gaps could be identified earlier.</li>
          </ul>
          <div className="mogo-section__image">
            <ZoomableImage
              src={`${base}ai-case/hub.png`}
              alt="Scenario Hub — customer states, journeys and market coverage"
              caption="Scenario Hub with customer states, journeys, market coverage and QA entry points."
              className="mogo-section__img"
            />
          </div>
        </div>
      </section>

      <section className="case__section mogo-takeaways">
        <div className="case__wrap">
          <div className="case__section-label">EXECUTIVE TAKEAWAYS</div>
          <h2 className="case__h2">Executive takeaways</h2>
          <p className="case__body">
            The work shows how shared systems, clear governance and practical AI can improve product delivery without
            replacing human design or development judgment.
          </p>
          <CaseCardTitleGroup className="mogo-takeaways__numbered">
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">01</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                Build the system first
              </p>
              <p className="mogo-takeaways__num-text">Shared foundations make cross-brand delivery easier to scale.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">02</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                Connect design and code
              </p>
              <p className="mogo-takeaways__num-text">
                Clear contribution and review rules reduce drift between Figma and implementation.
              </p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">03</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                Give AI structure
              </p>
              <p className="mogo-takeaways__num-text">
                A defined brief, DS2 components and QA make AI output more consistent.
              </p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">04</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                Test the product earlier
              </p>
              <p className="mogo-takeaways__num-text">
                A working MVP and Scenario Hub expose missing states before production integration.
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
          <a href="#design-systems" className="eleving-nav__link">
            Next: Design Systems at scale <ArrowRight size={16} strokeWidth={2} aria-hidden />
          </a>
        </div>
      </nav>
    </article>
  );
}
