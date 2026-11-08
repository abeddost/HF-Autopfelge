// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen.
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import BeforeAfter from "@/components/BeforeAfter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import QuickFacts from "@/components/QuickFacts";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SheenCard from "@/components/SheenCard";
import TiltCard from "@/components/TiltCard";
import { pairsFor } from "@/lib/beforeAfter";
import { extraPrice } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/smart-repair";
const description =
  "SMART Repair bei Mainz: Lackkratzer, kleine Dellen ohne Lackieren und Bordsteinschäden an Felgen punktuell ausbessern – günstiger und schneller als eine Teillackierung. Preis nach Foto.";

export const metadata = pageMetadata({
  path,
  title: "SMART Repair: Kratzer, Dellen & Felgen | HF Autopflege",
  description,
});

const whatsappText = "Hallo HF Autopflege, ich habe einen kleinen Schaden (Kratzer/Delle/Felge). Ich schicke Ihnen ein Foto. Fahrzeug: ";

const arten = [
  {
    titel: "Kratzer & Schrammen",
    text: "Kratzer im Klarlack polieren wir aus. Tiefere Schrammen, etwa an der Stoßstangenecke, füllen wir punktuell, schleifen sie plan und lackieren nur die beschädigte Stelle im passenden Farbton.",
    typisch: "Parkrempler, Schlüsselkratzer, Kratzer an der Ladekante",
  },
  {
    titel: "Dellen ohne Lackieren",
    text: "Bei kleinen Dellen ohne Lackschaden drücken wir das Blech mit Spezialwerkzeug von innen zurück oder ziehen es von außen heraus. Der Originallack bleibt dabei erhalten.",
    typisch: "Türrempler auf dem Parkplatz, Hagel, Dellen durch Einkaufswagen",
  },
  {
    titel: "Felgenreparatur",
    text: "Bordsteinschäden am Felgenrand schleifen wir aus, spachteln und lackieren sie im Farbton der Felge – damit die Räder wieder gepflegt aussehen.",
    typisch: "Bordsteinkratzer beim Einparken, Abplatzer am Felgenhorn",
  },
];

const faqs = [
  {
    q: "Was bedeutet SMART Repair?",
    a: "SMART steht für „Small to Medium Area Repair Technique“ – also für die Reparatur kleiner bis mittlerer Schäden. Statt ein ganzes Bauteil zu lackieren, wird nur die beschädigte Stelle bearbeitet. Das spart Material, Zeit und Geld.",
  },
  {
    q: "Was kostet SMART Repair?",
    a: `Der Preis hängt von Art, Größe und Lage des Schadens ab, deshalb kalkulieren wir ${extraPrice("smartrepair")}. Schicken Sie uns ein Foto per WhatsApp, dann nennen wir Ihnen vorab einen Preis.`,
  },
  {
    q: "Sieht man die Reparatur danach noch?",
    a: "Ziel ist, dass man die Stelle im Alltag nicht mehr sieht. Bei Lackreparaturen mischen wir den Farbton passend zum Fahrzeug. Bei Effektlacken oder sehr großen Flächen kann ein leichter Unterschied sichtbar bleiben – das sagen wir Ihnen vorher ehrlich.",
  },
  {
    q: "Lohnt sich SMART Repair vor der Leasingrückgabe?",
    a: "Oft ja. Kleine Kratzer, Dellen und Felgenschäden werden bei der Rückgabe häufig berechnet. Eine Ausbesserung vorher ist meist deutlich günstiger als die Nachforderung. Ideal in Kombination mit unserer Aufbereitung für die Leasingrückgabe.",
  },
  {
    q: "Welche Schäden gehen nicht mit SMART Repair?",
    a: "Großflächige Schäden, Rost, gerissene Bauteile, Dellen mit scharfen Knicken oder an Kanten sowie alles, was die Struktur des Fahrzeugs betrifft. In diesen Fällen ist eine Lackier- oder Karosseriewerkstatt die richtige Adresse.",
  },
];

export default function SmartRepairPage() {
  const beispiele = pairsFor("smartrepair");

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: "SMART Repair", description, path, serviceType: "SMART Repair" })} />
      <PageHero
        eyebrow="SMART Repair"
        title={
          <>
            Kratzer, Dellen, Felgen? <span className="text-shine">Punktgenau repariert.</span>
          </>
        }
        intro="Kleine Schäden müssen nicht teuer sein. Wir bessern Lackkratzer, Dellen und Bordsteinschäden an Felgen gezielt dort aus, wo sie sind – ohne ganze Bauteile neu zu lackieren."
        video={videos.politur}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Foto schicken" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "SMART Repair", path },
        ]}
      />

      {beispiele.length > 0 && (
        <section className="section pb-0" aria-labelledby="beispiele">
          <div className="container-lux">
            <SectionHeading eyebrow="Vorher / Nachher" title={<span id="beispiele">So sieht das Ergebnis aus.</span>} />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {beispiele.map((p, i) => (
                <Reveal key={p.id} delay={i * 100}>
                  <TiltCard innerClassName="rounded-3xl">
                    <BeforeAfter pair={p} />
                  </TiltCard>
                  <p className="mt-3 text-sm text-mist">{p.label.replace("SMART Repair – ", "")}</p>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-xs text-mist">Symbolbilder (KI-generiert).</p>
          </div>
        </section>
      )}

      <ArticleLayout
        aside={
          <QuickFacts
            title="SMART Repair"
            facts={[
              ["Preis", extraPrice("smartrepair")],
              ["Schäden", "Kratzer, Dellen, Felgen"],
              ["Vorteil", "nur die Stelle, kein ganzes Bauteil"],
              ["Kombinierbar mit", "jedem Paket"],
            ]}
            whatsappText={whatsappText}
          >
            Schicken Sie uns ein Foto aus der Nähe und eines aus etwa zwei Metern Entfernung – dann können wir Größe und
            Lage des Schadens gut einschätzen.
          </QuickFacts>
        }
      >
        <h2>Was ist SMART Repair?</h2>
        <p>
          SMART Repair steht für <em>Small to Medium Area Repair Technique</em>: Kleine Schäden werden genau dort
          repariert, wo sie sind. Statt eine ganze Tür oder Stoßstange neu zu lackieren, bearbeiten wir nur die
          beschädigte Stelle. Das ist schneller, günstiger und erhält so viel Originallack wie möglich.
        </p>

        <h2>Für welche Schäden eignet sich SMART Repair?</h2>
        <ul>
          <li>
            <strong>Kratzer und Schrammen</strong> im Lack, besonders an Stoßstangen, Ecken und Ladekanten
          </li>
          <li>
            <strong>Kleine Dellen</strong> ohne Lackschaden – zum Beispiel durch Türen oder Einkaufswagen auf dem
            Parkplatz
          </li>
          <li>
            <strong>Bordsteinschäden an Felgen</strong> und kleine Abplatzer am Felgenrand
          </li>
          <li>
            <strong>Steinschläge</strong> auf Motorhaube und Front, bevor dort Rost entsteht
          </li>
        </ul>

        <h2>So läuft es ab</h2>
        <ol>
          <li>
            <strong>Foto schicken.</strong> Per WhatsApp sehen wir schon vorab, ob sich der Schaden mit SMART Repair
            beheben lässt, und nennen Ihnen einen Preis.
          </li>
          <li>
            <strong>Begutachtung vor Ort.</strong> In unserer Werkstatt in Bodenheim prüfen wir den Schaden bei gutem
            Licht und stimmen die Reparatur mit Ihnen ab.
          </li>
          <li>
            <strong>Reparatur.</strong> Je nach Schaden polieren, füllen, ausbeulen oder punktuell lackieren wir die
            Stelle.
          </li>
          <li>
            <strong>Finish.</strong> Zum Schluss wird die Stelle poliert und an die Umgebung angeglichen – wir sehen sie
            uns gemeinsam mit Ihnen an.
          </li>
        </ol>

        <h2>Wann lohnt sich SMART Repair – und wann der Lackierer?</h2>
        <p>
          SMART Repair ist ideal für Schäden bis etwa Handflächengröße. Bei großflächigen Schäden, Rost, gerissenen
          Kunststoffteilen oder Dellen mit scharfen Knicken ist eine Lackier- oder Karosseriewerkstatt die bessere
          Wahl. Das sagen wir Ihnen ehrlich, bevor wir anfangen.
        </p>
        <p>
          Besonders sinnvoll ist SMART Repair vor der <Link href="/leasingrueckgabe-aufbereitung">Leasingrückgabe</Link>{" "}
          oder dem Verkauf – zusammen mit einer <Link href="/lackaufbereitung-politur">Lackpolitur</Link> wirkt das Auto
          wieder deutlich gepflegter. Unsere Werkstatt liegt in <Link href="/autoaufbereitung-bodenheim">Bodenheim</Link>,
          gut erreichbar aus <Link href="/autoaufbereitung-mainz">Mainz</Link> und Umgebung.
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="schadensarten">
        <div className="container-lux">
          <SectionHeading eyebrow="Schadensarten" title={<span id="schadensarten">Drei Schäden, ein Ansatz: nur die Stelle.</span>} />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {arten.map((a, i) => (
              <Reveal as="li" key={a.titel} delay={i * 100}>
                <SheenCard className="flex h-full flex-col p-7">
                  <p className="font-display text-xl text-snow">{a.titel}</p>
                  <p className="mt-4 flex-1 leading-relaxed text-mist">{a.text}</p>
                  <p className="mt-5 text-sm text-brand-light">Typisch: {a.typisch}</p>
                </SheenCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection title="Fragen zu SMART Repair" items={faqs} />

      <RelatedLinks
        title="Passend dazu"
        paths={[
          "/leasingrueckgabe-aufbereitung",
          "/lackaufbereitung-politur",
          "/scheinwerfer-aufbereiten",
          "/keramikversiegelung",
          "/autoaufbereitung-mainz",
          "/ratgeber/autoaufbereitung-kosten",
        ]}
      />

      <CTASection
        title={
          <>
            Kleiner Schaden. <span className="text-shine">Kleiner Aufwand.</span>
          </>
        }
        text="Ein Foto per WhatsApp genügt – wir sagen Ihnen, ob SMART Repair passt und was es kostet."
      />
    </>
  );
}
