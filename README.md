# HF Autopflege Bodenheim – Website

Next.js 16 (App Router) · Tailwind CSS 4 · komplett statisch.

## Starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
```

## Inhalte bearbeiten

| Was | Datei |
|---|---|
| Name, Adresse, Telefon, WhatsApp, Öffnungszeiten, Einzugsgebiet | `lib/site.ts` |
| Pakete, Einzelleistungen, Preise, MwSt.-Hinweis | `lib/pricing.ts` |
| Leistungstexte, FAQ, Video-Zuordnung | `lib/services.ts` |
| Impressum/Datenschutz-Platzhalter | `lib/legal.ts` |
| Domain (Canonical, Sitemap, strukturierte Daten) | `NEXT_PUBLIC_SITE_URL` (siehe `.env.example`) |
| Verzeichnis der SEO-Seiten (Sitemap, Footer, interne Links) | `lib/pages.ts` |
| Ortsseiten | `app/autoaufbereitung-*/page.tsx` |
| Leistungsseiten | `app/auto-innenreinigung`, `app/keramikversiegelung` usw. |
| Ratgeber | `app/ratgeber/*` |

## Vor dem Livegang

- [ ] Leistungen und Preise in `lib/pricing.ts` / `lib/services.ts` bestätigen (aktuell Vorschläge aus Marktvergleich)
- [ ] Alle `[PLATZHALTER]` in `lib/legal.ts` ausfüllen, Impressum/Datenschutz rechtlich prüfen lassen
- [ ] MwSt.-Hinweis in `lib/pricing.ts` prüfen (Kleinunternehmer?)
- [ ] `NEXT_PUBLIC_SITE_URL` auf die echte Domain setzen
- [ ] Lizenz der Stock-Videos für Website-Nutzung prüfen, Bildnachweis im Impressum ergänzen
- [ ] Google-Unternehmensprofil anlegen/aktualisieren – Name, Adresse, Telefon exakt wie auf der Website
- [ ] Texte der Orts-, Leistungs- und Ratgeberseiten prüfen (Dateien mit `// VORSCHLAG` im Kopf) – v. a. Abläufe, Dauer, verwendete Produkte
- [ ] Fahrzeiten und Routen auf den Ortsseiten in Google Maps gegenprüfen
- [ ] Google-Unternehmensprofil und Social-Media-Links in `lib/seo.ts` unter `sameAs` eintragen
- [ ] Google Search Console einrichten und `https://hf-autopflege.de/sitemap.xml` einreichen
- [ ] Neue Seite angelegt? In `lib/pages.ts` eintragen (Sitemap, Footer, Links)

## Videos

Originale liegen in `source-videos/`. `npm run videos` erzeugt daraus die optimierten,
stummen Loops und Standbilder in `public/videos/` (benötigt ffmpeg).
