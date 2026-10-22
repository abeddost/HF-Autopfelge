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
import { packagePrice, packages } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/autoaufbereitung-wiesbaden";
const description =
  "Autoaufbereitung für Wiesbaden: Politur, Keramikversiegelung und Leasingrückgabe bei HF Autopflege in Bodenheim – ca. 25–30 Min. über A671 und A60.";

export const metadata = pageMetadata({
  path,
  title: "Autoaufbereitung Wiesbaden – Politur & Keramik | HF Autopflege",
  description,
});

const whatsappText =
  "Hallo HF Autopflege, ich komme aus Wiesbaden und interessiere mich für Politur/Keramikversiegelung. Mein Fahrzeug: ";

const faqs = [
  {
    q: "Warum sollte ich aus Wiesbaden nach Bodenheim fahren?",
    a: "Weil Lackaufbereitung und Keramikversiegelung Arbeiten sind, bei denen Sorgfalt mehr zählt als die Entfernung. Die Fahrt dauert rund 25 bis 30 Minuten – für eine Leistung, die Ihren Lack über Jahre schützen soll, ist das ein überschaubarer Aufwand. Am Ende entscheidet das Ergebnis, nicht die Postleitzahl.",
  },
  {
    q: "Wie lange bleibt mein Auto für eine Keramikversiegelung bei Ihnen?",
    a: "Rechnen Sie mit mehr als einem Tag. Wäsche, Dekontamination, Politur und Versiegelung brauchen Zeit, und die Beschichtung muss anschließend aushärten. Den genauen Zeitrahmen nennen wir Ihnen nach Besichtigung bzw. Fotos – so können Sie Abgabe und Abholung gut planen.",
  },
  {
    q: "Wie komme ich zurück nach Wiesbaden, wenn das Auto bei Ihnen steht?",
    a: "Von Bodenheim fahren Regionalzüge nach Mainz, von dort gibt es regelmäßige Verbindungen nach Wiesbaden. Alternativ planen Sie die Abgabe so, dass Sie jemand mitnimmt. Wir richten uns bei den Zeiten gern nach Ihnen.",
  },
  {
    q: "Lohnt sich eine Keramikversiegelung für einen Leasingwagen?",
    a: "Bei kurzer Laufzeit oft nicht – dann reicht eine gute Lackversiegelung. Bei längeren Laufzeiten oder wenn Sie das Auto übernehmen wollen, kann sie sinnvoll sein, weil der Lack bei der Rückgabe besser dasteht. Wir beraten Sie dazu ehrlich.",
  },
];

export default function WiesbadenPage() {
  const pakete = ["aussen", "keramik", "leasing"].map((id) => packages.find((p) => p.id === id)!);

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Autoaufbereitung für Wiesbaden",
          description,
          path,
          serviceType: "Lackaufbereitung und Keramikversiegelung",
          areaServed: ["Wiesbaden"],
          minPrice: packages.find((p) => p.id === "aussen")!.price,
        })}
      />
      <PageHero
        eyebrow="Für Wiesbaden · ca. 25–30 Min."
        title={
          <>
            Autoaufbereitung für <span className="text-shine">Wiesbaden</span> – für Lack, der lange glänzen soll.
          </>
        }
        intro="Politur, Keramikversiegelung und Aufbereitung vor der Leasingrückgabe: Für Fahrzeuge, bei denen es auf das Ergebnis ankommt, lohnt sich der Weg über den Rhein nach Bodenheim."
        video={videos.politur}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Beratung anfragen" text={whatsappText} />
          <CallButton variant="ghost" showNumber />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Einzugsgebiet", path: "/einzugsgebiet" },
          { name: "Wiesbaden", path },
        ]}
      />

      <ArticleLayout
        aside={
          <RouteCard
            from="Wiesbaden"
            minutes="25–30 Min."
            km="ca. 25 km"
            route="Über die A671 zum Mainspitz-Dreieck, weiter auf der A60 über die Weisenauer Brücke bis zur Ausfahrt Mainz-Laubenheim und von dort nach Bodenheim."
          >
            Im Berufsverkehr auf der A60 und an den Rheinbrücken etwas mehr Zeit einplanen.
          </RouteCard>
        }
      >
        <h2>Werterhalt statt Waschstraße</h2>
        <p>
          Wer ein hochwertiges Fahrzeug fährt, kennt das Dilemma: Die Waschstraße ist schnell, hinterlässt aber im
          Laufe der Zeit feine Kratzer, die bei Sonnenlicht als kreisförmige Schlieren sichtbar werden. Gerade dunkle
          Lacke – Schwarz, Dunkelblau, Anthrazit – zeigen jede Spur. Und je mehr der Klarlack davon abbekommt, desto
          matter wirkt das Auto.
        </p>
        <p>
          Eine professionelle Lackaufbereitung setzt genau dort an: Statt den Lack nur zu reinigen, wird die oberste
          Schicht des Klarlacks maschinell so fein abgetragen, dass Kratzer und Hologramme verschwinden. Danach wird
          der Lack versiegelt, damit der Glanz bleibt.
        </p>

        <h2>Die richtige Reihenfolge: erst Politur, dann Schutz</h2>
        <p>
          Eine Keramikversiegelung ist kein Glanzmacher, sondern ein Konservierungsmittel. Sie schützt, was darunter
          ist – auch die Kratzer. Wer einen verkratzten Lack keramisch versiegelt, konserviert die Kratzer gleich mit.
          Deshalb gehört zu jeder <Link href="/keramikversiegelung">Keramikversiegelung</Link> bei uns eine gründliche
          Vorbereitung:
        </p>
        <ol>
          <li>Handwäsche und Felgenreinigung</li>
          <li>Dekontamination: Flugrost, Teer und Industriestaub werden chemisch und mechanisch entfernt</li>
          <li>Prüfung des Lackzustands und Politur – so intensiv wie nötig, so schonend wie möglich</li>
          <li>Entfetten, damit die Beschichtung sich mit dem Lack verbindet</li>
          <li>Auftrag der Keramikversiegelung und Aushärtung</li>
        </ol>
        <p>
          Unsere Pakete: <strong>Außenaufbereitung</strong> mit Politur und Versiegelung {packagePrice("aussen")},{" "}
          <strong>Keramikversiegelung</strong> {packagePrice("keramik")}. Welche Variante zu Ihnen passt, erklären wir
          im Ratgeber <Link href="/ratgeber/keramikversiegelung-oder-wachs">Keramikversiegelung oder Wachs</Link>.
        </p>

        <h2>Leasingfahrzeuge aus Wiesbaden</h2>
        <p>
          Ein großer Teil hochwertiger Neuwagen ist geleast. Bei der Rückgabe wird genau hingesehen: Kratzer im Lack,
          Flecken im Leder, Gebrauchsspuren im Innenraum. Vieles davon lässt sich vorher mit einer Aufbereitung
          beseitigen oder deutlich verbessern. Das Paket <strong>Leasingrückgabe & Verkauf</strong> beginnt{" "}
          {packagePrice("leasing")} – alle Details auf der Seite{" "}
          <Link href="/leasingrueckgabe-aufbereitung">Aufbereitung vor der Leasingrückgabe</Link>.
        </p>

        <h2>Ehrlich gesagt: Wann sich die Fahrt nicht lohnt</h2>
        <p>
          Für eine schnelle Außenwäsche zwischendurch müssen Sie nicht nach Bodenheim kommen – dafür gibt es in
          Wiesbaden genug Möglichkeiten. Der Weg lohnt sich bei Arbeiten, die Zeit und Sorgfalt brauchen: Politur,
          Keramikversiegelung, eine gründliche <Link href="/auto-innenreinigung">Innenaufbereitung</Link> oder die
          Vorbereitung auf Rückgabe und Verkauf. Und wenn Sie ohnehin regelmäßig in Mainz sind, ist Bodenheim nur
          noch ein kleiner Umweg.
        </p>
      </ArticleLayout>

      <section className="section relative overflow-hidden bg-ivory text-ink" aria-labelledby="pakete-wiesbaden">
        <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="container-lux relative">
          <SectionHeading
            light
            eyebrow="Unsere Empfehlung"
            title={<span id="pakete-wiesbaden">Pakete für Lack und Werterhalt.</span>}
            align="center"
          />
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3 lg:mt-20">
            {pakete.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 120}>
                <PriceCard pkg={pkg} light />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Fragen aus Wiesbaden" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Passend dazu"
        paths={[
          "/keramikversiegelung",
          "/lackaufbereitung-politur",
          "/ratgeber/keramikversiegelung-oder-wachs",
          "/autoaufbereitung-mainz",
          "/autoaufbereitung-ruesselsheim",
          "/leasingrueckgabe-aufbereitung",
        ]}
      />

      <CTASection
        title={
          <>
            Ihr Lack verdient <span className="text-shine">mehr als Bürsten.</span>
          </>
        }
        text="Schicken Sie uns Fotos Ihres Lacks bei Tageslicht per WhatsApp – wir schätzen den Aufwand ein und nennen Ihnen einen Termin."
      />
    </>
  );
}
