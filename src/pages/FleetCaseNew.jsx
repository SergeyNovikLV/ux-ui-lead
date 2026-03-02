import { useState, useRef } from 'react';
import './FleetCaseNew.css';
import ZoomableImage from '../components/ZoomableImage';
import VideoPreview from '../components/VideoPreview';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Compass, ClipboardList, ShieldCheck, ScanEye, FlaskConical, Wrench } from 'lucide-react';

export default function FleetCaseNew() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoHover, setVideoHover] = useState(false);
  const fleetVideoRef = useRef(null);

  const toggleFleetVideo = () => {
    const v = fleetVideoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setVideoPlaying(true);
    } else {
      v.pause();
      setVideoPlaying(false);
    }
  };

  const onFleetVideoPlay = () => setVideoPlaying(true);
  const onFleetVideoPause = () => setVideoPlaying(false);
  const onFleetVideoEnded = () => setVideoPlaying(false);
  return (
    <article className="eleving mogo-case">
      {/* HERO — Executive summary */}
      <section className="case__section eleving-hero">
        <div className="case__wrap">
          <div className="eleving-hero__grid">
            <div className="eleving-hero__text">
              <div className="case__hero-label">B2B · FLEET OPERATIONS · AI INTEGRATION</div>
              <h1 className="eleving-hero__title">Scaling an 18-year system with AI decision support</h1>
              <p className="eleving-hero__subtitle">Redesigning an 18-year-old enterprise platform — unifying core workflows, integrating AI decision support, and rebuilding shared design foundations across web and mobile.</p>
              <div className="eleving-hero__divider" aria-hidden />
            </div>
          </div>

          {/* Under-hero: Metric tiles */}
          <div className="mogo-hero__under">
            <div className="mogo-hero__metrics">
              <div className="case__stat">
                <div className="case__stat-num">23%</div>
                <div className="case__stat-label">Faster data interpretation</div>
                <div className="case__stat-desc">Dashboard replaced manual table analysis across monitored fleets.</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">17%</div>
                <div className="case__stat-label">Reduction in manual reporting</div>
                <div className="case__stat-desc">Automated analytics saved ~40 min per manager per week.</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">15%</div>
                <div className="case__stat-label">Improved fuel efficiency</div>
                <div className="case__stat-desc">AI decision support reduced unnecessary detours and fuel waste.</div>
              </div>
            </div>
          </div>

          <div className="hero-split">
            <ZoomableImage src="/fleet/mobilescreen.png" alt="Fleet Operations Platform — dashboard preview" caption="Fleet Dashboard: Fuel summary timeline with AI-assisted anomaly detection and decision support." className="mogo-hero__img" />
          </div>

          {/* Role & scope — Owned / Influenced / Decided */}
          <div className="fleet-role__ledger mogo-hero__role-list">
            <div className="fleet-role__col">
              <h3 className="fleet-role__col-title">Owned</h3>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">End-to-end design (discovery → delivery) for core workflows</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">AI integration UX: explainability, confidence, sources, guardrails</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Design-system foundations: tokens, components, usage rules</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Design QA + handoff: states, edge cases, acceptance criteria</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Cross-platform parity (web + iOS + Android)</span></div>
            </div>
            <div className="fleet-role__col">
              <h3 className="fleet-role__col-title">Influenced</h3>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Scope prioritisation with 3/8 product owners</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">IA across 6 core modules (navigation + hierarchy)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Accessibility baseline (WCAG 2.1 AA patterns)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Figma ↔ Storybook alignment with engineering</span></div>
            </div>
            <div className="fleet-role__col">
              <h3 className="fleet-role__col-title">Decided</h3>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Dashboard over tables (signals first, details on demand)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">AI as decision support — no black-box automation</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Unified component library (reuse + scalability)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Mobile-first parity (same logic, both surfaces)</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — PROBLEM */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">01 — PROBLEM</div>
          <h2 className="case__h2">18 years of growth. Zero design coherence</h2>
          <p className="case__body">The platform grew without a design system, creating fragmented workflows and inconsistent navigation. Fleet managers made high-stakes operational decisions in an interface that slowed them down.</p>
          <p className="case__body case__body--strong">What we observed</p>
          <ul className="case__list">
            <li>73% of fuel selections were manual — unnecessary detours and higher fuel costs.</li>
            <li>Basic fleet tasks required up to 7 clicks; users expected ~3.</li>
            <li>No real-time driver behaviour insights — risky patterns went undetected.</li>
            <li>Navigation inconsistency created 3–7 different paths for the same task.</li>
          </ul>
          <p className="case__body"><strong>Constraint:</strong> Structural redesign across 6 core modules — not a visual refresh. Had to maintain operational continuity across 8 product streams during rollout.</p>
          <div className="mogo-section__image">
            <ZoomableImage src="/fleet/fleet5.png" alt="Fleet platform before redesign — fragmented navigation and manual table views" caption="Before: Static 14-column fuel table with no trend visibility, no anomaly detection, and manual cross-referencing required." className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 02 — EVIDENCE */}
      <section className="case__section fleet-process fleet-research">
        <div className="case__wrap">
          <div className="fleet-process__grid mogo-evidence__grid">
            <div className="mogo-evidence__intro">
              <div className="case__section-label">02 — RESEARCH</div>
              <h2 className="case__h2">Signals that drove decisions</h2>
              <p className="case__body fleet-process__body-lead">
                Three research methods — interviews, workflow audit, and usability testing — translated operational pain into product decisions.
              </p>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-method">INTERVIEWS & SYNTHESIS</div>
              <div className="fleet-process__card-title">Empathy mapping (2 segments)</div>
              <div className="fleet-process__card-rows">
                <div className="fleet-process__card-row fleet-process__card-row--first">
                  <span className="fleet-process__card-badge">METHOD</span>
                  <span className="fleet-process__card-value">Contextual interviews + synthesis with fleet managers and on-ground operators.</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--middle">
                  <span className="fleet-process__card-badge">SIGNAL</span>
                  <span className="fleet-process__card-value">Managers needed predictive signals; operators needed fewer steps to complete tasks.</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--last">
                  <span className="fleet-process__card-badge">DECISION</span>
                  <span className="fleet-process__card-value">Split IA by role needs (signals vs execution), not by feature lists.</span>
                </div>
              </div>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-method">WORKFLOW AUDIT</div>
              <div className="fleet-process__card-title">Workflow analysis (click-path)</div>
              <div className="fleet-process__card-rows">
                <div className="fleet-process__card-row fleet-process__card-row--first">
                  <span className="fleet-process__card-badge">METHOD</span>
                  <span className="fleet-process__card-value">Task-flow audit + click-path analysis across core workflows.</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--middle">
                  <span className="fleet-process__card-badge">SIGNAL</span>
                  <span className="fleet-process__card-value">Fuel Locator required up to 7 steps; users expected ~3.</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--last">
                  <span className="fleet-process__card-badge">DECISION</span>
                  <span className="fleet-process__card-value">Redesign Fuel Locator as an inline comparison tool, not a separate screen.</span>
                </div>
              </div>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-method">USABILITY TESTING</div>
              <div className="fleet-process__card-title">Moderated prototype tests (n=6)</div>
              <div className="fleet-process__card-rows">
                <div className="fleet-process__card-row fleet-process__card-row--first">
                  <span className="fleet-process__card-badge">METHOD</span>
                  <span className="fleet-process__card-value">Moderated prototype tests on key tasks with fleet managers.</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--middle">
                  <span className="fleet-process__card-badge">SIGNAL</span>
                  <span className="fleet-process__card-value">Users ignored AI suggestions when reasoning and confidence were hidden.</span>
                </div>
                <div className="fleet-process__card-row fleet-process__card-row--last">
                  <span className="fleet-process__card-badge">DECISION</span>
                  <span className="fleet-process__card-value">Surface confidence + data source inline; keep the primary action dominant.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fleet-section__video">
            <div
              className="fleet-section__video-wrap"
              onMouseEnter={() => setVideoHover(true)}
              onMouseLeave={() => setVideoHover(false)}
            >
              <video
                ref={fleetVideoRef}
                src="/videos/fleet-fuellocator1.mp4"
                controls
                playsInline
                className="fleet-section__video-el"
                onPlay={onFleetVideoPlay}
                onPause={onFleetVideoPause}
                onEnded={onFleetVideoEnded}
              />
              <div className={`fleet-section__video-center ${videoPlaying || !videoHover ? 'fleet-section__video-center--hidden' : ''}`} aria-hidden>
                <button type="button" className="fleet-section__video-play" onClick={toggleFleetVideo} aria-label="Play">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div className={`fleet-section__video-center fleet-section__video-center--pause ${!videoPlaying || !videoHover ? 'fleet-section__video-center--hidden' : ''}`} aria-hidden>
                <button type="button" className="fleet-section__video-play fleet-section__video-play--pause" onClick={toggleFleetVideo} aria-label="Pause">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
                    <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — REDESIGN */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">03 — REDESIGN</div>
          <h2 className="case__h2">Redesign summary</h2>
          <p className="case__body">I replaced static fuel tables with a timeline dashboard and rebuilt the Fuel Locator as an inline comparison flow — so fleet managers make faster, better-supported decisions.</p>
          <ul className="case__list">
            <li>Dashboard over tables: fuel trends, idling, and anomalies visible at a glance — no manual cross-referencing.</li>
            <li>Fuel Locator redesigned from ~7 steps to ~3 as an inline comparison tool with AI-ranked options.</li>
            <li>Unified navigation across 6 modules — one consistent model, persistent primary actions.</li>
          </ul>
          <p className="case__body case__body--strong">Before → After: From manual tables to signal-first decisions</p>
          <div className="fleet-section__slider-wrap">
            <BeforeAfterSlider
              beforeSrc="/fleet/fleetold.jpg"
              afterSrc="/fleet/fleetnew.jpg"
              
            />
          </div>
        </div>
      </section>

      {/* 04 — KEY DECISIONS */}
      <section className="case__section case__key-decisions">
        <div className="case__wrap case__key-decisions__wrap">
          <div className="case__key-decisions__left">
            <div className="case__section-label">04 — KEY DECISIONS</div>
            <h2 className="case__h2">Trade-offs behind the redesign</h2>
            <p className="case__body">Four decisions shaped the direction — each resolved a specific tension between operational need, AI credibility, and delivery complexity.</p>
          </div>
          <div className="case__key-decisions__right">
            <div className="case__key-decisions__list">
              <div className="case__decision">
                <span className="case__decision-num">01</span>
                <div>
                  <div className="case__decision-title">Dashboard over tables</div>
                  <p className="case__decision-body">Replaced static fuel tables with a timeline dashboard so trends, idling, and anomalies are visible at a glance. Reduced manual cross-referencing and sped up daily decisions.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">02</span>
                <div>
                  <div className="case__decision-title">AI as decision support, not automation</div>
                  <p className="case__decision-body">AI ranks options and explains reasoning; managers confirm. Designed for trust, interpretability, and reduced liability — no black-box execution.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">03</span>
                <div>
                  <div className="case__decision-title">Progressive disclosure for complex flows</div>
                  <p className="case__decision-body">Default to key signals; move details behind expand. Reduced cognitive load and novice errors while preserving power-user depth.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">04</span>
                <div>
                  <div className="case__decision-title">Unified design system across platforms</div>
                  <p className="case__decision-body">Built a shared token layer + component library so web and mobile ship from one source of truth. Reduced duplication and improved delivery consistency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — DESIGN SYSTEM */}
      <section className="case__section mogo-section mogo-shipping-section">
        <div className="case__wrap">
          <div className="case__section-label">05 — DESIGN SYSTEM</div>
          <h2 className="case__h2">This wasn't cleanup — it was product infrastructure</h2>
          <p className="case__body">No shared token layer, inconsistent components, weak cross-platform parity. I drove a system rebuild as a structural requirement for the redesign to hold.</p>
          <p className="case__body case__body--strong">What I built</p>
          <div className="mogo-system__grid">
            <div className="mogo-system__item">
              <Compass size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">DS audit + Figma ↔ Storybook sync</h3>
              <p className="mogo-system__desc">Synced Figma components with Storybook in close dev collaboration — single source of truth, fewer implementation mismatches.</p>
            </div>
            <div className="mogo-system__item">
              <ClipboardList size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">Token architecture</h3>
              <p className="mogo-system__desc">Defined semantic tokens for type, spacing, color intent, and elevation — one foundation reused across web and mobile.</p>
            </div>
            <div className="mogo-system__item">
              <ShieldCheck size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">Component library + accessibility</h3>
              <p className="mogo-system__desc">Rebuilt core components with documented states, variants, usage rules, and WCAG 2.1 AA patterns — faster iterations, predictable quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — IMPACT */}
      <section className="case__section mogo-impact">
        <div className="case__wrap">
          <div className="case__section-label">06 — IMPACT</div>
          <h2 className="case__h2">What improved</h2>
         
          <p className="mogo-impact__subhead">What it means</p>
          <p className="mogo-impact__body">Operational efficiency improved because managers stopped cross-referencing manual tables — the dashboard surfaced the same insight in seconds. AI decision support added confidence without removing control.</p>
          <p className="mogo-impact__subhead">Why it worked</p>
          <ul className="mogo-impact__list">
            <li>Dashboard replaced manual table analysis — trends and anomalies visible at a glance.</li>
            <li>AI ranks and explains options; managers confirm — trust built through transparency, not automation.</li>
            <li>Unified design system reduced implementation drift and shortened delivery cycles.</li>
          </ul>
       
          <div className="mogo-section__image">
            <ZoomableImage src="/fleet/fleet10.png" alt="Fleet impact — fuel efficiency and dashboard adoption metrics" caption="Post-launch monitoring: Fuel efficiency trends and dashboard adoption across monitored fleets." className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 07 — NEXT STEPS */}
      <section className="case__section mogo-next">
        <div className="case__wrap">
          <div className="case__section-label">07 — NEXT STEPS</div>
          <h2 className="case__h2">How I'd extend the platform</h2>
          <p className="case__body mogo-next__lead">To keep improving operational outcomes without adding UI complexity, I'd run a focused iteration loop:</p>
          <div className="mogo-next__grid">
            <div className="mogo-next__card">
              <ScanEye size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">AI confidence monitoring</h3>
              <p className="mogo-next__text">Track AI suggestion acceptance rates per workflow to detect where explainability or confidence scoring needs refinement.</p>
            </div>
            <div className="mogo-next__card">
              <FlaskConical size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">Role-based IA experiments</h3>
              <p className="mogo-next__text">Test further IA splits between manager and operator views — measure task completion rate step-by-step per segment.</p>
            </div>
            <div className="mogo-next__card">
              <Wrench size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">Mobile parity hardening</h3>
              <p className="mogo-next__text">Expand acceptance criteria from mobile production incidents to reduce web–mobile divergence release-to-release.</p>
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
              <p className="mogo-takeaways__num-title">Structure before surface</p>
              <p className="mogo-takeaways__num-text">No visual redesign holds without shared tokens, components, and cross-platform parity as the foundation.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">02</span>
              <p className="mogo-takeaways__num-title">AI earns trust through explainability</p>
              <p className="mogo-takeaways__num-text">Surfacing confidence and data sources inline turned ignored suggestions into accepted decisions.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">03</span>
              <p className="mogo-takeaways__num-title">Role-based IA over feature lists</p>
              <p className="mogo-takeaways__num-text">Splitting navigation by manager vs operator needs reduced steps and removed wrong-context noise.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">04</span>
              <p className="mogo-takeaways__num-title">Ship without drift</p>
              <p className="mogo-takeaways__num-text">QA gates and Figma ↔ Storybook alignment kept production consistent across delivery streams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="eleving-nav" aria-label="Case study navigation">
        <div className="eleving-nav__wrap">
          <a href="#work" className="eleving-nav__link">← Back to Work</a>
          <a href="#banking" className="eleving-nav__link">Next: Banking Platform →</a>
        </div>
      </nav>
    </article>
  );
}
