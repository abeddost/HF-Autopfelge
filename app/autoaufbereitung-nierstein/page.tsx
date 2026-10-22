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
import SheenCard from "@/components/SheenCard";
import { extraPrice, packagePrice, packages } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/autoaufbereitung-nierstein";
const description =
  "Autoaufbereitung für Nierstein: Weinbergstaub, Lehm und Erde aus Innenraum, Radkästen und Polstern entfernen. HF Autopflege Bodenheim, ca. 10 Min. über die B9.";

export const metadata = pageMetadata({
  path,
  title: "Autoaufbereitung Nierstein – nach der Lese | HF Autopflege",
  description,
});

const whatsappText =
  "Hallo HF Autopflege, ich komme aus Nierstein. Mein Auto ist ziemlich verschmutzt (Weinberg/Feldweg) – wann hätten Sie einen Termin? ";

const stellen = [
  ["Fußraum & Teppiche", "Feuchter Lehm von den Schuhen trocknet ein und färbt helle Teppiche rötlich-braun."],
  ["Schweller & Türfalze", "Spritzwasser von Wirtschaftswegen landet genau dort, wo man beim Waschen nicht hinschaut."],
  ["Radkästen & Felgen", "Erde und Steinchen setzen sich fest und halten Feuchtigkeit – schlecht für Kanten und Kunststoffe."],
  ["Lüftung & Cockpit", "Feiner Staub zieht über die Lüftung ein und legt sich in Düsen, Ritzen und auf Displays."],
  ["Kofferraum", "Kisten, Werkzeug, Gummistiefel: Hier sammelt sich der Schmutz der ganzen Saison."],
  ["Polster", "Arbeitskleidung hinterlässt Erde und Traubensaft – Flecken, die mit der Zeit kaum noch rausgehen."],
] as const;

const faqs = [
  {
    q: "Wie lange fahre ich von Nierstein nach Bodenheim?",
    a: "Etwa 10 Minuten über die B9 Richtung Mainz, vorbei an Nackenheim. Auch mit dem Regionalzug sind Nierstein und Bodenheim direkt verbunden – praktisch, wenn Sie das Auto bei uns lassen.",
  },
  {
    q: "Geht roter Lehm überhaupt wieder aus hellen Teppichen raus?",
    a: "In den meisten Fällen ja, wenn er nicht über Monate eingetreten wurde. Wir saugen zuerst trocken ab, lösen den Rest mit einem passenden Reiniger und arbeiten dann mit Sprühextraktion. Bei sehr alten Verfärbungen kann ein leichter Schimmer bleiben – das sagen wir Ihnen vorher.",
  },
  {
    q: "Ist starke Verschmutzung teurer?",
    a: "Unsere Richtpreise gelten für normal verschmutzte Pkw. Wenn das Auto nach der Lese sehr viel Erde abbekommen hat, kalkulieren wir den Mehraufwand vorab – anhand Ihrer Fotos oder bei der Abgabe. Überraschungen auf der Rechnung gibt es nicht.",
  },
  {
    q: "Wann ist der beste Zeitpunkt für die Aufbereitung?",
    a: "Direkt nach der Hauptsaison, bevor der Lehm über den Winter durchfeuchtet und muffig wird. Wer das Auto auch im Winter viel nutzt, kombiniert die Reinigung am besten mit einer Lackversiegelung.",
  },
];

export default function NiersteinPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Autoaufbereitung für Nierstein",
          description,
          path,
          serviceType: "Fahrzeugaufbereitung",
          areaServed: ["Nierstein"],
          minPrice: packages[0].price,
        })}
      />
      <PageHero
        eyebrow="Nierstein · ca. 10 Min."
        title={
          <>
            Autoaufbereitung für <span className="text-shine">Nierstein</span> – wenn der Weinberg mitfährt.
          </>
        }
        intro="Lehm im Fußraum, Staub in der Lüftung, Erde in den Radkästen: Wir holen raus, was die Saison zwischen Roter Hang und Rhein im Auto hinterlässt."
        video={videos.innenraum}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Fotos schicken" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Einzugsgebiet", path: "/einzugsgebiet" },
          { name: "Nierstein", path },
        ]}
      />

      <ArticleLayout
        aside={
          <>
            <RouteCard
              from="Nierstein"
              minutes="ca. 10 Min."
              km="ca. 9 km"
              route="Über die B9 nach Norden Richtung Mainz, durch Nackenheim hindurch bis Bodenheim."
            />
            <QuickFacts
              title="Typisch für Nierstein"
              facts={[
                ["Innenaufbereitung", packagePrice("innen")],
                ["Teppich-/Polsterreinigung", extraPrice("polster")],
                ["Felgen intensiv", extraPrice("felgen")],
                ["Ozon gegen Gerüche", extraPrice("ozon")],
              ]}
              whatsappText={whatsappText}
            />
          </>
        }
      >
        <h2>Ein Auto zwischen Weinbergen hat es nicht leicht</h2>
        <p>
          Nierstein ist eine der bekanntesten Weinbaugemeinden Rheinhessens – mit dem Roten Hang zwischen Nierstein und
          Nackenheim als Aushängeschild. Der rote, tonhaltige Boden, der den Weinen ihren Charakter gibt, ist für Autos
          eher eine Herausforderung: Er ist fein, haftet gut und färbt.
        </p>
        <p>
          Wer im Weinbau arbeitet, Wirtschaftswege nutzt oder einfach am Ortsrand wohnt, bringt diesen Boden mit ins
          Auto. An den Schuhen, an der Arbeitskleidung, an Kisten und Werkzeug. Nach ein paar Wochen Lesezeit sieht man
          es: Teppiche mit rötlich-braunen Rändern, Staub in jeder Ritze, verkrustete Radkästen.
        </p>

        <h2>Erst trocken, dann nass: Warum die Reihenfolge zählt</h2>
        <p>
          Der häufigste Fehler bei lehmigem Schmutz: sofort mit Wasser ran. Feuchter Ton verteilt sich, zieht tiefer
          in die Teppichfasern und hinterlässt beim Trocknen einen Schleier. Wir gehen deshalb in festen Schritten vor:
        </p>
        <ol>
          <li>
            <strong>Trocken lösen.</strong> Teppiche und Fußraum werden ausgebürstet und gründlich gesaugt, Ritzen
            mit Druckluft ausgeblasen.
          </li>
          <li>
            <strong>Vorbehandeln.</strong> Verbliebene Ränder bekommen einen Reiniger, der den Ton löst, ohne die
            Fasern anzugreifen.
          </li>
          <li>
            <strong>Sprühextraktion.</strong> Reinigungslösung wird eingesprüht und sofort mit dem Schmutz wieder
            abgesaugt – so bleibt keine Nässe im Teppich. Mehr dazu unter{" "}
            <Link href="/polsterreinigung-auto">Polster- und Teppichreinigung</Link>.
          </li>
          <li>
            <strong>Außen von unten nach oben.</strong> Radkästen, Felgen und Schweller werden vorgereinigt, bevor der
            Lack gewaschen wird – damit kein Sand über die Flächen gezogen wird.
          </li>
          <li>
            <strong>Trocknen lassen.</strong> Das Auto bleibt so lange bei uns, bis der Innenraum trocken ist. Sonst
            riecht es nach ein paar Tagen muffig.
          </li>
        </ol>

        <h2>Tipps für die Lesezeit</h2>
        <ul>
          <li>Gummimatten mit hohem Rand statt Textilmatten – die lassen sich am Abend einfach ausspülen.</li>
          <li>Eine alte Decke über den Fahrersitz, wenn Sie in Arbeitskleidung einsteigen.</li>
          <li>Radkästen zwischendurch mit klarem Wasser ausspülen, statt den Lehm wochenlang trocknen zu lassen.</li>
          <li>
            Nach der Saison einen Termin einplanen: eine{" "}
            <Link href="/auto-innenreinigung">Innenaufbereitung</Link> mit Teppichreinigung, bei Bedarf eine{" "}
            <Link href="/geruchsentfernung-auto">Behandlung gegen Gerüche</Link>.
          </li>
        </ul>

        <h2>Nicht nur für Winzer</h2>
        <p>
          Natürlich bereiten wir auch ganz normale Alltagsautos aus Nierstein auf – vom Kleinwagen bis zum Familienvan.
          Für den Lack bieten wir <Link href="/lackaufbereitung-politur">Politur</Link> und{" "}
          <Link href="/keramikversiegelung">Keramikversiegelung</Link>, für Rückgabe oder Verkauf das Paket{" "}
          <Link href="/leasingrueckgabe-aufbereitung">Leasingrückgabe & Verkauf</Link>. Alle Preise finden Sie in der{" "}
          <Link href="/preise">Preisübersicht</Link>.
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="stellen">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Wo der Schmutz sitzt"
            title={<span id="stellen">Sechs Stellen, die wir nach der Saison besonders gründlich reinigen.</span>}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stellen.map(([titel, text], i) => (
              <Reveal as="li" key={titel} delay={(i % 3) * 100}>
                <SheenCard className="h-full p-7">
                  <span className="font-display text-4xl text-white/10">0{i + 1}</span>
                  <p className="mt-2 font-display text-xl text-snow">{titel}</p>
                  <p className="mt-3 leading-relaxed text-mist">{text}</p>
                </SheenCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection title="Fragen aus Nierstein" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        eyebrow="Entlang der B9"
        title="Nachbarorte und passende Leistungen"
        paths={[
          "/autoaufbereitung-oppenheim",
          "/autoaufbereitung-nackenheim",
          "/autoaufbereitung-bodenheim",
          "/polsterreinigung-auto",
          "/auto-innenreinigung",
          "/geruchsentfernung-auto",
        ]}
      />

      <CTASection
        title={
          <>
            Lese vorbei? <span className="text-shine">Auto zu uns.</span>
          </>
        }
        text="Schicken Sie uns ein Foto vom Fußraum per WhatsApp – wir sagen Ihnen, was es kostet und wann wir Zeit haben."
      />
    </>
  );
}
