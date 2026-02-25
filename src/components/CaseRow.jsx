import { useState } from "react";
import { useInView } from "../hooks/useInView";
import "./CaseRow.css";

const VISUALS = {
  ds: (
    <svg viewBox="0 0 480 300" fill="none">
      <rect width="480" height="300" fill="#f5f3ef" />
      <rect x="24" y="24" width="432" height="48" rx="4" fill="#fff" stroke="#C8C2BA" strokeWidth="1" />
      <rect x="36" y="36" width="80" height="8" rx="2" fill="#B0A8A0" />
      <rect x="36" y="48" width="120" height="6" rx="1.5" fill="#C8C2BA" />
      <rect x="200" y="34" width="40" height="10" rx="2" fill="#E87722" opacity="0.15" />
      <rect x="204" y="37" width="32" height="4" rx="1" fill="#E87722" opacity="0.8" />
      <rect x="250" y="34" width="40" height="10" rx="2" fill="#E87722" opacity="0.1" />
      <rect x="254" y="37" width="32" height="4" rx="1" fill="#B0A8A0" />
      <rect x="298" y="34" width="40" height="10" rx="2" fill="#E87722" opacity="0.1" />
      <rect x="302" y="37" width="32" height="4" rx="1" fill="#B0A8A0" />
      <rect x="360" y="32" width="88" height="14" rx="3" fill="#E87722" opacity="0.12" stroke="#E87722" strokeWidth="0.8" />
      <rect x="368" y="37" width="56" height="4" rx="1" fill="#E87722" opacity="0.9" />
      <line x1="240" y1="72" x2="240" y2="92" stroke="#d0cbc4" strokeWidth="1.5" strokeDasharray="3 2" />
      <polygon points="236,90 240,96 244,90" fill="#d0cbc4" />
      <rect x="24" y="96" width="432" height="60" rx="4" fill="#fff" stroke="#C8C2BA" strokeWidth="1" />
      <rect x="36" y="106" width="60" height="7" rx="2" fill="#B0A8A0" />
      {["#E87722","#2a2520","#6b6560","#e8e4de","#f5f3ef","#22c55e"].map((col,i) => (
        <g key={i}>
          <rect x={36 + i*52} y={118} width={20} height={20} rx="3" fill={col} />
          <rect x={36 + i*52} y={142} width={38} height={5} rx="1.5" fill="#C8C2BA" />
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
          <rect x={x} y={180} width={120} height={64} rx="4" fill="#fff" stroke="#C8C2BA" strokeWidth="1" />
          <rect x={x} y={180} width={120} height={18} rx="4" fill={color} opacity="0.1" />
          <rect x={x+8} y={186} width={40} height={6} rx="1.5" fill={color} opacity="0.8" />
          <rect x={x+8} y={202} width={80} height={5} rx="1.5" fill="#C8C2BA" />
          <rect x={x+8} y={212} width={60} height={5} rx="1.5" fill="#e8e4de" />
          <rect x={x+8} y={222} width={70} height={5} rx="1.5" fill="#e8e4de" />
        </g>
      ))}
      <rect x="24" y="256" width="432" height="28" rx="4" fill="#faf8f5" stroke="#C8C2BA" strokeWidth="0.8" strokeDasharray="4 3" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={36+i*56} y={264} width={48} height={12} rx="2" fill={i===3?"#E87722":"#fff"} opacity={i===3?"0.15":"1"} stroke={i===3?"#E87722":"#C8C2BA"} strokeWidth="0.8" />
      ))}
      <rect x="316" y="264" width="140" height="12" rx="2" fill="#f0ede8" stroke="#C8C2BA" strokeWidth="0.8" />
    </svg>
  ),
  fleet: (
    <svg viewBox="0 0 480 300" fill="none">
      <rect width="480" height="300" fill="#f0ede8" />
      <rect x="20" y="20" width="320" height="220" rx="6" fill="#fff" stroke="#C8C2BA" strokeWidth="1" />
      <rect x="20" y="20" width="320" height="34" rx="6" fill="#f7f4f0" />
      <rect x="20" y="40" width="320" height="14" fill="#f7f4f0" />
      <rect x="32" y="30" width="64" height="7" rx="2" fill="#d0ccc6" />
      <rect x="20" y="54" width="60" height="186" fill="#faf8f5" stroke="#e8e4df" strokeWidth="0.5" />
      <rect x="28" y="66" width="44" height="6" rx="2" fill="#E87722" opacity="0.85" />
      {[80,94,108,122].map(y => <rect key={y} x={28} y={y} width={36+Math.random()*8|0} height={6} rx="2" fill="#d0ccc6" />)}
      <rect x="88" y="54" width="252" height="186" fill="#fff" />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={96+i*58} y={62} width={52} height={36} rx="3" fill={i===3?"#E87722":"#faf8f5"} opacity={i===3?"0.12":"1"} stroke={i===3?"#E87722":"#ece8e2"} strokeWidth="0.8" />
          <rect x={100+i*58} y={68} width={28} height={5} rx="1.5" fill={i===3?"#E87722":"#c0bcb6"} opacity={i===3?"0.7":"1"} />
          <rect x={100+i*58} y={77} width={20} height={8} rx="1.5" fill={i===3?"#E87722":"#3a3630"} />
        </g>
      ))}
      <rect x="96" y="106" width="236" height="80" rx="3" fill="#faf8f5" stroke="#ece8e2" strokeWidth="0.8" />
      <polyline points="104,172 124,154 144,159 164,142 184,149 204,132 224,136 244,124 264,129 284,116 304,122 324,112" stroke="#E87722" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="104,179 124,174 144,176 164,169 184,172 204,162 224,166 244,159 264,162 284,154 304,157 324,152" stroke="#3a3630" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" />
      {[194,206,216,226].map((y,i) => <rect key={y} x={96} y={y} width={i%2===0?236:180} height={i===0?6:5} rx="1.5" fill={i%2===0?"#ece8e2":"#C8C2BA"} />)}
    </svg>
  ),
  cabinet: (
    <svg viewBox="0 0 480 300" fill="none">
      <rect width="480" height="300" fill="#f2f4f8" />
      <rect x="32" y="32" width="416" height="40" rx="6" fill="#fff" stroke="#dde0e8" strokeWidth="1" />
      {["Apply","Eligibility","Documents","Review","Contract"].map((step, i) => (
        <g key={step}>
          <circle cx={60 + i*82} cy={52} r={i < 3 ? 10 : 8} fill={i < 3 ? "#E87722" : i===3 ? "#fff" : "#f0f2f6"} stroke={i===3 ? "#E87722" : "none"} strokeWidth={i===3?"1.5":"0"} />
          {i < 3 && <text x={60+i*82} y={56} textAnchor="middle" fill="#fff" fontSize="9" fontFamily="sans-serif">{i+1}</text>}
          {i === 3 && <text x={60+i*82} y={56} textAnchor="middle" fill="#E87722" fontSize="9" fontFamily="sans-serif">4</text>}
          {i < 4 && <line x1={70+i*82} y1={52} x2={134+i*82} y2={52} stroke={i<2?"#E87722":"#dde0e8"} strokeWidth="1.5" strokeDasharray={i>=2?"3 2":"none"} />}
        </g>
      ))}
      <rect x="32" y="86" width="260" height="190" rx="6" fill="#fff" stroke="#dde0e8" strokeWidth="1" />
      <rect x="48" y="100" width="120" height="8" rx="2" fill="#2a2a30" />
      <rect x="48" y="114" width="200" height="5" rx="1.5" fill="#c0c4cc" />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={48} y={128+i*30} width={80} height={5} rx="1.5" fill="#b0b4c0" />
          <rect x={48} y={137+i*30} width={224} height={14} rx="3" fill={i===1?"#fffaf6":"#f5f6fa"} stroke={i===1?"#E87722":"#dde0e8"} strokeWidth={i===1?"1":"0.8"} />
          {i===1 && <rect x={52} y={141+i*30} width={80} height={6} rx="1.5" fill="#E87722" opacity="0.7" />}
        </g>
      ))}
      <rect x="48" y="246" width="100" height="20" rx="4" fill="#E87722" />
      <rect x="56" y="253" width={68} height="6" rx="1.5" fill="#fff" />
      <rect x="308" y="86" width="140" height="90" rx="6" fill="#fff" stroke="#dde0e8" strokeWidth="1" />
      <rect x="320" y="98" width="80" height="7" rx="2" fill="#2a2a30" />
      <rect x="320" y="110" width="100" height="5" rx="1.5" fill="#c0c4cc" />
      <rect x="320" y="122" width="60" height="5" rx="1.5" fill="#c0c4cc" />
      <rect x="320" y="134" width="40" height="16" rx="3" fill="#E87722" opacity="0.1" stroke="#E87722" strokeWidth="0.8" />
      <rect x="326" y="140" width="28" height="5" rx="1.5" fill="#E87722" opacity="0.9" />
      <rect x="308" y="188" width="140" height="88" rx="6" fill="#fffaf6" stroke="#E87722" strokeWidth="1" />
      <rect x="320" y="200" width="60" height="5" rx="1.5" fill="#E87722" opacity="0.7" />
      <rect x="320" y="212" width="100" height="7" rx="2" fill="#2a2a30" />
      <rect x="320" y="224" width="90" height="5" rx="1.5" fill="#c0c4cc" />
      <rect x="320" y="234" width="80" height="5" rx="1.5" fill="#c0c4cc" />
      <rect x="320" y="248" width="80" height="18" rx="3" fill="#E87722" />
      <rect x="328" y="254" width="56" height="5" rx="1.5" fill="#fff" />
    </svg>
  ),
  banking: (
    <svg viewBox="0 0 480 300" fill="none">
      <rect width="480" height="300" fill="#eef0f5" />
      <rect x="40" y="28" width="300" height="200" rx="7" fill="#fff" stroke="#dde0e8" strokeWidth="1" />
      <rect x="40" y="28" width="300" height="38" rx="7" fill="#f5f6fa" />
      <rect x="40" y="52" width="300" height="14" fill="#f5f6fa" />
      <rect x="56" y="40" width="80" height="7" rx="2" fill="#c8ccd8" />
      <circle cx="316" cy="44" r="7" fill="#e2e4ec" />
      <circle cx="326" cy="44" r="5" fill="#E87722" opacity="0.9" />
      <rect x="56" y="72" width="36" height="14" rx="2" fill="#E87722" opacity="0.12" />
      <rect x="56" y="75" width="36" height="8" rx="1.5" fill="#E87722" opacity="0.85" />
      <rect x="100" y="75" width="28" height="8" rx="1.5" fill="#c8ccd8" />
      <rect x="136" y="75" width="32" height="8" rx="1.5" fill="#c8ccd8" />
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <rect x={56} y={96+i*20} width={268} height={14} rx="2" fill={i%2===0?"#f5f6fa":"transparent"} />
          <circle cx={66} cy={103+i*20} r={4} fill="#dde0e8" />
          <rect x={76} y={100+i*20} width={60} height={6} rx="1.5" fill="#b0b4c0" />
          <rect x={146} y={100+i*20} width={40} height={6} rx="1.5" fill="#c8ccd8" />
          <rect x={196} y={100+i*20} width={30} height={6} rx="1.5" fill={i===1?"#E87722":"#c8ccd8"} opacity={i===1?"0.9":"1"} />
          <rect x={236} y={100+i*20} width={50} height={6} rx="1.5" fill="#dde0e8" />
        </g>
      ))}
      <rect x="360" y="80" width="76" height="32" rx="4" fill="#f0f8f0" stroke="#22c55e" strokeWidth="1" />
      <rect x="370" y="90" width="56" height="5" rx="1.5" fill="#22c55e" opacity="0.8" />
      <rect x="374" y="99" width="44" height="5" rx="1.5" fill="#22a850" />
    </svg>
  ),
};

export default function CaseRow({ c, index, transitionDelay }) {
  const [ref, visible] = useInView(0.04);
  const [hovered, setHovered] = useState(false);

  const cardContent = (
    <article
      ref={ref}
      className={`case-row ${visible ? "case-row--visible" : ""}`}
      style={{ ['--case-row-bg']: c.bg, ['--case-row-delay']: `${transitionDelay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="case-row__inner">
          <div className="case-row__grid">
            <div className="case-row__content">
              <h2 className="case-row__title">{c.title}</h2>
              <p className="case-row__description">{c.description}</p>
              <p className="case-row__context">{c.context}</p>
              <p className="case-row__impact">{c.impact}</p>
              <div className="case-row__cta-wrap">
                <span className="case-row__cta-text">View case</span>
                <svg className="case-row__cta-arrow" width="18" height="7" viewBox="0 0 18 7" fill="none">
                  <path d="M0 3.5H16M13 1L17 3.5L13 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className={`case-row__visual-wrap ${hovered ? "case-row__visual-wrap--hover" : ""}`}>
              <div className="case-row__visual-inner">
                {c.thumbnailSrc ? (
                  <img src={c.thumbnailSrc} alt="" className="case-row__thumbnail" />
                ) : (
                  VISUALS[c.visual]
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
  );

  return c.slug ? (
    <a href={`#${c.slug}`} className="case-row__link">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
}
