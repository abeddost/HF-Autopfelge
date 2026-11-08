// Rechenlogik für den Preisrechner (components/Preisrechner.tsx).
// Preise kommen ausschließlich aus lib/pricing.ts.

import { extras, packages, vehicleSizes } from "./pricing";

export type Selection = { sizeId: string; packageId: string | null; extraIds: string[] };

export type Line = {
  id: string;
  name: string;
  price: number | null;
  status: "berechnet" | "inklusive" | "nach Aufwand";
};

/** Richtpreis an die Fahrzeuggröße anpassen; abweichende Faktoren auf volle 5 € runden. */
function scaled(price: number, factor: number) {
  return factor === 1 ? price : Math.round((price * factor) / 5) * 5;
}

export function calculate({ sizeId, packageId, extraIds }: Selection) {
  const factor = vehicleSizes.find((s) => s.id === sizeId)?.factor ?? 1;
  const pkg = packages.find((p) => p.id === packageId);
  const lines: Line[] = [];

  if (pkg) {
    lines.push({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price === null ? null : scaled(pkg.price, factor),
      status: pkg.price === null ? "nach Aufwand" : "berechnet",
    });
  }
  for (const extra of extras) {
    if (!extraIds.includes(extra.id)) continue;
    if (pkg?.includedExtras?.includes(extra.id)) {
      lines.push({ id: extra.id, name: extra.name, price: null, status: "inklusive" });
    } else if (extra.price === null) {
      lines.push({ id: extra.id, name: extra.name, price: null, status: "nach Aufwand" });
    } else {
      const price = extra.scales ? scaled(extra.price, factor) : extra.price;
      lines.push({ id: extra.id, name: extra.name, price, status: "berechnet" });
    }
  }

  const total = lines.reduce((sum, l) => sum + (l.status === "berechnet" ? (l.price ?? 0) : 0), 0);
  return { lines, total, hasOpenItems: lines.some((l) => l.status === "nach Aufwand") };
}

export function buildMessage(selection: Selection, result: ReturnType<typeof calculate>) {
  const size = vehicleSizes.find((s) => s.id === selection.sizeId)?.name ?? "";
  const euro = (n: number) => `${n.toLocaleString("de-DE")} €`;
  const positions = result.lines.map((l) =>
    l.status === "berechnet" ? `• ${l.name}: ab ${euro(l.price ?? 0)}` : `• ${l.name}: ${l.status}`,
  );
  return [
    "Hallo HF Autopflege,",
    "ich habe Ihren Preisrechner genutzt und hätte gerne ein Angebot.",
    `Fahrzeug: ${size}`,
    ...positions,
    `Richtpreis gesamt: ab ${euro(result.total)}${result.hasOpenItems ? " (zzgl. Positionen nach Aufwand)" : ""}`,
    "Wann hätten Sie einen Termin frei?",
  ].join("\n");
}
