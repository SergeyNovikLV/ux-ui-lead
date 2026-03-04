import './MogoCase.css';
import ZoomableImage from '../components/ZoomableImage';
import VideoPreview from '../components/VideoPreview';
import { ArrowLeft, ArrowRight, Compass, ClipboardList, ShieldCheck, ScanEye, FlaskConical, Wrench } from 'lucide-react';
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
              <div className="case__hero-label">ELEVING GROUP · PRODUCT DESIGN · FUNNEL IMPROVEMENT</div>
              <h1 className="eleving-hero__title">Reducing friction in a conversion-critical loan application</h1>
              <p className="eleving-hero__subtitle">Merged repeated decisions, reduced cognitive load per step, and validated impact post-release.</p>
              <div className="eleving-hero__divider" aria-hidden />
            </div>
          </div>

          {/* Under-hero: Tiles → Credibility → Role list */}
          <div className="mogo-hero__under">
            <p className="mogo-hero__metric-context">Baseline → post-release (Sep–Nov)</p>
            <div className="mogo-hero__metrics">
              <div className="case__stat">
                <div className="case__stat-num">9 → 6</div>
                <div className="case__stat-label">Steps reduced</div>
                <div className="case__stat-desc">Reduced transitions and repeated decisions across the flow.</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">16.7% → 38.8%</div>
                <div className="case__stat-label">Completion rate (Sep–Nov)</div>
                <div className="case__stat-desc">More starters finished the application — over 2×.</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">43.7% → 42.1%</div>
                <div className="case__stat-label">Entry rate (stable)</div>
                <div className="case__stat-desc">Entry intent held steady — the lift came from mid-flow friction removal.</div>
              </div>
            </div>

          </div>

          <div className="hero-split">
            <ZoomableImage src="/eleving/mogo3.png" alt="New flow preview" caption="Before → After: Clearer hero + simplified process explanation." className="mogo-hero__img" />
          </div>
        </div>
      </section>

      <RoleAndScope {...mogoRoleScope} />

      {/* 02 — PROBLEM */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">02 — PROBLEM</div>
          <h2 className="case__h2">Where the flow leaked</h2>
          <p className="case__body">The issue wasn't traffic. Users entered the application, then dropped off inside the flow.</p>
          <p className="case__body case__body--strong">What I observed</p>
          <ul className="case__list">
            <li>Steps repeated unnecessarily — users stalled mid-flow without a clear signal to continue.</li>
            <li>The next action was rarely obvious — key moments lacked explicit direction.</li>
            <li>Competing UI blocks created visual noise, making the primary action easy to overlook.</li>
            <li>Too many decisions per screen raised cognitive load and increased hesitation.</li>
          </ul>
          <p className="case__body"><strong>Constraint:</strong> Simplify the application and increase submissions without reducing start intent.</p>
          <div className="mogo-section__image">
            <ZoomableImage src="/eleving/mogo1.png" alt="Before/After screens showing messy hierarchy → simplified flow and clearer primary CTA" caption={'Before → After: Cleaner steps, clearer \u201cNext\u201d.'} className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 03 — EVIDENCE */}
      <section className="case__section fleet-process fleet-research">
        <div className="case__wrap">
          <div className="fleet-process__grid mogo-evidence__grid">
            <div className="mogo-evidence__intro">
              <div className="case__section-label">03 — EVIDENCE</div>
              <h2 className="case__h2">Signals that drove decisions</h2>
              <p className="case__body fleet-process__body-lead">
                I added a lightweight evidence layer to pinpoint stalls and translate them into product decisions.
              </p>
            </div>
            <ResearchSignalCard
              eyebrow="USER SESSIONS"
              title="User sessions (2 segments)"
              method="Two focused sessions: new applicants vs returning users."
              signal={"Users stalled when steps felt repetitive, and the \"next step\" wasn't obvious."}
              decision='Merge repeated decisions and make progress + "Next" explicit at every step.'
            />
            <ResearchSignalCard
              eyebrow="FEEDBACK ANALYSIS"
              title="Feedback analysis (reviews)"
              method="AI clustering of recurring themes + manual validation of top issues."
              signal='Confusion clustered around "what happens next" and missing clarity in key moments.'
              decision="Add clarity moments (what / why / next) and reduce cognitive load per step."
            />
            <ResearchSignalCard
              eyebrow="BEHAVIORAL ANALYTICS"
              title="Behavioral analytics (GA4 + Clarity)"
              method="Funnel snapshots + session replays on entry and high-friction steps."
              signal="Users missed primary actions when multiple UI blocks competed for attention."
              decision="Enforce one primary CTA per step and simplify hierarchy around it."
            />
          </div>
          <div className="mogo-section__image">
            <ZoomableImage src="/eleving/mogo6.png" alt="Pain/importance map" caption="Pain/importance map: Prioritized issues by user pain vs business importance to focus the redesign." className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 04 — REDESIGN */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">04 — REDESIGN</div>
          <h2 className="case__h2">Redesign summary</h2>
          <p className="case__body">I rebuilt the application into a 6-step flow (previously 9-step) with clear step intent and fewer transitions — so users move forward with less hesitation.</p>
          <ul className="case__list">
            <li>Merged repeat loops: duplicated decisions collapsed into single, clearly-scoped steps.</li>
            <li>One job per step: each screen supports one primary action, with no competing choices.</li>
            <li>Visible progression: step position, next action, and remaining steps are clear throughout.</li>
          </ul>
          <div className="mogo-section__image">
            <ZoomableImage src="/eleving/mogo2.png" alt="6-step flow overview with step intent labels" caption="6-step flow: Simplified application with clear step intent and one obvious primary action per screen." className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 05 — KEY DECISIONS */}
      <section className="case__section case__key-decisions">
        <div className="case__wrap case__key-decisions__wrap">
          <div className="case__key-decisions__left">
            <div className="case__section-label">05 — KEY DECISIONS</div>
            <h2 className="case__h2">Rules and trade-offs behind the redesign</h2>
            <p className="case__body">These decisions explain how I chose what to cut, what to keep, and how to protect conversion without lowering entry.</p>
          </div>
          <div className="case__key-decisions__right">
            <div className="case__key-decisions__list">
              <div className="case__decision">
                <span className="case__decision-num">01</span>
                <div>
                  <div className="case__decision-title">Keep requirements, remove transitions</div>
                  <p className="case__decision-body">Never remove required inputs — remove unnecessary step boundaries. Fewer screens without losing compliance or data integrity.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">02</span>
                <div>
                  <div className="case__decision-title">Make the primary action unmissable</div>
                  <p className="case__decision-body">One primary CTA per step, no competing blocks. Less "exploration UI" — more decisiveness and momentum.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">03</span>
                <div>
                  <div className="case__decision-title">Progressive disclosure by intent</div>
                  <p className="case__decision-body">Show only what's needed to decide now; defer everything else. Lower cognitive load without hiding critical info.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">04</span>
                <div>
                  <div className="case__decision-title">Define "done" for production</div>
                  <p className="case__decision-body">Every step ships with states, edge cases, and acceptance criteria — preventing silent regressions while maintaining delivery speed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — SHIPPING SYSTEM */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">06 — SHIPPING SYSTEM</div>
          <h2 className="case__h2">How it stayed consistent in production</h2>
          <p className="case__body">A redesign only works if it ships reliably, stays measurable, and doesn't drift in production.</p>
          <p className="case__body case__body--strong">The system I introduced</p>
          <div className="mogo-system__grid">
            <div className="mogo-system__item">
              <Compass size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">Ownership &amp; step rules</h3>
              <p className="mogo-system__desc">Clear step intent, responsibilities, and progression rules — so the flow stays coherent across iterations.</p>
            </div>
            <div className="mogo-system__item">
              <ClipboardList size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">Definition of done (checklist)</h3>
              <p className="mogo-system__desc">A lightweight checklist for states, edge cases, spacing, typography, and copy — so releases don't degrade UX.</p>
            </div>
            <div className="mogo-system__item">
              <ShieldCheck size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">QA sign-off gate</h3>
              <p className="mogo-system__desc">Design verification before release + post-release spot checks — so implementation matches intent and regressions are caught early.</p>
            </div>
          </div>
          <div className="mogo-section__image">
            <ZoomableImage src="/eleving/mogo7.png" alt="Alignment model — Business–Design–Engineering workflow" caption="Alignment model: Business–Design–Engineering workflow with ownership, outputs, and QA checkpoints to ship without UX drift." className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 07 — IMPACT */}
      <section className="case__section mogo-impact">
        <div className="case__wrap">
          <div className="case__section-label">07 — IMPACT</div>
          <h2 className="case__h2">Results</h2>
          <p className="case__body mogo-impact__intro">Completion improved because the redesign reduced friction at every transition: fewer steps, clearer progression signals, and less visual competition on each screen.</p>
          <ul className="mogo-impact__list">
            <li>Merging repeated decisions reduced the number of transitions users had to clear.</li>
            <li>A single dominant action per step removed visual ambiguity at each decision point.</li>
            <li>Shipping with defined states and acceptance criteria prevented quality drift post-release.</li>
          </ul>
          <div className="mogo-section__image">
            <ZoomableImage src="/eleving/mogo4.png" alt="Monitoring pack — GA4 + Clarity dashboard" caption="Monitoring pack: Monthly GA4 + Clarity dashboard — start rate, continuation, completion, scroll depth, dead clicks." className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 08 — NEXT STEPS */}
      <section className="case__section mogo-next">
        <div className="case__wrap">
          <div className="case__section-label">08 — NEXT STEPS</div>
          <h2 className="case__h2">How I'd extend the win</h2>
          <p className="case__body mogo-next__lead">To keep improving without reintroducing friction, I'd run a lightweight iteration loop:</p>
          <div className="mogo-next__grid">
            <div className="mogo-next__card">
              <ScanEye size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">Drop-off watchlist</h3>
              <p className="mogo-next__text">Monthly step-level drop-off review to catch regressions early when UI changes ship.</p>
            </div>
            <div className="mogo-next__card">
              <FlaskConical size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">Clarity experiments</h3>
              <p className="mogo-next__text">Test microcopy + helper patterns on the highest-friction steps and track "continue rate" step-by-step.</p>
            </div>
            <div className="mogo-next__card">
              <Wrench size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">Edge-case hardening</h3>
              <p className="mogo-next__text">Expand acceptance criteria from production incidents and support tickets to reduce release-to-release drift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — RELATED WORK */}
      <section className="case__section mogo-related">
        <div className="case__wrap">
          <div className="case__section-label">09 — RELATED WORK</div>
          <h2 className="case__h2">More impact at Eleving</h2>
          <p className="case__body mogo-related__intro">Beyond this application redesign, I built reusable delivery standards and multi-brand foundations that made shipping faster and more consistent. I focused on governance, design–dev alignment, and quality gates to prevent UI drift after release. These systems scaled across brands and accelerated future iterations.</p>
          <div className="mogo-related__grid">
            <div className="mogo-related__card">
              <div className="mogo-related__eyebrow">PRODUCT DESIGN OS</div>
              <h3 className="mogo-related__title">Product Design OS</h3>
              <p className="mogo-related__desc">I built an internal delivery system: tokens + governance + a design sign-off gate, plus a shared workspace where teams track UX quality and metrics.</p>
              <VideoPreview src="/videos/elev.mp4" caption="Product Design OS: tokens, governance, and design sign-off gate in action." className="mogo-related__video" />
            </div>
            <div className="mogo-related__card">
              <div className="mogo-related__eyebrow">KLEVO</div>
              <h3 className="mogo-related__title">Klevo — brand launched in 4 weeks</h3>
              <p className="mogo-related__desc">From brand name voting to production in one month — clear ownership, fast iteration loops, and delivery discipline that kept scope under control.</p>
              <ZoomableImage src="/eleving/mogo8.png" alt="Klevo brand launch proof" caption="Klevo: From brand name voting to production release in 4 weeks." className="mogo-related__img-zoom" />
            </div>
            <div className="mogo-related__card">
              <div className="mogo-related__eyebrow">3 BRANDS</div>
              <h3 className="mogo-related__title">3 brands on one foundation</h3>
              <p className="mogo-related__desc">One shared token source and common UI rules across brands — consistent UX patterns, easier maintenance, and faster rollouts without breaking brand integrity.</p>
              <ZoomableImage src="/eleving/mogo9.png" alt="3 brands on one foundation" caption="3 brands on one shared token foundation — consistent patterns, faster rollouts." className="mogo-related__img-zoom" />
            </div>
          </div>
        </div>
      </section>

      {/* 10 — TAKEAWAYS */}
      <section className="case__section mogo-takeaways">
        <div className="case__wrap">
          <div className="case__section-label">10 — TAKEAWAYS</div>
          <h2 className="case__h2">Executive takeaways</h2>
          <div className="mogo-takeaways__numbered">
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">01</span>
              <p className="mogo-takeaways__num-title">Simplify without losing intent</p>
              <p className="mogo-takeaways__num-text">Removing friction at the transition level — not the requirement level — lets completion improve without affecting who starts.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">02</span>
              <p className="mogo-takeaways__num-title">Make &ldquo;Next&rdquo; unmistakable</p>
              <p className="mogo-takeaways__num-text">Visible progress and one dominant action per step reduce hesitation without changing what users are asked to do.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">03</span>
              <p className="mogo-takeaways__num-title">Ship without drift</p>
              <p className="mogo-takeaways__num-text">Defining &ldquo;done&rdquo; with edge cases and criteria before release keeps production aligned with what was actually validated.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">04</span>
              <p className="mogo-takeaways__num-title">Measure as a habit</p>
              <p className="mogo-takeaways__num-text">A lightweight monitoring routine converts design changes into evidence — and evidence into a repeatable improvement loop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="eleving-nav" aria-label="Case study navigation">
        <div className="eleving-nav__wrap">
          <a href="#work" className="eleving-nav__link"><ArrowLeft size={16} strokeWidth={2} aria-hidden /> Back to Work</a>
          <a href="#fleet" className="eleving-nav__link">Next: Fleet Operations Platform <ArrowRight size={16} strokeWidth={2} aria-hidden /></a>
        </div>
      </nav>
    </article>
  );
}
