import { GitMerge, Layers3, LayoutGrid, Accessibility } from 'lucide-react';

const ICON_MAP = { '01': GitMerge, '02': Layers3, '03': LayoutGrid, '04': Accessibility };

export default function DesignSystemPillars({ pillars }) {
  return (
    <div className="case__ds-pillars">
      {pillars.map((p) => {
        const Icon = ICON_MAP[p.num] ?? GitMerge;
        return (
        <div key={p.num} className="case__ds-pillar">
          <span className="case__ds-pillar-icon" aria-hidden><Icon size={22} strokeWidth={2} /></span>
          <div className="case__ds-pillar-title">{p.title}</div>
          <p className="case__ds-pillar-body">{p.description}</p>
          <p className="case__ds-pillar-result"><strong>Result:</strong> {p.result}</p>
        </div>
        );
      })}
    </div>
  );
}
