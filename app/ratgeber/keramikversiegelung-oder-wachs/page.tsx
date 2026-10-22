// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen.
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import QuickFacts from "@/components/QuickFacts";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SheenCard from "@/components/SheenCard";
import { packagePrice } from "@/lib/pricing";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/ratgeber/keramikversiegelung-oder-wachs";
const published = "2026-10-22";
const title = "Keramikversiegelung oder Wachs? Der ehrliche Vergleich";
const description =
  "Wachs, Lackversiegelung oder Keramikversiegelung: Haltbarkeit, Glanz, Schutz und Kosten im Vergleich – plus Entscheidungshilfe für den passenden Lackschutz.";

export const metadata = pageMetadata({ path, title, description });

const whatsappText =
  "Hallo HF Autopflege, ich überlege zwischen Wachs, Lackversiegelung und Keramik. Mein Fahrzeug / Nutzung: ";

const vergleich = [
  ["Was es ist", "natürliches (Carnauba) oder synthetisches Wachs, liegt auf dem Lack", "Kunststoffpolymere, haften fester am Lack", "Siliziumdioxid-Beschichtung, härtet aus und verbindet sich mit dem Klarlack"],
  ["Haltbarkeit", "kurz – Wochen bis wenige Monate", "mittel – meist einige Monate", "lang – bei richtiger Pflege mehrere Jahre, je nach Produkt"],
  ["Glanz", "warm, tief, besonders auf dunklen Lacken", "klar, gleichmäßig", "glasig, sehr klar"],
  ["Schutz vor Umwelteinflüssen", "gering", "mittel", "hoch"],
  ["Abperleffekt", "gut, lässt schnell nach", "gut", "sehr ausgeprägt und lange anhaltend"],
  ["Waschanlagen-Beständigkeit", "niedrig", "mittel", "hoch (Bürstenanlagen trotzdem meiden)"],
  ["Vorbereitung", "Wäsche, idealerweise Politur", "Wäsche, Dekontamination, idealerweise Politur", "Wäsche, Dekontamination, Politur und Entfetten zwingend"],
  ["Auftragen selbst möglich?", "ja, einfach", "ja, mit etwas Übung", "möglich, aber fehleranfällig – meist Profiarbeit"],
] as const;

const typen = [
  {
    titel: "Wachs passt, wenn …",
    punkte: [
      "Sie gern selbst Hand anlegen und Ihr Auto regelmäßig pflegen",
      "Sie einen Oldtimer oder ein Liebhaberfahrzeug mit warmem Glanz fahren",
      "das Auto in der Garage steht und wenig gefahren wird",
    ],
  },
  {
    titel: "Lackversiegelung passt, wenn …",
    punkte: [
      "Sie soliden Schutz ohne großen Aufwand wollen",
      "Sie ein Leasingauto mit kurzer Restlaufzeit fahren",
      "der Lack vor dem Winter eine Schutzschicht braucht",
    ],
  },
  {
    titel: "Keramik passt, wenn …",
    punkte: [
      "Sie das Auto mehrere Jahre behalten",
      "es draußen steht – unter Bäumen, an der Straße",
      "Sie möglichst wenig Pflegeaufwand und maximale Haltbarkeit wollen",
    ],
  },
];

const faqs = [
  {
    q: "Kann man Wachs auf eine Keramikversiegelung auftragen?",
    a: "Möglich, aber meist nicht sinnvoll. Wachs liegt dann auf der Keramik und überdeckt deren Abperleffekt, bis es sich nach einigen Wochen abgewaschen hat. Wer auffrischen will, nutzt besser ein zur Keramik passendes Pflegespray.",
  },
  {
    q: "Ist Keramik wirklich besser als Wachs?",
    a: "Beim Schutz und bei der Haltbarkeit ja, deutlich. Beim Glanz ist es Geschmackssache – viele mögen den warmen Wachsglanz auf dunklen Lacken. Und beim Preis für die einmalige Anwendung ist Wachs günstiger. „Besser“ hängt also davon ab, was Ihnen wichtig ist.",
  },
  {
    q: "Wie oft muss ich mein Auto wachsen?",
    a: "Je nach Produkt, Witterung und Waschhäufigkeit alle paar Wochen bis Monate. Ein guter Test: Perlt Wasser nicht mehr in runden Tropfen ab, sondern läuft flächig ab, ist der Schutz weitgehend weg.",
  },
  {
    q: "Schützt Keramik vor Steinschlägen?",
    a: "Nein. Gegen Steinschläge hilft nur eine Lackschutzfolie. Keramik schützt vor chemischen Einflüssen, UV-Strahlung und erleichtert die Reinigung – mechanischen Schutz bietet sie kaum.",
  },
];

export default function KeramikWachsPage() {
  return (
    <>
      <JsonLd data={articleJsonLd({ title, description, path, datePublished: published })} />
      <PageHero
        eyebrow="Ratgeber · Lackschutz"
        title={
          <>
            Keramikversiegelung <span className="text-shine">oder Wachs?</span>
          </>
        }
        intro="Drei Arten, Lack zu schützen – mit sehr unterschiedlicher Haltbarkeit, Wirkung und Preis. Hier ist der ehrliche Vergleich, ohne Marketingversprechen."
        video={videos.politur}
      />
      <Breadcrumbs
        items={[
          { name: "Ratgeber", path: "/ratgeber" },
          { name: "Keramikversiegelung oder Wachs", path },
        ]}
      />

      <ArticleLayout
        aside={
          <QuickFacts
            title="Lackschutz bei uns"
            facts={[
              ["Außenaufbereitung inkl. Politur & Versiegelung", packagePrice("aussen")],
              ["Keramikversiegelung inkl. Vorbereitung", packagePrice("keramik")],
            ]}
            whatsappText={whatsappText}
          >
            Unsicher, was zu Ihnen passt? Schreiben Sie uns, wie Sie Ihr Auto nutzen und wo es steht – wir empfehlen
            ehrlich.
          </QuickFacts>
        }
      >
        <p className="text-sm">
          Von HF Autopflege, Bodenheim · Stand{" "}
          {new Date(published).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h2>Erst die Grundlagen: Was ein Lackschutz überhaupt tut</h2>
        <p>
          Autolack ist robust, aber nicht unverwundbar. Der Klarlack, die oberste Schicht, wird Tag für Tag von UV-Strahlung,
          saurem Regen, Vogelkot, Baumharz, Streusalz und Waschbürsten angegriffen. Ein Lackschutz legt eine zusätzliche
          Schicht darüber, die diese Angriffe abfängt, bevor sie den Klarlack erreichen – und die Reinigung erleichtert,
          weil Schmutz schlechter haftet.
        </p>
        <p>
          Alle drei Varianten – Wachs, Lackversiegelung und Keramik – erfüllen diesen Zweck. Sie unterscheiden sich darin,{" "}
          <strong>wie lange</strong> sie halten, <strong>wie stark</strong> sie schützen und{" "}
          <strong>wie viel Vorbereitung</strong> sie brauchen.
        </p>

        <h2>Der Vergleich auf einen Blick</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Wachs</th>
                <th scope="col">Lackversiegelung</th>
                <th scope="col">Keramik</th>
              </tr>
            </thead>
            <tbody>
              {vergleich.map(([kriterium, wachs, versiegelung, keramik]) => (
                <tr key={kriterium}>
                  <td>
                    <strong>{kriterium}</strong>
                  </td>
                  <td>{wachs}</td>
                  <td>{versiegelung}</td>
                  <td>{keramik}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm">
          Haltbarkeiten sind Erfahrungswerte und hängen stark von Produkt, Pflege, Waschhäufigkeit und Abstellplatz ab.
        </p>

        <h2>Wachs: der Klassiker mit dem schönsten Glanz</h2>
        <p>
          Carnaubawachs stammt aus den Blättern einer brasilianischen Palme und ist seit Jahrzehnten der Klassiker der
          Autopflege. Es gibt dunklen Lacken einen warmen, tiefen Glanz, den viele Liebhaber jeder anderen Versiegelung
          vorziehen.
        </p>
        <p>
          Der Nachteil: Wachs liegt nur auf dem Lack, statt sich mit ihm zu verbinden. Jede Wäsche, jeder Regen und jede
          Hitzeperiode trägt etwas davon ab. Wer den Schutz erhalten will, muss regelmäßig nachwachsen. Für Menschen, die
          gern Zeit mit ihrem Auto verbringen, ist das kein Problem – für alle anderen schon.
        </p>

        <h2>Lackversiegelung: der solide Mittelweg</h2>
        <p>
          Eine Lackversiegelung (oft auch „Sealant“ genannt) besteht aus synthetischen Polymeren. Sie haftet fester als
          Wachs und hält deshalb deutlich länger – meist einige Monate. Der Glanz ist klarer und kühler, der Schutz vor
          Umwelteinflüssen besser.
        </p>
        <p>
          Für die meisten Alltagsautos ist sie ein sehr vernünftiger Kompromiss: deutlich besser als nichts, bezahlbar
          und ohne großen Pflegeaufwand. Bei uns ist sie Teil der{" "}
          <Link href="/lackaufbereitung-politur">Außenaufbereitung mit Politur</Link> ({packagePrice("aussen")}). Ideal
          zum Beispiel vor dem Winter, um den Lack vor Streusalz zu schützen.
        </p>

        <h2>Keramikversiegelung: der Langzeitschutz</h2>
        <p>
          Eine Keramikversiegelung ist chemisch etwas völlig anderes. Die flüssige Beschichtung reagiert nach dem Auftragen
          mit der Luftfeuchtigkeit und härtet zu einer glasartigen Schicht aus, die sich mit dem Klarlack verbindet. Sie
          ist härter, widerstandsfähiger gegen Chemikalien und hält bei richtiger Pflege mehrere Jahre.
        </p>
        <p>
          Der Haken: Sie verzeiht keine Fehler bei der Vorbereitung. Alles, was vorher auf oder im Lack war – Swirls,
          Wasserflecken, Polierrückstände –, wird für Jahre konserviert. Deshalb gehört zu einer seriösen{" "}
          <Link href="/keramikversiegelung">Keramikversiegelung</Link> immer eine gründliche Dekontamination und Politur.
          Genau das macht sie teurer: Sie bezahlen weniger für das Produkt als für die Stunden davor.
        </p>

        <h2>Was rechnet sich auf Dauer?</h2>
        <p>
          Auf den ersten Blick ist Wachs am günstigsten, Keramik am teuersten. Auf mehrere Jahre gesehen verschiebt sich
          das Bild: Wachs und Lackversiegelung müssen regelmäßig erneuert werden – mit Ihrer Zeit oder mit wiederholten
          Terminen. Eine Keramikversiegelung ist eine einmalige größere Investition, die danach lange hält und die
          laufende Pflege erleichtert.
        </p>
        <p>
          Als Faustregel: <strong>Je länger Sie das Auto behalten und je weniger Zeit Sie in Pflege stecken wollen,
          desto eher lohnt sich Keramik.</strong> Bei einem Leasingauto, das in einem Jahr zurückgeht, ist eine
          Lackversiegelung meist die wirtschaftlichere Wahl. Was eine Aufbereitung insgesamt kostet, zeigt unser
          Ratgeber <Link href="/ratgeber/autoaufbereitung-kosten">Was kostet eine Autoaufbereitung?</Link>
        </p>

        <h2>Drei Mythen, die sich hartnäckig halten</h2>
        <h3>„Keramik macht den Lack kratzfest.“</h3>
        <p>
          Nein. Sie macht ihn etwas widerstandsfähiger gegen feinste Waschkratzer. Gegen Schlüssel, Äste oder Steinschlag
          hilft sie nicht. Die oft beworbene „9H-Härte“ beschreibt einen Bleistift-Härtetest der Beschichtung – nicht die
          Kratzfestigkeit Ihres Autos.
        </p>
        <h3>„Nach der Keramik muss ich nie wieder waschen.“</h3>
        <p>
          Auch ein keramisch versiegeltes Auto wird schmutzig. Es lässt sich nur leichter reinigen. Wer gar nicht mehr
          wäscht, überdeckt mit der Zeit den Abperleffekt.
        </p>
        <h3>„Mehr Schichten Wachs halten länger.“</h3>
        <p>
          Nur begrenzt. Wachs verbindet sich kaum mit sich selbst; die zweite Schicht gleicht eher Fehlstellen aus, als die
          Haltbarkeit zu verdoppeln.
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="entscheidung">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Entscheidungshilfe"
            title={<span id="entscheidung">Welcher Lackschutz passt zu Ihnen?</span>}
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {typen.map((typ, i) => (
              <Reveal as="li" key={typ.titel} delay={i * 100}>
                <SheenCard className="h-full p-7">
                  <p className="font-display text-xl text-snow">{typ.titel}</p>
                  <ul className="prose-lux mt-5 !text-base">
                    {typ.punkte.map((punkt) => (
                      <li key={punkt}>{punkt}</li>
                    ))}
                  </ul>
                </SheenCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection title="Fragen zum Lackschutz" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Weiterlesen"
        paths={[
          "/keramikversiegelung",
          "/lackaufbereitung-politur",
          "/ratgeber/autoaufbereitung-kosten",
          "/autoaufbereitung-wiesbaden",
          "/autoaufbereitung-mainz",
          "/autoaufbereitung-bodenheim",
        ]}
      />

      <CTASection
        title={
          <>
            Der richtige Schutz <span className="text-shine">für Ihren Lack.</span>
          </>
        }
        text="Erzählen Sie uns per WhatsApp, wie Sie Ihr Auto nutzen und wo es steht – wir empfehlen Ihnen ehrlich, was sich lohnt."
      />
    </>
  );
}
