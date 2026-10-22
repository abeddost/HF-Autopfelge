// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen (Reinigungsverfahren, Umgang mit Hybrid/E-Autos).
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

const path = "/motorraumreinigung";
const description = `Motorwäsche ohne Hochdruck: schonende Motorraumreinigung mit abgedeckter Elektronik, Pinsel und wenig Wasser. ${extraPrice("motorraum")} bei HF Autopflege in Bodenheim bei Mainz.`;

export const metadata = pageMetadata({
  path,
  title: "Motorwäsche & Motorraumreinigung bei Mainz | HF Autopflege",
  description,
});

const whatsappText = "Hallo HF Autopflege, ich interessiere mich für eine Motorraumreinigung. Fahrzeug/Motor: ";

const gruende = [
  ["Verkauf", "Ein sauberer Motorraum zeigt Käufern, dass das Auto gepflegt wurde – und erleichtert die Prüfung."],
  ["Lecks finden", "Auf einem sauberen Motor sieht man frische Öl- oder Kühlmittelspuren sofort."],
  ["Laub & Schmutz", "Blätter in der Wasserkastenmulde unter der Frontscheibe verstopfen Abläufe – Wasser kann in den Innenraum laufen."],
  ["Nach dem Marder", "Nach einem Marderbesuch liegen oft Reste von Dämmmatten und Duftmarken herum, die weitere Tiere anlocken können."],
] as const;

const faqs = [
  {
    q: "Ist eine Motorwäsche schädlich für den Motor?",
    a: "Eine Motorwäsche mit Hochdruckreiniger kann schaden: Wasser wird in Steckverbindungen, Sensoren, Lichtmaschine und Steuergeräte gedrückt, und Korrosion oder Fehlermeldungen sind die Folge. Eine schonende Reinigung mit Pinsel, passendem Reiniger und wenig Wasser bei abgedeckter Elektronik ist dagegen unproblematisch.",
  },
  {
    q: "Darf ich meinen Motor zu Hause waschen?",
    a: "Davon raten wir ab. Beim Reinigen lösen sich Öl- und Kraftstoffreste, die nicht ins Abwasser oder ins Erdreich gelangen dürfen. Vielerorts ist eine Motorwäsche außerhalb dafür vorgesehener Waschplätze nicht erlaubt.",
  },
  {
    q: "Reinigen Sie auch den Motorraum von Hybrid- und Elektroautos?",
    a: "Ja, aber besonders vorsichtig: Hochvoltkomponenten und orangefarbene Leitungen werden nicht nass gereinigt, sondern nur trocken bzw. mit leicht feuchten Tüchern. Sprechen Sie uns bei Ihrem Termin bitte darauf an.",
  },
  {
    q: "Wird der Motor danach glänzend eingesprüht?",
    a: "Nein. Wir reinigen gründlich und pflegen Kunststoffe und Gummis mit einem matten Mittel. Ein künstlich glänzender Motorraum sieht zwar spektakulär aus, zieht aber Staub an – und weckt beim Autokauf eher Misstrauen, weil er Lecks verdecken kann.",
  },
  {
    q: "Was kostet eine Motorraumreinigung?",
    a: `Bei uns ${extraPrice("motorraum")}. Sie lässt sich mit jedem Paket kombinieren – besonders sinnvoll mit der Aufbereitung vor Verkauf oder Leasingrückgabe (${packagePrice("leasing")}).`,
  },
];

export default function MotorraumPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Motorraumreinigung",
          description,
          path,
          serviceType: "Motorwäsche",
          minPrice: extras.find((e) => e.id === "motorraum")!.price,
        })}
      />
      <PageHero
        eyebrow="Motorraumreinigung"
        title={
          <>
            Motorwäsche – <span className="text-shine">ohne Hochdruck</span> auf der Elektronik.
          </>
        }
        intro="Ein sauberer Motorraum zeigt Pflege, macht Lecks sichtbar und erleichtert die Wartung. Wir reinigen ihn schonend: Elektronik abgedeckt, Schmutz mit Pinsel und Reiniger gelöst, wenig Wasser."
        video={videos.detailing}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Termin anfragen" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Motorraumreinigung", path },
        ]}
      />

      <ArticleLayout
        aside={
          <QuickFacts
            title="Motorraumreinigung"
            facts={[
              ["Preis", extraPrice("motorraum")],
              ["Verfahren", "schonend, kein Hochdruck"],
              ["Kombinierbar mit", "jedem Paket"],
            ]}
            whatsappText={whatsappText}
          >
            Bitte bringen Sie das Auto mit möglichst kaltem Motor – oder planen Sie etwas Wartezeit ein, bis er
            abgekühlt ist.
          </QuickFacts>
        }
      >
        <h2>Warum Hochdruck im Motorraum eine schlechte Idee ist</h2>
        <p>
          Viele kennen es von der SB-Waschanlage: Motorhaube auf, Hochdrucklanze drauf, fertig. Bei älteren Motoren mit
          wenig Elektronik ging das oft gut. Moderne Motorräume sind dagegen voller Sensoren, Steckverbindungen,
          Steuergeräte und Kabelbäume. Die Dichtungen dieser Bauteile sind für Spritzwasser ausgelegt – nicht für einen
          Wasserstrahl mit hohem Druck aus wenigen Zentimetern Entfernung.
        </p>
        <p>
          Die Folgen zeigen sich manchmal sofort, manchmal erst Wochen später: Fehlermeldungen im Cockpit, ein Motor, der
          unrund läuft, oder Korrosion in Steckern, die irgendwann Kontaktprobleme verursacht. Die Reparatur ist dann
          deutlich teurer als jede Motorwäsche.
        </p>

        <h2>So reinigen wir den Motorraum</h2>
        <ol>
          <li>
            <strong>Motor abkühlen lassen.</strong> Reiniger auf heißen Bauteilen trocknen sofort an und hinterlassen
            Flecken.
          </li>
          <li>
            <strong>Empfindliches abdecken.</strong> Lichtmaschine, Sicherungskasten, Luftansaugung, offene Stecker und
            – bei Hybrid- und Elektroautos – Hochvoltkomponenten.
          </li>
          <li>
            <strong>Trocken vorreinigen.</strong> Laub, Nadeln und loser Schmutz kommen aus Wasserkasten und Ecken,
            Staub wird mit Druckluft ausgeblasen.
          </li>
          <li>
            <strong>Reiniger und Pinsel.</strong> Ein materialschonender Motorraumreiniger löst Öl- und Fettfilme, weiche
            Pinsel arbeiten ihn in Ritzen und Rippen ein.
          </li>
          <li>
            <strong>Wenig Wasser, kein Druck.</strong> Gelöster Schmutz wird mit wenig Wasser bzw. mit Tüchern
            aufgenommen statt weggespritzt.
          </li>
          <li>
            <strong>Trocknen.</strong> Druckluft treibt Restwasser aus Ecken und Steckerbereichen.
          </li>
          <li>
            <strong>Matte Pflege.</strong> Kunststoffe und Gummis bekommen eine Pflege, die schützt, aber nicht
            glänzt.
          </li>
        </ol>

        <h2>Motorwäsche vor dem Autoverkauf: ehrlich statt geschönt</h2>
        <p>
          Ein sauberer Motorraum macht bei der Besichtigung einen guten Eindruck – aber Käufer werden misstrauisch, wenn
          er frisch eingesprüht wie neu glänzt. Der Verdacht liegt nahe, dass Öllecks versteckt werden sollen. Wir
          reinigen deshalb gründlich und ehrlich: Der Motor sieht gepflegt aus, und wenn irgendwo etwas undicht ist,
          sieht man es danach sogar besser. Das schafft Vertrauen.
        </p>
        <p>
          Für den Verkauf lässt sich die Motorraumreinigung gut mit der{" "}
          <Link href="/leasingrueckgabe-aufbereitung">Aufbereitung vor Verkauf und Leasingrückgabe</Link> und einer{" "}
          <Link href="/scheinwerfer-aufbereiten">Scheinwerferaufbereitung</Link> kombinieren.
        </p>

        <h2>Wann eine Motorraumreinigung nichts bringt</h2>
        <p>
          Wenn Ihr Motor deutlich Öl verliert, ist eine Reinigung nur der erste Schritt: Sie macht das Leck sichtbar,
          behebt es aber nicht. Lassen Sie es in einer Kfz-Werkstatt prüfen. Ebenso ersetzen wir keine Marderabwehr –
          nach der Reinigung lohnt es sich aber, angefressene Schläuche und Kabel von einer Werkstatt kontrollieren zu
          lassen.
        </p>
        <p>
          Unsere Werkstatt liegt in <Link href="/autoaufbereitung-bodenheim">Bodenheim</Link> – erreichbar aus{" "}
          <Link href="/autoaufbereitung-mainz">Mainz</Link>,{" "}
          <Link href="/autoaufbereitung-mainz-laubenheim">Laubenheim</Link> und der ganzen Umgebung. Alle Preise finden Sie
          in der <Link href="/preise">Preisübersicht</Link>.
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="gruende">
        <div className="container-lux">
          <SectionHeading eyebrow="Wann es sich lohnt" title={<span id="gruende">Vier gute Gründe für einen sauberen Motorraum.</span>} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gruende.map(([titel, text], i) => (
              <Reveal as="li" key={titel} delay={i * 100} className="hairline rounded-3xl bg-ink/40 p-7">
                <p className="font-display text-xl text-snow">{titel}</p>
                <p className="mt-3 leading-relaxed text-mist">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection title="Fragen zur Motorwäsche" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Passend dazu"
        paths={[
          "/leasingrueckgabe-aufbereitung",
          "/scheinwerfer-aufbereiten",
          "/autoaufbereitung-mainz-laubenheim",
          "/lackaufbereitung-politur",
          "/ratgeber/autoaufbereitung-kosten",
          "/autoaufbereitung-bodenheim",
        ]}
      />

      <CTASection
        title={
          <>
            Auch unter der Haube <span className="text-shine">gepflegt.</span>
          </>
        }
        text="Rufen Sie an oder schreiben Sie uns per WhatsApp – wir kombinieren die Motorraumreinigung gern mit Ihrem nächsten Termin."
      />
    </>
  );
}
