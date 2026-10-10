// Rechtliche Angaben – alle Werte in [ECKIGEN KLAMMERN] sind Platzhalter und müssen ersetzt werden.
// Die Texte ersetzen keine Rechtsberatung. Bitte vor Veröffentlichung prüfen lassen.

export const legal = {
  owner: "[VOR- UND NACHNAME INHABER/IN]",
  legalForm: "[RECHTSFORM, z. B. Einzelunternehmen]",
  email: "[E-MAIL-ADRESSE]",
  vatId: "[USt-IdNr. gemäß § 27a UStG – falls vorhanden, sonst Zeile entfernen]",
  register: "[HANDELSREGISTER / REGISTERNUMMER – falls eingetragen, sonst Zeile entfernen]",
  supervisoryAuthority: "[ZUSTÄNDIGE AUFSICHTSBEHÖRDE / KAMMER – falls erforderlich]",
  contentResponsible: "[NAME, ANSCHRIFT – Verantwortlich i. S. d. § 18 Abs. 2 MStV]",
  hostingProvider: "[HOSTING-ANBIETER, z. B. Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA]",
  lastUpdated: "[DATUM]",
} as const;

export function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}
