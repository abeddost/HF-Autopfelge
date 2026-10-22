// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen. Fahrzeiten in Google Maps gegenprüfen.
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import { CheckIcon } from "@/components/icons";
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

const path = "/autoaufbereitung-mainz-laubenheim";
const description =
  "Autoaufbereitung für Mainz-Laubenheim: in ca. 5 Minuten bei HF Autopflege in Bodenheim. Verkaufsaufbereitung, Leasingrückgabe, Innenreinigung. Termin anfragen.";

export const metadata = pageMetadata({
  path,
  title: "Autoaufbereitung Mainz-Laubenheim | HF Autopflege",
  description,
});

const whatsappText =
  "Hallo HF Autopflege, ich komme aus Mainz-Laubenheim und möchte mein Auto aufbereiten lassen (Verkauf/Leasingrückgabe/Pflege): ";

const kaeuferBlick = [
  ["Innenraum riechen", "Rauch, Hund oder muffige Feuchtigkeit drücken den Preis oft stärker als ein Kratzer."],
  ["Fahrersitz & Lenkrad", "Abgegriffenes Leder und speckiges Lenkrad verraten Laufleistung – auch bei wenig Kilometern."],
  ["Scheinwerfer", "Vergilbte Scheinwerfer lassen ein Auto älter wirken, als es ist."],
  ["Lack im Sonnenlicht", "Waschkratzer und matte Stellen fallen bei der Besichtigung im Hof sofort auf."],
  ["Motorraum", "Ein verdreckter Motorraum weckt Zweifel, ein gepflegter schafft Vertrauen."],
  ["Kofferraum", "Krümel, Sand und Flecken unter der Abdeckung sind ein häufig übersehener Eindruck."],
] as const;

const faqs = [
  {
    q: "Wie weit ist es von Laubenheim bis zu Ihnen?",
    a: "Je nach Startpunkt im Stadtteil etwa 3 bis 5 Kilometer und rund 5 Minuten über die B9 bzw. die Ortsstraßen Richtung Bodenheim. Das macht es leicht, das Auto morgens abzugeben und nachmittags wieder abzuholen.",
  },
  {
    q: "Lohnt sich eine Aufbereitung vor dem Autoverkauf überhaupt?",
    a: "Meistens ja, weil der erste Eindruck den Preis bestimmt. Ein sauberer, geruchsfreier Innenraum und glänzender Lack lassen ein Auto gepflegter wirken und geben Käufern weniger Argumente zum Handeln. Garantieren kann niemand einen bestimmten Mehrerlös – aber ein ungepflegtes Auto verkauft sich fast immer schlechter.",
  },
  {
    q: "Wie lange vor dem Verkauf sollte ich das Auto bringen?",
    a: "Ideal sind wenige Tage vor den ersten Besichtigungen oder vor den Verkaufsfotos. Dann ist das Ergebnis frisch, und Sie können das Auto für Inserat-Fotos direkt nutzen.",
  },
  {
    q: "Können Sie Kratzer für den Verkauf entfernen?",
    a: "Leichte Kratzer und Waschspuren im Klarlack lassen sich meist auspolieren. Tiefe Kratzer, die bis auf die Grundierung gehen, oder Dellen sind ein Fall für Lackierer bzw. Smart Repair – das sagen wir Ihnen bei der Besichtigung offen.",
  },
];

export default function LaubenheimPage() {
  const pakete = ["leasing", "komplett"].map((id) => packages.find((p) => p.id === id)!);

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Autoaufbereitung für Mainz-Laubenheim",
          description,
          path,
          serviceType: "Fahrzeugaufbereitung",
          areaServed: ["Mainz-Laubenheim", "Mainz"],
          minPrice: packages[0].price,
        })}
      />
      <PageHero
        eyebrow="Mainz-Laubenheim · ca. 5 Min."
        title={
          <>
            Autoaufbereitung für <span className="text-shine">Laubenheim</span> – gleich hinter der Stadtgrenze.
          </>
        }
        intro="Vom Mainzer Stadtteil Laubenheim sind Sie in wenigen Minuten bei uns in Bodenheim. Besonders gefragt: Aufbereitung vor dem Autoverkauf und vor der Leasingrückgabe."
        video={videos.detailing}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Fotos schicken & anfragen" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Einzugsgebiet", path: "/einzugsgebiet" },
          { name: "Mainz", path: "/autoaufbereitung-mainz" },
          { name: "Laubenheim", path },
        ]}
      />

      {/* Einstieg + Anfahrt */}
      <section className="section pt-14 lg:pt-20">
        <div className="container-lux grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="prose-lux lg:col-span-7">
            <h2>Nah genug für den kurzen Weg, gründlich genug für den Verkauf</h2>
            <p>
              Laubenheim gehört zu Mainz, liegt aber näher an Bodenheim als an der Mainzer Innenstadt. Für Sie heißt
              das: Sie brauchen für die Fahrt zu uns kaum länger als zum nächsten Supermarkt – und bekommen statt einer
              schnellen Wäsche eine Aufbereitung, bei der wir uns Stunden Zeit für Ihr Auto nehmen.
            </p>
            <p>
              Oft gibt es einen konkreten Anlass für eine Aufbereitung: Das Auto soll verkauft werden, der
              Leasingvertrag läuft aus, oder ein Gebrauchter wurde gerade gekauft und soll einmal von Grund auf sauber
              werden. Für alle drei Fälle finden Sie unten die passenden Leistungen.
            </p>
            <p>
              Sie suchen allgemeine Informationen für das ganze Stadtgebiet? Dann lesen Sie auf unserer Seite zur{" "}
              <Link href="/autoaufbereitung-mainz">Autoaufbereitung für Mainz</Link> weiter.
            </p>
          </div>
          <div className="lg:col-span-5">
            <RouteCard
              from="Mainz-Laubenheim"
              minutes="ca. 5 Min."
              km="3–5 km"
              route="Über die B9 bzw. die Ortsverbindung Richtung Süden nach Bodenheim, dort in die Hilgestraße."
            />
          </div>
        </div>
      </section>

      {/* Verkauf: Käuferblick */}
      <section className="section bg-coal" aria-labelledby="kaeuferblick">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Autoverkauf"
            title={<span id="kaeuferblick">Worauf Käufer bei der Besichtigung zuerst achten.</span>}
            intro="Wer ein gebrauchtes Auto anschaut, prüft selten zuerst die Technik – sondern das, was er sieht, riecht und anfasst. Genau dort setzen wir an."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kaeuferBlick.map(([titel, text], i) => (
              <Reveal as="li" key={titel} delay={(i % 3) * 100} className="hairline rounded-3xl bg-ink/40 p-7">
                <p className="flex items-center gap-3 font-display text-xl text-snow">
                  <CheckIcon width={18} height={18} className="text-brand" /> {titel}
                </p>
                <p className="mt-3 leading-relaxed text-mist">{text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="prose-lux mt-14">
            <p>
              Für den Verkauf kombinieren wir meist die{" "}
              <Link href="/leasingrueckgabe-aufbereitung">Aufbereitung für Verkauf und Leasingrückgabe</Link> mit
              einzelnen Extras: <Link href="/scheinwerfer-aufbereiten">Scheinwerferaufbereitung</Link> (
              {extraPrice("scheinwerfer")} pro Paar), <Link href="/motorraumreinigung">Motorraumreinigung</Link> (
              {extraPrice("motorraum")}) oder eine <Link href="/geruchsentfernung-auto">Ozonbehandlung</Link> gegen
              Gerüche ({extraPrice("ozon")}).
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leasing + gekaufter Gebrauchter */}
      <section className="section">
        <div className="container-lux grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="prose-lux">
            <h2>Leasingrückgabe: Rechnung vermeiden, bevor sie kommt</h2>
            <p>
              Bei der Rückgabe bewertet ein Gutachter, was als normale Abnutzung gilt und was nicht. Starke
              Verschmutzung, Flecken in den Polstern oder Tierhaare werden dabei oft als Mangel eingestuft – obwohl
              sie sich mit einer professionellen Reinigung beseitigen lassen. Eine Aufbereitung ein bis zwei Wochen
              vor dem Termin schafft Klarheit, welche Spuren übrig bleiben.
            </p>
            <p>
              Das Paket <strong>Leasingrückgabe & Verkauf</strong> beginnt {packagePrice("leasing")}. Eine
              ausführliche Checkliste finden Sie auf unserer Seite zur{" "}
              <Link href="/leasingrueckgabe-aufbereitung">Leasingrückgabe</Link>.
            </p>
          </Reveal>
          <Reveal className="prose-lux" delay={120}>
            <h2>Gerade einen Gebrauchten gekauft?</h2>
            <p>
              Beim Händler wurde das Auto vielleicht schnell aufgehübscht – aber wer weiß, was unter den Sitzen und in
              den Lüftungskanälen steckt. Eine{" "}
              <Link href="/auto-innenreinigung">gründliche Innenreinigung</Link> ({packagePrice("innen")}) mit
              Polsterreinigung ist der beste Start, damit sich das neue Auto auch wie Ihres anfühlt.
            </p>
            <p>
              Und wenn der Lack gut aussieht und so bleiben soll: Eine{" "}
              <Link href="/keramikversiegelung">Keramikversiegelung</Link> schützt ihn deutlich länger als Wachs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pakete */}
      <section className="section relative overflow-hidden bg-ivory text-ink" aria-labelledby="pakete-laubenheim">
        <div className="container-lux relative">
          <SectionHeading
            light
            eyebrow="Die passenden Pakete"
            title={<span id="pakete-laubenheim">Für Verkauf, Rückgabe oder den Neustart.</span>}
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

      <FaqSection title="Fragen aus Laubenheim" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        eyebrow="In der Nähe"
        title="Weitere Orte und Leistungen"
        paths={[
          "/autoaufbereitung-mainz",
          "/autoaufbereitung-bodenheim",
          "/autoaufbereitung-nackenheim",
          "/leasingrueckgabe-aufbereitung",
          "/scheinwerfer-aufbereiten",
          "/ratgeber/autoaufbereitung-kosten",
        ]}
      />

      <CTASection
        title={
          <>
            Verkauf geplant? <span className="text-shine">Erst aufbereiten.</span>
          </>
        }
        text="Schicken Sie uns Fotos per WhatsApp – wir sagen Ihnen, welche Leistungen sich vor dem Verkauf oder der Rückgabe lohnen."
      />
    </>
  );
}
