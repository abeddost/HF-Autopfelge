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
import SheenCard from "@/components/SheenCard";
import { extraPrice, extras } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/scheinwerfer-aufbereiten";
const description = `Vergilbte Scheinwerfer aufbereiten lassen: schleifen, polieren, mit UV-Schutz versiegeln – für klare Gläser und besseres Licht. ${extraPrice("scheinwerfer")} pro Paar, bei Mainz.`;

export const metadata = pageMetadata({
  path,
  title: "Scheinwerfer aufbereiten lassen – vergilbt? | HF Autopflege",
  description,
});

const whatsappText = "Hallo HF Autopflege, meine Scheinwerfer sind vergilbt/matt. Ich schicke Ihnen ein Foto. Fahrzeug: ";

const hausmittel = [
  {
    mittel: "Zahnpasta",
    urteil: "kurzfristig klarer, danach schlimmer",
    text: "Die Schleifkörper tragen die vergilbte Schicht ein Stück ab – aber auch den restlichen UV-Schutz. Ohne neue Versiegelung vergilbt der Scheinwerfer danach schneller.",
  },
  {
    mittel: "Backpulver, Essig, Spülmittel",
    urteil: "kaum Wirkung",
    text: "Reinigt die Oberfläche, erreicht aber die verwitterte Kunststoffschicht nicht.",
  },
  {
    mittel: "Baumarkt-Set",
    urteil: "kann klappen, braucht Übung",
    text: "Mit Schleifpapier, Politur und Versiegelung grundsätzlich der richtige Weg. Häufige Fehler: zu grob geschliffen, Lack daneben angeschliffen, Versiegelung vergessen.",
  },
];

const faqs = [
  {
    q: "Warum werden Scheinwerfer gelb?",
    a: "Moderne Scheinwerfergläser bestehen aus Polycarbonat, einem Kunststoff, der ab Werk mit einer UV-Schutzschicht überzogen ist. Sonne, Hitze, Steinschlag und Waschanlagen bauen diese Schicht über die Jahre ab. Danach verwittert der Kunststoff selbst – er wird gelblich, matt und rau.",
  },
  {
    q: "Wie lange hält eine Scheinwerferaufbereitung?",
    a: "Das hängt davon ab, wie das Auto steht und wie viel Sonne es abbekommt. Entscheidend ist, dass nach dem Polieren eine neue UV-Schutzschicht aufgetragen wird – ohne sie vergilbt der Kunststoff schnell wieder. Garagenautos halten deutlich länger als Laternenparker.",
  },
  {
    q: "Kommen vergilbte Scheinwerfer beim TÜV durch?",
    a: "Stark getrübte Scheinwerfer, die die Lichtverteilung beeinträchtigen, können bei der Hauptuntersuchung bemängelt werden. Ob das bei Ihrem Fahrzeug der Fall ist, entscheidet der Prüfer. Mit aufbereiteten, klaren Gläsern sind Sie auf der sicheren Seite – die Scheinwerfereinstellung sollte dann zusätzlich passen.",
  },
  {
    q: "Mein Scheinwerfer ist von innen beschlagen oder matt. Hilft die Aufbereitung?",
    a: "Nein, wir bearbeiten die Außenseite des Glases. Beschlag, Feuchtigkeit oder ein matter Reflektor im Inneren deuten auf eine undichte Stelle oder einen Defekt hin – das ist ein Fall für die Werkstatt.",
  },
  {
    q: "Was kostet die Scheinwerferaufbereitung?",
    a: `Bei uns ${extraPrice("scheinwerfer")} für ein Paar. Im Vergleich zu neuen Scheinwerfern, die bei vielen Modellen mehrere hundert Euro pro Seite kosten, ist das in den meisten Fällen die deutlich günstigere Lösung.`,
  },
];

export default function ScheinwerferPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Scheinwerferaufbereitung",
          description,
          path,
          serviceType: "Scheinwerferaufbereitung",
          minPrice: extras.find((e) => e.id === "scheinwerfer")!.price,
        })}
      />
      <PageHero
        eyebrow="Scheinwerferaufbereitung"
        title={
          <>
            Vergilbte Scheinwerfer? <span className="text-shine">Wieder klar.</span>
          </>
        }
        intro="Milchige, gelbe Scheinwerfer lassen ein Auto alt aussehen – und schlucken Licht. Wir schleifen die verwitterte Schicht ab, polieren das Glas klar und versiegeln es mit neuem UV-Schutz."
        video={videos.scheinwerfer}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Foto schicken" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Scheinwerfer aufbereiten", path },
        ]}
      />

      <ArticleLayout
        aside={
          <QuickFacts
            title="Scheinwerferaufbereitung"
            facts={[
              ["Preis (Paar)", extraPrice("scheinwerfer")],
              ["Bearbeitung", "Außenseite des Glases"],
              ["Abschluss", "neue UV-Schutzschicht"],
              ["Kombinierbar mit", "jedem Paket"],
            ]}
            whatsappText={whatsappText}
          >
            Schicken Sie uns ein Foto aus etwa einem Meter Entfernung – dann können wir den Zustand gut einschätzen.
          </QuickFacts>
        }
      >
        <h2>Warum Scheinwerfer vergilben</h2>
        <p>
          Früher waren Scheinwerfer aus Glas. Heute bestehen fast alle Scheinwerferabdeckungen aus Polycarbonat – einem
          leichten, bruchfesten Kunststoff, der sich frei formen lässt. Sein Nachteil: Er ist empfindlich gegen
          UV-Strahlung. Deshalb bekommt er ab Werk eine dünne, harte Schutzschicht.
        </p>
        <p>
          Diese Schicht hält nicht ewig. Sonne, Hitze vom Leuchtmittel, Steinschlag, Insektenentferner und
          Waschanlagenbürsten setzen ihr über die Jahre zu. Erst wird sie stumpf, dann bekommt sie feine Risse, und
          schließlich verwittert der Kunststoff darunter: Er wird gelb, milchig und fühlt sich rau an.
        </p>

        <h2>Mehr als Optik: Was trübe Scheinwerfer bewirken</h2>
        <ul>
          <li>
            <strong>Weniger Licht auf der Straße.</strong> Ein großer Teil des Lichts wird an der rauen Oberfläche
            gestreut, statt nach vorne zu gehen. Bei Nacht und Regen merkt man das deutlich.
          </li>
          <li>
            <strong>Blendung für andere.</strong> Gestreutes Licht landet dort, wo es nicht hingehört – auch in den
            Augen des Gegenverkehrs.
          </li>
          <li>
            <strong>Mängel bei der Hauptuntersuchung.</strong> Stark eingetrübte Scheinwerfer können bemängelt werden.
          </li>
          <li>
            <strong>Älterer Eindruck.</strong> Nichts lässt ein Auto so schnell alt aussehen wie gelbe „Augen“ –
            gerade beim Verkauf ein Thema.
          </li>
        </ul>

        <h2>So bereiten wir Scheinwerfer auf</h2>
        <ol>
          <li>
            <strong>Reinigen und abkleben.</strong> Lack, Gummis und Zierleisten rund um den Scheinwerfer werden
            sorgfältig abgeklebt, damit nichts angeschliffen wird.
          </li>
          <li>
            <strong>Nassschleifen in mehreren Stufen.</strong> Von grob nach fein tragen wir die verwitterte Schicht
            gleichmäßig ab, bis ein einheitlich mattes, klares Bild entsteht.
          </li>
          <li>
            <strong>Maschinell polieren.</strong> Die Schleifspuren werden herauspoliert, bis das Glas wieder
            transparent ist.
          </li>
          <li>
            <strong>Neuer UV-Schutz.</strong> Eine Versiegelung ersetzt die abgetragene Werksschicht. Ohne diesen Schritt
            wäre der Scheinwerfer nach kurzer Zeit wieder gelb – das ist der häufigste Fehler bei
            Do-it-yourself-Aufbereitungen.
          </li>
        </ol>
        <p>
          Preis: <strong>{extraPrice("scheinwerfer")} pro Paar</strong>. Die Aufbereitung lässt sich gut mit einer{" "}
          <Link href="/lackaufbereitung-politur">Lackpolitur</Link> oder der{" "}
          <Link href="/leasingrueckgabe-aufbereitung">Aufbereitung vor dem Verkauf</Link> kombinieren.
        </p>

        <h2>Wo die Aufbereitung an ihre Grenzen kommt</h2>
        <p>
          Wir bearbeiten die Außenseite der Scheinwerferabdeckung. Nicht beheben lassen sich damit:
        </p>
        <ul>
          <li>Feuchtigkeit oder Beschlag im Inneren des Scheinwerfers</li>
          <li>ein matter oder abgeblätterter Reflektor hinter dem Glas</li>
          <li>Risse und Brüche im Gehäuse oder in der Abdeckung</li>
          <li>sehr tiefe Steinschläge, die sich nicht ausschleifen lassen, ohne zu viel Material abzutragen</li>
        </ul>
        <p>
          Bei solchen Schäden hilft nur ein Austausch. Was davon auf Ihr Auto zutrifft, sehen wir meist schon auf einem
          Foto.
        </p>

        <h2>Aufbereiten oder neu kaufen?</h2>
        <p>
          Neue Scheinwerfer kosten je nach Modell und Technik (Halogen, Xenon, LED) schnell mehrere hundert Euro pro
          Seite, dazu kommt der Einbau. Solange nur die Oberfläche verwittert ist, ist die Aufbereitung fast immer die
          wirtschaftlichere Lösung. Erst wenn der Scheinwerfer innen defekt ist, lohnt sich der Austausch.
        </p>
        <p>
          Unsere Werkstatt liegt in <Link href="/autoaufbereitung-bodenheim">Bodenheim</Link>, gut erreichbar aus{" "}
          <Link href="/autoaufbereitung-mainz">Mainz</Link> und <Link href="/autoaufbereitung-oppenheim">Oppenheim</Link>.
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="hausmittel">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Selbst machen?"
            title={<span id="hausmittel">Zahnpasta & Co.: Was Hausmittel wirklich bringen.</span>}
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {hausmittel.map((h, i) => (
              <Reveal as="li" key={h.mittel} delay={i * 100}>
                <SheenCard className="flex h-full flex-col p-7">
                  <p className="font-display text-xl text-snow">{h.mittel}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-light">{h.urteil}</p>
                  <p className="mt-4 leading-relaxed text-mist">{h.text}</p>
                </SheenCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection title="Fragen zur Scheinwerferaufbereitung" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Passend dazu"
        paths={[
          "/lackaufbereitung-politur",
          "/leasingrueckgabe-aufbereitung",
          "/autoaufbereitung-oppenheim",
          "/autoaufbereitung-ingelheim",
          "/motorraumreinigung",
          "/ratgeber/autoaufbereitung-kosten",
        ]}
      />

      <CTASection
        title={
          <>
            Klare Sicht. <span className="text-shine">Klarer Auftritt.</span>
          </>
        }
        text="Ein Foto Ihrer Scheinwerfer per WhatsApp genügt – wir sagen Ihnen, ob sich die Aufbereitung lohnt."
      />
    </>
  );
}
