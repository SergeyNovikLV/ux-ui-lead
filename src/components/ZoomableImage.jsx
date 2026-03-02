import { useEffect, useRef, useCallback } from 'react';
import './ZoomableImage.css';

export default function ZoomableImage({ src, alt, caption, className }) {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
    document.body.style.overflow = '';
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') {
        const focusable = dialog.querySelectorAll('button, [tabindex="0"]');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        }
      }
    };

    dialog.addEventListener('keydown', onKeyDown);
    return () => dialog.removeEventListener('keydown', onKeyDown);
  }, [close]);

  const onBackdropClick = (e) => {
    if (e.target === dialogRef.current) close();
  };

  const onTriggerKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  };

  return (
    <>
      <figure className="zoom-figure">
        <div
          className={`zoom-img${className ? ` ${className}` : ''}`}
          onClick={open}
          onKeyDown={onTriggerKeyDown}
          tabIndex={0}
          role="button"
          aria-label={`Zoom: ${alt}`}
          ref={triggerRef}
        >
          <img src={src} alt={alt} className="zoom-img__img" />
          <div className="zoom-img__hint" aria-hidden>Zoom</div>
        </div>
        {caption && <figcaption className="zoom-figure__caption">{caption}</figcaption>}
      </figure>

      <dialog
        ref={dialogRef}
        className="zoom-modal"
        onClick={onBackdropClick}
        aria-label={`Image: ${alt}`}
        aria-modal="true"
      >
        <button
          className="zoom-modal__close-icon"
          onClick={close}
          aria-label="Close image"
          tabIndex={0}
        >
          ✕
        </button>
        <div className="zoom-modal__body">
          <img src={src} alt={alt} className="zoom-modal__img" />
          {caption && <p className="zoom-modal__caption">{caption}</p>}
          <button
            className="zoom-modal__close-btn"
            onClick={close}
            aria-label="Close image"
            tabIndex={0}
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}

