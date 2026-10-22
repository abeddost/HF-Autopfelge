// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen.
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PriceCard from "@/components/PriceCard";
import QuickFacts from "@/components/QuickFacts";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SheenCard from "@/components/SheenCard";
import { packagePrice, packages } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/lackaufbereitung-politur";
const description = `Auto polieren lassen in Bodenheim bei Mainz: maschinelle Politur gegen Swirls, Hologramme und Waschkratzer, danach Versiegelung. Außenaufbereitung ${packagePrice("aussen")}.`;

export const metadata = pageMetadata({
  path,
  title: "Auto polieren lassen – Lackaufbereitung | HF Autopflege",
  description,
});

const whatsappText = "Hallo HF Autopflege, ich möchte mein Auto polieren lassen. Fotos vom Lack folgen. Fahrzeug/Farbe: ";

const fehlerbilder = [
  {
    titel: "Swirls",
    text: "Feine, kreisförmige Kratzer, die im Sonnenlicht wie ein Spinnennetz um die Lichtquelle liegen. Fast immer aus Waschanlage oder falscher Handwäsche.",
    chance: "sehr gut polierbar",
  },
  {
    titel: "Hologramme",
    text: "Schlierige, wandernde Muster nach einer unsachgemäßen Maschinenpolitur – oft nach schneller Händleraufbereitung.",
    chance: "sehr gut polierbar",
  },
  {
    titel: "Wasserflecken",
    text: "Kalkränder von eingetrockneten Tropfen. Frisch nur Ablagerung, später in den Lack eingeätzt.",
    chance: "meist gut",
  },
  {
    titel: "Vogelkot- & Harzätzung",
    text: "Matte, eingesunkene Flecken, wo Rückstände in der Sonne lagen.",
    chance: "oft deutlich besser, tiefe Ätzungen bleiben sichtbar",
  },
  {
    titel: "Leichte Kratzer",
    text: "Kratzer, an denen der Fingernagel nicht hängen bleibt, sitzen meist nur im Klarlack.",
    chance: "meist entfernbar",
  },
  {
    titel: "Tiefe Kratzer",
    text: "Der Fingernagel bleibt hängen oder man sieht eine andere Farbe darunter – dann ist der Klarlack durch.",
    chance: "nur abzumildern, Fall für den Lackierer",
  },
];

const faqs = [
  {
    q: "Wie viel Lack wird beim Polieren abgetragen?",
    a: "Sehr wenig – Bruchteile der Klarlackschicht, die selbst nur wenige hundertstel Millimeter dick ist. Genau deshalb polieren wir nur so stark wie nötig. Ein Lack verträgt mehrere fachgerechte Polituren im Autoleben, aber nicht beliebig viele.",
  },
  {
    q: "Wie lange hält das Ergebnis einer Politur?",
    a: "Die entfernten Kratzer kommen nicht zurück. Neue entstehen allerdings, wenn das Auto danach wieder durch die Bürstenwaschanlage fährt. Mit Handwäsche und einer Versiegelung bleibt der Lack deutlich länger glatt.",
  },
  {
    q: "Was ist der Unterschied zwischen Politur und Versiegelung?",
    a: "Politur korrigiert: Sie trägt feinste Lackschichten ab und entfernt so Kratzer und Matt-Stellen. Versiegelung schützt: Sie legt eine Schicht auf den Lack, die Wasser abperlen lässt und vor Umwelteinflüssen schützt. Erst polieren, dann versiegeln.",
  },
  {
    q: "Können Sie auch Steinschläge wegpolieren?",
    a: "Nein. Steinschläge sind Abplatzungen bis in den Basislack oder bis aufs Blech. Sie lassen sich ausbessern (Lackstift oder Smart Repair), aber nicht polieren.",
  },
  {
    q: "Polieren Sie auch Mattlack oder Folierungen?",
    a: "Matte Lacke und matte Folien dürfen nicht poliert werden – sie würden glänzend und fleckig. Für solche Oberflächen gibt es spezielle Reinigung und Versiegelung. Sprechen Sie uns vorher an.",
  },
];

export default function LackaufbereitungPage() {
  const pakete = ["aussen", "keramik"].map((id) => packages.find((p) => p.id === id)!);

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Lackaufbereitung und Politur",
          description,
          path,
          serviceType: "Lackaufbereitung",
          minPrice: packages.find((p) => p.id === "aussen")!.price,
        })}
      />
      <PageHero
        eyebrow="Lack & Glanz"
        title={
          <>
            Auto polieren lassen: <span className="text-shine">Tiefe und Glanz</span> statt Waschkratzer.
          </>
        }
        intro="Maschinelle Politur entfernt Swirls, Hologramme und leichte Kratzer aus dem Klarlack. Danach versiegeln wir den Lack, damit der Glanz bleibt."
        video={videos.politur}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Lackfotos schicken" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Lackaufbereitung & Politur", path },
        ]}
      />

      <ArticleLayout
        aside={
          <QuickFacts
            title="Lack – auf einen Blick"
            facts={[
              ["Außenaufbereitung mit Politur", packagePrice("aussen")],
              ["Keramikversiegelung inkl. Politur", packagePrice("keramik")],
              ["Komplett innen & außen", packagePrice("komplett")],
            ]}
            whatsappText={whatsappText}
          >
            Tipp für Fotos: bei Sonne oder mit Taschenlampe schräg auf den Lack – dann sehen wir Kratzer am besten.
          </QuickFacts>
        }
      >
        <h2>Warum Lack mit der Zeit matt wird</h2>
        <p>
          Der Glanz eines Autos kommt fast vollständig aus der obersten Schicht: dem Klarlack. Er ist durchsichtig,
          hart und nur wenige hundertstel Millimeter dick. Ist seine Oberfläche glatt, wird Licht gleichmäßig
          reflektiert – der Lack wirkt tief und satt. Hat sie tausende feine Kratzer, streut das Licht in alle
          Richtungen. Der Lack wirkt grau, flach, „müde“.
        </p>
        <p>
          Die meisten dieser Kratzer entstehen nicht durch Unfälle, sondern durch Pflege: Bürsten in der Waschanlage,
          ein schmutziger Schwamm, ein trockenes Tuch über staubigem Lack. Dunkle Farben zeigen das am deutlichsten,
          aber auch Silber und Weiß verlieren dadurch Brillanz.
        </p>

        <h2>Der Fingernagel-Test</h2>
        <p>
          Sie können selbst grob einschätzen, ob ein Kratzer polierbar ist: Fahren Sie mit dem Fingernagel quer über
          den Kratzer. <strong>Gleitet der Nagel darüber</strong>, sitzt der Kratzer sehr wahrscheinlich nur im Klarlack
          und lässt sich auspolieren oder stark abmildern. <strong>Bleibt der Nagel hängen</strong>, ist der Kratzer
          tiefer – dann können wir ihn optisch verbessern, aber nicht vollständig entfernen.
        </p>

        <h2>Ein- oder mehrstufige Politur?</h2>
        <p>
          Polieren heißt: Mit Maschine, Polierpad und Politur wird die oberste Klarlackschicht so fein abgetragen, bis
          der Boden der Kratzer erreicht ist. Wie viele Durchgänge nötig sind, hängt vom Zustand ab:
        </p>
        <ul>
          <li>
            <strong>Einstufig (Hochglanzpolitur):</strong> für leichte Swirls und matten Lack. Eine feine Politur, die
            korrigiert und gleichzeitig Glanz erzeugt. Für die meisten Alltagsautos der richtige Weg.
          </li>
          <li>
            <strong>Mehrstufig (Schleifpolitur + Finish):</strong> für stärkere Kratzer, Hologramme oder sehr
            vernachlässigten Lack. Zuerst eine abrasivere Politur, die korrigiert, danach eine feine, die die Spuren
            des ersten Durchgangs entfernt.
          </li>
        </ul>
        <p>
          Wir empfehlen nicht automatisch die aufwendigste Variante. Ein Lack hat nur eine begrenzte Reserve – wir
          tragen so wenig ab wie möglich.
        </p>

        <h2>So läuft die Lackaufbereitung bei uns ab</h2>
        <ol>
          <li>
            <strong>Intensive Handwäsche</strong> inklusive Felgen und Radkästen.
          </li>
          <li>
            <strong>Dekontamination:</strong> Flugrost, Teer und festsitzende Partikel werden entfernt – sonst würden
            sie beim Polieren über den Lack gezogen.
          </li>
          <li>
            <strong>Abkleben</strong> von Gummis, Kunststoffen und Kanten, die nicht poliert werden dürfen.
          </li>
          <li>
            <strong>Maschinelle Politur</strong> Bauteil für Bauteil, kontrolliert unter starkem Licht.
          </li>
          <li>
            <strong>Versiegelung</strong> mit Wachs, Lackversiegelung oder – als eigenes Paket –{" "}
            <Link href="/keramikversiegelung">Keramikversiegelung</Link>.
          </li>
        </ol>

        <h2>Nach der Politur: So bleibt der Lack glatt</h2>
        <ul>
          <li>Möglichst keine Bürstenwaschanlage mehr – Handwäsche oder textile Waschstraße.</li>
          <li>Zwei-Eimer-Methode: ein Eimer mit Shampoo, einer mit klarem Wasser zum Ausspülen des Handschuhs.</li>
          <li>Mit Mikrofaser-Trockentuch tupfen oder ziehen, nicht reiben.</li>
          <li>Vogelkot und Insekten sofort entfernen, bevor sie sich einätzen.</li>
        </ul>
        <p>
          Welcher Schutz am besten passt, vergleichen wir im Ratgeber{" "}
          <Link href="/ratgeber/keramikversiegelung-oder-wachs">Keramikversiegelung oder Wachs?</Link> Vor einem Verkauf
          oder einer Leasingrückgabe lohnt sich die Politur besonders – siehe{" "}
          <Link href="/leasingrueckgabe-aufbereitung">Leasingrückgabe & Verkauf</Link>.
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="fehlerbilder">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Lackschäden erkennen"
            title={<span id="fehlerbilder">Was eine Politur kann – und was nicht.</span>}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fehlerbilder.map((f, i) => (
              <Reveal as="li" key={f.titel} delay={(i % 3) * 100}>
                <SheenCard className="flex h-full flex-col p-7">
                  <p className="font-display text-xl text-snow">{f.titel}</p>
                  <p className="mt-3 flex-1 leading-relaxed text-mist">{f.text}</p>
                  <p className="mt-5 text-sm font-semibold text-brand-light">{f.chance}</p>
                </SheenCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-ivory text-ink" aria-labelledby="pakete-lack">
        <div className="container-lux relative">
          <SectionHeading
            light
            eyebrow="Pakete"
            title={<span id="pakete-lack">Politur mit Versiegelung – oder mit Keramik.</span>}
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

      <FaqSection title="Fragen zur Politur" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Passend dazu"
        paths={[
          "/keramikversiegelung",
          "/ratgeber/keramikversiegelung-oder-wachs",
          "/scheinwerfer-aufbereiten",
          "/autoaufbereitung-wiesbaden",
          "/autoaufbereitung-mainz",
          "/leasingrueckgabe-aufbereitung",
        ]}
      />

      <CTASection
        title={
          <>
            Lack wieder <span className="text-shine">zum Spiegeln</span> bringen.
          </>
        }
        text="Schicken Sie uns Fotos bei Sonnenlicht per WhatsApp – wir sagen Ihnen, ob eine ein- oder mehrstufige Politur nötig ist."
      />
    </>
  );
}
