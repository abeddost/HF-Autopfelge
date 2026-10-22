// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen (verwendetes Produkt, Aushärtezeit, Pflegehinweise).
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
import { extraPrice, packagePrice, packages } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/keramikversiegelung";
const description = `Keramikversiegelung fürs Auto in Bodenheim bei Mainz: mit Wäsche, Dekontamination und Politur als Vorbereitung. Langanhaltender Lackschutz ${packagePrice("keramik")}.`;

export const metadata = pageMetadata({
  path,
  title: "Keramikversiegelung Auto – Mainz & Bodenheim | HF Autopflege",
  description,
});

const whatsappText = "Hallo HF Autopflege, ich interessiere mich für eine Keramikversiegelung. Fahrzeug, Baujahr und Farbe: ";

const lohntSich = [
  "Neuwagen oder junge Gebrauchte, deren Lack noch in gutem Zustand ist",
  "Autos, die draußen stehen – unter Bäumen, an der Straße, ohne Garage",
  "Dunkle Lacke, bei denen jede Verschmutzung sofort sichtbar ist",
  "Wer sein Auto viele Jahre fahren will",
  "Wer Wert auf einfache Pflege legt und selbst von Hand wäscht",
];

const lohntNicht = [
  "Leasingfahrzeuge mit kurzer Restlaufzeit – hier reicht meist eine Lackversiegelung",
  "Autos, die weiterhin regelmäßig durch die Bürstenwaschanlage fahren",
  "Stark beschädigter Lack mit Steinschlägen und tiefen Kratzern – zuerst Lackierer",
  "Wer einen ‚Kratzschutz‘ erwartet – den bietet keine Versiegelung",
];

const faqs = [
  {
    q: "Wie lange hält eine Keramikversiegelung?",
    a: "Das hängt stark vom Produkt, von der Vorbereitung und von der Pflege ab. Hochwertige Beschichtungen halten bei richtiger Pflege mehrere Jahre, deutlich länger als Wachs oder klassische Lackversiegelungen. Häufiges Waschen in Bürstenanlagen oder aggressive Reiniger verkürzen die Lebensdauer. Wir sagen Ihnen bei der Beratung, welches Produkt wir verwenden und was realistisch ist.",
  },
  {
    q: "Ist mein Auto nach der Keramikversiegelung kratzfest?",
    a: "Nein. Die Beschichtung ist härter als normaler Klarlack und macht ihn etwas widerstandsfähiger gegen feine Waschkratzer – gegen Schlüssel, Äste oder Steinschläge schützt sie nicht. Angaben wie „9H“ beziehen sich auf einen Bleistift-Härtetest der Beschichtung, nicht auf Kratzfestigkeit des ganzen Lacks.",
  },
  {
    q: "Wann darf ich das Auto nach der Versiegelung waschen?",
    a: "Die Beschichtung muss erst aushärten. In den ersten Tagen sollte das Auto möglichst trocken bleiben und gar nicht gewaschen werden. Genaue Zeiten hängen vom Produkt ab – Sie bekommen von uns Pflegehinweise mit.",
  },
  {
    q: "Wie lange bleibt mein Auto bei Ihnen?",
    a: "Rechnen Sie mit mehr als einem Tag, weil Wäsche, Dekontamination, Politur, Auftrag und erste Aushärtung Zeit brauchen. Den genauen Zeitrahmen nennen wir Ihnen nach Besichtigung oder Fotos.",
  },
  {
    q: "Kann man auch Felgen und Scheiben keramisch versiegeln?",
    a: `Ja, Felgen und Scheiben lassen sich zusätzlich versiegeln. Felgen bleiben dann länger sauber, weil Bremsstaub schlechter haftet; auf der Frontscheibe perlt Regen besser ab (Scheibenversiegelung ${extraPrice("scheibe")}). Sprechen Sie uns an.`,
  },
];

export default function KeramikversiegelungPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Keramikversiegelung",
          description,
          path,
          serviceType: "Keramikversiegelung",
          minPrice: packages.find((p) => p.id === "keramik")!.price,
        })}
      />
      <PageHero
        eyebrow="Lackschutz"
        title={
          <>
            Keramikversiegelung – <span className="text-shine">Schutz, der bleibt</span>.
          </>
        }
        intro="Eine Keramikversiegelung legt eine harte, glasartige Schutzschicht auf Ihren Lack. Damit sie hält, was sie verspricht, beginnt sie bei uns mit Wäsche, Dekontamination und Politur."
        video={videos.politur}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Beratung anfragen" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Keramikversiegelung", path },
        ]}
      />

      <ArticleLayout
        aside={
          <QuickFacts
            title="Keramikversiegelung"
            facts={[
              ["Paketpreis", packagePrice("keramik")],
              ["Inklusive", "Wäsche, Dekontamination, Politur"],
              ["Dauer", "mehr als ein Tag"],
              ["Scheibenversiegelung", extraPrice("scheibe")],
            ]}
            whatsappText={whatsappText}
          >
            Der Preis richtet sich nach Fahrzeuggröße und Lackzustand – je mehr Politur nötig ist, desto höher der
            Aufwand.
          </QuickFacts>
        }
      >
        <h2>Was ist eine Keramikversiegelung?</h2>
        <p>
          Eine Keramikversiegelung (auch Keramikbeschichtung oder „Ceramic Coating“) ist eine flüssige Beschichtung auf
          Basis von Siliziumdioxid und verwandten Verbindungen. Sie wird hauchdünn auf den Lack aufgetragen, reagiert
          mit der Luftfeuchtigkeit und härtet zu einer glasartigen Schicht aus, die sich fest mit dem Klarlack
          verbindet.
        </p>
        <p>
          Anders als Wachs, das nur auf dem Lack liegt und sich mit jeder Wäsche etwas abträgt, bildet die Keramik eine
          eigene, deutlich widerstandsfähigere Schicht. Das Ergebnis: ein tiefer, glasiger Glanz, Wasser perlt in
          kleinen Tropfen ab, und Schmutz haftet schlechter.
        </p>

        <h2>Was sie kann – und was nicht</h2>
        <h3>Das kann eine Keramikversiegelung</h3>
        <ul>
          <li>
            <strong>Schmutz abweisen:</strong> Staub, Pollen und Straßenschmutz haften schlechter, das Auto bleibt
            länger sauber und ist leichter zu waschen.
          </li>
          <li>
            <strong>Vor Umwelteinflüssen schützen:</strong> Vogelkot, Baumharz und Insekten ätzen sich weniger schnell
            in den Lack ein – Zeit, sie zu entfernen, bleibt trotzdem nötig.
          </li>
          <li>
            <strong>UV-Schutz:</strong> Die Schicht verlangsamt das Ausbleichen, besonders bei roten und dunklen Lacken.
          </li>
          <li>
            <strong>Glanz konservieren:</strong> Ein frisch polierter Lack bleibt länger so, wie er aus der Werkstatt
            kommt.
          </li>
        </ul>
        <h3>Das kann sie nicht</h3>
        <ul>
          <li>
            <strong>Kratzer verhindern:</strong> Steinschläge, Schlüsselkratzer und Parkrempler gehen durch jede
            Versiegelung.
          </li>
          <li>
            <strong>Kratzer verstecken:</strong> Was darunter ist, bleibt sichtbar – oft sogar deutlicher, weil der
            Glanz steigt.
          </li>
          <li>
            <strong>Pflege ersetzen:</strong> Auch ein keramisch versiegeltes Auto muss gewaschen werden – nur
            einfacher.
          </li>
        </ul>

        <h2>Warum die Vorbereitung über das Ergebnis entscheidet</h2>
        <p>
          Die Keramik versiegelt den Zustand, den der Lack in dem Moment hat. Swirls, Hologramme und Wasserflecken, die
          vorher nicht entfernt werden, sind danach eingeschlossen – für Jahre. Deshalb ist die{" "}
          <Link href="/lackaufbereitung-politur">Lackpolitur</Link> bei uns fester Bestandteil der Keramikversiegelung,
          nicht ein optionales Extra.
        </p>
        <ol>
          <li>
            <strong>Handwäsche</strong> mit pH-neutralem Shampoo, Felgen und Radkästen.
          </li>
          <li>
            <strong>Chemische Dekontamination</strong> gegen Flugrost und Teer.
          </li>
          <li>
            <strong>Mechanische Dekontamination</strong> mit Knete, bis sich der Lack glatt wie Glas anfühlt.
          </li>
          <li>
            <strong>Politur</strong> – so intensiv, wie der Zustand es erfordert.
          </li>
          <li>
            <strong>Entfetten</strong> aller Flächen, damit keine Polierölreste die Bindung stören.
          </li>
          <li>
            <strong>Auftrag</strong> der Beschichtung Bauteil für Bauteil, kontrolliertes Abnehmen der Rückstände.
          </li>
          <li>
            <strong>Aushärtung</strong> in der Werkstatt, geschützt vor Regen und Staub.
          </li>
        </ol>

        <h2>Die Pflege danach</h2>
        <p>
          Eine Keramikversiegelung ist pflegeleicht, aber nicht pflegefrei. So holen Sie das meiste heraus:
        </p>
        <ul>
          <li>In den ersten Tagen nach dem Termin nicht waschen und möglichst nicht im Regen parken.</li>
          <li>Von Hand oder in textilen Waschanlagen waschen – Bürstenanlagen verkürzen die Lebensdauer.</li>
          <li>pH-neutrales Shampoo verwenden, keine aggressiven Felgen- oder Insektenreiniger auf dem Lack.</li>
          <li>
            Regelmäßig waschen: Schmutz, der lange liegt, bildet eine Schicht, die den Abperleffekt überdeckt.
          </li>
        </ul>
        <p>
          Sie schwanken noch zwischen Wachs, klassischer Lackversiegelung und Keramik? Unser Ratgeber{" "}
          <Link href="/ratgeber/keramikversiegelung-oder-wachs">Keramikversiegelung oder Wachs?</Link> vergleicht alle
          drei ehrlich – inklusive der Frage, was sich auf Dauer rechnet.
        </p>

        <h2>Keramikversiegelung für Mainz, Wiesbaden und Rheinhessen</h2>
        <p>
          Unsere Werkstatt liegt in <Link href="/autoaufbereitung-bodenheim">Bodenheim</Link>, wenige Minuten südlich
          von <Link href="/autoaufbereitung-mainz">Mainz</Link>. Auch aus{" "}
          <Link href="/autoaufbereitung-wiesbaden">Wiesbaden</Link> oder{" "}
          <Link href="/autoaufbereitung-ruesselsheim">Rüsselsheim</Link> sind Sie über die A60 schnell bei uns – bei
          einer Arbeit, die Jahre halten soll, lohnt sich der Weg.
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="fuer-wen">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Ehrliche Beratung"
            title={<span id="fuer-wen">Für wen sich Keramik lohnt – und für wen nicht.</span>}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal className="hairline rounded-3xl bg-ink/40 p-8">
              <p className="font-display text-xl text-snow">Lohnt sich besonders für</p>
              <ul className="prose-lux mt-5">
                {lohntSich.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="hairline rounded-3xl bg-ink/40 p-8" delay={120}>
              <p className="font-display text-xl text-snow">Eher nicht, wenn</p>
              <ul className="prose-lux mt-5">
                {lohntNicht.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection title="Fragen zur Keramikversiegelung" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Passend dazu"
        paths={[
          "/ratgeber/keramikversiegelung-oder-wachs",
          "/lackaufbereitung-politur",
          "/autoaufbereitung-wiesbaden",
          "/autoaufbereitung-mainz",
          "/scheinwerfer-aufbereiten",
          "/ratgeber/autoaufbereitung-kosten",
        ]}
      />

      <CTASection
        title={
          <>
            Lack schützen – <span className="text-shine">richtig vorbereitet.</span>
          </>
        }
        text="Schicken Sie uns Fotos Ihres Lacks bei Tageslicht – wir sagen Ihnen, wie viel Politur vorab nötig ist und was die Keramikversiegelung kostet."
      />
    </>
  );
}
