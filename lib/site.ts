// Zentrale Firmendaten – hier ändern, alles andere zieht automatisch nach.

export const site = {
  name: "HF Autopflege Bodenheim",
  shortName: "HF Autopflege",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hf-autopflege-bodenheim.de").replace(/\/$/, ""),
  phone: {
    display: "0176 62878366",
    international: "+49 176 62878366",
    href: "tel:+4917662878366",
  },
  whatsappNumber: "4917662878366",
  address: {
    street: "Hilgestraße 14",
    zip: "55294",
    city: "Bodenheim",
    region: "Rheinland-Pfalz",
    country: "DE",
  },
  geo: { lat: 49.9296351, lng: 8.3152745 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("HF Autopflege, Hilgestraße 14, 55294 Bodenheim"),
  serviceArea: [
    "Bodenheim",
    "Nackenheim",
    "Gau-Bischofsheim",
    "Harxheim",
    "Lörzweiler",
    "Mainz-Laubenheim",
    "Nierstein",
    "Oppenheim",
  ],
} as const;

// 0 = Sonntag … 6 = Samstag (wie Date.getDay())
export const openingHours: { day: number; label: string; short: string; open?: string; close?: string }[] = [
  { day: 1, label: "Montag", short: "Mo", open: "10:00", close: "18:00" },
  { day: 2, label: "Dienstag", short: "Di", open: "10:00", close: "18:00" },
  { day: 3, label: "Mittwoch", short: "Mi", open: "10:00", close: "18:00" },
  { day: 4, label: "Donnerstag", short: "Do", open: "10:00", close: "18:00" },
  { day: 5, label: "Freitag", short: "Fr", open: "10:00", close: "18:00" },
  { day: 6, label: "Samstag", short: "Sa", open: "10:00", close: "18:00" },
  { day: 0, label: "Sonntag", short: "So" },
];

export const hoursSummary = "Mo–Sa 10:00–18:00 Uhr · So geschlossen";

export const defaultWhatsAppText =
  "Hallo HF Autopflege, ich interessiere mich für eine Fahrzeugaufbereitung und hätte gerne einen Termin.";

export function whatsappLink(text: string = defaultWhatsAppText) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/preise", label: "Preise" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
