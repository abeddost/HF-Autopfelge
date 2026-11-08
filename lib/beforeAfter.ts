// Vorher/Nachher-Fotopaare (KI-generierte Symbolbilder) für Preisrechner, Startseite und Leistungsseiten.
// Originale liegen in source-images/vorher-nachher/, Web-Versionen erzeugt `npm run photos`.
// Ein Paar muss exakt deckungsgleich sein (gleiche Perspektive), sonst springt das Bild beim Schieberegler.

export type Pair = {
  id: string;
  /** Kurzer Name für Chips und Karten, z. B. „Politur“. */
  label: string;
  before: string;
  after: string;
  /** Beschreibt, was der Vergleich zeigt (Alt-Text). */
  alt: string;
  width: number;
  height: number;
  /** Startposition des Reglers in % (Standard 50) – so, dass der Schaden im „Vorher“-Teil sichtbar ist. */
  start?: number;
  /**
   * false = Foto ist noch nicht erzeugt. Das Paar wird dann überall ausgeblendet.
   * Nach `npm run photos` auf true setzen (oder Zeile löschen).
   */
  ready: boolean;
};

const photo = (name: string) => `/vorher-nachher/${name}.jpg`;
const wide = { width: 1400, height: 600 }; // ursprüngliche Seiten- und Innenansicht
const hd = { width: 1600, height: 900 }; // Detailaufnahmen (16:9)

const pairs = {
  waesche: {
    label: "Handwäsche",
    before: photo("aussen-schmutzig"),
    after: photo("aussen-gewaschen"),
    alt: "Verschmutzte Limousine vor und nach der Handwäsche",
    ...wide,
    ready: true,
  },
  aussen: {
    label: "Außen",
    before: photo("aussen-schmutzig"),
    after: photo("aussen-sauber"),
    alt: "Verschmutzte Limousine vor und nach Wäsche, Politur und Versiegelung",
    ...wide,
    ready: true,
  },
  innen: {
    label: "Innenraum",
    before: photo("innen-schmutzig"),
    after: photo("innen-sauber"),
    alt: "Verschmutzter Innenraum mit Krümeln und Flecken vor und nach der Innenaufbereitung",
    ...wide,
    ready: true,
  },
  motorraum: {
    label: "Motorraum",
    before: photo("motorraum-schmutzig"),
    after: photo("motorraum-sauber"),
    alt: "Verstaubter Motorraum vor und nach der Motorraumreinigung",
    ...hd,
    ready: true,
  },
  politur: {
    label: "Politur",
    before: photo("politur-vorher"),
    after: photo("politur-nachher"),
    alt: "Lack mit Waschkratzern und Hologrammen vor und nach der maschinellen Politur",
    ...hd,
    ready: true,
  },
  keramik: {
    label: "Keramik",
    before: photo("keramik-vorher"),
    after: photo("keramik-nachher"),
    alt: "Stumpfe Motorhaube vor und nach der Keramikversiegelung mit abperlendem Wasser",
    ...hd,
    ready: true,
  },
  leasing: {
    label: "Intensivreinigung",
    before: photo("leasing-vorher"),
    after: photo("leasing-nachher"),
    alt: "Stark beanspruchter Fond mit Flecken und Sand vor und nach der Intensivreinigung",
    ...hd,
    ready: true,
  },
  scheinwerfer: {
    label: "Scheinwerfer",
    before: photo("scheinwerfer-vorher"),
    after: photo("scheinwerfer-nachher"),
    alt: "Vergilbter, matter Scheinwerfer vor und nach der Aufbereitung",
    ...hd,
    ready: true,
  },
  kratzer: {
    label: "SMART Repair – Kratzer",
    before: photo("smart-kratzer-vorher"),
    after: photo("smart-kratzer-nachher"),
    alt: "Verkratzte Stoßstangenecke vor und nach der SMART-Repair-Ausbesserung",
    ...hd,
    start: 72,
    ready: true,
  },
  delle: {
    label: "SMART Repair – Delle",
    before: photo("smart-delle-vorher"),
    after: photo("smart-delle-nachher"),
    alt: "Kleine Delle in der Tür vor und nach dem Ausbeulen ohne Lackieren",
    ...hd,
    start: 66,
    ready: true,
  },
  felge: {
    label: "SMART Repair – Felge",
    before: photo("smart-felge-vorher"),
    after: photo("smart-felge-nachher"),
    alt: "Felge mit Bordsteinschaden vor und nach der Felgenreparatur",
    ...hd,
    ready: true,
  },
  polster: {
    label: "Polster",
    before: photo("polster-vorher"),
    after: photo("polster-nachher"),
    alt: "Stoffsitz mit Kaffeefleck vor und nach der Polsterreinigung",
    ...hd,
    ready: true,
  },
} satisfies Record<string, Omit<Pair, "id">>;

export type PairId = keyof typeof pairs;

export function pair(id: PairId): Pair {
  return { id, ...pairs[id] };
}

const readyPairs = (ids: PairId[]) => ids.map(pair).filter((p) => p.ready);

/** Fotopaare je Paket bzw. Einzelleistung (IDs aus lib/pricing.ts), wichtigstes zuerst. */
const byService: Record<string, PairId[]> = {
  // Pakete
  pflegewaesche: ["waesche"],
  innen: ["innen"],
  aussen: ["politur", "aussen"],
  komplett: ["aussen", "innen"],
  leasing: ["leasing", "innen", "aussen"],
  keramik: ["keramik", "politur", "aussen"],
  // Einzelleistungen
  polster: ["polster", "innen"],
  leder: ["innen"],
  himmel: ["innen"],
  tierhaare: ["innen"],
  ozon: ["innen"],
  felgen: ["aussen"],
  scheinwerfer: ["scheinwerfer", "aussen"],
  motorraum: ["motorraum"],
  scheibe: ["aussen"],
  smartrepair: ["kratzer", "delle", "felge"],
};

/** Fertige Fotopaare einer Leistung (leer, wenn noch keine Fotos vorliegen). */
export function pairsFor(serviceId: string): Pair[] {
  return readyPairs(byService[serviceId] ?? []);
}

/** Alle fertigen Fotopaare einer Auswahl, ohne Doppelte, in Auswahl-Reihenfolge. */
export function pairsForSelection(serviceIds: string[]): Pair[] {
  const seen = new Set<string>();
  return serviceIds.flatMap(pairsFor).filter((p) => !seen.has(p.id) && seen.add(p.id));
}

/** Startbild, solange nichts gewählt ist. */
export const defaultPair = pair("aussen");

/** Paare für die 3D-Vorher/Nachher-Galerie auf der Startseite (fertige zuerst, bis zu vier). */
export function showcasePairs(): Pair[] {
  const preferred = readyPairs(["politur", "keramik", "scheinwerfer", "kratzer"]);
  const fallback = readyPairs(["aussen", "innen", "motorraum"]);
  return [...preferred, ...fallback].slice(0, 4);
}
