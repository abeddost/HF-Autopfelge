"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Stummes Loop-Video, das erst geladen wird, wenn es sichtbar ist, und außerhalb
 * des Viewports pausiert. Bei "Bewegung reduzieren" oder Datensparmodus bleibt das Standbild.
 */
export default function LoopVideo({
  slug,
  alt,
  priority = false,
  decorative = false,
  className = "",
}: {
  slug: string;
  alt: string;
  priority?: boolean;
  decorative?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const poster = `/videos/${slug}.jpg`;

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduceMotion || saveData) return;

    const small = window.matchMedia("(max-width: 767px)").matches;
    const src = `/videos/${slug}${small ? "-720" : ""}.mp4`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = src;
            video.load();
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: priority ? "0px" : "200px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [slug, priority]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt={decorative ? "" : alt}
        aria-hidden={decorative || undefined}
        className="absolute inset-0 h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        width={1280}
        height={720}
      />
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        tabIndex={-1}
        onPlaying={() => setPlaying(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
