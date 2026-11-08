"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/**
 * Karte, die sich räumlich zum Mauszeiger neigt – mit wanderndem Lichtreflex (Styles: .tilt in globals.css).
 * Nur bei Maus; Touch und „Bewegung reduzieren“ bleiben flach. Kinder mit .tilt-depth schweben davor.
 * Die Neigung folgt nur der Zeigerposition, Klicks und Ziehen (z. B. Schieberegler) bleiben unberührt.
 */
export default function TiltCard({
  children,
  max = 6,
  className = "",
  innerClassName = "",
}: {
  children: ReactNode;
  /** Maximale Neigung in Grad. */
  max?: number;
  className?: string;
  innerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const x = (clientX - r.left) / r.width; // 0 … 1
      const y = (clientY - r.top) / r.height;
      el.classList.add("is-active");
      el.style.setProperty("--ry", `${((x - 0.5) * 2 * max).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${((0.5 - y) * 2 * max).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    });
  }

  function onPointerLeave() {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.classList.remove("is-active");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div className={`tilt-inner ${innerClassName}`}>
        {children}
        <span className="tilt-sheen" aria-hidden />
      </div>
    </div>
  );
}
