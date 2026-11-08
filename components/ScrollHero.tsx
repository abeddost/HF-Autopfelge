"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export type HeroFrame = { src: string; srcSmall: string };

const steps = [
  { label: "Vorher" },
  { label: "Schaum" },
  { label: "Politur", more: " & Glanz" },
] as const;

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
/** Fortschritt 0…1 innerhalb eines Scroll-Abschnitts [a, b]. */
const phase = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Startseiten-Hero als Scroll-Szene: Das Auto bleibt angeheftet, während beim Scrollen
 * Schaum darüberwischt, abgespült wird und ein Lichtreflex über den frisch polierten Lack läuft.
 * Drei deckungsgleiche KI-Bilder (schmutzig → Schaum → poliert); alle Übergänge über CSS-Variablen.
 * Bei „Bewegung reduzieren“ entfällt die Scroll-Strecke und das polierte Bild wird direkt gezeigt.
 */
export default function ScrollHero({
  dirty,
  foam,
  clean,
  alt,
  children,
  footer,
}: {
  dirty: HeroFrame;
  foam: HeroFrame;
  clean: HeroFrame;
  alt: string;
  /** Text und Buttons über dem Bild (links unten). */
  children: ReactNode;
  /** Optionale Leiste am unteren Rand der angehefteten Ansicht. */
  footer?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let mx = 0;
    let my = 0;

    const apply = () => {
      frame = 0;
      if (mq.matches) {
        el.style.setProperty("--foam", "1");
        el.style.setProperty("--rinse", "1");
        el.style.setProperty("--sweep", "1");
        setStep(2);
        return;
      }
      const r = el.getBoundingClientRect();
      const run = Math.max(1, r.height - window.innerHeight);
      const p = clamp(-r.top / run);
      const foamP = ease(phase(p, 0.06, 0.36));
      const rinseP = ease(phase(p, 0.44, 0.78));
      const sweepP = phase(p, 0.76, 0.96);
      el.style.setProperty("--p", p.toFixed(4));
      el.style.setProperty("--foam", foamP.toFixed(4));
      el.style.setProperty("--rinse", rinseP.toFixed(4));
      el.style.setProperty("--sweep", sweepP.toFixed(4));
      el.style.setProperty("--mx", mx.toFixed(3));
      el.style.setProperty("--my", my.toFixed(3));
      setStep(rinseP > 0.5 ? 2 : foamP > 0.5 ? 1 : 0);
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      request();
    };
    const onMotionPref = () => {
      setReduced(mq.matches);
      request();
    };

    onMotionPref();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    window.addEventListener("pointermove", onPointer, { passive: true });
    mq.addEventListener("change", onMotionPref);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      window.removeEventListener("pointermove", onPointer);
      mq.removeEventListener("change", onMotionPref);
    };
  }, []);

  const img = (f: HeroFrame, extra: { className?: string; style?: CSSProperties; priority?: boolean; label?: string }) => (
    <img
      src={f.src}
      srcSet={`${f.srcSmall} 1280w, ${f.src} 1920w`}
      sizes="100vw"
      alt={extra.label ?? ""}
      aria-hidden={extra.label ? undefined : true}
      fetchPriority={extra.priority ? "high" : "low"}
      loading="eager"
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover object-[52%_50%] sm:object-[70%_50%] ${extra.className ?? ""}`}
      style={extra.style}
    />
  );

  return (
    <section
      ref={ref}
      className={`scroll-hero relative ${reduced ? "h-[100svh]" : "h-[260svh]"}`}
      aria-label="Vom schmutzigen zum polierten Auto"
    >
      <div className="grain sticky top-0 isolate h-[100svh] overflow-hidden bg-ink">
        {/* Bühne mit Kamerafahrt: leichtes Heranzoomen und räumliche Neigung zur Maus */}
        {/* Mobil: Bild nur in der oberen Hälfte, damit Auto und Text sich nicht überdecken */}
        <div className="scroll-hero-stage absolute inset-x-0 top-0 -z-20 h-[56%] sm:inset-0 sm:h-full">
          {img(dirty, { priority: true })}
          {img(foam, { className: "scroll-hero-foam" })}
          {img(clean, { className: "scroll-hero-clean", label: alt })}
          <div aria-hidden className="scroll-hero-sweep" />
        </div>
        <div className="absolute inset-x-0 top-[30%] -z-10 h-[31%] bg-gradient-to-b from-transparent to-ink sm:hidden" />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-t from-ink via-ink/25 via-25% to-transparent to-55% sm:block" />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-ink/95 via-ink/55 via-30% to-transparent to-60% sm:block" />
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink/70 to-transparent" />

        <div className="scroll-hero-copy flex h-full flex-col justify-end">
          <div className="container-lux pb-28 pt-32 sm:pb-14 lg:pb-16">
            {children}

            {/* Schritte der Aufbereitung – folgen dem Scrollfortschritt */}
            <ol className="mt-10 flex items-center gap-1.5 sm:mt-12 sm:gap-3" aria-label="Ablauf der Aufbereitung">
              {steps.map((s, i) => (
                <li key={s.label} className="flex items-center gap-1.5 sm:gap-3">
                  <span
                    aria-current={step === i ? "step" : undefined}
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] backdrop-blur-md transition-all duration-500 sm:gap-2 sm:px-3 sm:text-xs sm:tracking-[0.16em] ${
                      step >= i ? "border-brand/60 bg-brand-dark/70 text-white" : "border-white/15 bg-ink/50 text-mist"
                    }`}
                  >
                    <span className="font-display">0{i + 1}</span>
                    {s.label}
                    {"more" in s && <span className="hidden sm:inline">{s.more}</span>}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="relative h-px w-4 overflow-hidden bg-white/15 sm:w-12">
                      <span
                        className="absolute inset-y-0 left-0 bg-brand"
                        style={{ width: `calc(var(--${i === 0 ? "foam" : "rinse"}, 0) * 100%)` }}
                      />
                    </span>
                  )}
                </li>
              ))}
            </ol>

            {footer && <div className="mt-6 hidden sm:block">{footer}</div>}
          </div>
        </div>

        {!reduced && (
          <div
            aria-hidden
            className="scroll-hero-cue pointer-events-none absolute bottom-6 right-6 hidden flex-col items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-mist lg:flex"
          >
            Scrollen
            <span className="relative h-10 w-px overflow-hidden bg-white/15">
              <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-brand" />
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
