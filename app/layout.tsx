import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import MobileContactBar from "@/components/MobileContactBar";
import WhatsAppFab from "@/components/WhatsAppFab";
import { localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

// next/font lädt die Schriften beim Build herunter und liefert sie selbst aus – keine Anfragen an Google.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Autopflege & Fahrzeugaufbereitung Bodenheim | HF Autopflege",
    template: "%s | HF Autopflege Bodenheim",
  },
  description:
    "HF Autopflege – Ihre Autopflege in Bodenheim. Fahrzeugaufbereitung innen & außen, Politur und Versiegelung. Hilgestraße 14, Mo–Sa 10–18 Uhr. Jetzt Termin anfragen: 0176 62878366.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    url: "/",
  },
  formatDetection: { telephone: true },
  other: {
    "geo.region": "DE-RP",
    "geo.placename": "Bodenheim",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-champagne focus:px-5 focus:py-3 focus:text-ink"
        >
          Zum Inhalt springen
        </a>
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
        <MobileContactBar />
      </body>
    </html>
  );
}
