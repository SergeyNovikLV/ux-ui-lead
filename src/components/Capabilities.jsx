import { useInView } from "../hooks/useInView";
import "./Capabilities.css";

const SKILLS = [
  "Complex Flow Design",
  "Fintech UX",
  "Analytics-informed UX",
  "AI-assisted delivery",
  "Design Systems Governance",
  "UX Quality Gates",
  "Product Framing",
  "Cursor / Claude / Figma Make",
  "Accessibility",
  "Engineering Collaboration",
];

export default function Capabilities() {
  const [capRef, capVisible] = useInView(0.08);

  return (
    <section id="capabilities" ref={capRef} className="capabilities">
      <div className="capabilities__inner">
        <div className={`capabilities__left ${capVisible ? "capabilities__left--visible" : ""}`}>
          <p className="capabilities__eyebrow">Capabilities</p>
          <h2 className="capabilities__title">
            Product design<br /><em>beyond screens</em>
          </h2>
          <div className="capabilities__line" />
          <p className="capabilities__text">
            I work where UX, product logic, systems quality, and delivery meet — helping teams move from unclear problems to scalable product outcomes.
          </p>
          <p className="capabilities__domains"><strong>Domains:</strong> Fintech · Transportation · Healthcare · Media</p>
        </div>

        <div className={`capabilities__skills ${capVisible ? "capabilities__skills--visible" : ""}`}>
          {SKILLS.map((skill) => (
            <div key={skill} className="capabilities__skill">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
