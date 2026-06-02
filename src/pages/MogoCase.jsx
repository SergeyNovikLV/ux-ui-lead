import './MogoCase.css';
import ZoomableImage from '../components/ZoomableImage';
import CaseCardTitleGroup from '../components/CaseCardTitleGroup';
import { ArrowLeft, ArrowRight, Compass, ClipboardList, ShieldCheck, ScanEye, FlaskConical, Wrench, Layers } from 'lucide-react';
import RoleAndScope from '../components/RoleAndScope';
import ResearchSignalCard from '../components/ResearchSignalCard';
import { mogoRoleScope } from '../data/roleScopeData';

export default function MogoCase() {
  return (
    <article className="eleving mogo-case">
      {/* HERO — Executive summary */}
      <section className="case__section eleving-hero">
        <div className="case__wrap">
          <div className="eleving-hero__grid">
            <div className="eleving-hero__text">
              <div className="case__hero-label">ELEVING GROUP · PRODUCT DESIGN · FINTECH FLOW</div>
              <h1 className="eleving-hero__title">Reducing friction in a conversion-critical loan application</h1>
              <p className="eleving-hero__subtitle">
                A fintech application flow redesign focused on reducing mid-flow friction and improving completion without lowering entry intent.
              </p>
              <div className="eleving-hero__divider" aria-hidden />
            </div>
          </div>

          {/* Under-hero: Tiles → Credibility → Role list */}
          <div className="mogo-hero__under">
            <div className="mogo-hero__metrics">
              <div className="case__stat">
                <div className="case__stat-num">9 → 6</div>
                <div className="case__stat-label">Steps reduced</div>
                <div className="case__stat-desc">Removed unnecessary transitions and repeated decisions.</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">16.7% → 38.8%</div>
                <div className="case__stat-label">Completion rate</div>
                <div className="case__stat-desc">More starters reached the end of the application.</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">43.7% → 42.1%</div>
                <div className="case__stat-label">Entry rate held stable</div>
                <div className="case__stat-desc">
                  The improvement came from mid-flow friction removal, not from changing who entered.
                </div>
              </div>
            </div>

          </div>

          <div className="hero-split">
            <ZoomableImage src={import.meta.env.BASE_URL + "eleving/mogo3.png"} alt="New flow preview" caption="Before → After: Clearer hero + simplified process explanation." className="mogo-hero__img" />
          </div>
        </div>
      </section>

      <RoleAndScope {...mogoRoleScope} />

      {/* 02 — AI-ASSISTED WORKFLOW */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">02 — AI-ASSISTED WORKFLOW</div>
          <h2 className="case__h2">AI-supported product workflow</h2>
          <p className="case__body">
            I used AI-supported workflows to reduce ambiguity, structure product decisions faster, and speed up early validation before final
            implementation.
          </p>
          <p className="case__body">
            Internal AI workflow support (internally referred to as &ldquo;ProductBuddy&rdquo;) was used to:
          </p>
          <p className="case__body">
            — turn unclear product requests into structured design briefs with assumptions, UX checkpoints, and delivery risks
            <br />
            — interpret GA4 and Clarity signals to identify friction patterns and behavioral anomalies
            <br />
            — support rapid prototyping and early flow evaluation using Cursor, Claude, and Figma Make
            <br />
            — assist with UX QA preparation, edge-case reviews, and hierarchy checks before handoff
            <br />— accelerate iteration cycles during product and stakeholder discussions
          </p>
          <p className="case__body">
            AI was used as a delivery acceleration layer — not as a replacement for UX judgment, business constraints, or implementation review.
          </p>
        </div>
      </section>

      {/* 03 — PROBLEM */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">03 — PROBLEM</div>
          <h2 className="case__h2">Where the flow leaked</h2>
          <p className="case__body">
            The problem was not traffic. Users entered the application, but the flow created too many moments where they had to stop, re-read, or
            decide what to do next.
          </p>
          <ul className="case__list">
            <li>Some steps repeated decisions that users had already made.</li>
            <li>Several screens carried more than one primary action.</li>
            <li>Progression was not always clear enough to keep momentum.</li>
            <li>Supporting content competed with the next step instead of helping it.</li>
            <li>Required inputs stayed necessary, but the way they were grouped created avoidable friction.</li>
          </ul>
          <p className="case__body">
            <strong>Constraint:</strong> improve completion by simplifying progression, without reducing required information or weakening entry
            intent.
          </p>
          <p className="case__body">
            Several friction points could not be removed entirely because parts of the flow depended on backend validation logic, compliance
            requirements, and operational risk checks.
          </p>
          <div className="mogo-section__image">
            <ZoomableImage src={import.meta.env.BASE_URL + "eleving/mogo1.png"} alt="Before/After screens showing messy hierarchy → simplified flow and clearer primary CTA" caption={'Before → After: Cleaner steps, clearer \u201cNext\u201d.'} className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 04 — EVIDENCE */}
      <section className="case__section fleet-process fleet-research">
        <div className="case__wrap">
          <CaseCardTitleGroup className="fleet-process__grid mogo-evidence__grid">
            <div className="mogo-evidence__intro">
              <div className="case__section-label">04 — EVIDENCE</div>
              <h2 className="case__h2">Signals that drove decisions</h2>
              <p className="case__body fleet-process__body-lead">
                I used a small evidence stack to separate real flow friction from opinion and visual preference.
              </p>
            </div>
            <ResearchSignalCard
              eyebrow="USER SESSIONS"
              title="User sessions"
              method="Focused review of how new and returning users understood the application steps."
              signal="Users slowed down when steps felt repetitive or when the next action was not obvious."
              decision="Merge repeated decisions and make progress + next action explicit."
            />
            <ResearchSignalCard
              eyebrow="FEEDBACK ANALYSIS"
              title="Feedback analysis"
              method="AI-assisted clustering of recurring feedback themes, followed by manual review."
              signal='Confusion appeared around "what happens next" and why certain information was needed.'
              decision="Add clearer explanation moments and reduce cognitive load per step."
            />
            <ResearchSignalCard
              eyebrow="BEHAVIORAL ANALYTICS"
              title="Behavioral analytics"
              method="GA4 funnel snapshots and Clarity replays around entry and high-friction steps."
              signal="Users missed primary actions when several UI blocks competed for attention."
              decision="Enforce one primary CTA per step and simplify hierarchy around it."
            />
          </CaseCardTitleGroup>
          <div className="mogo-section__image">
            <ZoomableImage src={import.meta.env.BASE_URL + "eleving/mogo6.png"} alt="Pain/importance map" caption="Pain/importance map: Prioritized issues by user pain vs business importance to focus the redesign." className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 05 — REDESIGN */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">05 — REDESIGN</div>
          <h2 className="case__h2">Redesign summary</h2>
          <p className="case__body">
            The redesign focused less on visual refresh and more on progression control, decision clarity, and reducing unnecessary transitions inside
            the application flow.
          </p>
          <ul className="case__list">
            <li>Removed repeated decisions: duplicated moments were collapsed into clearer steps.</li>
            <li>One primary job per step: each screen focused on one main user action.</li>
            <li>Clearer progression: users could see where they were and what to do next.</li>
            <li>Lower visual competition: supporting content no longer competed with the main action.</li>
          </ul>
          <div className="mogo-section__image">
            <ZoomableImage
              src={import.meta.env.BASE_URL + "eleving/mogo2.png"}
              alt="6-step flow overview with step intent labels"
              caption="6-step flow: required information preserved, but grouped into a clearer progression model."
              className="mogo-section__img"
            />
          </div>
        </div>
      </section>

      {/* 06 — KEY DECISIONS */}
      <section className="case__section case__key-decisions">
        <div className="case__wrap case__key-decisions__wrap">
          <div className="case__key-decisions__left">
            <div className="case__section-label">06 — KEY DECISIONS</div>
            <h2 className="case__h2">Rules and trade-offs behind the redesign</h2>
            <p className="case__body">
              These were the product decisions behind the redesign — what to simplify, what to keep, and how to protect conversion without weakening
              the application requirements.
            </p>
          </div>
          <div className="case__key-decisions__right">
            <div className="case__key-decisions__list">
              <div className="case__decision">
                <span className="case__decision-num">01</span>
                <div>
                  <div className="case__decision-title">Keep requirements, remove transitions</div>
                  <p className="case__decision-body">
                    I did not remove required inputs. I removed unnecessary step boundaries and repeated decision moments.
                  </p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">02</span>
                <div>
                  <div className="case__decision-title">Make the primary action unmissable</div>
                  <p className="case__decision-body">
                    Each step needed one dominant action. Secondary content could support the decision, but not compete with it.
                  </p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">03</span>
                <div>
                  <div className="case__decision-title">Use progressive disclosure by intent</div>
                  <p className="case__decision-body">
                    Only show what helps the user decide now. Defer supporting details until they are useful.
                  </p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">04</span>
                <div>
                  <div className="case__decision-title">Define &ldquo;done&rdquo; before release</div>
                  <p className="case__decision-body">
                    Each step needed states, validation rules, edge cases, and acceptance criteria before handoff.
                  </p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">05</span>
                <div>
                  <div className="case__decision-title">Constraint-aware simplification</div>
                  <p className="case__decision-body">
                    Some simplifications were intentionally rejected because they increased implementation complexity, compliance risk, or operational
                    ambiguity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — SHIPPING SYSTEM */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">07 — SHIPPING SYSTEM</div>
          <h2 className="case__h2">How it stayed consistent in production</h2>
          <p className="case__body">
            The redesign had to ship reliably, stay measurable, and avoid drifting once implementation started.
          </p>
          <CaseCardTitleGroup className="mogo-system__grid mogo-system__grid--two-col">
            <div className="mogo-system__item">
              <Compass size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>Step ownership rules</h3>
              <p className="mogo-system__desc">Each step had a defined purpose, required inputs, and progression logic.</p>
            </div>
            <div className="mogo-system__item">
              <ClipboardList size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>Definition of done</h3>
              <p className="mogo-system__desc">
                States, validation rules, hierarchy, accessibility, and edge cases were checked before release.
              </p>
            </div>
            <div className="mogo-system__item">
              <ShieldCheck size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>QA sign-off gate</h3>
              <p className="mogo-system__desc">
                Design verification and post-release spot checks helped keep implementation aligned with intent.
              </p>
            </div>
            <div className="mogo-system__item">
              <Layers size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title" data-case-card-title>AI draft normalization</h3>
              <p className="mogo-system__desc">
                AI-assisted drafts were reviewed and normalized for hierarchy, accessibility, component consistency, and implementation realism.
              </p>
            </div>
          </CaseCardTitleGroup>
          <p className="case__body">
            Not every UX refinement was included in the first release scope. Several improvements were intentionally deferred to avoid implementation
            instability close to release.
          </p>
          <div className="mogo-section__image">
            <ZoomableImage
              src={import.meta.env.BASE_URL + "eleving/mogo7.png"}
              alt="Alignment model — Business–Design–Engineering workflow"
              caption="Alignment model: business, design, and engineering checkpoints used to keep the flow shippable and measurable."
              className="mogo-section__img"
            />
          </div>
        </div>
      </section>

      {/* 08 — IMPACT */}
      <section className="case__section mogo-impact">
        <div className="case__wrap">
          <div className="case__section-label">08 — IMPACT</div>
          <h2 className="case__h2">Results</h2>
          <p className="case__body mogo-impact__intro">
            Completion improved after reducing unnecessary transitions, clarifying progression, and removing competing actions per step.
          </p>
          <ul className="mogo-impact__list">
            <li>9-step flow reduced to 6 steps while keeping required information intact.</li>
            <li>
              Completion improved during the measured post-release period, with the strongest lift coming from mid-flow continuation.
            </li>
            <li>Entry rate stayed broadly stable, which suggests the uplift came from mid-flow improvements.</li>
            <li>The monitoring setup made future regressions easier to spot.</li>
          </ul>
          <div className="mogo-section__image">
            <ZoomableImage
              src={import.meta.env.BASE_URL + "eleving/mogo4.png"}
              alt="Monitoring pack — GA4 + Clarity dashboard"
              caption="Monitoring pack: GA4 and Clarity view used to track entry, continuation, completion, and friction signals."
              className="mogo-section__img"
            />
          </div>
        </div>
      </section>

      {/* 09 — NEXT STEPS */}
      <section className="case__section mogo-next">
        <div className="case__wrap">
          <div className="case__section-label">09 — NEXT STEPS</div>
          <h2 className="case__h2">How I'd extend the win</h2>
          <p className="case__body mogo-next__lead">
            The next step is not another large redesign. It is a lightweight optimization loop around the highest-friction moments.
          </p>
          <CaseCardTitleGroup className="mogo-next__grid">
            <div className="mogo-next__card">
              <ScanEye size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title" data-case-card-title>Step-level watchlist</h3>
              <p className="mogo-next__text">
                Track monthly drop-off by step to catch regressions after product or content changes.
              </p>
            </div>
            <div className="mogo-next__card">
              <FlaskConical size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title" data-case-card-title>Microcopy testing</h3>
              <p className="mogo-next__text">
                Test helper text and decision-support copy on the highest-friction steps.
              </p>
            </div>
            <div className="mogo-next__card">
              <Wrench size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title" data-case-card-title>Edge-case hardening</h3>
              <p className="mogo-next__text">
                Use support tickets, production issues, and Clarity replays to improve acceptance criteria.
              </p>
            </div>
          </CaseCardTitleGroup>
        </div>
      </section>

      {/* 10 — TAKEAWAYS */}
      <section className="case__section mogo-takeaways">
        <div className="case__wrap">
          <div className="case__section-label">10 — TAKEAWAYS</div>
          <h2 className="case__h2">Executive takeaways</h2>
          <p className="case__body">
            The redesign improved completion because the problem was treated as a flow and delivery issue — not as a visual refresh.
          </p>
          <CaseCardTitleGroup className="mogo-takeaways__numbered">
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">01</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>Fix the flow, not the traffic</p>
              <p className="mogo-takeaways__num-text">The main opportunity was inside the application journey, not at the entry point.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">02</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>Remove transitions, not requirements</p>
              <p className="mogo-takeaways__num-text">Completion improved by simplifying progression while keeping required information intact.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">03</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>Reduce operational hesitation</p>
              <p className="mogo-takeaways__num-text">
                Clear progression, lower visual competition, and fewer repeated decisions reduced unnecessary hesitation across the flow.
              </p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">04</span>
              <p className="mogo-takeaways__num-title" data-case-card-title>Keep delivery measurable</p>
              <p className="mogo-takeaways__num-text">
                A redesign is only useful if the team can ship it, check it, and continue improving it after release.
              </p>
            </div>
          </CaseCardTitleGroup>
        </div>
      </section>

      {/* Navigation */}
      <nav className="eleving-nav" aria-label="Case study navigation">
        <div className="eleving-nav__wrap">
          <a href="#work" className="eleving-nav__link"><ArrowLeft size={16} strokeWidth={2} aria-hidden /> Back to Work</a>
          <a href="#ai-workflow" className="eleving-nav__link">Next: AI-Assisted Product Delivery <ArrowRight size={16} strokeWidth={2} aria-hidden /></a>
        </div>
      </nav>
    </article>
  );
}
