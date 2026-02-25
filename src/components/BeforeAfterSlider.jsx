import { useState, useRef, useCallback } from 'react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeCaption, afterCaption, caption }) {
  const [position, setPosition] = useState(40);
  const containerRef = useRef(null);

  const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const updatePosition = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = useCallback((e) => {
    e.preventDefault();
    updatePosition(e.clientX);
    const onMove = (e) => updatePosition(e.clientX);
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [updatePosition]);

  const onTouchStart = useCallback((e) => {
    updatePosition(getClientX(e));
  }, [updatePosition]);

  const onTouchMove = useCallback((e) => {
    e.preventDefault();
    updatePosition(getClientX(e));
  }, [updatePosition]);

  return (
    <>
    <div
      ref={containerRef}
      className="slider-container"
      style={{ ['--slider-position']: position }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      role="img"
      aria-label="Before and after comparison slider"
    >
      <img src={afterSrc} alt="" className="slider-after-img" />
      <div className="slider-before-overlay">
        <img src={beforeSrc} alt="" className="slider-before-img" />
      </div>
      <div className="slider-divider" aria-hidden />
      <div className="slider-handle" aria-hidden>
        <svg className="slider-handle-arrow slider-handle-arrow--left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <svg className="slider-handle-arrow slider-handle-arrow--right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
      <span className="slider-label-before">Before</span>
      <span className="slider-label-after">After</span>
    </div>
    {caption != null && caption !== '' ? (
      <p className="slider-caption-single">{caption}</p>
    ) : (beforeCaption || afterCaption) ? (
      <div className="slider-captions">
        <p className="slider-caption-before">{beforeCaption}</p>
        <p className="slider-caption-after">{afterCaption}</p>
      </div>
    ) : null}
  </>
  );
}
