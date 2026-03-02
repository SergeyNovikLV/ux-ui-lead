import { useRef, useCallback, useEffect } from 'react';
import './VideoPreview.css';

export default function VideoPreview({ src, caption, className }) {
  const dialogRef = useRef(null);
  const modalVideoRef = useRef(null);
  const triggerRef = useRef(null);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
    setTimeout(() => modalVideoRef.current?.play(), 80);
  }, []);

  const close = useCallback(() => {
    modalVideoRef.current?.pause();
    dialogRef.current?.close();
    document.body.style.overflow = '';
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') {
        const focusable = dialog.querySelectorAll('button, video, [tabindex="0"]');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        }
      }
    };
    dialog.addEventListener('keydown', onKey);
    return () => dialog.removeEventListener('keydown', onKey);
  }, [close]);

  const onBackdropClick = (e) => {
    if (e.target === dialogRef.current) close();
  };

  const onTriggerKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  };

  return (
    <>
      <figure className={`vp-figure${className ? ` ${className}` : ''}`}>
        <div
          className="vp-thumb"
          onClick={open}
          onKeyDown={onTriggerKeyDown}
          tabIndex={0}
          role="button"
          aria-label="Play video"
          ref={triggerRef}
        >
          <video
            src={src}
            className="vp-thumb__video"
            muted
            playsInline
            preload="metadata"
            tabIndex={-1}
          />
          <div className="vp-thumb__overlay" aria-hidden>
            <div className="vp-thumb__play">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 4.5L15.5 10L6 15.5V4.5Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
        {caption && <figcaption className="vp-figure__caption">{caption}</figcaption>}
      </figure>

      <dialog
        ref={dialogRef}
        className="vp-modal"
        onClick={onBackdropClick}
        aria-label="Video player"
        aria-modal="true"
      >
        <button className="vp-modal__close-icon" onClick={close} aria-label="Close video" tabIndex={0}>✕</button>
        <div className="vp-modal__body">
          <video
            ref={modalVideoRef}
            src={src}
            className="vp-modal__video"
            controls
            playsInline
          />
          {caption && <p className="vp-modal__caption">{caption}</p>}
          <button className="vp-modal__close-btn" onClick={close} aria-label="Close video" tabIndex={0}>Close</button>
        </div>
      </dialog>
    </>
  );
}
