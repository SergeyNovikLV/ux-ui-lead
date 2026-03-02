import { useInView } from "../hooks/useInView";
import "./CTA.css";

export default function CTA() {
  const [ctaRef, ctaVisible] = useInView(0.08);

  return (
    <section id="contact" ref={ctaRef} className="cta">
      <div className="cta__inner">
        <p className={`cta__eyebrow ${ctaVisible ? "cta__eyebrow--visible" : ""}`}>
          Let's talk
        </p>
        <h2 className={`cta__title ${ctaVisible ? "cta__title--visible" : ""}`}>
          Looking for a designer<br />who thinks in systems?
        </h2>
        <div className={`cta__line ${ctaVisible ? "cta__line--visible" : ""}`} />
        <a
          href="mailto:mr.noviks@gmail.com"
          className={`cta__button ${ctaVisible ? "cta__button--visible" : ""}`}
        >
          Get in touch
         
        </a>
      </div>
    </section>
  );
}
