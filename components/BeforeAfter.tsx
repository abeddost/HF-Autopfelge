"use client";

import { useState } from "react";
import type { Zone } from "@/lib/calculator";
import CarVisual, { photoSlots, type View } from "./CarVisual";

const nothingClean: ReadonlySet<Zone> = new Set();

/**
 * Vorher/Nachher-Vergleich mit Schieberegler. Links „Vorher“ (alles ungereinigt), rechts „Nachher“
 * (gewählte Leistungen). Bedienung über ein natives Range-Input – Maus, Touch und Tastatur.
 */
export default function BeforeAfter({ view, clean }: { view: View; clean: ReadonlySet<Zone> }) {
  const [pos, setPos] = useState(50);
  const photos = photoSlots[view];

  const layer = (state: "before" | "after") =>
    photos ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={photos[state]} alt="" className="h-full w-full object-cover" />
    ) : (
      <CarVisual view={view} clean={state === "after" ? clean : nothingClean} />
    );

  return (
    <div className="relative aspect-[800/330] select-none overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_50%_30%,#1a1d22,#0b0c0e_75%)]">
      <div className="absolute inset-0">{layer("after")}</div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} aria-hidden>
        {layer("before")}
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
        aria-label="Vorher-Nachher-Vergleich verschieben"
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
