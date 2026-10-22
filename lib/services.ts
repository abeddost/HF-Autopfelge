// VORSCHLAG – Leistungsbeschreibungen vor Veröffentlichung vom Inhaber prüfen.

export type Video = { slug: string; alt: string };

export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  video: Video;
  packageId?: string; // Verweis auf lib/pricing.ts – ohne Angabe: Einzelleistungen
  details: { href: string; label: string }[]; // vertiefende SEO-Seiten (lib/pages.ts)
};

export const videos = {
  detailing: { slug: "detailing", alt: "Scheinwerfer eines dunklen Autos wird mit einem Mikrofasertuch getrocknet" },
  innenraum: { slug: "innenraum", alt: "Teppich im Fußraum wird mit einem Sprühextraktionsgerät gereinigt" },
  politur: { slug: "politur", alt: "Schwarzer Lack wird mit einer Poliermaschine poliert" },
  scheinwerfer: { slug: "scheinwerfer", alt: "Scheinwerfer wird mit Druckluft und Tuch gereinigt" },
  werkstatt: { slug: "werkstatt", alt: "Rotes Fahrzeug in einer hell beleuchteten Werkhalle" },
} satisfies Record<string, Video>;

export const services: Service[] = [
  {
    id: "innen",
    eyebrow: "Innenraum",
    title: "Innenaufbereitung",
    text: "Sitze, Teppiche, Cockpit und Scheiben – wir reinigen Ihren Innenraum gründlich und mit dem passenden Mittel für jede Oberfläche.",
    points: ["Aussaugen & Tiefenreinigung", "Polster, Leder & Himmel", "Kunststoffpflege & Scheiben"],
    video: videos.innenraum,
    packageId: "innen",
    details: [
      { href: "/auto-innenreinigung", label: "Auto-Innenreinigung" },
      { href: "/polsterreinigung-auto", label: "Polster- & Lederreinigung" },
    ],
  },
  {
    id: "aussen",
    eyebrow: "Lack & Glanz",
    title: "Politur & Versiegelung",
    text: "Eine schonende Wäsche, maschinelle Politur und eine Versiegelung bringen Tiefe und Glanz zurück – und schützen den Lack.",
    points: ["Handwäsche & Felgen", "Maschinelle Politur", "Wachs- oder Keramikversiegelung"],
    video: videos.politur,
    packageId: "aussen",
    details: [
      { href: "/lackaufbereitung-politur", label: "Lackaufbereitung & Politur" },
      { href: "/keramikversiegelung", label: "Keramikversiegelung" },
    ],
  },
  {
    id: "details",
    eyebrow: "Feinarbeit",
    title: "Details & Einzelleistungen",
    text: "Scheinwerfer, Motorraum, Fugen und Zierleisten: Gerade die kleinen Dinge machen den Unterschied – dafür nehmen wir uns Zeit.",
    points: ["Scheinwerferaufbereitung", "Motorraumreinigung", "Ozonbehandlung gegen Gerüche"],
    video: videos.scheinwerfer,
    details: [
      { href: "/scheinwerfer-aufbereiten", label: "Scheinwerfer aufbereiten" },
      { href: "/motorraumreinigung", label: "Motorraumreinigung" },
      { href: "/geruchsentfernung-auto", label: "Geruchsentfernung & Ozon" },
    ],
  },
];

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "Wie vereinbare ich einen Termin?",
    a: "Am schnellsten per Anruf oder WhatsApp unter 0176 62878366. Wir besprechen kurz Ihr Fahrzeug und Ihre Wünsche und finden einen passenden Termin.",
  },
  {
    q: "Wie lange dauert eine Aufbereitung?",
    a: "Das hängt vom Umfang und vom Zustand des Fahrzeugs ab. Bei der Terminabsprache nennen wir Ihnen einen realistischen Zeitrahmen.",
  },
  {
    q: "Was kostet eine Fahrzeugaufbereitung?",
    a: "Unsere Preisübersicht zeigt Richtpreise ab. Den genauen Preis stimmen wir vorab mit Ihnen ab – abhängig von Fahrzeuggröße und Verschmutzung.",
  },
  {
    q: "Wo finde ich HF Autopflege?",
    a: "In der Hilgestraße 14 in 55294 Bodenheim – gut erreichbar aus Mainz, Nackenheim, Gau-Bischofsheim, Nierstein und Umgebung.",
  },
  {
    q: "Wann haben Sie geöffnet?",
    a: "Montag bis Samstag von 10:00 bis 18:00 Uhr. Sonntags ist geschlossen.",
  },
];
