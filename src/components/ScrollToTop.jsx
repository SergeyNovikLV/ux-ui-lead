import { useLayoutEffect, useEffect } from 'react';

const CASE_PAGES = ['mogo', 'eleving', 'product-os', 'fleet', 'banking', 'ukmedia'];

/**
 * Scrolls to correct position on route/page change.
 * - Case pages: always scroll to top (hero) — fixes "next case" landing at bottom
 * - work: scroll to #work section (Back to work link)
 * - home: scroll to top
 */
export default function ScrollToTop({ location }) {
  const isCasePage = CASE_PAGES.includes(location);

  useLayoutEffect(() => {
    if (location === 'work') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'auto' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location]);

  // Fallback: some browsers restore scroll after layout. Run again after paint.
  useEffect(() => {
    if (isCasePage) {
      const id = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isCasePage, location]);

  return null;
}
