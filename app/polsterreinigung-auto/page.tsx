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
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { extraPrice, extras, packagePrice } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/polsterreinigung-auto";
const description = `Autositze reinigen lassen: Polster- und Teppichreinigung per Sprühextraktion ${extraPrice("polster")}, Lederreinigung & -pflege ${extraPrice("leder")}. HF Autopflege in Bodenheim bei Mainz.`;

export const metadata = pageMetadata({
  path,
  title: "Autositze reinigen – Polster & Leder | HF Autopflege",
  description,
});

const whatsappText = "Hallo HF Autopflege, ich möchte meine Autositze reinigen lassen (Stoff/Leder). Foto vom Fleck folgt: ";

const flecken = [
  ["Kaffee & Cola", "gut, wenn frisch", "Zucker verklebt die Fasern; je älter, desto eher bleibt ein Rand."],
  ["Rotwein & Saft", "meist gut", "Farbstoffe – niemals mit heißem Wasser oder Salz behandeln."],
  ["Milch & Erbrochenes", "gut, aber eilig", "Eiweiß zersetzt sich und riecht; oft mit Ozonbehandlung kombiniert."],
  ["Schweiß- und Wasserränder", "gut", "Entstehen durch Salze im Polster; verschwinden mit flächiger Extraktion."],
  ["Fett, Make-up, Sonnencreme", "mittel", "Brauchen fettlösende Vorbehandlung, sonst nur verteilt."],
  ["Kugelschreiber, Edding", "schwierig", "Lösemittelbasierte Farbe – Ergebnis hängt stark vom Stoff ab."],
  ["Kaugummi", "gut", "Wird vereist und mechanisch gelöst, Rückstände danach extrahiert."],
] as const;

const faqs = [
  {
    q: "Wie lange müssen die Sitze nach der Polsterreinigung trocknen?",
    a: "Das hängt von Stoff, Temperatur und Luftfeuchtigkeit ab – meist einige Stunden. Bei der Sprühextraktion wird der Großteil der Feuchtigkeit sofort wieder abgesaugt. Wir geben das Auto zurück, wenn die Polster weitgehend trocken sind; lassen Sie in den ersten Stunden die Fenster einen Spalt offen.",
  },
  {
    q: "Geht jeder Fleck raus?",
    a: "Nein, und das sagen wir vorher. Frische Flecken aus Getränken und Lebensmitteln gehen fast immer raus. Alte, mehrfach behandelte Flecken oder Farbstoffe wie Kugelschreiber können einen Schatten hinterlassen. Mit einem Foto per WhatsApp können wir Ihnen vorab eine ehrliche Einschätzung geben.",
  },
  {
    q: "Wie oft sollte man Autoleder pflegen?",
    a: "Bei normaler Nutzung reicht eine gründliche Reinigung mit anschließender Pflege ein- bis zweimal im Jahr. Helles Leder und der Fahrersitz brauchen sie oft häufiger, weil sich dort Jeansabrieb und Hautfett sammeln.",
  },
  {
    q: "Mein Ledersitz hat Risse. Können Sie die reparieren?",
    a: "Nein, Lederreparatur und Nachfärben bieten wir nicht an. Reinigung und Pflege verhindern aber, dass Leder austrocknet und rissig wird. Bei bestehenden Rissen empfehlen wir einen Sattler oder Lederreparatur-Spezialisten.",
  },
  {
    q: "Was kostet die Reinigung der Autositze?",
    a: `Polster- oder Teppichreinigung kostet ${extraPrice("polster")}, Lederreinigung und -pflege ${extraPrice("leder")}. Beides lässt sich mit der Innenaufbereitung (${packagePrice("innen")}) kombinieren.`,
  },
];

export default function PolsterreinigungPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Polster- und Lederreinigung für Autos",
          description,
          path,
          serviceType: "Polsterreinigung",
          minPrice: extras.find((e) => e.id === "polster")!.price,
        })}
      />
      <PageHero
        eyebrow="Polster · Teppich · Leder"
        title={
          <>
            Autositze reinigen lassen – <span className="text-shine">Stoff und Leder</span>.
          </>
        }
        intro="Kaffeeflecken, Wasserränder, speckiges Leder: Wir reinigen Polster und Teppiche per Sprühextraktion in der Tiefe und pflegen Leder so, dass es wieder matt und geschmeidig ist."
        video={videos.innenraum}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Foto vom Fleck schicken" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Polster- & Lederreinigung", path },
        ]}
      />

      <ArticleLayout
        aside={
          <QuickFacts
            title="Preise"
            facts={[
              ["Polster- oder Teppichreinigung", extraPrice("polster")],
              ["Lederreinigung & -pflege", extraPrice("leder")],
              ["Himmelreinigung", extraPrice("himmel")],
              ["Ozon gegen Gerüche", extraPrice("ozon")],
              ["mit Innenaufbereitung", packagePrice("innen")],
            ]}
            whatsappText={whatsappText}
          />
        }
      >
        <h2>Warum normale Reinigung bei Polstern nicht reicht</h2>
        <p>
          Ein Autositz ist kein Sofa. Unter dem Bezugsstoff liegt ein dicker Schaumstoffkern, der Feuchtigkeit,
          Schweiß und verschüttete Getränke aufsaugt wie ein Schwamm. Was oben getrocknet ist, steckt unten noch drin –
          und wandert beim nächsten feuchten Wetter wieder nach oben. Deshalb tauchen Flecken nach dem „Wegreiben“ oft
          wieder auf, meist mit einem hellen Rand drumherum.
        </p>
        <p>
          Wer mit Polsterschaum aus dem Baumarkt arbeitet, löst den Schmutz zwar an, kann ihn aber nicht absaugen. Er
          wird verteilt und trocknet in einem größeren Kreis wieder ein.
        </p>

        <h2>So funktioniert die Sprühextraktion</h2>
        <p>
          Bei der Sprühextraktion wird eine Reinigungslösung unter Druck in das Gewebe gesprüht und im selben Arbeitsgang
          mit starkem Unterdruck wieder abgesaugt – zusammen mit dem gelösten Schmutz. So erreicht man die tieferen
          Schichten, ohne den Sitz zu durchnässen.
        </p>
        <ol>
          <li>
            <strong>Trocken vorreinigen:</strong> gründlich saugen und bürsten, damit kein loser Schmutz zu Schlamm wird.
          </li>
          <li>
            <strong>Flecken vorbehandeln:</strong> je nach Art mit eiweiß-, fett- oder farbstofflösenden Mitteln.
          </li>
          <li>
            <strong>Flächig extrahieren:</strong> immer die ganze Sitzfläche, nicht nur den Fleck – sonst entstehen
            Ränder.
          </li>
          <li>
            <strong>Klar nachspülen:</strong> damit keine Reinigerreste im Stoff bleiben, die neuen Schmutz anziehen.
          </li>
          <li>
            <strong>Trocknen:</strong> mit Luftbewegung und offenem Auto, bis die Polster weitgehend trocken sind.
          </li>
        </ol>
        <p>
          Das gleiche Verfahren nutzen wir für Teppiche, Fußmatten und den Kofferraumboden – gerade nach dem Winter
          oder einem Umzug sinnvoll. Wenn Sie den ganzen Innenraum reinigen lassen wollen, lesen Sie auch unsere Seite
          zur <Link href="/auto-innenreinigung">Auto-Innenreinigung</Link>.
        </p>

        <h2>Lederreinigung: matt ist das neue Sauber</h2>
        <p>
          Viele halten glänzendes Leder für gepflegt. Tatsächlich ist der Glanz meist ein Film aus Hautfett, Schmutz und
          alten Pflegemitteln. Original-Autoleder ist fast immer matt bis seidenmatt. Nach einer gründlichen Reinigung
          sehen Sitze deshalb oft heller und „trockener“ aus – das ist ein gutes Zeichen.
        </p>
        <h3>Welches Leder haben Sie?</h3>
        <ul>
          <li>
            <strong>Pigmentiertes (beschichtetes) Glattleder</strong> – der Großteil aller Autositze. Robust, mit einer
            Farbschicht geschützt. Reinigung mit pH-neutralem Lederreiniger und weicher Bürste.
          </li>
          <li>
            <strong>Nappa und Semi-Anilin</strong> – weicher, mit dünnerer Schutzschicht. Braucht besonders milde
            Reiniger und wenig Druck.
          </li>
          <li>
            <strong>Rauleder (Nubuk, Velours)</strong> – nimmt Flüssigkeit sofort auf und fleckt leicht. Wird
            überwiegend trocken gereinigt.
          </li>
          <li>
            <strong>Kunstleder</strong> – pflegeleicht, aber Weichmacher verdunsten mit der Zeit. Reinigen ja, fetten
            nein.
          </li>
        </ul>
        <p>
          Nach der Reinigung tragen wir eine Lederpflege auf, die das Material geschmeidig hält und vor UV-Strahlung und
          Abrieb schützt. Lederreinigung und -pflege: <strong>{extraPrice("leder")}</strong>.
        </p>

        <h2>Wenn der Geruch bleibt</h2>
        <p>
          Manche Flecken sind sauber, riechen aber weiter – typisch nach Milch, Erbrochenem oder Tierunfällen. Der
          Geruch kommt dann aus dem Schaumstoff unter dem Bezug. In solchen Fällen kombinieren wir Polsterreinigung mit
          einer <Link href="/geruchsentfernung-auto">Ozonbehandlung</Link> ({extraPrice("ozon")}).
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="flecken">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Fleckenkunde"
            title={<span id="flecken">Welche Flecken wie gut rausgehen.</span>}
            intro="Unsere Erfahrungswerte für Stoffsitze. Je frischer der Fleck und je weniger mit Hausmitteln behandelt, desto besser."
          />
          <Reveal className="prose-lux mt-12 !max-w-none">
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Fleck</th>
                    <th scope="col">Chancen</th>
                    <th scope="col">Worauf es ankommt</th>
                  </tr>
                </thead>
                <tbody>
                  {flecken.map(([fleck, chance, hinweis]) => (
                    <tr key={fleck}>
                      <td>
                        <strong>{fleck}</strong>
                      </td>
                      <td className="whitespace-nowrap">{chance}</td>
                      <td>{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection title="Fragen zur Polster- und Lederreinigung" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Passend dazu"
        paths={[
          "/auto-innenreinigung",
          "/geruchsentfernung-auto",
          "/autoaufbereitung-gau-bischofsheim",
          "/autoaufbereitung-ingelheim",
          "/leasingrueckgabe-aufbereitung",
          "/autoaufbereitung-bodenheim",
        ]}
      />

      <CTASection
        title={
          <>
            Fleck im Sitz? <span className="text-shine">Foto genügt.</span>
          </>
        }
        text="Schicken Sie uns ein Foto per WhatsApp – wir sagen Ihnen ehrlich, wie gut er rausgeht und was es kostet."
      />
    </>
  );
}
