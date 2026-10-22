// Verzeichnis aller SEO-Unterseiten – speist Sitemap, Footer, Hub-Seiten und interne Verlinkung.
// Neue Seite angelegt? Hier eintragen, sonst fehlt sie in Sitemap und Footer.

export type SeoPage = {
  path: string;
  label: string; // kurzer Linktext
  summary: string; // ein Satz für Linkkarten
  kind: "ort" | "leistung" | "ratgeber";
  updated: string; // ISO-Datum der letzten inhaltlichen Änderung
  drive?: string; // nur Orte: Fahrzeit nach Bodenheim
};

export const seoPages: SeoPage[] = [
  // Orte
  {
    path: "/autoaufbereitung-bodenheim",
    label: "Bodenheim",
    summary: "Unsere Werkstatt in der Hilgestraße – Auto vorbeibringen, später gepflegt abholen.",
    kind: "ort",
    updated: "2026-10-22",
    drive: "im Ort",
  },
  {
    path: "/autoaufbereitung-mainz",
    label: "Mainz",
    summary: "Für Laternenparker, Dienstwagen und Stadtautos aus der Landeshauptstadt.",
    kind: "ort",
    updated: "2026-10-22",
    drive: "ca. 15–20 Min.",
  },
  {
    path: "/autoaufbereitung-mainz-laubenheim",
    label: "Mainz-Laubenheim",
    summary: "Direkt hinter der Stadtgrenze – ideal vor Verkauf oder Leasingrückgabe.",
    kind: "ort",
    updated: "2026-10-22",
    drive: "ca. 5 Min.",
  },
  {
    path: "/autoaufbereitung-nackenheim",
    label: "Nackenheim",
    summary: "Der kürzeste Weg zur regelmäßigen Pflege – nur eine Ortschaft weiter.",
    kind: "ort",
    updated: "2026-10-22",
    drive: "ca. 5 Min.",
  },
  {
    path: "/autoaufbereitung-gau-bischofsheim",
    label: "Gau-Bischofsheim",
    summary: "Familienautos aus Gau-Bischofsheim, Harxheim und Lörzweiler wieder sauber.",
    kind: "ort",
    updated: "2026-10-22",
    drive: "ca. 8–10 Min.",
  },
  {
    path: "/autoaufbereitung-nierstein",
    label: "Nierstein",
    summary: "Roter Weinbergstaub an Schwellern und im Fußraum? Wir kennen das.",
    kind: "ort",
    updated: "2026-10-22",
    drive: "ca. 10 Min.",
  },
  {
    path: "/autoaufbereitung-oppenheim",
    label: "Oppenheim",
    summary: "Für Pendlerfahrzeuge mit vielen Kilometern auf B9 und Autobahn.",
    kind: "ort",
    updated: "2026-10-22",
    drive: "ca. 15 Min.",
  },
  {
    path: "/autoaufbereitung-wiesbaden",
    label: "Wiesbaden",
    summary: "Werterhalt mit Politur und Keramikversiegelung – über den Rhein nach Bodenheim.",
    kind: "ort",
    updated: "2026-10-22",
    drive: "ca. 25–30 Min.",
  },
  {
    path: "/autoaufbereitung-ruesselsheim",
    label: "Rüsselsheim",
    summary: "Firmenwagen und Leasingrückläufer aus Rüsselsheim gut vorbereitet.",
    kind: "ort",
    updated: "2026-10-22",
    drive: "ca. 20–25 Min.",
  },
  {
    path: "/autoaufbereitung-ingelheim",
    label: "Ingelheim",
    summary: "Vielfahrer-Innenräume und Dienstwagen aus Ingelheim am Rhein.",
    kind: "ort",
    updated: "2026-10-22",
    drive: "ca. 25–30 Min.",
  },

  // Leistungen
  {
    path: "/auto-innenreinigung",
    label: "Auto-Innenreinigung",
    summary: "Sitze, Teppiche, Cockpit, Himmel und Scheiben – gründlich statt Waschstraßen-Sauger.",
    kind: "leistung",
    updated: "2026-10-22",
  },
  {
    path: "/polsterreinigung-auto",
    label: "Polster- & Lederreinigung",
    summary: "Flecken und Gerüche aus Stoffsitzen holen, Leder reinigen und pflegen.",
    kind: "leistung",
    updated: "2026-10-22",
  },
  {
    path: "/lackaufbereitung-politur",
    label: "Lackaufbereitung & Politur",
    summary: "Swirls, Waschkratzer und matten Lack maschinell auspolieren lassen.",
    kind: "leistung",
    updated: "2026-10-22",
  },
  {
    path: "/keramikversiegelung",
    label: "Keramikversiegelung",
    summary: "Langanhaltender Lackschutz – mit sorgfältiger Vorbereitung durch Politur.",
    kind: "leistung",
    updated: "2026-10-22",
  },
  {
    path: "/leasingrueckgabe-aufbereitung",
    label: "Leasingrückgabe & Verkauf",
    summary: "Das Auto vor Gutachter oder Käufer in den bestmöglichen Zustand bringen.",
    kind: "leistung",
    updated: "2026-10-22",
  },
  {
    path: "/scheinwerfer-aufbereiten",
    label: "Scheinwerfer aufbereiten",
    summary: "Vergilbte, matte Scheinwerfer wieder klar – für Optik und Lichtausbeute.",
    kind: "leistung",
    updated: "2026-10-22",
  },
  {
    path: "/geruchsentfernung-auto",
    label: "Geruchsentfernung & Ozon",
    summary: "Rauch-, Tier- und Feuchtigkeitsgeruch an der Ursache behandeln.",
    kind: "leistung",
    updated: "2026-10-22",
  },
  {
    path: "/motorraumreinigung",
    label: "Motorraumreinigung",
    summary: "Schonende Motorwäsche ohne Hochdruck auf Steckern und Elektronik.",
    kind: "leistung",
    updated: "2026-10-22",
  },

  // Ratgeber
  {
    path: "/ratgeber/autoaufbereitung-kosten",
    label: "Was kostet eine Autoaufbereitung?",
    summary: "Richtpreise, Preisfaktoren und Rechenbeispiele für typische Fahrzeuge.",
    kind: "ratgeber",
    updated: "2026-10-22",
  },
  {
    path: "/ratgeber/keramikversiegelung-oder-wachs",
    label: "Keramikversiegelung oder Wachs?",
    summary: "Wachs, Lackversiegelung und Keramik im ehrlichen Vergleich.",
    kind: "ratgeber",
    updated: "2026-10-22",
  },
];

export const orte = seoPages.filter((p) => p.kind === "ort");
export const leistungsseiten = seoPages.filter((p) => p.kind === "leistung");
export const ratgeber = seoPages.filter((p) => p.kind === "ratgeber");

export function seoPage(path: string) {
  const page = seoPages.find((p) => p.path === path);
  if (!page) throw new Error(`Seite fehlt in lib/pages.ts: ${path}`);
  return page;
}
