// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen. Preise kommen automatisch aus lib/pricing.ts.
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import QuickFacts from "@/components/QuickFacts";
import RelatedLinks from "@/components/RelatedLinks";
import { extras, formatPrice, packagePrice, packages, priceNote, taxNote } from "@/lib/pricing";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/ratgeber/autoaufbereitung-kosten";
const published = "2026-10-22";
const title = "Was kostet eine Autoaufbereitung? Preise & Beispiele";
const description =
  "Was kostet eine Autoaufbereitung? Richtpreise für Innen-, Außen- und Komplettaufbereitung, Preisfaktoren, drei Rechenbeispiele und Warnsignale bei Billigangeboten.";

export const metadata = pageMetadata({ path, title, description });

const whatsappText = "Hallo HF Autopflege, ich hätte gerne einen Preis für die Aufbereitung meines Autos. Fahrzeug & Zustand: ";

function preis(id: string) {
  const value = packages.find((p) => p.id === id)?.price ?? extras.find((e) => e.id === id)?.price;
  if (value == null) throw new Error(`Kein fester Preis für ${id}`);
  return value;
}

function summe(ids: string[]) {
  return formatPrice(ids.reduce((sum, id) => sum + preis(id), 0));
}

const beispiele = [
  {
    titel: "Familienkombi mit Flecken auf der Rückbank",
    posten: [
      ["Innenaufbereitung", "innen"],
      ["Polster- oder Teppichreinigung", "polster"],
    ],
    hinweis: "Kommen Hundehaare dazu, berechnen wir sie zusätzlich nach Aufwand.",
  },
  {
    titel: "Gebrauchter vor dem Privatverkauf",
    posten: [
      ["Leasingrückgabe & Verkauf", "leasing"],
      ["Scheinwerferaufbereitung (Paar)", "scheinwerfer"],
      ["Motorraumreinigung", "motorraum"],
    ],
    hinweis: "Der erste Eindruck auf Fotos und bei der Besichtigung steht hier im Mittelpunkt.",
  },
  {
    titel: "Neuwagen, der lange glänzen soll",
    posten: [
      ["Keramikversiegelung", "keramik"],
      ["Scheibenversiegelung (Frontscheibe)", "scheibe"],
    ],
    hinweis: "Bei einem neuen Auto ist meist wenig Politur nötig – das hält den Aufwand im Rahmen.",
  },
] as const;

const faqs = [
  {
    q: "Was kostet eine Komplettaufbereitung im Durchschnitt?",
    a: `Einen allgemeingültigen Durchschnitt gibt es nicht, weil Umfang und Zustand stark schwanken. Bei uns beginnt die Komplettaufbereitung innen und außen ${packagePrice("komplett")} für einen Pkw in normalem Zustand.`,
  },
  {
    q: "Warum ist eine Aufbereitung teurer als die Waschstraße?",
    a: "Weil sie etwas anderes ist. Die Waschstraße reinigt in wenigen Minuten die Oberfläche. Bei einer Aufbereitung arbeitet ein Mensch mehrere Stunden von Hand an Ihrem Auto – in Fugen, Polstern, am Lack. Der Preis ist im Wesentlichen Arbeitszeit.",
  },
  {
    q: "Bekomme ich vorab einen festen Preis?",
    a: "Ja. Anhand von Fotos oder einer kurzen Besichtigung legen wir den Preis vor dem Start fest. Sollte sich während der Arbeit etwas Unerwartetes zeigen, sprechen wir mit Ihnen, bevor zusätzliche Kosten entstehen.",
  },
  {
    q: "Ist die Aufbereitung für einen SUV oder Van teurer?",
    a: "In der Regel ja. Mehr Fläche außen, mehr Sitze und mehr Teppich innen bedeuten mehr Arbeitszeit. Unsere Richtpreise gelten für normale Pkw; für große Fahrzeuge nennen wir Ihnen den Preis bei der Anfrage.",
  },
];

export default function KostenRatgeberPage() {
  return (
    <>
      <JsonLd data={articleJsonLd({ title, description, path, datePublished: published })} />
      <PageHero
        eyebrow="Ratgeber · Kosten"
        title={
          <>
            Was kostet eine <span className="text-shine">Autoaufbereitung?</span>
          </>
        }
        intro="Richtpreise, die wichtigsten Preisfaktoren und drei Rechenbeispiele – damit Sie wissen, womit Sie rechnen können, und Billigangebote besser einordnen."
        video={videos.werkstatt}
      />
      <Breadcrumbs
        items={[
          { name: "Ratgeber", path: "/ratgeber" },
          { name: "Kosten einer Autoaufbereitung", path },
        ]}
      />

      <ArticleLayout
        aside={
          <QuickFacts
            title="Die Kurzantwort"
            facts={[
              ["Pflegewäsche", packagePrice("pflegewaesche")],
              ["Innenaufbereitung", packagePrice("innen")],
              ["Außenaufbereitung", packagePrice("aussen")],
              ["Komplettaufbereitung", packagePrice("komplett")],
              ["Keramikversiegelung", packagePrice("keramik")],
            ]}
            whatsappText={whatsappText}
          >
            Richtpreise von HF Autopflege für Pkw in normalem Zustand, Stand {new Date(published).toLocaleDateString("de-DE", { month: "long", year: "numeric" })}.
          </QuickFacts>
        }
      >
        <p className="text-sm">
          Von HF Autopflege, Bodenheim · Stand{" "}
          {new Date(published).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h2>Die kurze Antwort</h2>
        <p>
          Eine professionelle Autoaufbereitung kostet bei uns zwischen <strong>{packagePrice("pflegewaesche")}</strong>{" "}
          für eine gründliche Handwäsche und <strong>{packagePrice("keramik")}</strong> für eine Keramikversiegelung mit
          Lackvorbereitung. Innen-, Außen- und Komplettaufbereitung liegen dazwischen. Andere Anbieter rechnen anders – deshalb erklären wir hier vor allem, <em>wovon</em> der
          Preis abhängt.
        </p>

        <h2>Alle Richtpreise im Überblick</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Paket</th>
                <th scope="col">Enthalten</th>
                <th scope="col">Richtpreis</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.id}>
                  <td>
                    <strong>{pkg.name}</strong>
                  </td>
                  <td>{pkg.includes.join(" · ")}</td>
                  <td className="whitespace-nowrap">{formatPrice(pkg.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Einzelleistung</th>
                <th scope="col">Richtpreis</th>
              </tr>
            </thead>
            <tbody>
              {extras.map((extra) => (
                <tr key={extra.id}>
                  <td>
                    {extra.name}
                    {extra.note && extra.price !== null && <span className="text-mist"> ({extra.note})</span>}
                  </td>
                  <td className="whitespace-nowrap">{formatPrice(extra.price, extra.note ?? "auf Anfrage")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm">
          {priceNote} {taxNote}
        </p>

        <h2>Wovon der Preis abhängt</h2>
        <h3>1. Fahrzeuggröße</h3>
        <p>
          Ein Kleinwagen hat deutlich weniger Lackfläche und Teppich als ein großer SUV oder Van. Mehr Sitzreihen
          bedeuten mehr Polster, mehr Fugen, mehr Arbeitszeit. Richtpreise gelten deshalb meist für einen „normalen“ Pkw;
          große Fahrzeuge kosten mehr.
        </p>
        <h3>2. Zustand und Verschmutzung</h3>
        <p>
          Der größte Preisfaktor. Ein Auto, das regelmäßig gepflegt wird, ist in wenigen Stunden fertig. Ein Fahrzeug
          mit Tierhaaren, Sand vom Strandurlaub, Rauchgeruch oder Flecken aus mehreren Jahren kann das Doppelte an Zeit
          brauchen. Besonders aufwendig: <Link href="/auto-innenreinigung">Tierhaare</Link> – deshalb berechnen wir sie
          nach Aufwand.
        </p>
        <h3>3. Lackzustand</h3>
        <p>
          Bei der <Link href="/lackaufbereitung-politur">Politur</Link> entscheidet der Zustand, ob ein Durchgang reicht
          oder mehrere nötig sind. Ein junger, gepflegter Lack ist schnell auf Hochglanz gebracht; ein vernachlässigter
          Lack mit Hologrammen und tiefen Swirls braucht deutlich mehr Zeit.
        </p>
        <h3>4. Materialien</h3>
        <p>
          Leder, Alcantara, Klavierlack und große Displays brauchen andere Mittel und mehr Vorsicht als Stoff und
          Hartplastik. Das schlägt sich vor allem bei <Link href="/polsterreinigung-auto">Polster- und Lederreinigung</Link>{" "}
          nieder.
        </p>
        <h3>5. Umfang</h3>
        <p>
          „Aufbereitung“ ist kein geschützter Begriff. Manche Anbieter meinen damit eine Wäsche mit Aussaugen, andere eine
          Tagesarbeit mit Politur und Versiegelung. Vergleichen Sie Angebote deshalb immer anhand der Leistungsliste, nicht
          anhand des Namens.
        </p>

        <h2>Drei Rechenbeispiele</h2>
        {beispiele.map((b) => (
          <div key={b.titel}>
            <h3>{b.titel}</h3>
            <div className="table-wrap">
              <table>
                <tbody>
                  {b.posten.map(([name, id]) => (
                    <tr key={id}>
                      <td>{name}</td>
                      <td className="whitespace-nowrap">{formatPrice(preis(id))}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <strong>Summe (Richtwert)</strong>
                    </td>
                    <td className="whitespace-nowrap">
                      <strong>{summe(b.posten.map(([, id]) => id))}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm">{b.hinweis}</p>
          </div>
        ))}

        <h2>Warnsignale bei Billigangeboten</h2>
        <p>
          Eine „Komplettaufbereitung“ für einen Bruchteil der üblichen Preise klingt verlockend. Rechnen Sie nach: Wer
          gründlich innen und außen arbeitet, braucht mehrere Stunden. Ist der Preis sehr niedrig, wird irgendwo gespart –
          meistens an diesen Stellen:
        </p>
        <ul>
          <li>Politur nur mit glänzendem Füllstoff, der Kratzer für ein paar Wäschen überdeckt</li>
          <li>Cockpit-Silikonspray statt Reinigung – glänzt, zieht aber Staub an</li>
          <li>„Polsterreinigung“ mit Schaum ohne Absaugen – der Schmutz bleibt im Sitz</li>
          <li>Hochdruck im Motorraum, ohne Elektronik abzudecken</li>
          <li>keine klare Leistungsliste und kein fester Preis vorab</li>
        </ul>

        <h2>Lohnt sich eine Aufbereitung?</h2>
        <p>
          Finanziell lohnt sie sich vor allem in drei Situationen: <strong>vor dem Verkauf</strong>, weil ein gepflegtes
          Auto besser ankommt; <strong>vor der Leasingrückgabe</strong>, weil Verschmutzung sonst nachberechnet werden
          kann (siehe <Link href="/leasingrueckgabe-aufbereitung">Leasingrückgabe</Link>); und{" "}
          <strong>bei langer Haltedauer</strong>, weil regelmäßig gepflegter Lack und Innenraum langsamer altern.
        </p>
        <p>
          Und dann gibt es den Grund, der sich nicht in Euro ausdrücken lässt: Man steigt einfach lieber in ein sauberes
          Auto.
        </p>

        <h2>So sparen Sie bei der Aufbereitung</h2>
        <ul>
          <li>Regelmäßig pflegen lassen – dann reicht oft das kleinere Paket.</li>
          <li>Kombinieren statt einzeln buchen: Die Komplettaufbereitung ist günstiger als innen und außen getrennt.</li>
          <li>Persönliche Gegenstände selbst ausräumen.</li>
          <li>Fotos vorab schicken – dann gibt es keine Überraschungen beim Preis.</li>
        </ul>
        <p>
          Alle aktuellen Preise finden Sie auf unserer <Link href="/preise">Preisseite</Link>. Und wenn Sie wissen wollen,
          welcher Lackschutz sein Geld wert ist, lesen Sie unseren Vergleich{" "}
          <Link href="/ratgeber/keramikversiegelung-oder-wachs">Keramikversiegelung oder Wachs</Link>.
        </p>
      </ArticleLayout>

      <FaqSection title="Fragen zu den Kosten" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Weiterlesen"
        paths={[
          "/ratgeber/keramikversiegelung-oder-wachs",
          "/auto-innenreinigung",
          "/leasingrueckgabe-aufbereitung",
          "/lackaufbereitung-politur",
          "/autoaufbereitung-bodenheim",
          "/autoaufbereitung-mainz",
        ]}
      />

      <CTASection
        title={
          <>
            Ihr Preis, <span className="text-shine">vorab und verbindlich.</span>
          </>
        }
        text="Schicken Sie uns Fahrzeug und ein paar Fotos per WhatsApp – wir nennen Ihnen den Preis, bevor wir anfangen."
      />
    </>
  );
}
