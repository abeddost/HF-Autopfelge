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

const path = "/autoaufbereitung-oppenheim";
const description =
  "Autoaufbereitung für Oppenheim: Innenreinigung, Scheinwerfer und Lackpflege für Pendlerautos mit vielen Kilometern. HF Autopflege Bodenheim, ca. 15 Min. über die B9.";

export const metadata = pageMetadata({
  path,
  title: "Autoaufbereitung Oppenheim – für Pendlerautos | HF Autopflege",
  description,
});

const whatsappText = "Hallo HF Autopflege, ich komme aus Oppenheim und hätte gerne einen Termin. Mein Fahrzeug / Kilometerstand: ";

const verschleiss = [
  ["Fahrersitz", "Wange auf der Einstiegsseite abgerieben, Sitzfläche speckig", "Polster- oder Lederreinigung", extraPrice("polster")],
  ["Lenkrad & Schaltknauf", "glänzend, klebrig, Leder wirkt dunkel", "Innenaufbereitung mit Lederpflege", packagePrice("innen")],
  ["Scheinwerfer", "vergilbt oder milchig, Licht streut", "Scheinwerferaufbereitung", extraPrice("scheinwerfer")],
  ["Frontpartie & Spiegel", "Insektenreste, feine Steinschläge im Lack", "Außenaufbereitung mit Versiegelung", packagePrice("aussen")],
  ["Frontscheibe", "Schlieren innen, Wischer rubbeln", "Scheibenversiegelung", extraPrice("scheibe")],
  ["Lüftung", "Staub, muffiger Geruch beim Einschalten", "Innenreinigung, ggf. Ozonbehandlung", extraPrice("ozon")],
] as const;

const faqs = [
  {
    q: "Wie lange brauche ich aus Oppenheim nach Bodenheim?",
    a: "Rund 15 Minuten über die B9 Richtung Mainz, durch Nierstein und Nackenheim. Oppenheim und Bodenheim liegen zudem an derselben Bahnstrecke – praktisch, wenn Sie das Auto bei uns lassen und weiter zur Arbeit fahren.",
  },
  {
    q: "Mein Auto hat über 150.000 km. Lohnt sich eine Aufbereitung noch?",
    a: "Gerade dann. Viele Spuren hoher Laufleistung sind Schmutz und Abrieb, keine echten Schäden. Nach einer gründlichen Reinigung wirkt ein Auto oft jahrelang jünger – und Sie fahren es wieder gerne. Wo echter Verschleiß vorliegt, etwa durchgesessene Polster, sagen wir Ihnen das ehrlich.",
  },
  {
    q: "Kann ich das Auto morgens auf dem Weg zur Arbeit abgeben?",
    a: "Ja, wir öffnen Montag bis Samstag um 10 Uhr. Für frühere Abgaben sprechen Sie uns bitte vorher an, dann suchen wir eine Lösung.",
  },
  {
    q: "Werden vergilbte Scheinwerfer wieder wie neu?",
    a: "Sie werden wieder klar und lassen mehr Licht durch. Bei stark verwitterten Gläsern mit tiefen Rissen in der Oberfläche stößt jede Aufbereitung an Grenzen – das sehen wir uns vorher an.",
  },
];

export default function OppenheimPage() {
  const pakete = ["innen", "aussen"].map((id) => packages.find((p) => p.id === id)!);

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Autoaufbereitung für Oppenheim",
          description,
          path,
          serviceType: "Fahrzeugaufbereitung",
          areaServed: ["Oppenheim"],
          minPrice: packages[0].price,
        })}
      />
      <PageHero
        eyebrow="Oppenheim · ca. 15 Min."
        title={
          <>
            Autoaufbereitung für <span className="text-shine">Oppenheim</span> – für Autos, die viel unterwegs sind.
          </>
        }
        intro="Wer von Oppenheim täglich Richtung Mainz oder ins Rhein-Main-Gebiet pendelt, sammelt Kilometer – und Spuren. Wir sorgen dafür, dass man sie Ihrem Auto nicht ansieht."
        video={videos.scheinwerfer}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Termin anfragen" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Einzugsgebiet", path: "/einzugsgebiet" },
          { name: "Oppenheim", path },
        ]}
      />

      <section className="section pt-14 lg:pt-20">
        <div className="container-lux grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="prose-lux lg:col-span-7">
            <h2>Pendlerauto: viel Zeit drin, wenig Zeit für Pflege</h2>
            <p>
              Oppenheim mit seiner Altstadt und der Katharinenkirche ist ein schöner Ort zum Wohnen – zum Arbeiten fahren
              viele aber weg. Jeden Tag über die B9, auf die Autobahn, abends zurück. Das Auto wird dabei zum zweiten
              Büro: Kaffee im Becherhalter, Jacke auf dem Beifahrersitz, Laptoptasche im Fußraum.
            </p>
            <p>
              Die Folgen sieht man erst nach einer Weile. Der Fahrersitz wird an der Einstiegsseite blank, das Lenkrad
              glänzt, die Frontscheibe zieht innen Schlieren, und die Scheinwerfer werden langsam gelb. Nichts davon ist
              dramatisch – aber zusammen wirkt das Auto deutlich älter, als es ist.
            </p>
            <p>
              Unsere Aufgabe: diese Spuren gezielt beseitigen. Nicht mit dem größten Paket, sondern mit den Leistungen,
              die Ihr Auto tatsächlich braucht.
            </p>
          </div>
          <div className="lg:col-span-5">
            <RouteCard
              from="Oppenheim"
              minutes="ca. 15 Min."
              km="ca. 13 km"
              route="Über die B9 nach Norden durch Nierstein und Nackenheim bis Bodenheim."
            >
              Abgabe mit Bahn-Rückweg: Oppenheim und Bodenheim liegen an derselben Strecke.
            </RouteCard>
          </div>
        </div>
      </section>

      <section className="section bg-coal" aria-labelledby="verschleiss">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Kilometer-Check"
            title={<span id="verschleiss">Wo hohe Laufleistung sichtbar wird – und was hilft.</span>}
            intro="Typische Stellen an Pendlerfahrzeugen. Die Preise sind Richtpreise ab; was davon Ihr Auto braucht, klären wir gemeinsam."
          />
          <Reveal className="prose-lux mt-12 !max-w-none">
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Stelle</th>
                    <th scope="col">Typisches Bild</th>
                    <th scope="col">Lösung</th>
                    <th scope="col">Richtpreis</th>
                  </tr>
                </thead>
                <tbody>
                  {verschleiss.map(([stelle, bild, loesung, preis]) => (
                    <tr key={stelle}>
                      <td>
                        <strong>{stelle}</strong>
                      </td>
                      <td>{bild}</td>
                      <td>{loesung}</td>
                      <td className="whitespace-nowrap">{preis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-lux grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="prose-lux">
            <h2>Scheinwerfer: mehr als eine Frage der Optik</h2>
            <p>
              Moderne Scheinwerfer bestehen aus Kunststoff (Polycarbonat). UV-Strahlung, Steinschlag und Waschanlagen
              machen die Schutzschicht mit der Zeit matt und gelb. Wer viel bei Dunkelheit pendelt, merkt das zuerst an
              der Straße: Das Licht streut, die Ausleuchtung wird schwächer.
            </p>
            <p>
              Bei der <Link href="/scheinwerfer-aufbereiten">Scheinwerferaufbereitung</Link> schleifen und polieren wir
              die verwitterte Schicht ab und versiegeln die Oberfläche neu. Das Ergebnis: klare Gläser und spürbar
              besseres Licht – {extraPrice("scheinwerfer")} pro Paar.
            </p>
          </Reveal>
          <Reveal className="prose-lux" delay={120}>
            <h2>Innenraum: der Ort, an dem Sie die meiste Zeit verbringen</h2>
            <p>
              Eine Stunde am Tag im Auto sind im Jahr über 200 Stunden. Es lohnt sich, dass dieser Raum sauber ist und
              gut riecht. Unsere <Link href="/auto-innenreinigung">Innenaufbereitung</Link> reinigt Sitze, Teppiche,
              Cockpit, Lüftungsdüsen und Scheiben – bei Bedarf ergänzt um{" "}
              <Link href="/polsterreinigung-auto">Polster- und Lederreinigung</Link>.
            </p>
            <p>
              Und wenn der Leasingvertrag des Pendlerautos ausläuft: Lesen Sie unsere Tipps zur{" "}
              <Link href="/leasingrueckgabe-aufbereitung">Leasingrückgabe</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-ivory text-ink" aria-labelledby="pakete-oppenheim">
        <div className="container-lux relative">
          <SectionHeading
            light
            eyebrow="Für Vielfahrer"
            title={<span id="pakete-oppenheim">Innen frisch, außen geschützt.</span>}
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {pakete.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 120}>
                <PriceCard pkg={pkg} light />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/preise" className="btn btn-dark">
              Alle Pakete & Einzelleistungen
            </Link>
          </Reveal>
        </div>
      </section>

      <FaqSection title="Fragen aus Oppenheim" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        eyebrow="Entlang der B9"
        title="Mehr aus der Region"
        paths={[
          "/autoaufbereitung-nierstein",
          "/autoaufbereitung-bodenheim",
          "/autoaufbereitung-mainz",
          "/scheinwerfer-aufbereiten",
          "/auto-innenreinigung",
          "/leasingrueckgabe-aufbereitung",
        ]}
      />

      <CTASection
        title={
          <>
            Viel gefahren? <span className="text-shine">Gut gepflegt.</span>
          </>
        }
        text="Sagen Sie uns Fahrzeug und Kilometerstand per WhatsApp – wir empfehlen Ihnen die passende Aufbereitung."
      />
    </>
  );
}
