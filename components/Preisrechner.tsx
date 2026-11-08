"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { buildMessage, calculate, type Selection } from "@/lib/calculator";
import { defaultPair, pairsFor, pairsForSelection } from "@/lib/beforeAfter";
import { extras, packages, priceNote, taxNote, vehicleSizes } from "@/lib/pricing";
import { whatsappLink } from "@/lib/site";
import BeforeAfter from "./BeforeAfter";
import { CallButton } from "./ContactButtons";
import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from "./icons";

const euro = (n: number) => `${n.toLocaleString("de-DE")} €`;

/** Zählt sanft zum neuen Wert hoch bzw. runter (ohne Animation bei „Bewegung reduzieren“). */
function useAnimatedNumber(value: number) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    const start = from.current;
    if (start === value || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      from.current = value;
      setShown(value);
      return;
    }
    const t0 = performance.now();
    let frame = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / 450);
      const v = Math.round(start + (value - start) * (1 - Math.pow(1 - k, 3)));
      from.current = v;
      setShown(v);
      if (k < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return shown;
}

const stepTitle = "font-display text-xl text-snow sm:text-2xl";
const stepNo = "mr-3 inline-grid h-8 w-8 place-items-center rounded-full border border-brand/40 text-sm text-brand";

export default function Preisrechner() {
  const [selection, setSelection] = useState<Selection>({ sizeId: "kompakt", packageId: null, extraIds: [] });
  const [activePairId, setActivePairId] = useState<string | null>(null);

  const result = useMemo(() => calculate(selection), [selection]);
  // Fotopaare der aktuellen Auswahl; angezeigt wird das zuletzt angeklickte, sonst das erste.
  const shownPairs = useMemo(
    () => pairsForSelection([...(selection.packageId ? [selection.packageId] : []), ...selection.extraIds]),
    [selection],
  );
  const activePair = shownPairs.find((p) => p.id === activePairId) ?? shownPairs[0] ?? defaultPair;
  const total = useAnimatedNumber(result.total);
  const included = new Set(packages.find((p) => p.id === selection.packageId)?.includedExtras ?? []);
  const empty = result.lines.length === 0;

  const choosePackage = (packageId: string | null) => {
    setSelection((s) => ({ ...s, packageId }));
    setActivePairId(packageId ? (pairsFor(packageId)[0]?.id ?? null) : null);
  };
  const toggleExtra = (id: string) => {
    const on = !selection.extraIds.includes(id);
    if (on) setActivePairId(pairsFor(id)[0]?.id ?? activePairId);
    setSelection((s) => ({ ...s, extraIds: on ? [...s.extraIds, id] : s.extraIds.filter((x) => x !== id) }));
  };
  const priceFor = (packageId: string | null, extraIds: string[]) =>
    calculate({ sizeId: selection.sizeId, packageId, extraIds }).total;

  const summary = (
    <div className="hairline rounded-3xl bg-coal/80 p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">Ihre Auswahl</p>
      {empty ? (
        <p className="mt-4 leading-relaxed text-mist">
          Wählen Sie ein Paket oder einzelne Leistungen – Preis und Vorschau aktualisieren sich sofort.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-white/[0.06] text-[0.95rem]">
          {result.lines.map((line) => (
            <li key={line.id} className="flex justify-between gap-4 py-2.5">
              <span className="text-pearl">{line.name}</span>
              <span className={`whitespace-nowrap tabular-nums ${line.status === "berechnet" ? "text-snow" : "text-mist"}`}>
                {line.status === "berechnet" ? euro(line.price ?? 0) : line.status}
              </span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-white/[0.08] pt-5">
        <span className="text-sm text-mist">Richtpreis gesamt</span>
        <span className="font-display text-4xl tracking-tight text-snow" aria-live="polite">
          <span className="mr-1.5 text-base text-mist">ab</span>
          {euro(total)}
        </span>
      </div>
      {result.hasOpenItems && <p className="mt-2 text-right text-xs text-mist">zzgl. Positionen nach Aufwand</p>}
      <a
        href={empty ? undefined : whatsappLink(buildMessage(selection, result))}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={empty}
        className={`btn btn-primary mt-6 w-full ${empty ? "pointer-events-none opacity-40" : ""}`}
      >
        <WhatsAppIcon />
        Angebot per WhatsApp anfragen
      </a>
      <CallButton variant="ghost" showNumber className="mt-3 w-full" />
      <p className="mt-5 text-xs leading-relaxed text-mist">
        {priceNote} {taxNote} Es werden keine Daten auf dieser Website gespeichert.
      </p>
    </div>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Vorschau – mobil oben angeheftet, am Desktop rechts mitlaufend */}
      <aside className="sticky top-[4.5rem] z-30 -mx-4 self-start border-b border-white/[0.06] bg-ink/95 px-4 pb-3 pt-3 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:order-2 lg:col-span-5 lg:top-28 lg:mx-0 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <div className="mb-3 flex items-center justify-between gap-3 lg:hidden">
          <p className="truncate text-xs font-semibold uppercase tracking-[0.16em] text-mist">{activePair.label}</p>
          <p className="font-display text-2xl text-snow" aria-hidden>
            <span className="mr-1 text-sm text-mist">ab</span>
            {euro(total)}
          </p>
        </div>
        <BeforeAfter key={activePair.id} pair={activePair} priority />
        {shownPairs.length > 1 && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]" role="group" aria-label="Vorher-Nachher-Bild wählen">
            {shownPairs.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePairId(p.id)}
                aria-pressed={p.id === activePair.id}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  p.id === activePair.id
                    ? "border-brand bg-brand-dark text-white"
                    : "border-white/12 text-mist hover:border-white/30 hover:text-snow"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}
        <p className="mt-2 text-[0.7rem] leading-snug text-mist">
          Symbolbild (KI-generiert) – zeigt typische Ergebnisse der gewählten Leistung. Regler ziehen zum Vergleichen.
        </p>
        <div className="mt-6 hidden lg:block">{summary}</div>
      </aside>

      {/* Optionen */}
      <div className="space-y-12 lg:order-1 lg:col-span-7">
        <fieldset>
          <legend className={stepTitle}>
            <span className={stepNo}>1</span>Fahrzeuggröße
          </legend>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {vehicleSizes.map((size) => (
              <label key={size.id} className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  className="peer sr-only"
                  checked={selection.sizeId === size.id}
                  onChange={() => setSelection((s) => ({ ...s, sizeId: size.id }))}
                />
                <span className="block rounded-full border border-white/12 px-4 py-2.5 text-sm text-pearl transition-colors peer-checked:border-brand peer-checked:bg-brand/15 peer-checked:text-snow peer-focus-visible:ring-2 peer-focus-visible:ring-brand hover:border-white/30">
                  {size.name}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className={stepTitle}>
            <span className={stepNo}>2</span>Paket wählen
          </legend>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[null, ...packages.map((p) => p.id)].map((id) => {
              const pkg = packages.find((p) => p.id === id);
              const checked = selection.packageId === id;
              return (
                <label key={id ?? "none"} className="cursor-pointer">
                  <input type="radio" name="package" className="peer sr-only" checked={checked} onChange={() => choosePackage(id)} />
                  <span className="flex h-full flex-col rounded-2xl border border-white/10 bg-coal/60 p-5 transition-all duration-300 peer-checked:border-brand peer-checked:bg-brand/[0.08] peer-focus-visible:ring-2 peer-focus-visible:ring-brand hover:border-white/25">
                    <span className="flex items-start justify-between gap-3">
                      <span className="font-display text-lg text-snow">{pkg ? pkg.name : "Kein Paket"}</span>
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors ${
                          checked ? "border-brand bg-brand text-ink" : "border-white/25"
                        }`}
                      >
                        {checked && <CheckIcon width={12} height={12} strokeWidth={3} />}
                      </span>
                    </span>
                    <span className="mt-1 flex-1 text-sm text-mist">{pkg ? pkg.tagline : "Nur Einzelleistungen buchen."}</span>
                    {pkg && pkg.price !== null && (
                      <span className="mt-3 text-sm text-brand-light">ab {euro(priceFor(pkg.id, []))}</span>
                    )}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className={stepTitle}>
            <span className={stepNo}>3</span>Einzelleistungen dazu
          </legend>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {extras.map((extra) => {
              const checked = selection.extraIds.includes(extra.id);
              const price = included.has(extra.id)
                ? "im Paket inklusive"
                : extra.price === null
                  ? (extra.note ?? "auf Anfrage")
                  : `ab ${euro(priceFor(null, [extra.id]))}${extra.note ? ` (${extra.note})` : ""}`;
              return (
                <label key={extra.id} className="cursor-pointer">
                  <input type="checkbox" className="peer sr-only" checked={checked} onChange={() => toggleExtra(extra.id)} />
                  <span className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-coal/60 p-4 transition-all duration-300 peer-checked:border-brand peer-checked:bg-brand/[0.08] peer-focus-visible:ring-2 peer-focus-visible:ring-brand hover:border-white/25">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors ${
                        checked ? "border-brand bg-brand text-ink" : "border-white/25"
                      }`}
                    >
                      {checked && <CheckIcon width={12} height={12} strokeWidth={3} />}
                    </span>
                    <span>
                      <span className="block text-snow">{extra.name}</span>
                      <span className="mt-0.5 block text-sm text-mist">{price}</span>
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="lg:hidden">{summary}</div>

        <button
          type="button"
          onClick={() => {
            setSelection((s) => ({ ...s, packageId: null, extraIds: [] }));
            setActivePairId(null);
          }}
          className="inline-flex items-center gap-2 text-sm text-mist hover:text-snow"
        >
          <span className="link-underline">Auswahl zurücksetzen</span>
          <ArrowRightIcon width={14} height={14} />
        </button>
      </div>
    </div>
  );
}
