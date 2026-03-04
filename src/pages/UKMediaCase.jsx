import { useState, useRef } from 'react';
import './UKMediaCase.css';
import { asset } from '../config/paths';
import ZoomableImage from '../components/ZoomableImage';
import { ArrowLeft, ArrowRight, Compass, ClipboardList, ShieldCheck, ScanEye, FlaskConical, Wrench } from 'lucide-react';
import RoleAndScope from '../components/RoleAndScope';
import ResearchSignalCard from '../components/ResearchSignalCard';
import { ukMediaRoleScope } from '../data/roleScopeData';

export default function UKMediaCase() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoHover, setVideoHover] = useState(false);
  const ukVideoRef = useRef(null);

  const toggleUkVideo = () => {
    const v = ukVideoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setVideoPlaying(true);
    } else {
      v.pause();
      setVideoPlaying(false);
    }
  };

  const onUkVideoPlay = () => setVideoPlaying(true);
  const onUkVideoPause = () => setVideoPlaying(false);
  const onUkVideoEnded = () => setVideoPlaying(false);
  return (
    <article className="eleving mogo-case">
      {/* HERO */}
      <section className="case__section eleving-hero">
        <div className="case__wrap">
          <div className="eleving-hero__grid">
            <div className="eleving-hero__text">
              <div className="case__hero-label">MEDIA & ENTERTAINMENT · PRODUCT DESIGN · MOBILE PLATFORM</div>
              <h1 className="eleving-hero__title">Reimagining the UK's top TV app</h1>
              <p className="eleving-hero__subtitle">Led cross-platform rebrand and accessibility overhaul for a 28M+ user public TV app — unifying iOS/Android UX, enabling 200% text scaling, and rebuilding the design system and tooling (Sketch → Figma).</p>
              <div className="eleving-hero__divider" aria-hidden />
            </div>
          </div>

          <div className="mogo-hero__under">
            <p className="mogo-hero__metric-context">Baseline → post-release (2021–2022)</p>
            <div className="mogo-hero__metrics">
              <div className="case__stat">
                <div className="case__stat-num">9%</div>
                <div className="case__stat-label">Increase in user engagement</div>
                <div className="case__stat-desc">Unified UI language and improved accessibility patterns.</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">15%</div>
                <div className="case__stat-label">Faster design-to-development handoff</div>
                <div className="case__stat-desc">Shared Figma library and parity rules reduced rework.</div>
              </div>
              <div className="case__stat">
                <div className="case__stat-num">7%</div>
                <div className="case__stat-label">Increase in accessible usage</div>
                <div className="case__stat-desc">200% text scaling and VoiceOver improvements.</div>
              </div>
            </div>
          </div>

          <div className="hero-split">
            <ZoomableImage src={asset("ukc4/uk1.jpg")} alt="UK TV app — rebrand and accessibility overhaul" className="mogo-hero__img" />
          </div>
        </div>
      </section>

      <RoleAndScope {...ukMediaRoleScope} />

      {/* 02 — PROBLEM */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">02 — PROBLEM</div>
          <h2 className="case__h2">Where scale exposed inconsistency</h2>
          <p className="case__body">Rebrand under scale and accessibility pressure. Cross-platform inconsistency, accessibility gaps, and tooling fragmentation slowed both UX and delivery.</p>
          <p className="case__body"><strong>System misalignment</strong> — not just visual aging.</p>
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
                UI audit, accessibility review, and prototype validation pinpointed friction and translated it into structural decisions.
              </p>
            </div>
            <ResearchSignalCard
              eyebrow="UI AUDIT"
              title="Cross-platform inconsistency mapping"
              method="UI audit mapping iOS (HIG) vs Android (Material) components."
              signal="40+ inconsistencies causing navigation differences and implementation delays."
              decision="Define a unified component logic and parity rules across platforms."
            />
            <ResearchSignalCard
              eyebrow="ACCESSIBILITY AUDIT"
              title="WCAG + scaling / VoiceOver"
              method="Accessibility review focusing on text scaling and screen reader patterns."
              signal="Text scaling and navigation patterns blocked accessibility-heavy flows."
              decision="Implement text resizing with layout preservation; improve VoiceOver discoverability."
            />
            <ResearchSignalCard
              eyebrow="PROTOTYPE VALIDATION"
              title="Usability testing / A/B prototypes"
              method="Usability testing cycles and prototype comparisons."
              signal="Navigation confusion and accessibility friction in key flows."
              decision="Iterate navigation clarity across key flows and confirm improvements through usability validation."
            />
          </div>
          <div className="fleet-section__video">
            <div
              className="fleet-section__video-wrap"
              onMouseEnter={() => setVideoHover(true)}
              onMouseLeave={() => setVideoHover(false)}
            >
              <video
                ref={ukVideoRef}
                src={asset("videos/cvideo.mp4")}
                controls
                playsInline
                className="fleet-section__video-el"
                onPlay={onUkVideoPlay}
                onPause={onUkVideoPause}
                onEnded={onUkVideoEnded}
              />
              <div className={`fleet-section__video-center ${videoPlaying || !videoHover ? 'fleet-section__video-center--hidden' : ''}`} aria-hidden>
                <button type="button" className="fleet-section__video-play" onClick={toggleUkVideo} aria-label="Play">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div className={`fleet-section__video-center fleet-section__video-center--pause ${!videoPlaying || !videoHover ? 'fleet-section__video-center--hidden' : ''}`} aria-hidden>
                <button type="button" className="fleet-section__video-play fleet-section__video-play--pause" onClick={toggleUkVideo} aria-label="Pause">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
                    <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="fleet-section__video-caption">A/B testing example.</p>
          </div>
        </div>
      </section>

      {/* 04 — REDESIGN */}
      <section className="case__section mogo-section">
        <div className="case__wrap">
          <div className="case__section-label">04 — REDESIGN</div>
          <h2 className="case__h2">Redesign summary</h2>
          <p className="case__body">Unified cross-platform language, rebuilt library, and enabled text resizing without breaking layouts.</p>
          <ul className="case__list">
            <li>Mapped HIG + Material components into a shared parity model</li>
            <li>Built shared component library in Figma (single source of truth)</li>
            <li>Implemented text resizing + improved VoiceOver patterns</li>
            <li>Tightened QA and validation loops for mobile delivery consistency</li>
          </ul>
          <div className="mogo-section__image">
            <ZoomableImage src={asset("ukc4/tvzoom.jpg")} alt="UK TV app — 200% text scaling and layout preservation" className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 05 — KEY DECISIONS */}
      <section className="case__section case__key-decisions">
        <div className="case__wrap case__key-decisions__wrap">
          <div className="case__key-decisions__left">
            <div className="case__section-label">05 — KEY DECISIONS</div>
            <h2 className="case__h2">Rules and trade-offs behind the redesign</h2>
            <p className="case__body">These decisions explain how I chose what to unify, what to rebuild, and how to protect accessibility without slowing delivery.</p>
          </div>
          <div className="case__key-decisions__right">
            <div className="case__key-decisions__list">
              <div className="case__decision">
                <span className="case__decision-num">01</span>
                <div>
                  <div className="case__decision-title">Unified design language across iOS & Android</div>
                  <p className="case__decision-body">Parity with native feel — one shared component logic and visual language across platforms.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">02</span>
                <div>
                  <div className="case__decision-title">Text resizing with layout preservation</div>
                  <p className="case__decision-body">Accessibility as a structural requirement — layouts adapt without breaking.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">03</span>
                <div>
                  <div className="case__decision-title">Sketch → Figma as shared system library</div>
                  <p className="case__decision-body">Single source of truth for components — reduced drift and faster handoff.</p>
                </div>
              </div>
              <div className="case__decision">
                <span className="case__decision-num">04</span>
                <div>
                  <div className="case__decision-title">Accessibility as a release requirement</div>
                  <p className="case__decision-body">Scaling and VoiceOver parity shipped with every release — not optional.</p>
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
          <p className="case__body">A redesign only works if it ships reliably, stays consistent, and doesn't drift after release.</p>
          <p className="case__body case__body--strong">The system I introduced</p>
          <div className="mogo-system__grid">
            <div className="mogo-system__item">
              <Compass size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">Parity rules (HIG/Material mapping)</h3>
              <p className="mogo-system__desc">Mapped HIG and Material into shared parity rules so both platforms stay aligned as the product evolves.</p>
            </div>
            <div className="mogo-system__item">
              <ClipboardList size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">Shared Figma library governance (reuse standards)</h3>
              <p className="mogo-system__desc">Component reuse standards and governance — single source of truth for design and dev.</p>
            </div>
            <div className="mogo-system__item">
              <ShieldCheck size={32} className="mogo-system__icon" aria-hidden />
              <h3 className="mogo-system__title">Accessibility QA gate (text resizing + VoiceOver checks)</h3>
              <p className="mogo-system__desc">Scaling and VoiceOver validation before release — accessibility regressions caught early.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — IMPACT */}
      <section className="case__section mogo-impact">
        <div className="case__wrap">
          <div className="case__section-label">07 — IMPACT</div>
          <h2 className="case__h2">Results</h2>
          <p className="case__body mogo-impact__intro">Engagement and delivery improved because we unified iOS/Android patterns and made accessibility a system baseline — reducing user friction and implementation drift.</p>
          <ul className="mogo-impact__list">
            <li>Cross-platform parity removed navigation differences between iOS and Android.</li>
            <li>Accessibility patterns shipped consistently (text resizing + VoiceOver), not as follow-up fixes.</li>
            <li>Shared Figma library and governance reduced rework and kept releases aligned.</li>
          </ul>
          <div className="mogo-section__image">
            <ZoomableImage src={asset("ukc4/uktv5.png")} alt="UK TV app — impact results" className="mogo-section__img" />
          </div>
        </div>
      </section>

      {/* 08 — NEXT STEPS */}
      <section className="case__section mogo-next">
        <div className="case__wrap">
          <div className="case__section-label">08 — NEXT STEPS</div>
          <h2 className="case__h2">How I'd extend the win</h2>
          <p className="case__body mogo-next__lead">To keep improving without reintroducing drift, I'd run a lightweight iteration loop:</p>
          <div className="mogo-next__grid">
            <div className="mogo-next__card">
              <ScanEye size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">Accessibility regression checks per release</h3>
              <p className="mogo-next__text">Scaling + VoiceOver validation per release to catch regressions early.</p>
            </div>
            <div className="mogo-next__card">
              <FlaskConical size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">Component parity hardening</h3>
              <p className="mogo-next__text">Continue edge case coverage across platforms as new features ship.</p>
            </div>
            <div className="mogo-next__card">
              <Wrench size={32} className="mogo-next__icon" aria-hidden />
              <h3 className="mogo-next__title">Expand library coverage</h3>
              <p className="mogo-next__text">Grow the shared library as new components and patterns enter production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — TAKEAWAYS */}
      <section className="case__section mogo-takeaways">
        <div className="case__wrap">
          <div className="case__section-label">09 — TAKEAWAYS</div>
          <h2 className="case__h2">Executive takeaways</h2>
          <div className="mogo-takeaways__numbered">
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">01</span>
              <p className="mogo-takeaways__num-title">Accessibility in system foundations</p>
              <p className="mogo-takeaways__num-text">Scaling, VoiceOver, contrast as tokens — not bolt-ons.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">02</span>
              <p className="mogo-takeaways__num-title">Text scaling is a product requirement at scale</p>
              <p className="mogo-takeaways__num-text">Text resizing with layout preservation at 28M+ users demands structural design.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">03</span>
              <p className="mogo-takeaways__num-title">Tooling (Figma) can be a delivery multiplier</p>
              <p className="mogo-takeaways__num-text">Sketch → Figma as source of truth reduced handoff time and implementation drift.</p>
            </div>
            <div className="mogo-takeaways__num-item">
              <span className="mogo-takeaways__num-digit">04</span>
              <p className="mogo-takeaways__num-title">Parity rules + QA gates prevent drift</p>
              <p className="mogo-takeaways__num-text">HIG/Material mapping and accessibility QA kept production aligned with intent.</p>
            </div>
          </div>
        </div>
      </section>

      <nav className="eleving-nav" aria-label="Case study navigation">
        <div className="eleving-nav__wrap">
          <a href="#work" className="eleving-nav__link"><ArrowLeft size={16} strokeWidth={2} aria-hidden /> Back to Work</a>
          <a href="#mogo" className="eleving-nav__link">Next: Mogo Loan App <ArrowRight size={16} strokeWidth={2} aria-hidden /></a>
        </div>
      </nav>
    </article>
  );
}
