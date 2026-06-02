import { forwardRef, useRef } from 'react';
import { useCardGroupMultilineTitles } from '../hooks/useCardGroupMultilineTitles';

function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((r) => {
      if (r == null) return;
      if (typeof r === 'function') r(node);
      else r.current = node;
    });
  };
}

/**
 * Wraps a card grid/list so [data-case-card-title] children stay compact when all titles
 * are one line, and align to the tallest title per row when any title wraps.
 */
const CaseCardTitleGroup = forwardRef(function CaseCardTitleGroup(
  { as: Comp = 'div', className = '', children, ...rest },
  ref
) {
  const localRef = useRef(null);
  useCardGroupMultilineTitles(localRef);
  const mergedClass = ['case-card-grid', className].filter(Boolean).join(' ');
  return (
    <Comp ref={mergeRefs(localRef, ref)} className={mergedClass} {...rest}>
      {children}
    </Comp>
  );
});

export default CaseCardTitleGroup;
