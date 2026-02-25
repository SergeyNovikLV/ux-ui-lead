import { useInView } from "../hooks/useInView";
import "./Capabilities.css";

const SKILLS = [
  "Decision Architecture",
  "AI Integration Design",
  "Design Systems",
  "Token Strategy",
  "Operational UX",
  "Cross-functional Leadership",
  "Research to Outcome",
  "Fleet / Fintech",
  "WCAG Accessibility",
  "Product Strategy",
  "Interaction Design",
  "Governance",
];

export default function Capabilities() {
  const [capRef, capVisible] = useInView(0.08);

  return (
    <section id="about" ref={capRef} className="capabilities">
      <div className="capabilities__inner">
        <div className={`capabilities__left ${capVisible ? "capabilities__left--visible" : ""}`}>
          <p className="capabilities__eyebrow">Capabilities</p>
          <h2 className="capabilities__title">
            Design as a<br /><em>product decision</em>
          </h2>
          <div className="capabilities__line" />
          <p className="capabilities__text">
            Every decision mapped to an operational outcome, a risk removed, or a constraint honored. Not execution for its own sake.
          </p>
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
