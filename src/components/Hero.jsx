import { useState, useEffect } from "react";
import "./Hero.css";

const VISUALS = {
  ds: (
    <svg viewBox="0 0 480 300" fill="none">
      <rect width="480" height="300" fill="#f5f3ef" />
      <rect x="24" y="24" width="432" height="48" rx="4" fill="#fff" stroke="#e0dbd4" strokeWidth="1" />
      <rect x="36" y="36" width="80" height="8" rx="2" fill="#ccc8c0" />
      <rect x="36" y="48" width="120" height="6" rx="1.5" fill="#e0dbd4" />
      <rect x="200" y="34" width="40" height="10" rx="2" fill="#E87722" opacity="0.15" />
      <rect x="204" y="37" width="32" height="4" rx="1" fill="#E87722" opacity="0.8" />
      <rect x="250" y="34" width="40" height="10" rx="2" fill="#E87722" opacity="0.1" />
      <rect x="254" y="37" width="32" height="4" rx="1" fill="#ccc8c0" />
      <rect x="298" y="34" width="40" height="10" rx="2" fill="#E87722" opacity="0.1" />
      <rect x="302" y="37" width="32" height="4" rx="1" fill="#ccc8c0" />
      <rect x="360" y="32" width="88" height="14" rx="3" fill="#E87722" opacity="0.12" stroke="#E87722" strokeWidth="0.8" />
      <rect x="368" y="37" width="56" height="4" rx="1" fill="#E87722" opacity="0.9" />
      <line x1="240" y1="72" x2="240" y2="92" stroke="#d0cbc4" strokeWidth="1.5" strokeDasharray="3 2" />
      <polygon points="236,90 240,96 244,90" fill="#d0cbc4" />
      <rect x="24" y="96" width="432" height="60" rx="4" fill="#fff" stroke="#e0dbd4" strokeWidth="1" />
      <rect x="36" y="106" width="60" height="7" rx="2" fill="#ccc8c0" />
      {["#E87722","#2a2520","#6b6560","#e8e4de","#f5f3ef","#22c55e"].map((col,i) => (
        <g key={i}>
          <rect x={36 + i*52} y={118} width={20} height={20} rx="3" fill={col} />
          <rect x={36 + i*52} y={142} width={38} height={5} rx="1.5" fill="#e0dbd4" />
        </g>
      ))}
      <line x1="240" y1="156" x2="240" y2="176" stroke="#d0cbc4" strokeWidth="1.5" strokeDasharray="3 2" />
      <polygon points="236,174 240,180 244,174" fill="#d0cbc4" />
      {[
        { label: "Mogo", x: 24, color: "#E87722" },
        { label: "Primero", x: 168, color: "#2a6496" },
        { label: "MyMogo", x: 312, color: "#22a85a" },
      ].map(({ label, x, color }) => (
        <g key={label}>
          <rect x={x} y={180} width={120} height={64} rx="4" fill="#fff" stroke="#e0dbd4" strokeWidth="1" />
          <rect x={x} y={180} width={120} height={18} rx="4" fill={color} opacity="0.1" />
          <rect x={x+8} y={186} width={40} height={6} rx="1.5" fill={color} opacity="0.8" />
          <rect x={x+8} y={202} width={80} height={5} rx="1.5" fill="#e0dbd4" />
          <rect x={x+8} y={212} width={60} height={5} rx="1.5" fill="#e8e4de" />
          <rect x={x+8} y={222} width={70} height={5} rx="1.5" fill="#e8e4de" />
        </g>
      ))}
      <rect x="24" y="256" width="432" height="28" rx="4" fill="#faf8f5" stroke="#e0dbd4" strokeWidth="0.8" strokeDasharray="4 3" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={36+i*56} y={264} width={48} height={12} rx="2" fill={i===3?"#E87722":"#fff"} opacity={i===3?"0.15":"1"} stroke={i===3?"#E87722":"#e0dbd4"} strokeWidth="0.8" />
      ))}
      <rect x="316" y="264" width="140" height="12" rx="2" fill="#f0ede8" stroke="#e0dbd4" strokeWidth="0.8" />
    </svg>
  ),
};

export default function Hero() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className={`hero__status ${heroVisible ? "hero__status--visible" : ""}`}>
            <span className="hero__status-dot" />
            <span className="hero__status-label">Available for opportunities</span>
          </div>

          <div className={`hero__headline-wrap ${heroVisible ? "hero__headline-wrap--visible" : ""}`}>
            <p className="hero__eyebrow">Senior UX/UI / Product designer</p>
            <h1 className="hero__title">Sergejs <span className="hero__title-outline">Noviks</span></h1>
            <div className="hero__accent-line" />
          </div>

          <div className={`hero__intro-wrap ${heroVisible ? "hero__intro-wrap--visible" : ""}`}>
            <p className="hero__intro">
              10 years designing complex systems where decisions carry real weight — operational platforms, fintech products, media infrastructure, AI integration.
            </p>
          </div>

          <div className={`hero__stats ${heroVisible ? "hero__stats--visible" : ""}`}>
            {[
              { value: "10+", valueLine2: "Years", label: "experience", size: "default" },
              { value: "AI + Systems", label: "Product design focus", size: "small" },
              { value: "Multi-brand", label: "Design systems built", size: "small" },
            ].map(({ value, valueLine2, label, size }) => (
              <div key={label} className="hero__stat">
                <div className={`hero__stat-main ${size === "small" ? "hero__stat-main--small" : ""}`}>
                  {value}
                </div>
                {valueLine2 && (
                  <div className={`hero__stat-main ${size === "small" ? "hero__stat-main--small" : ""}`}>
                    {valueLine2}
                  </div>
                )}
                <div className="hero__stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`hero__mockup ${heroVisible ? "hero__mockup--visible" : ""}`} aria-hidden="true">
        {VISUALS.ds}
      </div>
    </section>
  );
}
