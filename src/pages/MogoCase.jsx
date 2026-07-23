import './MogoCase.css';
import ZoomableImage from '../components/ZoomableImage';
import CaseCardTitleGroup from '../components/CaseCardTitleGroup';
import ResearchSignalCard from '../components/ResearchSignalCard';
import { ArrowLeft, ArrowRight, ClipboardList, Compass, ShieldCheck } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const BEFORE_BRIEF_ROWS = [
  { label: 'INPUT', text: '“Add or change this screen.”' },
  {
    label: 'MISSING',
    text: 'Problem, user context, market rules and success criteria.',
  },
  { label: 'EFFECT', text: 'Repeated clarification before design could start.' },
];

const AFTER_BRIEF_ROWS = [
  { label: 'INPUT', text: 'Problem, user, market, business goal and constraints.' },
  {
    label: 'INCLUDES',
    text: 'States, rules, dependencies and expected result.',
  },
  {
    label: 'EFFECT',
    text: 'Decision-ready discussion with local management, product and engineering.',
  },
];

export default function MogoCase() {
  return (
    <article className="eleving mogo-case">
      <section className="case__section eleving-hero">
        <div className="case__wrap">
          <div className="eleving-hero__grid">
            <div className="eleving-hero__text">
              <div className="case__hero-label">ELEVING GROUP · PRODUCT DESIGN · MULTI-MARKET FINTECH</div>
              <h1 className="eleving-hero__title">Designing fintech products across seven markets</h1>
              <p className="eleving-hero__subtitle">
                How I align local market needs, product decisions and delivery — with a loan application redesign as one measured example.
              </p>
              <p className="case__body mogo-case__role-line">
                My role: Product Designer working with central product, engineering and seven local market teams.
              </p>
              <div className="eleving-hero__divider" aria-hidden />
            </div>
          </div>

          <div className="mogo-hero__under">
            <CaseCardTitleGroup className="mogo-hero__metrics">
              <div className="case__stat">
                <div className="case__stat-num">1</div>
                <div className="case__stat-label" data-case-card-title>
                  Multi-market product scope
                </div>
                <div className="case__stat-desc">
                  7 markets — one product direction across seven local teams.
                </div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">2</div>
                <div className="case__stat-label" data-case-card-title>
                  Simplified application flow
                </div>
                <div className="case__stat-desc">
                  9 → 6 steps — repeated decisions removed while required inputs stayed.
                </div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">3</div>
                <div className="case__stat-label" data-case-card-title>
                  Measured completion improvement
                </div>
                <div className="case__stat-desc">
                  16.7% → 38.8% — more users completed the released loan journey.
                </div>
              </div>
            </CaseCardTitleGroup>
          </div>

          <div className="hero-split">
            <ZoomableImage
              src={`${base}eleving/mogo2.png`}
              alt="Six-step loan application flow overview"
              caption="Each step has one clear purpose and next action."
              className="mogo-hero__img"
            />
          </div>
        </div>
      </section>

      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">01 — MULTI-MARKET CONTEXT</div>
          <h2 className="case__h2">One product. Seven market realities.</h2>
          <p className="case__body">
            The product environment covers LT, LV, EE, GE, AM, RO and BG. Each market has its own management team, customer expectations, content, legal
            requirements and operational needs.
          </p>
          <p className="case__body">
            My role is to keep a shared product direction while adapting the experience where local needs require it.
          </p>
          <p className="case__body case__body--strong">What it requires</p>
          <CaseCardTitleGroup className="mogo-system__grid">
            <div className="mogo-system__item">
              <Compass size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>
                Shared product direction
              </h3>
              <p className="mogo-system__desc">One central product foundation across all markets.</p>
            </div>
            <div className="mogo-system__item">
              <ClipboardList size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>
                Local market adaptation
              </h3>
              <p className="mogo-system__desc">Rules, content and processes adjusted where needed.</p>
            </div>
            <div className="mogo-system__item">
              <ShieldCheck size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>
                Cross-team alignment
              </h3>
              <p className="mogo-system__desc">Local management, product and engineering shape decisions together.</p>
            </div>
          </CaseCardTitleGroup>
          <div className="mogo-section__image">
            <ZoomableImage
              src={`${base}eleving/mogoscreen.png`}
              alt="Mogo product — shared customer dashboard and local loan calculator across markets"
              caption="New MyPortal 2.0 and Mogo web design — shared product patterns with local market content and journeys."
              className="mogo-section__img"
            />
          </div>
        </div>
      </section>

      <section className="case__section fleet-process">
        <div className="case__wrap">
          <div className="case__section-label">02 — STAKEHOLDER ALIGNMENT</div>
          <h2 className="case__h2">Better requests lead to better decisions</h2>
          <p className="case__body">
            Requests often arrive as a proposed screen change with little context. I created a shared Claude template that captures the problem, user,
            market, business goal, rules, states and expected result.
          </p>
          <p className="case__body">
            The brief gives local management, product and engineering a clearer basis for decisions before design starts.
          </p>
          <CaseCardTitleGroup className="fleet-process__grid mogo-evidence__grid mogo-case__signal-pair">
            <ResearchSignalCard
              eyebrow="BEFORE"
              title="Solution-led request"
              rows={BEFORE_BRIEF_ROWS}
            />
            <ResearchSignalCard
              eyebrow="AFTER"
              title="Structured design brief"
              rows={AFTER_BRIEF_ROWS}
            />
          </CaseCardTitleGroup>
        </div>
      </section>

      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">03 — MEASURED PRODUCT EXAMPLE</div>
          <h2 className="case__h2">Reducing friction without removing requirements</h2>
          <p className="case__body">
            Analytics and session reviews showed that users entered the application but dropped during the flow. The redesign focused on progression,
            decision clarity and required information — not visual decoration.
          </p>
          <ul className="case__list">
            <li>Evidence: GA4, Clarity sessions and user feedback.</li>
            <li>Flow: nine steps reduced to six.</li>
            <li>Decision: repeated choices removed and one clear action kept per step.</li>
            <li>Constraint: required information and compliance checks remained.</li>
            <li>Result: completion increased from 16.7% to 38.8%.</li>
          </ul>
          <p className="case__body case__body--strong">Before → After: fewer transitions and clearer progression</p>
          <div className="mogo-section__image">
            <ZoomableImage
              src={`${base}eleving/mogo1.png`}
              alt="Loan application screens before and after simplification"
              caption="Repeated decisions were removed while required information stayed in the flow."
              className="mogo-section__img"
            />
          </div>
        </div>
      </section>

      <section className="case__section case__key-decisions">
        <div className="case__wrap case__key-decisions__wrap">
          <div className="case__key-decisions__left">
            <div className="case__section-label">04 — DELIVERY SYSTEM</div>
            <h2 className="case__h2">From stakeholder request to measured release</h2>
            <p className="case__body">
              Once the direction is agreed, I define states, edge cases, acceptance criteria and QA checks. Product, local business and engineering
              review key decisions before release.
            </p>
            <p className="case__body">After launch, analytics and session recordings show where the flow still needs work.</p>
          </div>
          <div className="case__key-decisions__right">
            <div className="case__key-decisions__list">
              <div className="case__decision">
                <span className="case__decision-num">01</span>
                <div>
                  <div className="case__decision-title">Clear request</div>
                  <p className="case__decision-body">
                    Problem, market and expected result are defined before design starts.
                  </p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">02</span>
                <div>
                  <div className="case__decision-title">Align rules</div>
                  <p className="case__decision-body">
                    Business, legal and technical needs are reviewed with the relevant teams.
                  </p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">03</span>
                <div>
                  <div className="case__decision-title">Design & review</div>
                  <p className="case__decision-body">
                    Flow, states, edge cases and acceptance criteria are agreed before release.
                  </p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">04</span>
                <div>
                  <div className="case__decision-title">Release & measure</div>
                  <p className="case__decision-body">
                    QA, analytics and session reviews support the next improvement cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case__section mogo-takeaways">
        <div className="case__wrap">
          <div className="case__section-label">EXECUTIVE TAKEAWAYS</div>
          <h2 className="case__h2">Executive takeaways</h2>
          <p className="case__body">
            The project shows how multi-market product work can stay locally relevant, evidence-led and measurable without losing a shared direction.
          </p>
          <CaseCardTitleGroup className="mogo-takeaways__numbered">
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">01</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                Adapt one product
              </p>
              <p className="mogo-takeaways__num-text">
                A shared direction can support local needs without losing consistency.
              </p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">02</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                Improve the input
              </p>
              <p className="mogo-takeaways__num-text">
                Better stakeholder requests bring the problem, constraints and expected result into design.
              </p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">03</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                Connect evidence to decisions
              </p>
              <p className="mogo-takeaways__num-text">Analytics, sessions and feedback guide what should change.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">04</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>
                Keep delivery measurable
              </p>
              <p className="mogo-takeaways__num-text">
                Clear states, QA and monitoring support continuous improvement after release.
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
          <a href="#ai-workflow" className="eleving-nav__link">
            Next: DS2, AI workflow & MyPortal MVP <ArrowRight size={16} strokeWidth={2} aria-hidden />
          </a>
        </div>
      </nav>
    </article>
  );
}
