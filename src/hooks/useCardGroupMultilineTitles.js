import { useCallback, useLayoutEffect } from 'react';

const TITLE_SEL = '[data-case-card-title]';
const ROW_ATTR = 'data-case-card-row';
const CARD_SEL = '.role-scope__card, .rs-card, .mogo-system__card, .mogo-next__card, .mogo-takeaways__item, .case__card, .eleving-evidence__card, .case__stat';

const ROW_CLUSTER_PX = 10;

function lineHeightPx(el) {
  const cs = getComputedStyle(el);
  let lh = parseFloat(cs.lineHeight);
  if (!Number.isFinite(lh) || cs.lineHeight === 'normal' || lh <= 0) {
    const fs = parseFloat(cs.fontSize) || 16;
    lh = fs * 1.25;
  }
  return lh;
}

function titleHeightPx(el) {
  return el.getBoundingClientRect().height;
}

function isSingleLineTitle(el) {
  return titleHeightPx(el) <= lineHeightPx(el) + 2;
}

function cardAnchor(el) {
  return el.closest(ROW_ATTR) || el.closest(CARD_SEL) || el.parentElement;
}

/** Group titles by data-case-card-row, or by shared vertical position in the grid. */
function groupTitlesByRow(titles) {
  const withRowAttr = titles.filter((el) => el.closest(`[${ROW_ATTR}]`));
  if (withRowAttr.length === titles.length) {
    const map = new Map();
    titles.forEach((el) => {
      const key = el.closest(`[${ROW_ATTR}]`).getAttribute(ROW_ATTR);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(el);
    });
    return [...map.values()];
  }

  const sorted = [...titles].sort((a, b) => cardAnchor(a).getBoundingClientRect().top - cardAnchor(b).getBoundingClientRect().top);
  const groups = [];
  let bucket = [];
  let clusterTop = null;

  sorted.forEach((el) => {
    const top = cardAnchor(el).getBoundingClientRect().top;
    if (clusterTop === null || Math.abs(top - clusterTop) <= ROW_CLUSTER_PX) {
      bucket.push(el);
      if (clusterTop === null) clusterTop = top;
    } else {
      groups.push(bucket);
      bucket = [el];
      clusterTop = top;
    }
  });

  if (bucket.length) groups.push(bucket);
  return groups;
}

function alignTitleRow(rowTitles) {
  rowTitles.forEach((el) => {
    el.style.minHeight = '';
  });

  if (!rowTitles.length) return;

  const allSingleLine = rowTitles.every(isSingleLineTitle);
  if (allSingleLine) return;

  const maxH = Math.max(...rowTitles.map(titleHeightPx));
  rowTitles.forEach((el) => {
    el.style.minHeight = `${maxH}px`;
  });
}

/**
 * Per card group / visual row: compact single-line titles by default.
 * When any title wraps, equalize to the tallest measured title in that row only.
 */
export function useCardGroupMultilineTitles(containerRef) {
  const run = useCallback(() => {
    const root = containerRef?.current;
    if (!root || typeof window === 'undefined') return;

    const titles = [...root.querySelectorAll(TITLE_SEL)];
    titles.forEach((el) => {
      el.style.minHeight = '';
    });

    if (!titles.length) {
      root.classList.remove('has-multiline-title');
      return;
    }

    const rows = groupTitlesByRow(titles);
    let anyAligned = false;

    rows.forEach((rowTitles) => {
      alignTitleRow(rowTitles);
      if (rowTitles.some((el) => el.style.minHeight)) anyAligned = true;
    });

    root.classList.toggle('has-multiline-title', anyAligned);
  }, [containerRef]);

  useLayoutEffect(() => {
    const root = containerRef?.current;
    if (!root) return;

    const schedule = () => {
      run();
      requestAnimationFrame(() => run());
    };

    schedule();
    if (document.fonts?.ready) {
      document.fonts.ready.then(schedule).catch(() => schedule());
    }

    const ro = new ResizeObserver(schedule);
    ro.observe(root);
    window.addEventListener('resize', schedule);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', schedule);
      root.querySelectorAll(TITLE_SEL).forEach((el) => {
        el.style.minHeight = '';
      });
      root.classList.remove('has-multiline-title');
    };
  }, [run, containerRef]);
}
