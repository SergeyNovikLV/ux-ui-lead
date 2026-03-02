import './BankingNew.css';
import ZoomableImage from '../components/ZoomableImage';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Compass, ClipboardList, ShieldCheck, ScanEye, Wrench, FlaskConical } from 'lucide-react';

export default function BankingNew() {
  return (
    <article className="eleving mogo-case">
      {/* HERO — Executive summary */}
      <section className="case__section eleving-hero">
        <div className="case__wrap">
          <div className="eleving-hero__grid">
            <div className="eleving-hero__text">
              <div className="case__hero-label">DEUTSCHE BANK · PRODUCT DESIGN · INTERNAL PLATFORM</div>
              <h1 className="eleving-hero__title">Boosting banking platform efficiency through structural UX redesign</h1>
              <p className="eleving-hero__subtitle">Redesigned navigation, restructured compliance flows, and rebuilt accessibility across web and tablet — reducing task time, clicks, and support load.</p>
              <div className="eleving-hero__divider" aria-hidden />
            </div>
          </div>

          {/* Under-hero: Results metrics strip */}
          <div className="mogo-hero__under">
            <div className="mogo-hero__metrics">
              <div className="case__stat">
                <div className="case__stat-num">16%</div>
                <div className="case__stat-label">Faster task completion</div>
                <div className="case__stat-desc">Reduced navigation depth and fewer hops per task.</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">33%</div>
                <div className="case__stat-label">Fewer clicks per task</div>
                <div className="case__stat-desc">Unified navigation and persistent primary actions removed redundant steps.</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">21%</div>
                <div className="case__stat-label">Higher user satisfaction</div>
                <div className="case__stat-desc">Post-release internal survey; consistent patterns reduced cognitive load.</div>
              </div>
            </div>
          </div>

          <div className="hero-split">
            <ZoomableImage src="/db/bank.png" alt="Banking platform overview" className="mogo-hero__img" />
          </div>

          {/* Quick facts + Role & scope */}
          <div className="fleet-role__ledger mogo-hero__role-list">
            <div className="fleet-role__col">
              <h3 className="fleet-role__col-title">Owned</h3>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Information architecture rebuild for core modules (navigation depth + entry points)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Compliance flow mapping (steps, branches, required evidence) + UX specs</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Accessibility remediation plan (WCAG 2.1 AA) across light/dark + focus states</span></div>
            </div>
            <div className="fleet-role__col">
              <h3 className="fleet-role__col-title">Influenced</h3>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Prioritized the top workflows with PM/BA based on frequency + support load</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Aligned compliance stakeholders on "minimum acceptable clarity" per step</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Component/token updates to prevent cross-surface inconsistencies during rollout</span></div>
            </div>
            <div className="fleet-role__col">
              <h3 className="fleet-role__col-title">Decided</h3>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Task-path navigation model (structure follows workflows, not feature taxonomy)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Compliance as guided steps (reduce backtracking, make "next" explicit)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Accessibility as release gate (parity in light/dark + keyboard-first behavior)</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — PROBLEM */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">01 — PROBLEM</div>
          <h2 className="case__h2">Where the platform slowed people down</h2>
          <p className="case__body">The issue wasn't visual. The platform had grown without a unified navigation model or structured compliance flows — creating structural inefficiency that slowed daily tasks and increased errors.</p>
          <div className="mogo-hero__metrics">
            <div className="case__stat">
              <div className="case__stat-num">5–7 levels</div>
              <div className="case__stat-label">Navigation depth (baseline)</div>
              <div className="case__stat-desc">Inefficient navigation depth slowed routine tasks.</div>
            </div>
            <div className="case__stat">
              <div className="case__stat-num">9%</div>
              <div className="case__stat-label">Low feature discoverability</div>
              <div className="case__stat-desc">Key tools were buried in the structure.</div>
            </div>
            <div className="case__stat">
              <div className="case__stat-num">13%</div>
              <div className="case__stat-label">Increase in support inquiries</div>
              <div className="case__stat-desc">Confusion in compliance workflows drove helpdesk load.</div>
            </div>
          </div>
          <p className="case__body case__body--strong">What we observed</p>
          <ul className="case__list">
            <li>Excessive depth for routine tasks — users navigated 5–7 levels for actions that should take 2.</li>
            <li>Users relied on memory and workarounds instead of discoverable structure.</li>
            <li>Compliance steps caused backtracking and uncertainty — no clear "what's next" signal.</li>
            <li>Inconsistent patterns across sections increased cognitive load and errors.</li>
            <li>Accessibility gaps in light/dark mode and keyboard states slowed experienced users.</li>
          </ul>
          <p className="case__body"><strong>Constraint:</strong> Improve efficiency and reduce error rate without increasing compliance risk or disrupting existing workflows.</p>
         
          <div className="mogo-section__image">
            <ZoomableImage src="/db/workshop.png" alt="Platform workshop — where the platform slowed people down" className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 02 — EVIDENCE */}
      <section className="case__section fleet-process fleet-research">
        <div className="case__wrap">
          <div className="fleet-process__grid mogo-evidence__grid">
            <div className="mogo-evidence__intro">
              <div className="case__section-label">02 — EVIDENCE</div>
              <h2 className="case__h2">Signals that drove decisions</h2>
              <p className="case__body fleet-process__body-lead">
                I combined user input, workflow analysis, and an accessibility audit to locate friction and translate it into structural decisions.
              </p>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-method">USER INPUT</div>
              <div className="fleet-process__card-title">Interviews + feedback sessions</div>
              <div className="fleet-process__card-rows">
                <div className="fleet-process__card-row fleet-process__card-row--first">
                  <span className="fleet-process__card-badge">METHOD</span>
                  <span className="fleet-process__card-value">Interviews + internal feedback sessions with daily users (employees + operational roles).</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--middle">
                  <span className="fleet-process__card-badge">SIGNAL</span>
                  <span className="fleet-process__card-value">Navigation inconsistency forced workarounds; users struggled to predict "where to go next".</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--last">
                  <span className="fleet-process__card-badge">DECISION</span>
                  <span className="fleet-process__card-value">Define one navigation model and enforce consistent patterns across all surfaces.</span>
                </div>
              </div>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-method">WORKFLOW ANALYSIS</div>
              <div className="fleet-process__card-title">Workflow mapping + click-path review</div>
              <div className="fleet-process__card-rows">
                <div className="fleet-process__card-row fleet-process__card-row--first">
                  <span className="fleet-process__card-badge">METHOD</span>
                  <span className="fleet-process__card-value">Workflow mapping + click-path review for core tasks across key modules.</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--middle">
                  <span className="fleet-process__card-badge">SIGNAL</span>
                  <span className="fleet-process__card-value">Routine tasks required unnecessary hops and repeated cross-referencing between sections.</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--last">
                  <span className="fleet-process__card-badge">DECISION</span>
                  <span className="fleet-process__card-value">Reduce depth, keep primary actions persistent, restructure screens around task paths.</span>
                </div>
              </div>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-method">ACCESSIBILITY + QUALITY AUDIT</div>
              <div className="fleet-process__card-title">WCAG 2.1 AA review</div>
              <div className="fleet-process__card-rows">
                <div className="fleet-process__card-row fleet-process__card-row--first">
                  <span className="fleet-process__card-badge">METHOD</span>
                  <span className="fleet-process__card-value">WCAG 2.1 AA review across light/dark mode, focus states, and keyboard navigation.</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--middle">
                  <span className="fleet-process__card-badge">SIGNAL</span>
                  <span className="fleet-process__card-value">Contrast and focus inconsistencies slowed work and increased mistake rates in high-stakes tasks.</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--last">
                  <span className="fleet-process__card-badge">DECISION</span>
                  <span className="fleet-process__card-value">Fix tokens and focus states; ship accessibility parity as a mandatory release requirement, not as optional.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mogo-evidence__images">
            {/* placeholder: TODO — replace with actual artifact images */}
            <div className="case__placeholder case__placeholder--evidence mogo-section__img">[Image: Workflow map — bottlenecks]</div>
            <div className="case__placeholder case__placeholder--evidence mogo-section__img">[Image: WCAG audit — light/dark parity]</div>
          </div>
        </div>
      </section>

      {/* 03 — REDESIGN */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">03 — REDESIGN</div>
          <h2 className="case__h2">Redesign summary</h2>
          <p className="case__body">I rebuilt the platform's structural layer — unifying navigation, restructuring compliance flows, and standardising patterns so users could complete tasks with fewer steps and less uncertainty.</p>
          <ul className="case__list">
            <li>Rebuilt navigation into a unified primary model — reduced depth, predictable entry points.</li>
            <li>Restructured compliance flows into clear, linear steps with explicit "what's next" signals.</li>
            <li>Standardised patterns via tokens and components for consistent behaviour across desktop, web, and tablet.</li>
            <li>Accessibility parity shipped: light/dark contrast, focus states, keyboard navigation.</li>
          </ul>
          <p className="case__body case__body--strong">Before → After: From fragmented navigation to unified task paths</p>
          <div className="banking-section__slider-wrap">
            <BeforeAfterSlider
              beforeSrc="/db/bankcomparisonold.jpg"
              afterSrc="/db/banknew.jpg"
              beforeCaption="Before: Deep navigation, inconsistent patterns, compliance backtracking."
              afterCaption="After: Unified navigation, linear compliance flows, accessibility parity."
            />
          </div>
        </div>
      </section>

      {/* 04 — KEY DECISIONS */}
      <section className="case__section case__key-decisions">
        <div className="case__wrap case__key-decisions__wrap">
          <div className="case__key-decisions__left">
            <div className="case__section-label">04 — KEY DECISIONS</div>
            <h2 className="case__h2">Rules and trade-offs behind the redesign</h2>
            <p className="case__body">These decisions explain how I chose what to restructure, what to standardise, and how to reduce friction without introducing risk.</p>
          </div>
          <div className="case__key-decisions__right">
            <div className="case__key-decisions__list">
              <div className="case__decision">
                <span className="case__decision-num">01</span>
                <div>
                  <div className="case__decision-title">Unify navigation depth</div>
                  <p className="case__decision-body">One navigation model across all surfaces — primary patterns persistent, secondary patterns consistent. Removed divergent paths that forced users to learn multiple systems.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">02</span>
                <div>
                  <div className="case__decision-title">Workflow-first structure</div>
                  <p className="case__decision-body">Restructured screens around task completion, not feature categories. Fewer hops, persistent primary actions, reduced cross-referencing across sections.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">03</span>
                <div>
                  <div className="case__decision-title">Compliance clarity by design</div>
                  <p className="case__decision-body">Compliance flows broken into explicit sequential steps with clear "what's next" signals — reducing backtracking without relaxing requirements.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">04</span>
                <div>
                  <div className="case__decision-title">Accessibility as infrastructure</div>
                  <p className="case__decision-body">WCAG 2.1 AA parity treated as a release requirement — not a post-launch audit. Tokens, focus states, and contrast shipped as part of every change.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — SHIPPING SYSTEM */}
      <section className="case__section mogo-section mogo-shipping-section">
        <div className="case__wrap">
          <div className="case__section-label">05 — SHIPPING SYSTEM</div>
          <h2 className="case__h2">How it stayed consistent in production</h2>
          <p className="case__body">A redesign only works if it ships reliably, stays consistent, and doesn't drift after release.</p>
          <p className="case__body case__body--strong">The system I introduced</p>
          <div className="mogo-system__grid">
            <div className="mogo-system__item">
              <Compass size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">Design tokens (single source of truth)</h3>
              <p className="mogo-system__desc">Built and expanded semantic tokens (color, type, spacing, states) to keep desktop, web, and tablet consistent. Reduced drift during rollout and made accessibility fixes reusable.</p>
            </div>
            <div className="mogo-system__item">
              <ClipboardList size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">Definition of done (checklist)</h3>
              <p className="mogo-system__desc">A lightweight release checklist covering states, edge cases, focus and contrast, responsive behaviour — so each release doesn't silently degrade quality.</p>
            </div>
            <div className="mogo-system__item">
              <ShieldCheck size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">Design QA gate</h3>
              <p className="mogo-system__desc">Design sign-off before release and post-release spot checks — so implementation matches intent and accessibility regressions are caught early.</p>
            </div>
          </div>
          <div className="mogo-section__image">
            <ZoomableImage src="/db/pallete.jpg" alt="Design system palette — tokens and alignment model" className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 06 — IMPACT */}
      <section className="case__section mogo-impact">
        <div className="case__wrap">
          <div className="case__section-label">06 — IMPACT</div>
          <h2 className="case__h2">What improved</h2>
       
          <div className="mogo-hero__metrics">
            <div className="case__stat">
              <div className="case__stat-num">16%</div>
              <div className="case__stat-label">Faster task completion</div>
              <div className="case__stat-desc">Reduced navigation depth and fewer hops per task.</div>
            </div>
            <div className="case__stat">
              <div className="case__stat-num">33%</div>
              <div className="case__stat-label">Fewer clicks per task</div>
              <div className="case__stat-desc">Unified navigation and persistent primary actions removed redundant steps.</div>
            </div>
            <div className="case__stat">
              <div className="case__stat-num">21%</div>
              <div className="case__stat-label">Higher user satisfaction</div>
              <div className="case__stat-desc">Post-release internal survey; consistent patterns reduced cognitive load.</div>
            </div>
          </div>
          <p className="mogo-impact__subhead">Why it worked</p>
          <ul className="mogo-impact__list">
            <li>Reduced navigation depth and fewer hops removed unnecessary transitions.</li>
            <li>Clearer compliance steps reduced backtracking and uncertainty.</li>
            <li>Accessibility parity reduced friction and errors for all user types.</li>
            <li>Consistent patterns reduced cognitive load across modules.</li>
          </ul>
        </div>
      </section>

      {/* 07 — NEXT STEPS */}
      <section className="case__section mogo-next">
        <div className="case__wrap">
          <div className="case__section-label">07 — NEXT STEPS</div>
          <h2 className="case__h2">How I'd extend the work</h2>
          <p className="case__body mogo-next__lead">To keep improving without introducing new fragmentation, I'd run a lightweight iteration loop:</p>
          <div className="mogo-next__grid">
            <div className="mogo-next__card">
              <ScanEye size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">Task-level friction watchlist</h3>
              <p className="mogo-next__text">Monthly review of task-level patterns to catch navigation regressions early when product changes ship.</p>
            </div>
            <div className="mogo-next__card">
              <Wrench size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">Compliance flow hardening</h3>
              <p className="mogo-next__text">Expand edge case coverage from support tickets and compliance incidents to reduce release-to-release drift.</p>
            </div>
            <div className="mogo-next__card">
              <FlaskConical size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">Accessibility regression checks</h3>
              <p className="mogo-next__text">WCAG spot checks on every release cycle and continued token and component consolidation for long-term consistency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — TAKEAWAYS */}
      <section className="case__section mogo-takeaways">
        <div className="case__wrap">
          <div className="case__section-label">08 — TAKEAWAYS</div>
          <h2 className="case__h2">Executive takeaways</h2>
          <div className="mogo-takeaways__numbered">
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">01</span>
              <p className="mogo-takeaways__num-title">Simplify structure, not visuals</p>
              <p className="mogo-takeaways__num-text">Efficiency came from restructuring navigation depth and task flows — not from visual refresh or colour changes.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">02</span>
              <p className="mogo-takeaways__num-title">Make navigation predictable</p>
              <p className="mogo-takeaways__num-text">One consistent model removed the need for workarounds and reduced the time users spent orienting themselves.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">03</span>
              <p className="mogo-takeaways__num-title">Treat accessibility as a release requirement</p>
              <p className="mogo-takeaways__num-text">Shipping WCAG parity as part of every release — not a separate audit — kept quality stable and prevented regressions.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">04</span>
              <p className="mogo-takeaways__num-title">Ship with QA rules to prevent drift</p>
              <p className="mogo-takeaways__num-text">A lightweight definition of done and design QA gate kept production aligned with design intent across releases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="eleving-nav" aria-label="Case study navigation">
        <div className="eleving-nav__wrap">
          <a href="#work" className="eleving-nav__link">← Back to Work</a>
          <a href="#uktv" className="eleving-nav__link">Next: UK TV App →</a>
        </div>
      </nav>
    </article>
  );
}
