"use client";

import { useState } from "react";

export function YouTubePlayer({ videoId, title, thumbnailUrl }: { videoId?: string; title: string; thumbnailUrl?: string }) {
  const [playing, setPlaying] = useState(false);
  if (!videoId) return <div className="video-placeholder" role="img" aria-label={`Video embed will be available for ${title}`}>Video link will appear here</div>;

  if (playing) {
    return (
      <iframe
        className="youtube-frame"
        src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  const thumbnail = thumbnailUrl || `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
  return (
    <button className="youtube-poster" type="button" onClick={() => setPlaying(true)} aria-label={`Play ${title}`}>
      {/* YouTube and Sanity host these images; this site does not store video files. */}
      <img src={thumbnail} alt="" loading="lazy" />
      <span className="play-button" aria-hidden="true">▶</span>
      <span className="poster-note">Play on YouTube</span>
    </button>
  );
}
