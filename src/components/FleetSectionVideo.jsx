import { useRef, useState } from 'react';
import './FleetSectionVideo.css';

/**
 * Click-to-play video with hover play/pause overlay (Banking / Fleet case pattern).
 */
export default function FleetSectionVideo({ src, caption, className = '' }) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoHover, setVideoHover] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setVideoPlaying(true);
    } else {
      v.pause();
      setVideoPlaying(false);
    }
  };

  const onVideoPlay = () => setVideoPlaying(true);
  const onVideoPause = () => setVideoPlaying(false);
  const onVideoEnded = () => setVideoPlaying(false);

  return (
    <div className={`fleet-section__video ${className}`.trim()}>
      <div
        className="fleet-section__video-wrap"
        onMouseEnter={() => setVideoHover(true)}
        onMouseLeave={() => setVideoHover(false)}
      >
        <video
          ref={videoRef}
          src={src}
          controls
          playsInline
          className="fleet-section__video-el"
          onPlay={onVideoPlay}
          onPause={onVideoPause}
          onEnded={onVideoEnded}
        />
        <div
          className={`fleet-section__video-center ${videoPlaying || !videoHover ? 'fleet-section__video-center--hidden' : ''}`}
          aria-hidden
        >
          <button type="button" className="fleet-section__video-play" onClick={toggleVideo} aria-label="Play">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div
          className={`fleet-section__video-center fleet-section__video-center--pause ${!videoPlaying || !videoHover ? 'fleet-section__video-center--hidden' : ''}`}
          aria-hidden
        >
          <button type="button" className="fleet-section__video-play fleet-section__video-play--pause" onClick={toggleVideo} aria-label="Pause">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
              <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
      {caption ? <p className="fleet-section__video-caption">{caption}</p> : null}
    </div>
  );
}
