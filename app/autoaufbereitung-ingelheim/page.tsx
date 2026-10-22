// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen. Fahrzeiten in Google Maps gegenprüfen.
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import QuickFacts from "@/components/QuickFacts";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import RouteCard from "@/components/RouteCard";
import SectionHeading from "@/components/SectionHeading";
import { extraPrice, packagePrice, packages } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/autoaufbereitung-ingelheim";
const description =
  "Autoaufbereitung für Ingelheim: Dienstwagen, Vielfahrer-Innenräume und Rotweinflecken bei HF Autopflege in Bodenheim – ca. 25–30 Minuten über die A60.";

export const metadata = pageMetadata({
  path,
  title: "Autoaufbereitung Ingelheim – Innen & außen | HF Autopflege",
  description,
});

const whatsappText = "Hallo HF Autopflege, ich komme aus Ingelheim und hätte gerne einen Termin. Mein Fahrzeug: ";

const tagesplan = [
  ["Morgens", "Auto in der Hilgestraße abgeben, kurz die Problemstellen zeigen."],
  ["Tagsüber", "Mit der Bahn weiter nach Mainz – zur Arbeit, zum Termin oder in die Stadt."],
  ["Zwischendurch", "Wir melden uns, falls wir unterwegs etwas finden, das Sie wissen sollten."],
  ["Nachmittags", "Nachricht, dass das Auto fertig ist – Abholung und gemeinsame Abnahme."],
] as const;

const faqs = [
  {
    q: "Ist Bodenheim von Ingelheim nicht zu weit für eine Autoaufbereitung?",
    a: "Mit rund 25 bis 30 Minuten über die A60 ist es kein Katzensprung, aber gut machbar – vor allem, wenn Sie ohnehin regelmäßig nach Mainz fahren. Für eine Wäsche zwischendurch lohnt sich die Fahrt nicht, für eine gründliche Innen- oder Komplettaufbereitung schon.",
  },
  {
    q: "Wie entferne ich frische Rotweinflecken aus dem Autositz?",
    a: "Sofort mit einem saugfähigen Tuch abtupfen, nicht reiben. Dann mit wenig kaltem Wasser nachtupfen – kein heißes Wasser, das fixiert die Farbe. Salz oder Weißwein helfen kaum und machen es oft schlimmer. Wenn ein Rand bleibt, bekommen wir ihn mit Polsterreinigung in den meisten Fällen heraus.",
  },
  {
    q: "Ich übernehme einen gebrauchten Dienstwagen von einem Kollegen. Was empfehlen Sie?",
    a: "Eine gründliche Innenaufbereitung mit Polsterreinigung – idealerweise mit Reinigung der Lüftungsdüsen und, falls das Auto nach Rauch oder Parfum riecht, einer Ozonbehandlung. Danach fühlt sich der Wagen an wie Ihrer.",
  },
  {
    q: "Wie viel Zeit sollte ich für die Aufbereitung einplanen?",
    a: "Für eine Innen- oder Komplettaufbereitung planen Sie am besten einen ganzen Tag ein. Politur und Keramikversiegelung dauern länger. Den genauen Zeitrahmen nennen wir Ihnen bei der Terminabsprache, damit Sie Ihre Rückfahrt planen können.",
  },
];

export default function IngelheimPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Autoaufbereitung für Ingelheim am Rhein",
          description,
          path,
          serviceType: "Fahrzeugaufbereitung",
          areaServed: ["Ingelheim am Rhein"],
          minPrice: packages[0].price,
        })}
      />
      <PageHero
        eyebrow="Für Ingelheim · ca. 25–30 Min."
        title={
          <>
            Autoaufbereitung für <span className="text-shine">Ingelheim</span> – ein Tag, ein Ergebnis.
          </>
        }
        intro="Dienstwagen, Pendlerauto oder Familienkombi: Fahrzeuge aus Ingelheim bereiten wir in Bodenheim an einem Tag gründlich auf – und Sie verbinden die Abgabe mit Ihrem Weg nach Mainz."
        video={videos.innenraum}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Termin anfragen" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Einzugsgebiet", path: "/einzugsgebiet" },
          { name: "Ingelheim", path },
        ]}
      />

      <ArticleLayout
        aside={
          <>
            <RouteCard
              from="Ingelheim am Rhein"
              minutes="25–30 Min."
              km="ca. 30 km"
              route="Über die A60 Richtung Mainz/Darmstadt, am Mainzer Ring entlang bis zur Ausfahrt Mainz-Laubenheim, dann nach Bodenheim."
            />
            <QuickFacts
              title="Passend für Ingelheim"
              facts={[
                ["Innenaufbereitung", packagePrice("innen")],
                ["Komplettaufbereitung", packagePrice("komplett")],
                ["Polsterreinigung", extraPrice("polster")],
                ["Scheinwerfer (Paar)", extraPrice("scheinwerfer")],
              ]}
              whatsappText={whatsappText}
            />
          </>
        }
      >
        <h2>Wann sich der Weg aus Ingelheim lohnt</h2>
        <p>
          Seien wir ehrlich: Für eine schnelle Wäsche fahren Sie nicht eine halbe Stunde. Der Weg nach Bodenheim lohnt
          sich, wenn Ihr Auto mehr braucht als Schaum und Bürsten – eine{" "}
          <Link href="/auto-innenreinigung">Innenreinigung bis in die Fugen</Link>, eine{" "}
          <Link href="/lackaufbereitung-politur">Lackpolitur</Link>, die Vorbereitung auf{" "}
          <Link href="/leasingrueckgabe-aufbereitung">Rückgabe oder Verkauf</Link>. Also Arbeiten, die ohnehin einen
          ganzen Tag dauern.
        </p>
        <p>
          Und wer aus Ingelheim regelmäßig nach Mainz fährt, ist über die A60 sowieso schon fast bei uns. Die Ausfahrt
          Mainz-Laubenheim liegt nur wenige Minuten von der Werkstatt entfernt.
        </p>

        <h2>Dienstwagen: wenn das Auto den Fahrer wechselt</h2>
        <p>
          In Ingelheim und Umgebung gibt es große Arbeitgeber mit vielen Dienstwagen. Diese Autos werden oft intern
          weitergegeben – vom Kollegen, der in die nächste Fahrzeugklasse aufsteigt, an jemanden, der den Wagen
          übernimmt. Technisch ist das kein Problem, aber im Innenraum steckt noch der Vorbesitzer: Parfum oder Rauch
          in den Polstern, Kaffeeflecken in der Mittelkonsole, Haare in den Sitzschienen.
        </p>
        <p>
          Unsere Empfehlung vor der Übernahme: eine <strong>Innenaufbereitung</strong> ({packagePrice("innen")}) mit{" "}
          <Link href="/polsterreinigung-auto">Polsterreinigung</Link>, bei Gerüchen ergänzt um eine{" "}
          <Link href="/geruchsentfernung-auto">Ozonbehandlung</Link> ({extraPrice("ozon")}). Das ist auch eine Frage der
          Hygiene – Lenkrad, Schaltknauf und Türgriffe sind die Flächen, die am häufigsten angefasst werden.
        </p>

        <h2>Rotweinstadt, Rotweinflecken</h2>
        <p>
          Ingelheim ist als Rotweinstadt bekannt. Wer Wein nach Hause transportiert oder nach einem Fest auf der
          Rückbank verschüttet, kennt das Ergebnis: ein dunkler Fleck, der beim Trocknen einen hartnäckigen Rand
          bildet. Die gute Nachricht: Frische Rotweinflecken lassen sich fast immer vollständig entfernen. Die
          schlechte: Viele Hausmittel machen es schlimmer.
        </p>
        <ul>
          <li>
            <strong>Salz</strong> saugt zwar Flüssigkeit, reibt aber die Farbpigmente tiefer in den Stoff.
          </li>
          <li>
            <strong>Heißes Wasser</strong> fixiert den Farbstoff in den Fasern.
          </li>
          <li>
            <strong>Weißwein</strong> verdünnt nur – und hinterlässt einen eigenen Zuckerrand.
          </li>
          <li>
            <strong>Besser:</strong> abtupfen, mit kaltem Wasser nachtupfen, trocknen lassen – und den Rest uns
            überlassen.
          </li>
        </ul>

        <h2>Vielfahrer-Spuren außen</h2>
        <p>
          Wer täglich auf der A60 unterwegs ist, sammelt Insekten an der Front, feine Steinschläge und mit der Zeit
          gelbliche Scheinwerfer. Eine <Link href="/scheinwerfer-aufbereiten">Scheinwerferaufbereitung</Link> verbessert
          Optik und Licht, eine Versiegelung erleichtert die Reinigung der Front. Alle Preise finden Sie in der{" "}
          <Link href="/preise">Preisübersicht</Link>.
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="tagesplan">
        <div className="container-lux">
          <SectionHeading
            eyebrow="So planen Sie den Tag"
            title={<span id="tagesplan">Auto abgeben, weiter nach Mainz, abends abholen.</span>}
            intro="Bodenheim liegt an der Bahnstrecke nach Mainz. So wird aus dem Aufbereitungstermin kein verlorener Tag."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {tagesplan.map(([wann, text], i) => (
              <Reveal as="li" key={wann} delay={i * 100} className="hairline rounded-3xl bg-ink/40 p-7">
                <span className="font-display text-4xl text-white/10">0{i + 1}</span>
                <p className="mt-2 font-display text-xl text-snow">{wann}</p>
                <p className="mt-3 leading-relaxed text-mist">{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FaqSection title="Fragen aus Ingelheim" items={faqs} />

      <RelatedLinks
        title="Passend dazu"
        paths={[
          "/polsterreinigung-auto",
          "/geruchsentfernung-auto",
          "/scheinwerfer-aufbereiten",
          "/autoaufbereitung-mainz",
          "/autoaufbereitung-wiesbaden",
          "/autoaufbereitung-bodenheim",
        ]}
      />

      <CTASection text="Schicken Sie uns per WhatsApp ein paar Fotos – wir sagen Ihnen, wie lange die Aufbereitung dauert, damit Sie Ihren Tag planen können." />
    </>
  );
}
