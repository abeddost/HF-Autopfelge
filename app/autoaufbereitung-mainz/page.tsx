// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen. Fahrzeiten in Google Maps gegenprüfen.
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
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
import SheenCard from "@/components/SheenCard";
import { extraPrice, packagePrice, packages } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/autoaufbereitung-mainz";
const description =
  "Autoaufbereitung für Mainz: Innenreinigung, Politur und Keramikversiegelung bei HF Autopflege – ca. 15–20 Minuten von der Innenstadt. Jetzt Termin anfragen.";

export const metadata = pageMetadata({
  path,
  title: "Autoaufbereitung Mainz – Innen & außen | HF Autopflege",
  description,
});

const whatsappText = "Hallo HF Autopflege, ich komme aus Mainz und hätte gerne einen Termin für eine Aufbereitung. Mein Fahrzeug: ";

const stadtteile = [
  { zeit: "ca. 5 Min.", orte: ["Laubenheim"], hinweis: "direkt über die Stadtgrenze", href: "/autoaufbereitung-mainz-laubenheim" },
  { zeit: "ca. 10 Min.", orte: ["Weisenau", "Hechtsheim", "Ebersheim"], hinweis: "über B9 oder Landstraße" },
  { zeit: "ca. 15–20 Min.", orte: ["Altstadt", "Oberstadt", "Neustadt", "Bretzenheim"], hinweis: "am Rhein entlang oder über die A60" },
  { zeit: "ca. 20–25 Min.", orte: ["Gonsenheim", "Finthen", "Mombach", "Lerchenberg"], hinweis: "über den Mainzer Ring (A60/A643)" },
];

const faqs = [
  {
    q: "Lohnt sich die Fahrt aus der Mainzer Innenstadt nach Bodenheim?",
    a: "Für eine gründliche Aufbereitung ja: Sie fahren einmal hin und einmal zurück, dazwischen arbeiten wir mehrere Stunden an Ihrem Auto. Aus der Innenstadt sind es je nach Verkehr etwa 15 bis 20 Minuten über die B9 oder die A60.",
  },
  {
    q: "Wie komme ich zurück nach Mainz, wenn das Auto bei Ihnen steht?",
    a: "Bodenheim liegt an der Bahnstrecke Mainz–Worms; die Fahrt zum Mainzer Hauptbahnhof dauert nur wenige Minuten. Sie können die Abgabe auch mit einem Termin in der Nähe verbinden oder sich mitnehmen lassen. Wir stimmen die Abgabe- und Abholzeit gerne auf Ihre Verbindung ab.",
  },
  {
    q: "Bekomme ich Baumharz und Vogelkot noch vom Lack?",
    a: "Frische Rückstände fast immer. Wenn Harz oder Vogelkot länger in der Sonne lagen, haben sie sich oft schon in den Klarlack eingeätzt. Dann hilft nur eine Politur, die die Ränder abträgt – bei tiefen Ätzungen bleibt manchmal ein leichter Schatten. Wir schauen uns das vorab an und sagen Ihnen ehrlich, was möglich ist.",
  },
  {
    q: "Bereiten Sie auch Dienst- und Firmenwagen aus Mainz auf?",
    a: "Ja. Für Firmenwagen und Leasingfahrzeuge vor der Rückgabe gibt es unser Paket Leasingrückgabe & Verkauf. Sprechen Sie uns an, wenn Sie mehrere Fahrzeuge regelmäßig pflegen lassen möchten.",
  },
  {
    q: "Holen Sie das Auto in Mainz ab?",
    a: "Nein, wir arbeiten ausschließlich in unserer Werkstatt in Bodenheim. Dafür hat Ihr Auto dort alles, was eine gründliche Aufbereitung braucht: Licht, Ruhe und das passende Werkzeug.",
  },
];

export default function MainzPage() {
  const empfohlen = ["innen", "komplett", "keramik"].map((id) => packages.find((p) => p.id === id)!);

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Autoaufbereitung für Mainz",
          description,
          path,
          serviceType: "Fahrzeugaufbereitung",
          areaServed: ["Mainz"],
          minPrice: packages[0].price,
        })}
      />
      <PageHero
        eyebrow="Für Mainz · ca. 15–20 Min."
        title={
          <>
            Autoaufbereitung für <span className="text-shine">Mainz</span> – gründlich, ohne Waschstraße.
          </>
        }
        intro="Laternenparker, Pendlerauto oder Dienstwagen: Wir bereiten Fahrzeuge aus ganz Mainz in unserer Werkstatt in Bodenheim auf – kurz hinter der Stadtgrenze."
        video={videos.politur}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Termin anfragen" text={whatsappText} />
          <CallButton variant="ghost" showNumber />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Einzugsgebiet", path: "/einzugsgebiet" },
          { name: "Mainz", path },
        ]}
      />

      <ArticleLayout
        aside={
          <RouteCard
            from="Mainz"
            minutes="15–20 Min."
            km="ca. 12 km"
            route="Aus der Innenstadt am Rhein entlang über die B9 Richtung Süden durch Weisenau und Laubenheim – oder über die A60, Ausfahrt Mainz-Laubenheim."
          >
            Mit der Bahn: Bodenheim liegt an der Strecke Mainz–Worms, wenige Minuten ab Mainz Hbf.
          </RouteCard>
        }
      >
        <h2>Warum Mainzer Autos eine andere Pflege brauchen</h2>
        <p>
          In Mainz steht ein Auto selten in der Garage. Es parkt am Straßenrand in der Neustadt, unter Platanen und
          Linden in der Oberstadt, im Parkhaus am Bahnhof oder vor dem Büro. Jede dieser Situationen hinterlässt eigene
          Spuren – und eine Fahrt durch die Waschanlage erwischt davon nur einen Teil.
        </p>

        <h3>Baumharz, Blütenstaub und Vogelkot</h3>
        <p>
          Wer unter Alleebäumen parkt, findet im Frühjahr und Sommer klebrige Harztropfen und einen Film aus
          Blütenstaub auf dem Lack. Vogelkot ist noch aggressiver: Er ist sauer, heizt sich in der Sonne auf und
          ätzt sich innerhalb weniger Tage in die Klarlackschicht. In der Waschanlage verschmieren solche Rückstände
          eher, als dass sie verschwinden.
        </p>
        <p>
          Wir lösen Harz und Kot mit passenden Reinigern an, bevor gewaschen wird, und prüfen danach, ob Ätzspuren
          zurückgeblieben sind. Sind sie nur oberflächlich, holt eine{" "}
          <Link href="/lackaufbereitung-politur">maschinelle Politur</Link> sie in den meisten Fällen heraus.
        </p>

        <h3>Streusalz und Stadtschmutz</h3>
        <p>
          Im Winter tragen Reifen und Schuhe Salz und Splitt ins Auto. An den Felgen setzen sich Bremsstaub und Salz
          zu einer harten Kruste zusammen, in den Fußmatten bleiben weiße Ränder. Eine intensive Felgenreinigung (
          {extraPrice("felgen")}) und eine Teppichreinigung ({extraPrice("polster")}) bringen beides weg, bevor es
          sich festsetzt.
        </p>

        <h3>Kratzer und Gebrauchsspuren aus dem Alltag</h3>
        <p>
          Enge Parklücken, Taschen auf dem Kofferraumdeckel, Fahrradträger und Kinderwagen: Stadtautos sammeln
          feine Kratzer an Ladekante, Türgriffmulden und Stoßfängern. Viele davon sitzen nur im Klarlack und lassen
          sich auspolieren. Tiefe Kratzer bis in den Basislack können wir nicht wegzaubern, aber deutlich
          unauffälliger machen. Das sagen wir Ihnen vorher, nicht hinterher.
        </p>

        <h2>Was sich für Mainzer Autos besonders lohnt</h2>
        <ul>
          <li>
            <strong>Innenaufbereitung</strong> ({packagePrice("innen")}) für Pendler- und Familienautos – mit Sitzen,
            Teppichen, Cockpit und Scheiben. Mehr dazu unter{" "}
            <Link href="/auto-innenreinigung">Auto-Innenreinigung</Link>.
          </li>
          <li>
            <strong>Komplettaufbereitung</strong> ({packagePrice("komplett")}) für Autos, die innen und außen einen
            Neustart brauchen.
          </li>
          <li>
            <strong>Leasingrückgabe</strong> ({packagePrice("leasing")}) für Dienstwagen vor dem Gutachtertermin –
            siehe <Link href="/leasingrueckgabe-aufbereitung">Aufbereitung vor der Leasingrückgabe</Link>.
          </li>
          <li>
            <strong>Keramikversiegelung</strong> ({packagePrice("keramik")}) für Laternenparker, die ihren Lack
            dauerhaft besser schützen wollen. Was sie kann und was nicht, steht in unserem Ratgeber{" "}
            <Link href="/ratgeber/keramikversiegelung-oder-wachs">Keramikversiegelung oder Wachs?</Link>
          </li>
        </ul>

        <h2>So klappt die Abgabe ohne Stress</h2>
        <p>
          Am einfachsten ist es, die Abgabe mit dem Weg zur Arbeit zu verbinden: Auto morgens nach Bodenheim bringen,
          mit der Bahn weiter nach Mainz, abends zurück und das Auto abholen. Wer im Mainzer Süden wohnt, ist ohnehin
          schneller bei uns als in vielen Werkstätten der Innenstadt. Abgabe- und Abholzeit stimmen wir bei der
          Terminabsprache mit Ihnen ab.
        </p>
      </ArticleLayout>

      {/* Stadtteile */}
      <section className="section bg-coal" aria-labelledby="stadtteile">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Mainzer Stadtteile"
            title={<span id="stadtteile">Wie lange Sie aus Ihrem Stadtteil brauchen.</span>}
            intro="Richtwerte bei normalem Verkehr – im Berufsverkehr auf der A60 und an den Rheinbrücken kann es länger dauern."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stadtteile.map((gruppe, i) => (
              <Reveal as="li" key={gruppe.zeit} delay={i * 100}>
                <SheenCard className="h-full p-7">
                  <p className="font-display text-3xl text-snow">{gruppe.zeit}</p>
                  <p className="mt-4 text-pearl">{gruppe.orte.join(", ")}</p>
                  <p className="mt-2 text-sm text-mist">{gruppe.hinweis}</p>
                  {gruppe.href && (
                    <Link href={gruppe.href} className="mt-4 inline-block text-sm font-semibold text-brand-light">
                      <span className="link-underline">Mehr zu Laubenheim</span>
                    </Link>
                  )}
                </SheenCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Empfohlene Pakete */}
      <section className="section relative overflow-hidden bg-ivory text-ink" aria-labelledby="pakete-mainz">
        <div className="container-lux relative">
          <SectionHeading
            light
            eyebrow="Für Stadtautos"
            title={<span id="pakete-mainz">Drei Pakete, die zu Stadtautos passen.</span>}
            align="center"
          />
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3 lg:mt-20">
            {empfohlen.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 120} className={pkg.featured ? "md:-my-4" : ""}>
                <PriceCard pkg={pkg} light />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Link href="/preise" className="btn btn-dark">
              Alle Preise ansehen
            </Link>
          </Reveal>
        </div>
      </section>

      <FaqSection title="Fragen aus Mainz" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Passend dazu"
        paths={[
          "/autoaufbereitung-mainz-laubenheim",
          "/lackaufbereitung-politur",
          "/keramikversiegelung",
          "/leasingrueckgabe-aufbereitung",
          "/autoaufbereitung-wiesbaden",
          "/autoaufbereitung-bodenheim",
        ]}
      />

      <CTASection
        title={
          <>
            Aus Mainz? <span className="text-shine">Kurz anfragen.</span>
          </>
        }
        text="Schicken Sie uns ein paar Fotos Ihres Autos per WhatsApp – wir nennen Ihnen Umfang, Preis und einen Termin in Bodenheim."
      />
    </>
  );
}
