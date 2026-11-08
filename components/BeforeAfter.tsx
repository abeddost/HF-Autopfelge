"use client";

import { useState, type PointerEvent } from "react";
import type { Pair } from "@/lib/beforeAfter";

/**
 * Vorher/Nachher-Vergleich mit Schieberegler: links „Vorher“, rechts „Nachher“.
 * Bedienung über ein natives Range-Input – Maus, Touch und Tastatur.
 * Beim Wechsel des Paares blendet das neue Bild weich über – dafür mit key={pair.id} rendern,
 * damit auch die Reglerposition auf den Startwert des neuen Paares zurückspringt.
 */
export default function BeforeAfter({
  pair,
  className = "",
  priority = false,
}: {
  pair: Pair;
  className?: string;
  priority?: boolean;
}) {
  const [pos, setPos] = useState(pair.start ?? 50);
  function updatePosition(event: PointerEvent<HTMLInputElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    if (bounds.width === 0) return;
    setPos(Math.round(Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100))));
  }

  const img = "absolute inset-0 h-full w-full object-cover";
  const loading = priority ? "eager" : "lazy";

  return (
    <div
      className={`relative select-none overflow-hidden rounded-3xl bg-graphite ${className}`}
      style={{ aspectRatio: `${pair.width} / ${pair.height}` }}
    >
      <div key={pair.id} className="animate-pair-in absolute inset-0">
        <img src={pair.after} alt={`Nachher: ${pair.alt}`} loading={loading} decoding="async" className={img} />
        <img
          src={pair.before}
          alt=""
          aria-hidden
          loading={loading}
          decoding="async"
          className={img}
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-pearl backdrop-blur">
        Vorher
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand-dark/80 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
        Nachher
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          event.preventDefault();
          event.currentTarget.focus({ preventScroll: true });
          event.currentTarget.setPointerCapture(event.pointerId);
          updatePosition(event);
        }}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) updatePosition(event);
        }}
        onPointerUp={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            updatePosition(event);
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        aria-label={`Vorher-Nachher-Vergleich verschieben: ${pair.label}`}
        aria-valuetext={`${pos} % Vorher, ${100 - pos} % Nachher`}
        style={{ touchAction: "pan-y" }}
        className="peer absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
      />
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white/80 peer-focus-visible:[&>span]:ring-2 peer-focus-visible:[&>span]:ring-brand"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-ink/80 text-snow shadow-lg backdrop-blur">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  );
}
