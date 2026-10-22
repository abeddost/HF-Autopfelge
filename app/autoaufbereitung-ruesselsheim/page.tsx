// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen. Fahrzeiten in Google Maps gegenprüfen.
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PriceCard from "@/components/PriceCard";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import RouteCard from "@/components/RouteCard";
import SectionHeading from "@/components/SectionHeading";
import { extraPrice, packagePrice, packages } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/autoaufbereitung-ruesselsheim";
const description =
  "Autoaufbereitung für Rüsselsheim: Leasingrückgabe, Firmenwagen und Innenreinigung bei HF Autopflege in Bodenheim – ca. 20–25 Minuten über die A60.";

export const metadata = pageMetadata({
  path,
  title: "Autoaufbereitung Rüsselsheim – Leasing | HF Autopflege",
  description,
});

const whatsappText =
  "Hallo HF Autopflege, ich komme aus Rüsselsheim. Es geht um eine Aufbereitung (Leasingrückgabe/Firmenwagen/Pflege). Fahrzeug & Rückgabetermin: ";

const zeitplan = [
  {
    wann: "4 Wochen vorher",
    titel: "Bestandsaufnahme",
    text: "Rückgabeprotokoll bzw. Schadenskatalog Ihres Leasinggebers lesen. Auto bei Tageslicht ansehen: Kratzer, Felgen, Sitze, Kofferraum. Fotos machen und uns schicken.",
  },
  {
    wann: "2–3 Wochen vorher",
    titel: "Termin bei uns",
    text: "Aufbereitung durchführen lassen. So bleibt Zeit, falls danach noch ein Lackierer oder Smart Repair für tiefere Schäden nötig ist.",
  },
  {
    wann: "1 Woche vorher",
    titel: "Kleinkram erledigen",
    text: "Zweitschlüssel, Serviceheft, Bordmappe, Ladekabel, Warndreieck und Verbandskasten zusammensuchen. Reifenprofil prüfen.",
  },
  {
    wann: "Rückgabetag",
    titel: "Sauber vorfahren",
    text: "Nicht mehr durch die Waschstraße – frische Waschkratzer sind bei Gutachterlicht gut zu sehen. Eigene Fotos vom Zustand machen.",
  },
];

const faqs = [
  {
    q: "Wie lange brauche ich aus Rüsselsheim nach Bodenheim?",
    a: "Rund 20 bis 25 Minuten über die A60: über die Weisenauer Brücke Richtung Mainz und an der Ausfahrt Mainz-Laubenheim raus, dann sind es nur noch wenige Minuten bis zur Hilgestraße.",
  },
  {
    q: "Was gilt bei der Leasingrückgabe als normale Abnutzung?",
    a: "Das legt jeder Leasinggeber in seinen Rückgabebedingungen fest. Typischerweise gelten leichte Gebrauchsspuren als normal, Flecken, starke Verschmutzung, Tierhaare oder deutliche Kratzer dagegen nicht. Lesen Sie das Dokument Ihres Leasinggebers – wir helfen gern, es mit Ihrem Auto abzugleichen.",
  },
  {
    q: "Können Sie Firmenwagen auf Rechnung des Unternehmens aufbereiten?",
    a: "Ja, die Rechnung stellen wir auf Wunsch auf Ihr Unternehmen aus. Wenn Sie mehrere Fahrzeuge regelmäßig aufbereiten lassen möchten, sprechen Sie uns an – dann finden wir einen passenden Ablauf.",
  },
  {
    q: "Garantieren Sie, dass ich bei der Rückgabe nichts nachzahlen muss?",
    a: "Nein, das kann seriös niemand. Was als Schaden gilt, entscheidet der Gutachter Ihres Leasinggebers. Wir sorgen dafür, dass Verschmutzungen und polierbare Spuren nicht mehr da sind – echte Schäden wie Dellen oder tiefe Kratzer bleiben Schäden.",
  },
];

export default function RuesselsheimPage() {
  const pakete = ["leasing", "innen"].map((id) => packages.find((p) => p.id === id)!);

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Autoaufbereitung für Rüsselsheim",
          description,
          path,
          serviceType: "Fahrzeugaufbereitung für Leasingrückgabe",
          areaServed: ["Rüsselsheim am Main"],
          minPrice: packages.find((p) => p.id === "innen")!.price,
        })}
      />
      <PageHero
        eyebrow="Für Rüsselsheim · ca. 20–25 Min."
        title={
          <>
            Autoaufbereitung für <span className="text-shine">Rüsselsheim</span> – bevor der Gutachter kommt.
          </>
        }
        intro="In der Autostadt am Main fahren viele Firmenwagen und Leasingfahrzeuge. Wir bereiten sie in Bodenheim so vor, dass sie bei der Rückgabe sauber und gepflegt dastehen."
        video={videos.detailing}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Rückgabe vorbereiten" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Einzugsgebiet", path: "/einzugsgebiet" },
          { name: "Rüsselsheim", path },
        ]}
      />

      <section className="section pt-14 lg:pt-20">
        <div className="container-lux grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="prose-lux lg:col-span-7">
            <h2>Rüsselsheim fährt Auto – und oft geleast</h2>
            <p>
              Rüsselsheim ist seit Generationen eng mit dem Automobil verbunden. Entsprechend viele Fahrzeuge in der
              Stadt sind Dienst-, Firmen- oder Leasingwagen, die nach zwei, drei oder vier Jahren zurückgegeben werden.
              Und genau dann wird es spannend: Was der Gutachter als „über die normale Abnutzung hinaus“ einstuft, landet
              auf der Rechnung.
            </p>
            <p>
              Vieles, was dort auftaucht, ist kein Schaden, sondern Schmutz: Flecken in den Polstern, Tierhaare,
              verkrustete Felgen, ein muffiger Innenraum, matter Lack mit Waschkratzern. All das lässt sich vor der
              Rückgabe beheben – oft für weniger, als die Nachberechnung kosten würde.
            </p>
            <p>
              Die Fahrt von Rüsselsheim nach Bodenheim ist dank A60 kurz. Sie geben das Auto ab, nutzen den Tag und
              holen es fertig aufbereitet wieder ab.
            </p>
          </div>
          <div className="lg:col-span-5">
            <RouteCard
              from="Rüsselsheim am Main"
              minutes="20–25 Min."
              km="ca. 20 km"
              route="Auf die A60 Richtung Mainz, über die Weisenauer Brücke bis zur Ausfahrt Mainz-Laubenheim, dann wenige Minuten nach Bodenheim."
            />
          </div>
        </div>
      </section>

      {/* Zeitplan */}
      <section className="section bg-coal" aria-labelledby="zeitplan">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Leasingrückgabe"
            title={<span id="zeitplan">Der Zeitplan für eine entspannte Rückgabe.</span>}
            intro="Die Kurzfassung. Die ausführliche Checkliste mit allen Punkten finden Sie auf unserer Seite zur Leasingrückgabe."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {zeitplan.map((schritt, i) => (
              <Reveal as="li" key={schritt.wann} delay={i * 100} className="hairline relative rounded-3xl bg-ink/40 p-7">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand">{schritt.wann}</p>
                <p className="mt-3 font-display text-2xl text-snow">{schritt.titel}</p>
                <p className="mt-3 leading-relaxed text-mist">{schritt.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10">
            <Link href="/leasingrueckgabe-aufbereitung" className="btn btn-ghost">
              Zur ausführlichen Checkliste
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-lux grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="prose-lux">
            <h2>Was wir vor der Rückgabe typischerweise machen</h2>
            <ul>
              <li>
                <strong>Innenraum:</strong> Tiefenreinigung von Sitzen, Teppichen und Kofferraum, Flecken entfernen,
                Kunststoffe reinigen – siehe <Link href="/auto-innenreinigung">Innenreinigung</Link>.
              </li>
              <li>
                <strong>Lack:</strong> Waschkratzer und leichte Kratzer auspolieren, soweit möglich – mehr unter{" "}
                <Link href="/lackaufbereitung-politur">Lackaufbereitung</Link>.
              </li>
              <li>
                <strong>Felgen:</strong> Bremsstaub und Verkrustungen entfernen ({extraPrice("felgen")}).
              </li>
              <li>
                <strong>Gerüche:</strong> Rauch- oder Tiergeruch an der Ursache behandeln, bei Bedarf mit{" "}
                <Link href="/geruchsentfernung-auto">Ozon</Link> ({extraPrice("ozon")}).
              </li>
              <li>
                <strong>Tierhaare:</strong> gründlich aus Teppichen und Polstern entfernen ({extraPrice("tierhaare")}).
              </li>
            </ul>
          </Reveal>
          <Reveal className="prose-lux" delay={120}>
            <h2>Firmenwagen und Fuhrpark</h2>
            <p>
              Für Unternehmen aus Rüsselsheim und Umgebung bereiten wir auch Firmenfahrzeuge auf – ob einmalig vor der
              Übergabe an neue Mitarbeitende oder regelmäßig. Die Rechnung stellen wir auf Wunsch auf Ihr Unternehmen
              aus.
            </p>
            <p>
              Ein sauberer Firmenwagen ist nicht nur ein angenehmer Arbeitsplatz, sondern auch Visitenkarte – beim
              Kundentermin genauso wie bei der Rückgabe an den Leasinggeber. Sprechen Sie uns an, wenn Sie mehrere
              Fahrzeuge haben, dann planen wir die Termine gemeinsam. Was die einzelnen Leistungen kosten, zeigt unser{" "}
              <Link href="/ratgeber/autoaufbereitung-kosten">Kosten-Ratgeber</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-ivory text-ink" aria-labelledby="pakete-ruesselsheim">
        <div className="container-lux relative">
          <SectionHeading
            light
            eyebrow="Pakete"
            title={<span id="pakete-ruesselsheim">Für Rückgabe oder Neustart.</span>}
            intro={`Leasingrückgabe & Verkauf ${packagePrice("leasing")}, reine Innenaufbereitung ${packagePrice("innen")}.`}
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {pakete.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 120}>
                <PriceCard pkg={pkg} light />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Fragen aus Rüsselsheim" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Passend dazu"
        paths={[
          "/leasingrueckgabe-aufbereitung",
          "/lackaufbereitung-politur",
          "/autoaufbereitung-wiesbaden",
          "/autoaufbereitung-mainz",
          "/auto-innenreinigung",
          "/ratgeber/autoaufbereitung-kosten",
        ]}
      />

      <CTASection
        title={
          <>
            Rückgabe in Sicht? <span className="text-shine">Jetzt planen.</span>
          </>
        }
        text="Schicken Sie uns Fahrzeug, Rückgabedatum und ein paar Fotos per WhatsApp – wir schlagen Ihnen einen Termin vor."
      />
    </>
  );
}
