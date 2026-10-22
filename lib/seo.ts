import type { Metadata } from "next";
import { extras, packages } from "./pricing";
import { faqs, type FaqItem } from "./services";
import { openingHours, site } from "./site";

const businessId = `${site.url}/#business`;

export function localBusinessJsonLd() {
  const openDays = openingHours.filter((h) => h.open);
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "@id": businessId,
    name: site.name,
    description:
      "Autopflege und Fahrzeugaufbereitung in Bodenheim: Innenaufbereitung, Politur, Versiegelung und Einzelleistungen für Pkw.",
    url: site.url,
    telephone: site.phone.international,
    image: `${site.url}/videos/detailing.jpg`,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    // TODO: Link zum Google-Unternehmensprofil und Social-Media-Profile ergänzen, sobald vorhanden.
    sameAs: [] as string[],
    areaServed: site.serviceArea.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: openDays.map((h) => dayNames[h.day]),
        opens: openDays[0]?.open,
        closes: openDays[0]?.close,
      },
    ],
    makesOffer: [
      ...packages.map((p) => ({ name: p.name, price: p.price })),
      ...extras.map((e) => ({ name: e.name, price: e.price })),
    ].map((o) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: o.name },
      ...(o.price !== null && {
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: o.price,
          priceCurrency: "EUR",
        },
      }),
    })),
  };
}

export function faqJsonLd(items: FaqItem[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Start", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** Leistung oder Orts-Angebot, verknüpft mit dem LocalBusiness über die @id. */
export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
  areaServed = site.serviceArea,
  minPrice,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: readonly string[];
  minPrice?: number | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${site.url}${path}`,
    provider: { "@id": businessId },
    areaServed: areaServed.map((city) => ({ "@type": "City", name: city })),
    ...(minPrice != null && {
      offers: {
        "@type": "Offer",
        priceSpecification: { "@type": "PriceSpecification", minPrice, priceCurrency: "EUR" },
      },
    }),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified = datePublished,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${site.url}${path}`,
    mainEntityOfPage: `${site.url}${path}`,
    datePublished,
    dateModified,
    inLanguage: "de-DE",
    image: `${site.url}/opengraph-image`,
    author: { "@id": businessId },
    publisher: { "@id": businessId },
  };
}

/**
 * Metadaten einer Unterseite. Der Titel wird absolut gesetzt (ohne Layout-Suffix), damit er
 * bei ≤ 60 Zeichen bleibt; openGraph wird vollständig gesetzt, weil Next.js es sonst nicht mit
 * dem Layout zusammenführt.
 */
export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: site.name,
      url: path,
      title,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
    },
  };
}
