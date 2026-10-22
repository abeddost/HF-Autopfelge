// VORSCHLAG – Leistungen und Preise vor Veröffentlichung vom Inhaber prüfen und anpassen.
// Grundlage: Marktvergleich Bodenheim/Mainz (Stand Oktober 2026). Alle Preise sind "ab"-Preise.

export type Package = {
  id: string;
  name: string;
  price: number | null; // null = Preis auf Anfrage
  tagline: string;
  includes: string[];
  featured?: boolean;
};

export type Extra = {
  id: string;
  name: string;
  price: number | null; // null = nach Aufwand
  note?: string;
};

export const packages: Package[] = [
  {
    id: "pflegewaesche",
    name: "Pflegewäsche",
    price: 39,
    tagline: "Gepflegter Auftritt zwischendurch.",
    includes: ["Schonende Handwäsche", "Felgenreinigung", "Scheiben außen", "Trocknung mit Mikrofaser"],
  },
  {
    id: "innen",
    name: "Innenaufbereitung",
    price: 119,
    tagline: "Frischer Innenraum, bis in die Details.",
    includes: [
      "Gründliches Aussaugen inkl. Kofferraum",
      "Cockpit, Konsole & Kunststoffe",
      "Scheiben innen",
      "Türeinstiege & Fußmatten",
    ],
  },
  {
    id: "aussen",
    name: "Außenaufbereitung",
    price: 179,
    tagline: "Mehr Glanz und Schutz für den Lack.",
    includes: [
      "Intensive Handwäsche",
      "Felgen & Radkästen",
      "Maschinelle Politur",
      "Lackversiegelung",
    ],
  },
  {
    id: "komplett",
    name: "Komplettaufbereitung",
    price: 249,
    tagline: "Innen und außen – das Rundum-Paket.",
    includes: [
      "Alle Leistungen der Innenaufbereitung",
      "Alle Leistungen der Außenaufbereitung",
      "Kunststoff- & Gummipflege",
      "Abschlusskontrolle mit Ihnen",
    ],
    featured: true,
  },
  {
    id: "leasing",
    name: "Leasingrückgabe & Verkauf",
    price: 349,
    tagline: "Bestens vorbereitet für Rückgabe oder Verkauf.",
    includes: [
      "Komplettaufbereitung",
      "Intensivreinigung stark beanspruchter Bereiche",
      "Polster- bzw. Teppichreinigung",
      "Leichte Kratzer auspolieren, soweit möglich",
    ],
  },
  {
    id: "keramik",
    name: "Keramikversiegelung",
    price: 599,
    tagline: "Langanhaltender Schutz mit Tiefenglanz.",
    includes: [
      "Wäsche & Dekontamination",
      "Lackvorbereitung durch Politur",
      "Auftrag der Keramikversiegelung",
      "Pflegehinweise zum Erhalt",
    ],
  },
];

export const extras: Extra[] = [
  { id: "polster", name: "Polster- oder Teppichreinigung", price: 89 },
  { id: "leder", name: "Lederreinigung & -pflege", price: 89 },
  { id: "himmel", name: "Himmelreinigung", price: 79 },
  { id: "felgen", name: "Felgenreinigung (intensiv)", price: 39 },
  { id: "scheinwerfer", name: "Scheinwerferaufbereitung", price: 69, note: "Paar" },
  { id: "motorraum", name: "Motorraumreinigung", price: 89 },
  { id: "ozon", name: "Ozonbehandlung gegen Gerüche", price: 89 },
  { id: "scheibe", name: "Scheibenversiegelung", price: 39, note: "Frontscheibe" },
  { id: "tierhaare", name: "Tierhaarentfernung", price: null, note: "nach Aufwand" },
];

export const priceNote =
  "Richtpreise für Pkw in normalem Zustand. Der Endpreis richtet sich nach Fahrzeuggröße und Verschmutzung und wird vorab verbindlich mit Ihnen abgestimmt.";

export function formatPrice(price: number | null, fallback = "auf Anfrage") {
  return price === null ? fallback : `ab ${price.toLocaleString("de-DE")} €`;
}

/** Formatierter Richtpreis eines Pakets, z. B. „ab 249 €“. */
export function packagePrice(id: string) {
  const pkg = packages.find((p) => p.id === id);
  if (!pkg) throw new Error(`Unbekanntes Paket: ${id}`);
  return formatPrice(pkg.price);
}

/** Formatierter Richtpreis einer Einzelleistung, z. B. „ab 69 €“. */
export function extraPrice(id: string) {
  const extra = extras.find((e) => e.id === id);
  if (!extra) throw new Error(`Unbekannte Einzelleistung: ${id}`);
  return formatPrice(extra.price, extra.note ?? "auf Anfrage");
}

// Bei Kleinunternehmerregelung ersetzen durch: "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet."
export const taxNote = "Alle Preise in Euro inkl. gesetzlicher MwSt.";
