// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen.
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
import { extraPrice, packagePrice, packages } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/auto-innenreinigung";
const description = `Professionelle Auto-Innenreinigung in Bodenheim bei Mainz: Sitze, Teppiche, Cockpit, Himmel und Scheiben – auch Tierhaare und Flecken. Innenaufbereitung ${packagePrice("innen")}.`;

export const metadata = pageMetadata({
  path,
  title: "Auto-Innenreinigung bei Mainz | HF Autopflege Bodenheim",
  description,
});

const whatsappText = "Hallo HF Autopflege, ich interessiere mich für eine Innenreinigung. Mein Fahrzeug: ";

const faqs = [
  {
    q: "Wie lange dauert eine professionelle Innenreinigung?",
    a: "Je nach Fahrzeuggröße und Verschmutzung mehrere Stunden. Kommen Polster- oder Teppichreinigung dazu, braucht der Innenraum zusätzlich Zeit zum Trocknen. Bei der Terminabsprache nennen wir Ihnen, wann Sie Ihr Auto wieder abholen können.",
  },
  {
    q: "Sind die Sitze nach der Reinigung nass?",
    a: "Bei der reinen Innenaufbereitung nicht. Bei einer Polsterreinigung per Sprühextraktion wird die Reinigungslösung sofort wieder abgesaugt, eine Restfeuchte bleibt aber. Wir geben das Auto erst zurück, wenn die Polster weitgehend trocken sind, und empfehlen, in den ersten Stunden die Fenster einen Spalt offen zu lassen.",
  },
  {
    q: "Was sollte ich vor der Abgabe aus dem Auto nehmen?",
    a: "Wertsachen, persönliche Gegenstände, Kindersitze und alles aus Handschuhfach, Türfächern und Kofferraum, was Sie nicht gereinigt haben möchten. So kommen wir an alle Flächen und nichts geht verloren.",
  },
  {
    q: "Entfernen Sie auch Hundehaare?",
    a: `Ja. Tierhaare aus Teppichen und Polstern zu bekommen ist aufwendig, deshalb berechnen wir sie nach Aufwand (${extraPrice("tierhaare")}). Mit ein paar Fotos per WhatsApp nennen wir Ihnen vorab einen Preis.`,
  },
  {
    q: "Reicht eine Innenreinigung gegen Zigarettengeruch?",
    a: "Sie entfernt einen Großteil – Asche, Teer auf Kunststoffen, Rückstände in Polstern. Rauch sitzt aber auch im Dachhimmel und in der Lüftung. Für einen dauerhaft neutralen Geruch kombinieren wir die Reinigung meist mit Himmelreinigung und Ozonbehandlung.",
  },
  {
    q: "Was kostet eine Auto-Innenreinigung?",
    a: `Unsere Innenaufbereitung beginnt ${packagePrice("innen")} für einen Pkw in normalem Zustand. Polster- oder Teppichreinigung kostet ${extraPrice("polster")}, Lederreinigung und -pflege ${extraPrice("leder")}. Den genauen Preis stimmen wir vorab mit Ihnen ab.`,
  },
];

export default function InnenreinigungPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Auto-Innenreinigung",
          description,
          path,
          serviceType: "Innenaufbereitung",
          minPrice: packages.find((p) => p.id === "innen")!.price,
        })}
      />
      <PageHero
        eyebrow="Innenaufbereitung"
        title={
          <>
            Auto-Innenreinigung, die <span className="text-shine">bis in die Fugen</span> geht.
          </>
        }
        intro="Sitze, Teppiche, Cockpit, Dachhimmel und Scheiben – wir reinigen jede Oberfläche mit dem passenden Mittel und Werkzeug. Für einen Innenraum, der wieder wie Ihr Auto riecht, nicht wie die letzten Monate."
        video={videos.innenraum}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Innenreinigung anfragen" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Auto-Innenreinigung", path },
        ]}
      />

      <ArticleLayout
        aside={
          <QuickFacts
            title="Innenreinigung – Preise"
            facts={[
              ["Innenaufbereitung", packagePrice("innen")],
              ["Polster/Teppich", extraPrice("polster")],
              ["Leder reinigen & pflegen", extraPrice("leder")],
              ["Dachhimmel", extraPrice("himmel")],
              ["Tierhaare", extraPrice("tierhaare")],
              ["Ozon gegen Gerüche", extraPrice("ozon")],
            ]}
            whatsappText={whatsappText}
          >
            Richtpreise für Pkw in normalem Zustand. Größe und Verschmutzung bestimmen den Endpreis – wir nennen ihn
            vorab.
          </QuickFacts>
        }
      >
        <h2>Was eine professionelle Innenreinigung ausmacht</h2>
        <p>
          Aussaugen kann jeder – an der Tankstelle, in der Waschstraße oder zu Hause. Der Unterschied einer
          professionellen Innenreinigung liegt in den Stellen, an die man mit dem normalen Sauger nicht kommt, und in
          der richtigen Behandlung jeder einzelnen Oberfläche. Ein modernes Cockpit besteht aus fünf, sechs
          verschiedenen Materialien: Hartplastik, Softtouch-Kunststoff, Klavierlack, Displays, Chrom, Leder oder
          Alcantara. Jedes davon reagiert anders auf Reiniger.
        </p>
        <p>
          Unsere <strong>Innenaufbereitung</strong> ({packagePrice("innen")}) umfasst:
        </p>
        <ul>
          <li>gründliches Aussaugen inklusive Kofferraum, Sitzschienen und Fugen</li>
          <li>Ausblasen von Lüftungsdüsen, Ritzen und Nähten mit Druckluft</li>
          <li>Reinigung von Cockpit, Mittelkonsole, Türverkleidungen und Kunststoffen</li>
          <li>Scheiben innen streifenfrei, inklusive Spiegel und Displays</li>
          <li>Türeinstiege, Türfalze und Fußmatten</li>
        </ul>
        <p>
          Für Flecken, Gerüche oder Leder kommen gezielte Extras dazu – mehr dazu weiter unten.
        </p>

        <h2>Unser Ablauf in sieben Schritten</h2>
        <ol>
          <li>
            <strong>Ausräumen und Bestandsaufnahme.</strong> Wir prüfen Materialien, Flecken und Problemstellen,
            bevor das erste Mittel zum Einsatz kommt.
          </li>
          <li>
            <strong>Trockenreinigung.</strong> Druckluft und Pinsel lösen Staub und Krümel aus Lüftung, Nähten und
            Ritzen, damit er beim Saugen nicht verteilt wird.
          </li>
          <li>
            <strong>Saugen von oben nach unten.</strong> Dachhimmel, Sitze, Teppiche, Kofferraum – inklusive der
            Bereiche unter und zwischen den Sitzen.
          </li>
          <li>
            <strong>Kunststoffe und Cockpit.</strong> Materialgerechte Reiniger, weiche Pinsel und Mikrofaser – keine
            glänzenden Silikon-Cockpitsprays, die Staub anziehen und spiegeln.
          </li>
          <li>
            <strong>Polster, Teppiche, Leder</strong> (wenn gebucht). Sprühextraktion für Stoff, pH-neutrale
            Lederreinigung mit anschließender Pflege.
          </li>
          <li>
            <strong>Scheiben.</strong> Innen streifenfrei – besonders wichtig bei tiefstehender Sonne und
            Gegenverkehr.
          </li>
          <li>
            <strong>Abschlusskontrolle.</strong> Bei Tageslicht und mit Lampe, bevor wir das Auto an Sie übergeben.
          </li>
        </ol>

        <h2>Jede Oberfläche braucht ihre eigene Behandlung</h2>
        <h3>Stoffsitze und Teppiche</h3>
        <p>
          Stoff speichert Schmutz, Schweiß und Gerüche in der Tiefe. Oberflächlich sieht er oft sauber aus, beim
          Absaugen mit dem Extraktionsgerät kommt dann graues Wasser heraus. Für eine echte Tiefenreinigung empfehlen
          wir die <Link href="/polsterreinigung-auto">Polster- und Teppichreinigung</Link> ({extraPrice("polster")}).
        </p>
        <h3>Leder</h3>
        <p>
          Leder wird mit der Zeit dunkel und glänzend – nicht, weil es altert, sondern weil sich Hautfett und Schmutz in
          den Poren absetzen. Eine sanfte Reinigung mit weicher Bürste bringt die matte Originaloberfläche zurück, eine
          Pflege danach hält es geschmeidig ({extraPrice("leder")}).
        </p>
        <h3>Alcantara und Mikrofaser</h3>
        <p>
          Alcantara verfilzt, wenn man es zu nass oder zu kräftig reinigt. Wir arbeiten mit wenig Feuchtigkeit und
          speziellen Bürsten, um den Flor wieder aufzurichten.
        </p>
        <h3>Dachhimmel</h3>
        <p>
          Der Himmel ist nur aufgeklebt. Zu viel Feuchtigkeit löst den Kleber, und der Stoff hängt durch. Deshalb
          reinigen wir ihn besonders vorsichtig und mit minimaler Nässe ({extraPrice("himmel")}).
        </p>
        <h3>Displays und Klavierlack</h3>
        <p>
          Glänzende schwarze Zierteile und Touchscreens verkratzen schon durch ein trockenes Tuch. Hier verwenden wir
          ausschließlich weiche, saubere Mikrofaser und geeignete Reiniger.
        </p>

        <h2>Tierhaare: die Königsdisziplin</h2>
        <p>
          Hundehaare verhaken sich in Teppichfasern und Sitzbezügen wie Klettverschluss. Ein normaler Staubsauger
          bekommt die Oberfläche, aber nicht die Haare, die sich tief ins Gewebe gearbeitet haben. Wir lösen sie mit
          Gummibürsten und Druckluft, bevor gesaugt wird. Weil der Aufwand stark schwankt, rechnen
          wir die <strong>Tierhaarentfernung nach Aufwand</strong> ab – mit Fotos per WhatsApp nennen wir Ihnen vorab
          einen Preis.
        </p>

        <h2>Waschstraßen-Sauger oder Profi-Innenreinigung?</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Selbst saugen</th>
                <th scope="col">Innenaufbereitung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sitzschienen, Fugen, Lüftung</td>
                <td>kaum erreichbar</td>
                <td>Druckluft, Pinsel, Fugendüsen</td>
              </tr>
              <tr>
                <td>Kunststoffe</td>
                <td>oft Allzweckreiniger oder Cockpitspray</td>
                <td>materialgerechte Reiniger, matte Optik</td>
              </tr>
              <tr>
                <td>Flecken in Polstern</td>
                <td>werden oft eher verteilt</td>
                <td>Sprühextraktion (Extra)</td>
              </tr>
              <tr>
                <td>Scheiben innen</td>
                <td>häufig Schlieren</td>
                <td>streifenfrei</td>
              </tr>
              <tr>
                <td>Zeitaufwand für Sie</td>
                <td>1–2 Stunden eigene Arbeit</td>
                <td>Abgeben und abholen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Wie oft sollte man den Innenraum reinigen lassen?</h2>
        <p>
          Für ein normal genutztes Alltagsauto empfehlen wir eine professionelle Innenreinigung zwei- bis viermal im
          Jahr – besonders nach dem Winter (Salz, Feuchtigkeit) und nach der Urlaubssaison (Sand, Sonnencreme,
          Essensreste). Familien mit kleinen Kindern oder Hunden kommen eher öfter. Wer sein Auto verkaufen oder zurückgeben
          will, sollte vorher in jedem Fall einen Termin einplanen – siehe{" "}
          <Link href="/leasingrueckgabe-aufbereitung">Leasingrückgabe & Verkauf</Link>.
        </p>
        <p>
          Innen <em>und</em> außen auf einmal? Dann ist die <strong>Komplettaufbereitung</strong> (
          {packagePrice("komplett")}) meist günstiger als zwei einzelne Termine. Einen Überblick über alle Preise gibt
          unser Ratgeber <Link href="/ratgeber/autoaufbereitung-kosten">Was kostet eine Autoaufbereitung?</Link>
        </p>

        <h2>Für Kundinnen und Kunden aus der Region</h2>
        <p>
          Unsere Werkstatt liegt in <Link href="/autoaufbereitung-bodenheim">Bodenheim</Link>, wenige Minuten von{" "}
          <Link href="/autoaufbereitung-mainz">Mainz</Link>, <Link href="/autoaufbereitung-nackenheim">Nackenheim</Link>{" "}
          und <Link href="/autoaufbereitung-gau-bischofsheim">Gau-Bischofsheim</Link> entfernt. Sie geben Ihr Auto ab
          und holen es gereinigt wieder ab.
        </p>
      </ArticleLayout>

      <FaqSection title="Fragen zur Innenreinigung" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Das könnte Sie auch interessieren"
        paths={[
          "/polsterreinigung-auto",
          "/geruchsentfernung-auto",
          "/leasingrueckgabe-aufbereitung",
          "/autoaufbereitung-gau-bischofsheim",
          "/autoaufbereitung-mainz",
          "/ratgeber/autoaufbereitung-kosten",
        ]}
      />

      <CTASection
        title={
          <>
            Innen wieder <span className="text-shine">wie neu?</span>
          </>
        }
        text="Schicken Sie uns zwei, drei Fotos vom Innenraum per WhatsApp – wir sagen Ihnen, was es kostet und wann Sie das Auto bringen können."
      />
    </>
  );
}
