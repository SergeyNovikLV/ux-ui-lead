import './ZoomableImage.css';
import './CaseVideoFigure.css';

/**
 * Video in the same figure + caption rhythm as ZoomableImage (no zoom modal).
 * Use inside `.mogo-section__image` like portfolio case imagery.
 */
export default function CaseVideoFigure({ src, poster, title, caption, className = '', videoAriaLabel }) {
  return (
    <figure className={`zoom-figure case-video-figure ${className}`.trim()}>
      <div className="case-video-figure__frame">
        <video
          className="case-video-figure__video"
          src={src}
          poster={poster}
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          aria-label={videoAriaLabel || undefined}
        />
      </div>
      {(title || caption) && (
        <figcaption className="zoom-figure__caption case-video-figure__caption">
          {title ? (
            <>
              <span className="case-video-figure__title">{title}</span>
              {caption ? (
                <>
                  <br />
                  {caption}
                </>
              ) : null}
            </>
          ) : (
            caption
          )}
        </figcaption>
      )}
    </figure>
  );
}
