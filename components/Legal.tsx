import type { ReactNode } from "react";
import { isPlaceholder } from "@/lib/legal";

/** Zeigt einen Wert aus lib/legal.ts – Platzhalter werden deutlich markiert. */
export function Ph({ value }: { value: string }) {
  if (!isPlaceholder(value)) return <>{value}</>;
  return (
    <mark className="rounded bg-brand/15 px-1.5 py-0.5 font-medium text-brand-light ring-1 ring-brand/40">
      {value}
    </mark>
  );
}

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pb-24 pt-36 sm:pt-44">
      <div className="container-lux max-w-3xl">
        <p className="eyebrow">Rechtliches</p>
        <h1 className="h-display mt-5 text-5xl sm:text-6xl">{title}</h1>
        <div className="mt-8 rounded-2xl border border-brand/25 bg-brand/[0.05] p-5 text-sm leading-relaxed text-pearl">
          Hinweis: Markierte Angaben sind Platzhalter und müssen vor Veröffentlichung ergänzt werden. Diese Vorlage ersetzt
          keine Rechtsberatung.
        </div>
        <div className="legal mt-6">{children}</div>
      </div>
    </section>
  );
}
