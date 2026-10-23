// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen. Größenfaktoren: lib/pricing.ts (vehicleSizes).
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import Preisrechner from "@/components/Preisrechner";
import RelatedLinks from "@/components/RelatedLinks";
import { vehicleSizes } from "@/lib/pricing";
import { pageMetadata } from "@/lib/seo";

const path = "/preisrechner";

export const metadata = pageMetadata({
  path,
  title: "Preisrechner Autoaufbereitung – Kosten berechnen",
  description:
    "Kosten Ihrer Autoaufbereitung berechnen: Fahrzeuggröße, Paket und Extras wählen, Richtpreis und Vorher/Nachher-Vorschau sehen, Angebot per WhatsApp anfragen.",
});

const percent = (factor: number) =>
  factor === 1 ? "Richtpreis" : `${factor > 1 ? "+" : "−"}${Math.round(Math.abs(factor - 1) * 100)} %`;

const faqs = [
  {
    q: "Ist der berechnete Preis verbindlich?",
    a: "Es ist ein Richtpreis für ein Fahrzeug in normalem Zustand. Den verbindlichen Preis legen wir vorab mit Ihnen fest – anhand von Fotos oder einer kurzen Besichtigung. Erst danach beginnen wir mit der Arbeit.",
  },
  {
    q: "Warum kostet die Aufbereitung für ein SUV mehr?",
    a: "Größere Fahrzeuge haben mehr Lackfläche, mehr Sitze und mehr Teppich – das bedeutet mehr Arbeitszeit. Leistungen wie Scheinwerferaufbereitung, Scheibenversiegelung und Ozonbehandlung kosten dagegen unabhängig von der Fahrzeuggröße gleich viel.",
  },
  {
    q: "Was bedeutet „nach Aufwand“?",
    a: "Bei manchen Leistungen, etwa der Tierhaarentfernung, schwankt der Aufwand so stark, dass ein Pauschalpreis unfair wäre. Mit ein paar Fotos per WhatsApp nennen wir Ihnen vorab einen konkreten Preis.",
  },
  {
    q: "Zeigt die Vorschau das echte Ergebnis?",
    a: "Nein, die Fotos sind KI-generierte Symbolbilder. Sie zeigen, welche Bereiche Ihres Autos die gewählten Leistungen abdecken – vom Lack über die Felgen bis zu Polstern und Dachhimmel. Wie das Ergebnis bei Ihrem Auto aussieht, hängt vom Ausgangszustand ab.",
  },
  {
    q: "Werden meine Angaben gespeichert?",
    a: "Nein. Der Rechner läuft vollständig in Ihrem Browser. Erst wenn Sie auf „Angebot per WhatsApp anfragen“ tippen, wird eine Nachricht vorbereitet, die Sie in WhatsApp selbst abschicken.",
  },
];

export default function PreisrechnerPage() {
  return (
    <>
      <section className="grain relative isolate overflow-hidden pb-10 pt-36 sm:pt-40">
        <div className="pointer-events-none absolute -right-40 -top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand/15 blur-3xl" />
        <div className="container-lux">
          <p className="eyebrow animate-hero-in">Preisrechner</p>
          <h1 className="h-display animate-hero-in mt-6 max-w-4xl text-[2.5rem] sm:text-6xl lg:text-7xl">
            Was kostet die Aufbereitung <span className="text-shine">Ihres Autos?</span>
          </h1>
          <p className="animate-hero-in mt-6 max-w-2xl text-lg leading-relaxed text-pearl">
            Fahrzeuggröße wählen, Paket und Extras anklicken – Sie sehen sofort den Richtpreis und in der Vorschau, welche
            Bereiche Ihres Autos wieder sauber werden.
          </p>
        </div>
      </section>
      <Breadcrumbs
        items={[
          { name: "Preise", path: "/preise" },
          { name: "Preisrechner", path },
        ]}
      />

      <section className="section pt-10 lg:pt-14" aria-label="Preisrechner">
        <div className="container-lux">
          <Preisrechner />
        </div>
      </section>

      <section className="section bg-coal" aria-labelledby="so-rechnen-wir">
        <div className="container-lux grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="prose-lux">
            <h2 id="so-rechnen-wir">So rechnet der Preisrechner</h2>
            <p>
              Grundlage sind unsere <Link href="/preise">Richtpreise</Link> für einen Pkw in normalem Zustand. Je nach
              Fahrzeuggröße passen wir sie an und runden auf volle 5 Euro. Leistungen, die in einem Paket schon enthalten
              sind – etwa die Polsterreinigung im Paket Leasingrückgabe & Verkauf –, werden nicht doppelt berechnet.
            </p>
            <p>
              Der Endpreis hängt außerdem vom Zustand ab: Tierhaare, starke Verschmutzung oder ein Lack, der mehrere
              Politur-Durchgänge braucht, machen mehr Arbeit. Deshalb stimmen wir den Preis vor jedem Auftrag verbindlich
              mit Ihnen ab. Mehr Hintergründe im Ratgeber{" "}
              <Link href="/ratgeber/autoaufbereitung-kosten">Was kostet eine Autoaufbereitung?</Link>
            </p>
          </div>
          <div className="prose-lux">
            <h3>Faktoren nach Fahrzeuggröße</h3>
            <div className="table-wrap">
              <table>
                <tbody>
                  {vehicleSizes.map((size) => (
                    <tr key={size.id}>
                      <td>{size.name}</td>
                      <td className="whitespace-nowrap">{percent(size.factor)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              Unabhängig von der Größe: Scheinwerferaufbereitung, Scheibenversiegelung und Ozonbehandlung.
            </p>
          </div>
        </div>
      </section>

      <FaqSection title="Fragen zum Preisrechner" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Mehr zu Preisen und Leistungen"
        paths={[
          "/ratgeber/autoaufbereitung-kosten",
          "/auto-innenreinigung",
          "/keramikversiegelung",
          "/leasingrueckgabe-aufbereitung",
          "/lackaufbereitung-politur",
          "/autoaufbereitung-bodenheim",
        ]}
      />

      <CTASection />
    </>
  );
}
