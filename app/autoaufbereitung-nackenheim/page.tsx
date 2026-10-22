// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen. Fahrzeiten in Google Maps gegenprüfen.
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/ContactButtons";
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

const path = "/autoaufbereitung-nackenheim";
const description =
  "Autopflege für Nackenheim: nur ca. 5 Minuten bis HF Autopflege in Bodenheim. Pflegewäsche, Innenaufbereitung und Versiegelung – regelmäßig statt einmal im Jahr.";

export const metadata = pageMetadata({
  path,
  title: "Autoaufbereitung Nackenheim – 5 Min. entfernt | HF Autopflege",
  description,
});

const whatsappText = "Hallo HF Autopflege, ich komme aus Nackenheim und hätte gerne einen Termin. Mein Fahrzeug: ";

const pflegeplan = [
  ["Alle 4–6 Wochen", "Pflegewäsche", "Handwäsche, Felgen, Scheiben – hält Schmutz und Insekten vom Lack fern.", packagePrice("pflegewaesche")],
  ["Alle 3–6 Monate", "Innenaufbereitung", "Aussaugen bis in die Fugen, Cockpit, Scheiben innen, Einstiege.", packagePrice("innen")],
  ["Vor dem Winter", "Lackversiegelung", "Schutzschicht gegen Streusalz und Nässe, Teil der Außenaufbereitung.", packagePrice("aussen")],
  ["Nach dem Winter", "Felgen & Teppiche", "Salzränder und Bremsstaub entfernen, bevor sie sich festsetzen.", extraPrice("felgen")],
  ["Alle 1–2 Jahre", "Komplettaufbereitung", "Innen und außen von Grund auf – der Reset für das ganze Auto.", packagePrice("komplett")],
] as const;

const faqs = [
  {
    q: "Wie lange brauche ich von Nackenheim zu Ihnen?",
    a: "Rund 5 Minuten. Nackenheim und Bodenheim liegen direkt nebeneinander an der B9 und gehören beide zur Verbandsgemeinde Bodenheim. Über die Ortsverbindung sind Sie schnell in der Hilgestraße.",
  },
  {
    q: "Wie oft sollte man sein Auto professionell aufbereiten lassen?",
    a: "Das hängt von Nutzung und Abstellplatz ab. Als Faustregel: regelmäßige Handwäsche alle paar Wochen, eine Innenaufbereitung zwei- bis viermal im Jahr und eine Komplettaufbereitung alle ein bis zwei Jahre. Wer regelmäßig pflegt, braucht seltener das große Paket.",
  },
  {
    q: "Ist eine regelmäßige Handwäsche wirklich besser als die Waschstraße?",
    a: "Für den Lack ja. In Waschanlagen entstehen durch Bürsten und mitgeschleppten Schmutz feine Kratzer, die im Sonnenlicht als Kreise (Swirls) sichtbar werden. Bei der Handwäsche arbeiten wir mit sauberem Wasser, pH-neutralem Shampoo und Mikrofaser.",
  },
  {
    q: "Kann ich das Auto zu Fuß oder mit dem Fahrrad wieder abholen?",
    a: "Die Strecke ist kurz genug dafür. Alternativ fahren zwischen Nackenheim und Bodenheim Regionalzüge. Sagen Sie uns, wann es Ihnen passt, dann richten wir die Abholzeit danach.",
  },
];

export default function NackenheimPage() {
  const pakete = ["pflegewaesche", "innen", "komplett"].map((id) => packages.find((p) => p.id === id)!);

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Autoaufbereitung für Nackenheim",
          description,
          path,
          serviceType: "Autopflege",
          areaServed: ["Nackenheim"],
          minPrice: packages[0].price,
        })}
      />
      <PageHero
        eyebrow="Nackenheim · ca. 5 Min."
        title={
          <>
            Autopflege für <span className="text-shine">Nackenheim</span> – kurz um die Ecke.
          </>
        }
        intro="Von Nackenheim nach Bodenheim ist es nur ein Katzensprung. Ideal, um das Auto nicht erst dann zu pflegen, wenn es nötig ist – sondern regelmäßig."
        video={videos.detailing}
      >
        <WhatsAppButton variant="primary" label="Termin anfragen" text={whatsappText} />
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Einzugsgebiet", path: "/einzugsgebiet" },
          { name: "Nackenheim", path },
        ]}
      />

      <section className="section pt-14 lg:pt-20">
        <div className="container-lux grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="prose-lux lg:col-span-7">
            <h2>Der kurze Weg macht den Unterschied</h2>
            <p>
              Die meisten Autos werden erst dann gründlich gereinigt, wenn es gar nicht mehr anders geht – vor dem
              Urlaub, vor dem Verkauf, nach dem Umzug. Bis dahin hat sich Schmutz in Polster und Fugen gearbeitet,
              und der Lack hat ein paar Waschanlagen-Kratzer mehr. Je länger man wartet, desto aufwendiger und teurer
              wird die Aufbereitung.
            </p>
            <p>
              Aus Nackenheim fällt der Schritt leichter: Sie sind in fünf Minuten bei uns, geben das Auto ab und holen
              es am gleichen Tag gepflegt wieder ab. So wird aus der großen Aktion einmal im Jahr eine kleine Routine,
              die das Auto dauerhaft in gutem Zustand hält – und am Ende oft günstiger ist.
            </p>
            <p>
              Nackenheim und Bodenheim gehören zur gleichen Verbandsgemeinde. Für Sie bedeutet das: ein Ansprechpartner
              aus der Nachbarschaft, den Sie bei Fragen zum Ergebnis einfach anrufen können.
            </p>
          </div>
          <div className="lg:col-span-5">
            <RouteCard
              from="Nackenheim"
              minutes="ca. 5 Min."
              km="ca. 4 km"
              route="Über die B9 bzw. die Ortsverbindung nach Norden – Bodenheim ist der direkte Nachbarort."
            />
          </div>
        </div>
      </section>

      {/* Pflegeplan */}
      <section className="section bg-coal" aria-labelledby="pflegeplan">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Pflegeplan"
            title={<span id="pflegeplan">Ein realistischer Rhythmus für Ihr Auto.</span>}
            intro="Unser Vorschlag für ein Alltagsauto, das draußen steht. Garagenautos und Wenigfahrer kommen mit längeren Abständen aus."
          />
          <Reveal className="prose-lux mt-12 !max-w-none">
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Wann</th>
                    <th scope="col">Leistung</th>
                    <th scope="col">Was es bringt</th>
                    <th scope="col">Richtpreis</th>
                  </tr>
                </thead>
                <tbody>
                  {pflegeplan.map(([wann, leistung, nutzen, preis]) => (
                    <tr key={leistung}>
                      <td className="whitespace-nowrap">{wann}</td>
                      <td>
                        <strong>{leistung}</strong>
                      </td>
                      <td>{nutzen}</td>
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
            <h2>Was regelmäßige Pflege bringt</h2>
            <ul>
              <li>
                <strong>Der Lack bleibt glatt.</strong> Wer regelmäßig von Hand wäscht statt durch die Waschstraße
                fährt, braucht seltener eine <Link href="/lackaufbereitung-politur">Politur</Link>.
              </li>
              <li>
                <strong>Flecken gehen noch raus.</strong> Frische Flecken in Sitzen und Teppichen sind deutlich
                leichter zu entfernen als alte.
              </li>
              <li>
                <strong>Weniger Gerüche.</strong> Feuchtigkeit und Essensreste haben keine Zeit, sich festzusetzen.
              </li>
              <li>
                <strong>Mehr Wert beim Verkauf.</strong> Ein gepflegtes Auto mit sauberem Innenraum hinterlässt
                beim Käufer einen besseren Eindruck.
              </li>
            </ul>
          </Reveal>
          <Reveal className="prose-lux" delay={120}>
            <h2>Was Sie zwischendurch selbst tun können</h2>
            <ul>
              <li>Vogelkot und Insekten zeitnah mit viel Wasser und einem weichen Tuch lösen – nicht trocken reiben.</li>
              <li>Fußmatten regelmäßig ausschütteln, im Winter Gummimatten verwenden.</li>
              <li>Keine Haushaltsreiniger auf Cockpit und Displays – sie können Kunststoffe ausbleichen.</li>
              <li>
                Nach der Versiegelung nur mit mildem Shampoo waschen, damit die Schutzschicht lange hält. Mehr dazu im
                Ratgeber <Link href="/ratgeber/keramikversiegelung-oder-wachs">Keramikversiegelung oder Wachs</Link>.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-ivory text-ink" aria-labelledby="pakete-nackenheim">
        <div className="container-lux relative">
          <SectionHeading
            light
            eyebrow="Für die Routine"
            title={<span id="pakete-nackenheim">Die Pakete für regelmäßige Pflege.</span>}
            align="center"
          />
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3 lg:mt-20">
            {pakete.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 120} className={pkg.featured ? "md:-my-4" : ""}>
                <PriceCard pkg={pkg} light />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Fragen aus Nackenheim" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        eyebrow="In der Nähe"
        title="Nachbarorte und Leistungen"
        paths={[
          "/autoaufbereitung-bodenheim",
          "/autoaufbereitung-nierstein",
          "/autoaufbereitung-mainz-laubenheim",
          "/auto-innenreinigung",
          "/lackaufbereitung-politur",
          "/ratgeber/autoaufbereitung-kosten",
        ]}
      />

      <CTASection text="Ein kurzer Anruf oder eine WhatsApp genügt – wir finden einen Termin, der zu Ihrem Alltag in Nackenheim passt." />
    </>
  );
}
