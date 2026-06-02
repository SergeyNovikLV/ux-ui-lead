import { useState, useEffect } from "react";
import "./Hero.css";

const STATS = [
  { value: "10+ years", label: "Complex products" },
  { value: "Product systems", label: "Flows + quality" },
  { value: "AI delivery", label: "Cursor + Claude" },
];

export default function Hero() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className={`hero__headline-wrap ${heroVisible ? "hero__headline-wrap--visible" : ""}`}>
            <p className="hero__eyebrow">Product Designer</p>
            <p className="hero__subtitle">Fintech · Complex Flows · AI-Assisted Delivery</p>
            <h1 className="hero__title">Sergejs <span className="hero__title-outline">Noviks</span></h1>
            <div className="hero__accent-line" />
          </div>

          <div className={`hero__intro-wrap ${heroVisible ? "hero__intro-wrap--visible" : ""}`}>
            <p className="hero__intro">
              I design complex fintech and operational products where clarity, trust, and delivery speed matter — combining product thinking, systems logic, analytics, and AI-assisted workflows.
            </p>
          </div>

          <div className={`hero__stats ${heroVisible ? "hero__stats--visible" : ""}`}>
            {STATS.map(({ value, label }) => (
              <div key={value} className="hero__stat">
                <div className="hero__stat-value">{value}</div>
                <div className="hero__stat-label">{label}</div>
              </div>
            ))}
          </div>

          <p className={`hero__trusted ${heroVisible ? "hero__trusted--visible" : ""}`}>
            <strong>Trusted by:</strong> Channel 4 · Johnson &amp; Johnson · Deutsche Bank · Perfetti Van Melle · Mapon
          </p>
          <div
            className="hero__selected-wrap"
            onClick={scrollToWork}
            onKeyDown={(e) => e.key === "Enter" && scrollToWork()}
            role="button"
            tabIndex={0}
            aria-label="Scroll to selected work"
          >
            <p className="hero__selected-label">Selected works</p>
            <div className="hero__selected-chevron" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
