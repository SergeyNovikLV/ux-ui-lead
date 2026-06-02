import { useInView } from "../hooks/useInView";
import "./CTA.css";

const EMAIL = "mr.noviks@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const LINKEDIN_URL = "https://www.linkedin.com/in/mr-noviks007/";
const LINKEDIN_DISPLAY = "linkedin.com/in/mr-noviks007";

export default function CTA() {
  const [ctaRef, ctaVisible] = useInView(0.08);

  return (
    <section id="contact" ref={ctaRef} className="cta">
      <div className="cta__inner">
        <p className={`cta__eyebrow ${ctaVisible ? "cta__eyebrow--visible" : ""}`}>Contact</p>
        <h2 className={`cta__title ${ctaVisible ? "cta__title--visible" : ""}`}>Let&apos;s talk</h2>
        <div className={`cta__line ${ctaVisible ? "cta__line--visible" : ""}`} aria-hidden />
        <p className={`cta__intro ${ctaVisible ? "cta__intro--visible" : ""}`}>
          If you&apos;re building complex fintech, enterprise, or operational products and need a designer who can bring structure, clarity, and delivery focus —
          I&apos;d be happy to connect.
        </p>

        <div className={`cta__block ${ctaVisible ? "cta__block--visible" : ""}`}>
          <div className="case__card cta__contact-card">
            <div className="cta__contact-row">
              <span className="cta__contact-label">Email</span>
              <a href={MAILTO} className="cta__contact-value cta__contact-value--link">
                {EMAIL}
              </a>
            </div>
            <div className="cta__contact-row">
              <span className="cta__contact-label">LinkedIn</span>
              <a href={LINKEDIN_URL} className="cta__contact-value cta__contact-value--link" target="_blank" rel="noopener noreferrer">
                {LINKEDIN_DISPLAY}
              </a>
            </div>
            <div className="cta__contact-row">
              <span className="cta__contact-label">Location</span>
              <span className="cta__contact-value">Riga, Latvia</span>
            </div>
          </div>

          <p className="cta__availability">
            Open to senior product design, UX, design systems, and AI-assisted product workflow opportunities.
          </p>

          <div className="cta__actions">
            <a href={MAILTO} className="cta__button">
              Email me
            </a>
            <a href={LINKEDIN_URL} className="cta__button cta__button--secondary" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
