// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen.
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import { HoursCard, LocationCard } from "@/components/HoursCard";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PriceCard from "@/components/PriceCard";
import QuickFacts from "@/components/QuickFacts";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { extraPrice, packagePrice, packages, priceNote } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";
import { hoursSummary, site } from "@/lib/site";

const path = "/autoaufbereitung-bodenheim";
const description =
  "Autoaufbereitung in Bodenheim: Innenreinigung, Politur und Versiegelung in der Hilgestraße 14. Auto morgens abgeben, später gepflegt abholen. Mo–Sa 10–18 Uhr.";

export const metadata = pageMetadata({
  path,
  title: "Autoaufbereitung Bodenheim – Hilgestraße 14 | HF Autopflege",
  description,
});

const whatsappText =
  "Hallo HF Autopflege, ich wohne in Bodenheim und hätte gerne einen Termin für eine Aufbereitung. Mein Fahrzeug: ";

const faqs = [
  {
    q: "Kann ich mein Auto morgens abgeben und abends wieder abholen?",
    a: "Für viele Leistungen ja – etwa bei Innen- oder Außenaufbereitung. Bei aufwendigen Arbeiten wie einer mehrstufigen Politur oder einer Keramikversiegelung, die aushärten muss, kann es länger dauern. Den realistischen Zeitrahmen nennen wir Ihnen schon bei der Terminabsprache.",
  },
  {
    q: "Muss ich während der Aufbereitung vor Ort bleiben?",
    a: "Nein. Sie geben das Fahrzeug in der Hilgestraße 14 ab, erledigen Ihren Tag und holen es wieder ab, wenn wir fertig sind. Wir melden uns, sobald Ihr Auto bereit ist.",
  },
  {
    q: "Wie komme ich nach der Abgabe weiter, wenn ich nicht in Bodenheim wohne?",
    a: "Bodenheim hat einen eigenen Bahnhof an der Strecke zwischen Mainz und Worms. Sie können also mit der Bahn weiterfahren oder sich kurz abholen lassen. Sprechen Sie uns an, dann stimmen wir Abgabe- und Abholzeit auf Ihre Verbindung ab.",
  },
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "Das hängt von der Leistung und der Saison ab – vor Ostern und im Herbst ist erfahrungsgemäß mehr los. Am schnellsten klären Sie das per Anruf oder WhatsApp unter 0176 62878366.",
  },
  {
    q: "Was kostet eine Komplettaufbereitung in Bodenheim?",
    a: `Unsere Komplettaufbereitung (innen und außen) beginnt ${packagePrice("komplett")}. Der endgültige Preis hängt von Fahrzeuggröße und Zustand ab und wird vor dem Start verbindlich mit Ihnen abgesprochen.`,
  },
  {
    q: "Reinigen Sie auch stark verschmutzte Autos, zum Beispiel nach der Weinlese?",
    a: "Ja. Lehm im Fußraum, Staub in den Lüftungsschlitzen oder Erde an Schwellern und Radkästen gehören in einer Weinbaugemeinde dazu. Bei sehr starker Verschmutzung kalkulieren wir den Mehraufwand transparent vorab.",
  },
];

export default function BodenheimPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Autoaufbereitung in Bodenheim",
          description,
          path,
          serviceType: "Fahrzeugaufbereitung",
          areaServed: ["Bodenheim"],
          minPrice: packages[0].price,
        })}
      />
      <PageHero
        eyebrow="Bodenheim · Hilgestraße 14"
        title={
          <>
            Autoaufbereitung in <span className="text-shine">Bodenheim</span> – direkt im Ort.
          </>
        }
        intro="Kein Umweg nach Mainz: Bringen Sie Ihr Auto in die Hilgestraße, erledigen Sie Ihren Tag und holen Sie es gründlich gepflegt wieder ab – innen wie außen."
        video={videos.werkstatt}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton text={whatsappText} />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Einzugsgebiet", path: "/einzugsgebiet" },
          { name: "Bodenheim", path },
        ]}
      />

      <ArticleLayout
        aside={
          <QuickFacts
            title="Auf einen Blick"
            facts={[
              ["Adresse", `${site.address.street}, ${site.address.zip} ${site.address.city}`],
              ["Geöffnet", "Mo–Sa 10–18 Uhr"],
              ["Ablauf", "abgeben & später abholen"],
              ["Pflegewäsche", packagePrice("pflegewaesche")],
              ["Innenaufbereitung", packagePrice("innen")],
              ["Komplettaufbereitung", packagePrice("komplett")],
            ]}
            whatsappText={whatsappText}
          >
            Richtpreise für Pkw in normalem Zustand – den genauen Preis stimmen wir vorab mit Ihnen ab.
          </QuickFacts>
        }
      >
        <h2>Fahrzeugaufbereitung aus Bodenheim, für Bodenheim</h2>
        <p>
          HF Autopflege ist kein Waschpark an der Ausfallstraße, sondern eine Werkstatt für Autopflege mitten in
          Bodenheim. Hier wird Ihr Auto von Hand gereinigt, poliert und versiegelt – mit Zeit für die Stellen, die in
          der Waschstraße oder beim schnellen Aussaugen an der Tankstelle immer übrig bleiben: Sitzschienen, Türfalze,
          Lüftungsdüsen, Felgeninnenseiten.
        </p>
        <p>
          Für Bodenheimerinnen und Bodenheimer heißt das vor allem eines: <strong>kurze Wege</strong>. Sie müssen keinen
          halben Tag für die Fahrt nach Mainz oder Wiesbaden einplanen. Das Auto steht morgens bei uns, und Sie sind
          in wenigen Minuten wieder zu Hause, im Büro oder auf dem Weg zum Bahnhof.
        </p>

        <h2>So läuft Ihr Termin ab</h2>
        <ol>
          <li>
            <strong>Kurz melden.</strong> Rufen Sie an oder schicken Sie uns per WhatsApp ein paar Fotos – vom
            Innenraum, vom Lack, von Flecken oder Kratzern, die Sie stören. So können wir den Aufwand schon vorab
            einschätzen.
          </li>
          <li>
            <strong>Umfang und Preis festlegen.</strong> Wir sagen Ihnen ehrlich, welche Leistung Ihr Auto wirklich
            braucht. Oft reicht eine gründliche Innenaufbereitung statt des großen Pakets.
          </li>
          <li>
            <strong>Auto in der Hilgestraße abgeben.</strong> Schlüssel übergeben, kurz die Problemstellen zeigen,
            fertig. Wertsachen nehmen Sie am besten vorher heraus.
          </li>
          <li>
            <strong>Gepflegt abholen.</strong> Wir melden uns, sobald Ihr Auto fertig ist, und gehen das Ergebnis
            gemeinsam mit Ihnen durch.
          </li>
        </ol>

        <h2>Was ein Auto in Bodenheim übers Jahr mitmacht</h2>
        <p>
          Bodenheim liegt zwischen Rhein und Weinbergen – schön zum Wohnen, aber nicht immer schonend für das Auto.
          Wer hier unterwegs ist, kennt die typischen Spuren:
        </p>
        <h3>Frühjahr: Blütenstaub und Pollen</h3>
        <p>
          Im April und Mai legt sich ein gelber Film auf Lack und Scheiben, und über die Lüftung landet der Staub auch
          im Innenraum. Eine <Link href="/auto-innenreinigung">gründliche Innenreinigung</Link> mit Ausblasen der
          Lüftungsdüsen hilft Allergikern spürbar mehr als das nächste Duftbäumchen.
        </p>
        <h3>Sommer: Insekten und Hitze</h3>
        <p>
          Nach Fahrten über die B9 oder die A60 kleben Insektenreste an Front, Spiegeln und Kennzeichen. Bleiben sie in
          der Sommersonne liegen, können sie die Klarlackschicht angreifen. Eine Versiegelung macht die Reinigung
          deutlich leichter.
        </p>
        <h3>Herbst: Weinlese und Feldwege</h3>
        <p>
          Zur Lesezeit sind auf den Wirtschaftswegen und Ortsstraßen mehr Traktoren und Erde unterwegs. Lehm
          setzt sich in Radkästen und an den Schwellern fest, im Fußraum landen Erde und Laub. Genau dafür sind
          Teppich- und Polsterreinigung ({extraPrice("polster")}) und eine intensive Felgenreinigung (
          {extraPrice("felgen")}) gedacht.
        </p>
        <h3>Winter: Streusalz und Feuchtigkeit</h3>
        <p>
          Salz von den Zufahrtsstraßen frisst sich in Felgen und Unterbodenkanten, nasse Schuhe bringen Feuchtigkeit in
          die Teppiche. Im Spätherbst lohnt sich eine Lackversiegelung als Schutzschicht, im Frühjahr dann die
          gründliche Reinigung, bevor Salzränder dauerhaft werden.
        </p>

        <h2>Welche Aufbereitung passt zu Ihrem Auto?</h2>
        <ul>
          <li>
            <strong>Alltagsauto, das einfach wieder sauber sein soll:</strong>{" "}
            <Link href="/auto-innenreinigung">Innenaufbereitung</Link> {packagePrice("innen")} oder die
            Komplettaufbereitung {packagePrice("komplett")}.
          </li>
          <li>
            <strong>Lack wirkt matt, voller Waschkratzer:</strong>{" "}
            <Link href="/lackaufbereitung-politur">maschinelle Politur</Link> mit anschließender Versiegelung.
          </li>
          <li>
            <strong>Neuwagen oder frisch polierter Lack, der lange schön bleiben soll:</strong>{" "}
            <Link href="/keramikversiegelung">Keramikversiegelung</Link> {packagePrice("keramik")}.
          </li>
          <li>
            <strong>Rückgabe oder Verkauf steht an:</strong>{" "}
            <Link href="/leasingrueckgabe-aufbereitung">Aufbereitung für Leasingrückgabe und Verkauf</Link>{" "}
            {packagePrice("leasing")}.
          </li>
          <li>
            <strong>Einzelne Baustellen:</strong> <Link href="/scheinwerfer-aufbereiten">vergilbte Scheinwerfer</Link>,{" "}
            <Link href="/geruchsentfernung-auto">Gerüche</Link> oder ein{" "}
            <Link href="/motorraumreinigung">verschmutzter Motorraum</Link> lassen sich auch einzeln buchen.
          </li>
        </ul>
        <p className="note">
          Sie sind sich unsicher? Schicken Sie uns zwei, drei Fotos per WhatsApp. Wir sagen Ihnen dann, was sich
          lohnt – und was nicht.
        </p>

        <h2>Auch für die Nachbarorte gut erreichbar</h2>
        <p>
          Auch aus den Gemeinden rund um Bodenheim ist der Weg kurz. Aus{" "}
          <Link href="/autoaufbereitung-nackenheim">Nackenheim</Link> und{" "}
          <Link href="/autoaufbereitung-mainz-laubenheim">Mainz-Laubenheim</Link> sind es nur wenige Minuten, aus{" "}
          <Link href="/autoaufbereitung-gau-bischofsheim">Gau-Bischofsheim, Harxheim und Lörzweiler</Link> kaum mehr.
          Über die B9 sind auch <Link href="/autoaufbereitung-nierstein">Nierstein</Link> und{" "}
          <Link href="/autoaufbereitung-oppenheim">Oppenheim</Link> schnell angebunden. Alle Orte finden Sie in unserem{" "}
          <Link href="/einzugsgebiet">Einzugsgebiet</Link>.
        </p>
      </ArticleLayout>

      {/* Preise */}
      <section className="section relative overflow-hidden bg-ivory text-ink" aria-labelledby="preise-bodenheim">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="container-lux relative">
          <SectionHeading
            light
            eyebrow="Preise in Bodenheim"
            title={<span id="preise-bodenheim">Alle Pakete im Überblick.</span>}
            intro={priceNote}
            align="center"
          />
          <div className="mt-16 grid gap-6 pt-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-7">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={(i % 3) * 120}>
                <PriceCard pkg={pkg} light />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/preise" className="btn btn-dark">
              Einzelleistungen & alle Preise
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Standort */}
      <section className="section" aria-labelledby="standort-bodenheim">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Standort"
            title={
              <span id="standort-bodenheim">
                So finden Sie uns in <span className="text-shine">Bodenheim</span>.
              </span>
            }
            intro={`${site.address.street}, ${site.address.zip} ${site.address.city}. ${hoursSummary}. Bitte vereinbaren Sie vorab einen Termin, damit wir uns Zeit für Ihr Fahrzeug nehmen können.`}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <LocationCard />
            </Reveal>
            <Reveal delay={120}>
              <HoursCard />
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection title="Fragen aus Bodenheim" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        eyebrow="Nachbarorte"
        title="Autoaufbereitung rund um Bodenheim"
        paths={[
          "/autoaufbereitung-nackenheim",
          "/autoaufbereitung-mainz-laubenheim",
          "/autoaufbereitung-gau-bischofsheim",
          "/autoaufbereitung-nierstein",
          "/autoaufbereitung-oppenheim",
          "/autoaufbereitung-mainz",
        ]}
      />

      <CTASection
        title={
          <>
            Ihr Auto, <span className="text-shine">um die Ecke</span> gepflegt.
          </>
        }
        text="Rufen Sie an oder schreiben Sie uns per WhatsApp – wir finden einen Termin, an dem Sie Ihr Auto in der Hilgestraße abgeben können."
      />
    </>
  );
}
