import { useState, useRef } from 'react';
import './FleetCase.css';
import '../styles/tokens.css';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function FleetCase() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error('Play failed:', err);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <article className="fleet">
      {/* SECTION 1: CASE HERO */}
      <section className="case__section fleet-hero">
        <div className="case__wrap">
          <div className="fleet-hero__grid">
            <div className="fleet-hero__text">
              <div className="case__hero-label">02 · B2B · Fleet Operations · AI Integration</div>
              <h1 className="fleet-hero__title">Fleet Operations Platform</h1>
              <p className="fleet-hero__subtitle">
                Redesigning an 18-year-old enterprise platform — unifying core workflows, integrating AI decision support, and rebuilding shared design foundations across web and mobile.
              </p>
              <div className="fleet-hero__divider" aria-hidden />
            </div>
          </div>
          <div className="fleet-hero__meta-wrap">
            <div className="case__meta-grid">
              {[
                { label: 'TIMELINE', value: '2024' },
                { label: 'ROLE', value: 'Senior UX/UI Designer' },
                { label: 'TEAM', value: '4 designers · 1 researcher · 12 devs' },
                { label: 'PLATFORM', value: 'Web · iOS · Android' },
              ].map(item => (
                <div key={item.label} className="fleet-hero__meta-item">
                  <div className="case__meta-label">{item.label}</div>
                  <div className="case__meta-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-split">
            <div className="hero-split__image">
              <img
                src="/fleet/fleetapp.png"
                alt="Fleet dashboard"
                className="hero-split__img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTEXT */}
      <section className="case__section fleet-context">
        <div className="case__wrap fleet-context__wrap">
          <div className="fleet-context__grid">
            <div className="fleet-context__narrative">
              <div className="fleet-context__eyebrow">CONTEXT</div>
              <h2 className="fleet-context__title">18 years of growth. Zero design coherence.</h2>
              <p className="fleet-context__lead">
                The platform had grown for 18 years without a design system. Fleet managers made critical decisions in an interface that slowed them down.
              </p>
              <p className="fleet-context__lead">
                Operational delays, manual workarounds, and a product that couldn't scale without a structural redesign — not a visual refresh.
              </p>
              <p className="fleet-context__statement">
                <strong>Structural debt</strong> — not a cosmetic redesign.
              </p>
            </div>
            <div className="fleet-context__evidence">
              <div className="fleet-context__evidence-item">
                <div className="fleet-context__evidence-num">73%</div>
                <div className="fleet-context__evidence-title">Manual fuel selection</div>
                <div className="fleet-context__evidence-desc">Unnecessary detours, higher fuel costs</div>
              </div>
              <div className="fleet-context__evidence-divider" aria-hidden />
              <div className="fleet-context__evidence-item">
                <div className="fleet-context__evidence-num">21%</div>
                <div className="fleet-context__evidence-title">Slowed by navigation friction</div>
                <div className="fleet-context__evidence-desc">Up to 7 clicks for basic fleet tasks</div>
              </div>
              <div className="fleet-context__evidence-divider" aria-hidden />
              <div className="fleet-context__evidence-item">
                <div className="fleet-context__evidence-num">31%</div>
                <div className="fleet-context__evidence-title">No real-time driver insights</div>
                <div className="fleet-context__evidence-desc">Risky patterns undetected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MY ROLE */}
      <section className="case__section fleet-role">
        <div className="case__wrap">
          <div className="fleet-role__eyebrow">MY ROLE & SCOPE</div>
          <h2 className="fleet-role__title">What I owned, influenced, decided</h2>
          <p className="fleet-role__intro">
            In a system with 8 product owners and no shared design language, I drove alignment around a single component foundation and tied decisions to operational outcomes.
          </p>
          <div className="fleet-role__ledger">
            <div className="fleet-role__col">
              <span className="fleet-role__col-num" aria-hidden>01</span>
              <h3 className="fleet-role__col-title">Owned</h3>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Led end-to-end design (discovery → delivery)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Planned + ran research (studies, synthesis, takeaways)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Built design-system architecture (tokens, components, rules)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Ensured cross-platform parity (web + mobile consistency)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Owned design QA + handoff (specs, states, acceptance)</span></div>
            </div>
            <div className="fleet-role__col">
              <span className="fleet-role__col-num" aria-hidden>02</span>
              <h3 className="fleet-role__col-title">Influenced</h3>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Prioritized scope with 3/8 POs (trade-offs, sequencing)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Defined AI UX scope (interpretability, guardrails)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Shaped IA for 6 core modules (nav + information hierarchy)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Set accessibility bar (WCAG 2.1 AA patterns)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Sequenced rollout across 4 streams (phased delivery plan)</span></div>
            </div>
            <div className="fleet-role__col">
              <span className="fleet-role__col-num" aria-hidden>03</span>
              <h3 className="fleet-role__col-title">Decided</h3>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Dashboard over tables (signals first, details on demand)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Progressive disclosure model (reduce cognitive load)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Unified component library (reuse + scalability)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">AI as decision support (no black-box automation)</span></div>
              <div className="fleet-role__row"><span className="fleet-role__row-dot" aria-hidden /><span className="fleet-role__row-text">Mobile-first parity (same logic web + native)</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: RESEARCH */}
      <section className="case__section fleet-process fleet-research">
        <div className="case__wrap">
          <div className="case__section-label">RESEARCH</div>
          <h2 className="case__h2">Research that drove structure, not decoration</h2>
          <p className="case__body fleet-process__body-lead">
            Working with a UX researcher, I planned and ran
            contextual interviews with fleet managers and
            on-ground operators across two user segments.
            I led synthesis — building empathy maps per segment
            to identify behavioral patterns, not just pain points.
          </p>
          <p className="case__body fleet-process__body-sub">
            Research outputs that directly shaped product decisions:
          </p>
          <div className="fleet-process__grid">
            <div className="fleet-process__card">
              <div className="fleet-process__card-method">INTERVIEWS & SYNTHESIS</div>
              <div className="fleet-process__card-title">Empathy Mapping</div>
              <p className="fleet-process__card-body">
                <strong>Method:</strong> Contextual interviews + synthesis sessions<br />
                <strong>Output:</strong> 2 empathy maps (manager vs operator)<br />
                <strong>Finding:</strong> Managers needed predictive signals. Operators needed fewer steps to complete tasks.
              </p>
              <div className="fleet-process__card-artifact">Decision made: Split information architecture by role — not by feature.</div>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-method">WORKFLOW AUDIT</div>
              <div className="fleet-process__card-title">Workflow Analysis</div>
              <p className="fleet-process__card-body">
                <strong>Method:</strong> Task flow audit + click-path analysis<br />
                <strong>Output:</strong> 7-click reduction map for core tasks<br />
                <strong>Finding:</strong> Fuel locator required 7 steps. Industry benchmark: 3.
              </p>
              <div className="fleet-process__card-artifact">Decision made: Redesign fuel locator as inline comparison tool, not separate screen.</div>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-method">USABILITY TESTING</div>
              <div className="fleet-process__card-title">Usability Testing</div>
              <p className="fleet-process__card-body">
                <strong>Method:</strong> Moderated prototype testing (n=6)<br />
                <strong>Output:</strong> 3 iteration cycles on fuel comparison flow<br />
                <strong>Finding:</strong> Users skipped AI suggestions when reasoning was hidden.
              </p>
              <div className="fleet-process__card-artifact">Decision made: Surface AI confidence score and data source inline — not in tooltip.</div>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-method">HEURISTIC EVALUATION</div>
              <div className="fleet-process__card-title">Interface Audit</div>
              <p className="fleet-process__card-body">
                <strong>Method:</strong> Heuristic review across 6 core modules using Nielsen's 10 principles + WCAG 2.1 AA<br />
                <strong>Output:</strong> 47 issues logged — critical / major / minor<br />
                <strong>Finding:</strong> Navigation inconsistency was the top failure. Same task required 3–7 different paths depending on entry point.
              </p>
              <div className="fleet-process__card-artifact">Decision made: Unified navigation model with persistent primary actions across all modules.</div>
            </div>
          </div>
          <div className="fleet-process__image-wrap">
           <img src="/fleet/fleet2.png" alt="User research — empathy mapping and synthesis" className="fleet-process__image empathy-map-img" />
            <p className="fleet-process__image-caption">Research artifact — created for PO alignment session. Two segments synthesized: Small company manager vs Mid-sze company manager.</p>
        
          </div>
        </div>
      </section>

      {/* SECTION 5: KEY DECISIONS */}
      <section className="case__section fleet-decisions">
        <div className="case__wrap">
          <div className="case__section-label">KEY DECISIONS</div>
          <h2 className="case__h2">Four decisions that defined the system.</h2>
          <div className="case__decision">
            <span className="case__decision-num">01</span>
            <div>
              <div className="case__decision-title">Dashboard over tables</div>
              <p className="case__decision-body">
                <strong>Problem:</strong> Static fuel tables required manual cross-referencing. No trend visibility.<br />
                <strong>Decision:</strong> Replace with timeline dashboard — consumption, idling, and anomaly patterns visible without clicks.<br />
                <strong>Trade-off:</strong> More complex front-end. Accepted because operational value outweighed dev cost.
              </p>
            </div>
          </div>
          <div className="case__decision">
            <span className="case__decision-num">02</span>
            <div>
              <div className="case__decision-title">AI as decision support, not automation</div>
              <p className="case__decision-body">
                <strong>Problem:</strong> Initial spec proposed auto-routing. Risk: Fleet managers distrust black-box decisions on high-cost routes.<br />
                <strong>Decision:</strong> AI surfaces ranked options with reasoning. Manager confirms. No auto-execution.<br />
                <strong>Trade-off:</strong> Slower task flow. Accepted to preserve operator trust and reduce liability.
              </p>
            </div>
          </div>
          <div className="case__decision">
            <span className="case__decision-num">03</span>
            <div>
              <div className="case__decision-title">Progressive disclosure for complex flows</div>
              <p className="case__decision-body">
                <strong>Problem:</strong> Fuel comparison had 11 data points per station. Cognitive overload in testing.<br />
                <strong>Decision:</strong> Show 3 key signals by default. Expand on demand.<br />
                <strong>Trade-off:</strong> Power users need extra tap. Accepted — novice errors dropped in testing.
              </p>
            </div>
          </div>
          <div className="case__decision">
            <span className="case__decision-num">04</span>
            <div>
              <div className="case__decision-title">Unified design system across platforms</div>
              <p className="case__decision-body">
                <strong>Problem:</strong> Web and mobile had diverged over years. 40%+ component duplication.<br />
                <strong>Decision:</strong> Rebuild shared token layer and component library. Single source of truth.<br />
                <strong>Trade-off:</strong> 3-month investment before visible UI output. Aligned with POs as infrastructure cost, not design overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DESIGN SYSTEM */}
      <section className="case__section fleet-process">
        <div className="case__wrap">
          <div className="case__section-label">DESIGN SYSTEM</div>
          <h2 className="case__h2">Design system as product infrastructure</h2>
          <p className="case__body fleet-process__body-lead">
            This wasn't a cleanup exercise. The platform had
            no shared token layer, no component documentation,
            and no cross-platform parity. I drove the system
            rebuild as a structural requirement — not a
            design team initiative.
          </p>
        
          <div className="fleet-process__grid">
            <div className="fleet-process__card">
              <div className="fleet-process__card-num">01</div>
              <div className="fleet-process__card-title">DS audit & Figma–Storybook alignment</div>
              <p className="fleet-process__card-body">
                Ran a design system audit and drove Figma component alignment with Storybook in close collaboration with developers. Ensured a single source of truth and consistent handoff.
              </p>
              <div className="fleet-process__card-artifact">Result: Design and code components stay in sync; fewer mismatches in production.</div>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-num">02</div>
              <div className="fleet-process__card-title">Token Architecture</div>
              <p className="fleet-process__card-body">
                Defined color, typography, spacing, and elevation tokens. Mapped to both web (CSS variables) and mobile (React Native theme).
              </p>
              <div className="fleet-process__card-artifact">Result: Single source of truth across 4 surfaces.</div>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-num">03</div>
              <div className="fleet-process__card-title">Component Library</div>
              <p className="fleet-process__card-body">
                Rebuilt 60+ components from scratch. Documented states, variants, and usage rules. Handed off to developers with Figma annotations and acceptance criteria.
              </p>
              <div className="fleet-process__card-artifact">Result: Consistent QA, faster iterations.</div>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-num">04</div>
              <div className="fleet-process__card-title">Accessibility Layer</div>
              <p className="fleet-process__card-body">
                Audited contrast ratios and interaction patterns against WCAG 2.1 AA. Introduced focus states, screen reader labels, and motion reduction support.
              </p>
              <div className="fleet-process__card-artifact">Result: Zero critical accessibility failures in post-launch audit.</div>
            </div>
          </div>
          <div className="fleet-process__image-wrap fleet-process__image-wrap--ds">
            <img
              src="/fleet/fleet4.png"
              alt="Design system — token structure and component library"
              className="fleet-process__image"
            />
            <p className="fleet-process__ds-caption">Design system components audit</p>
          </div>
        </div>
      </section>

      {/* SECTION 7: EXECUTION / EVIDENCE */}
      <section className="case__section fleet-evidence">
        <div className="case__wrap">
          <div className="case__section-label">EVIDENCE</div>
          <h2 className="case__h2">From decisions to shipped product</h2>
          <p className="case__body">
            Key deliverables and prototypes from the Fleet redesign are shown below.
            The Fuel Locator video demonstrates the simplified flow validated with fleet managers.
          </p>

          <div className="fleet-prototype">
            <div className="video-wrapper" onClick={togglePlay}>
              <video
                ref={videoRef}
                className="video-wrapper__video"
                poster="/fleet/fuelsc1.png"
                playsInline
                preload="metadata"
                onEnded={() => setIsPlaying(false)}
              >
                <source
                  src="/video/fleet-fuellocator1.mp4"
                  type="video/mp4"
                />
              </video>
              {!isPlaying && (
                <div className="video-wrapper__play-btn">
                  ▶
                </div>
              )}
            </div>
            <p className="fleet-evidence__video-caption">Fuel Locator — interaction prototype · Figma · 2023</p>
          </div>
        </div>
      </section>

      {/* ⛔ DO NOT REMOVE: Before/After section — required. Use BeforeAfterSlider only. */}
      {/* SECTION 8: BEFORE / AFTER */}
      <section className="case__section fleet-before-after-sec">
        <div className="case__wrap">
          <div className="case__section-label">BEFORE / AFTER</div>
          <h2 className="case__h2">Fuel Summary — before / after redesign</h2>
          <p className="case__body fleet-before-after-sec__description">
            Static 8-column table replaced by a timeline dashboard with consumption trends and anomaly detection.
          </p>
          <BeforeAfterSlider
            beforeSrc="/fleet/fleetold.jpg"
            afterSrc="/fleet/fleetnew.jpg"
          />
        </div>
      </section>

      {/* SECTION 9: MOBILE */}
      <section className="case__section fleet-mobile">
        <div className="case__wrap">
          <div className="case__section-label">MOBILE</div>
          <h2 className="case__h2">Same system. Different surface.</h2>
          <p className="case__body fleet-process__body-lead">
            The web redesign couldn't exist in isolation — fleet drivers and operators work primarily on mobile. I led the mobile adaptation, ensuring the same component logic, IA decisions, and AI patterns translated to iOS and Android without rebuilding from scratch.
          </p>
          <div className="fleet-mobile__image-wrap">
            <img src="/fleet/mobilescreen.png" alt="Mobile app screens — Fleet platform on iOS and Android" className="fleet-mobile__image" />
          </div>
          <div className="fleet-mobile__cards">
            <div className="fleet-process__card">
              <div className="fleet-process__card-title">Shared component logic</div>
              <p className="fleet-process__card-body">
                Mobile components derived from the same token layer as web. One source, two surfaces.
              </p>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-title">Role-adapted IA</div>
              <p className="fleet-process__card-body">
                Mobile IA prioritized driver tasks — active route, fuel alert, check-in. Manager features moved to secondary navigation.
              </p>
            </div>
            <div className="fleet-process__card">
              <div className="fleet-process__card-title">Simplified interactions</div>
              <p className="fleet-process__card-body">
                Complex web flows reduced to 2–3 step mobile equivalents. Fuel locator went from 7 steps on web to 3 steps on mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: IMPACT */}
      <section className="case__section fleet-impact">
        <div className="case__wrap">
          <div className="case__section-label">IMPACT</div>
          <h2 className="case__h2">Measured outcomes</h2>
          <div className="fleet-impact__metrics">
            <div className="fleet-impact__metric">
              <div className="case__metric-num">23%</div>
              <div className="case__metric-label">Faster data interpretation</div>
              <div className="case__metric-desc">Dashboard replaced manual table analysis. Fleet managers reported significantly faster fuel and behavior pattern reading in post-launch usability review.</div>
            </div>
            <div className="fleet-impact__metric">
              <div className="case__metric-num">17%</div>
              <div className="case__metric-label">Reduction in manual reporting</div>
              <div className="case__metric-desc">Automated analytics replaced manual fuel tracking. Operational time saved per manager per week: ~40 minutes.</div>
            </div>
            <div className="fleet-impact__metric">
              <div className="case__metric-num">15%</div>
              <div className="case__metric-label">Improved fuel efficiency</div>
              <div className="case__metric-desc">Optimized refueling decision support reduced unnecessary detours and fuel waste across monitored fleets.</div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <nav className="fleet-nav" aria-label="Case study navigation">
        <div className="fleet-nav__wrap">
          <a href="#work" className="fleet-nav__link">← Back to Work</a>
          <a href="#" className="fleet-nav__link">Next: Customer Cabinet Redesign →</a>
        </div>
      </nav>
    </article>
  );
}
