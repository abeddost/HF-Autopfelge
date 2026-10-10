import { extras, packages } from "./pricing";
import { faqs } from "./services";
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

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
