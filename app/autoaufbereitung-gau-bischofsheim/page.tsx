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
import SectionHeading from "@/components/SectionHeading";
import SheenCard from "@/components/SheenCard";
import { extraPrice, packagePrice, packages } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";
import { site } from "@/lib/site";

const path = "/autoaufbereitung-gau-bischofsheim";
const description =
  "Autoaufbereitung für Gau-Bischofsheim, Harxheim und Lörzweiler: Familienauto-Innenreinigung, Polster, Tierhaare. HF Autopflege Bodenheim, ca. 8–10 Minuten.";

export const metadata = pageMetadata({
  path,
  title: "Autoaufbereitung Gau-Bischofsheim & Harxheim | HF Autopflege",
  description,
});

const whatsappText =
  "Hallo HF Autopflege, ich komme aus Gau-Bischofsheim/Harxheim/Lörzweiler und möchte unser Familienauto aufbereiten lassen: ";

const orteListe = [
  { name: "Gau-Bischofsheim", zeit: "ca. 8 Min.", km: "ca. 5 km" },
  { name: "Harxheim", zeit: "ca. 8–10 Min.", km: "ca. 5 km" },
  { name: "Lörzweiler", zeit: "ca. 8–10 Min.", km: "ca. 5 km" },
];

const faqs = [
  {
    q: "Wie komme ich aus Gau-Bischofsheim, Harxheim oder Lörzweiler zu Ihnen?",
    a: "Alle drei Orte liegen auf der Anhöhe westlich von Bodenheim und gehören wie Bodenheim zur Verbandsgemeinde Bodenheim. Über die Landstraßen sind Sie in etwa 8 bis 10 Minuten in der Hilgestraße 14.",
  },
  {
    q: "Soll ich die Kindersitze vor der Abgabe ausbauen?",
    a: "Ja, bitte. So kommen wir an die Sitzflächen und Isofix-Bereiche darunter, wo sich die meisten Krümel sammeln. Und Sie können sicher sein, dass der Sitz danach wieder korrekt nach Herstellervorgabe eingebaut ist.",
  },
  {
    q: "Wir haben Milch auf der Rückbank verschüttet. Der Geruch geht nicht weg – was hilft?",
    a: "Milch zieht tief ins Polster und wird dort sauer. Oberflächliches Reinigen reicht dann nicht. Wir reinigen das Polster per Sprühextraktion bis in die tieferen Schichten und behandeln den Restgeruch bei Bedarf mit Ozon. Je früher, desto besser die Chancen.",
  },
  {
    q: "Was kostet die Tierhaarentfernung?",
    a: "Tierhaare berechnen wir nach Aufwand, weil der Unterschied zwischen einem kurzhaarigen Hund auf der Decke und einem langhaarigen Hund ohne Decke enorm ist. Mit ein paar Fotos per WhatsApp nennen wir Ihnen vorab einen Preis.",
  },
];

export default function GauBischofsheimPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Autoaufbereitung für Gau-Bischofsheim, Harxheim und Lörzweiler",
          description,
          path,
          serviceType: "Innenaufbereitung",
          areaServed: ["Gau-Bischofsheim", "Harxheim", "Lörzweiler"],
          minPrice: packages[0].price,
        })}
      />
      <PageHero
        eyebrow="Gau-Bischofsheim · Harxheim · Lörzweiler"
        title={
          <>
            Autoaufbereitung für <span className="text-shine">Gau-Bischofsheim</span> und Umgebung.
          </>
        }
        intro="Krümel im Kindersitz, Saft auf der Rückbank, Hundehaare im Kofferraum: Wir machen Familienautos aus den Höhengemeinden wieder richtig sauber – nur ein paar Minuten den Berg hinunter."
        video={videos.innenraum}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Fotos schicken & anfragen" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Einzugsgebiet", path: "/einzugsgebiet" },
          { name: "Gau-Bischofsheim", path },
        ]}
      />

      {/* Drei Orte */}
      <section className="pt-14 lg:pt-20" aria-label="Anfahrt aus den Nachbarorten">
        <ul className="container-lux grid gap-5 md:grid-cols-3">
          {orteListe.map((ort, i) => (
            <Reveal as="li" key={ort.name} delay={i * 100}>
              <SheenCard className="h-full p-7">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mist">Aus {ort.name}</p>
                <p className="mt-3 font-display text-3xl text-snow">{ort.zeit}</p>
                <p className="mt-1 text-sm text-mist">{ort.km} bis {site.address.street}</p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(ort.name)}&destination=${encodeURIComponent(`${site.address.street}, ${site.address.zip} ${site.address.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-brand-light"
                >
                  <span className="link-underline">Route öffnen</span>
                </a>
              </SheenCard>
            </Reveal>
          ))}
        </ul>
      </section>

      <ArticleLayout
        aside={
          <QuickFacts
            title="Für Familienautos"
            facts={[
              ["Innenaufbereitung", packagePrice("innen")],
              ["Polster/Teppich", extraPrice("polster")],
              ["Himmelreinigung", extraPrice("himmel")],
              ["Tierhaare", extraPrice("tierhaare")],
              ["Ozon gegen Gerüche", extraPrice("ozon")],
            ]}
            whatsappText={whatsappText}
          >
            Tipp: Kindersitze vor der Abgabe ausbauen – dann reinigen wir auch darunter.
          </QuickFacts>
        }
      >
        <h2>Das Familienauto: täglich im Einsatz, selten wirklich sauber</h2>
        <p>
          In Gau-Bischofsheim, Harxheim und Lörzweiler ist das Auto für viele Familien unverzichtbar: zur Kita, zur
          Schule nach Bodenheim oder Mainz, zum Sportverein, zum Einkaufen. Gleichzeitig ist es der Ort, an dem
          gegessen, getrunken, gespielt und manchmal auch geschlafen wird. Nach ein paar Monaten sieht man das.
        </p>
        <p>
          Das Problem ist selten der sichtbare Schmutz – den kann man aussaugen. Schwierig wird es dort, wo man nicht
          hinkommt: unter und in den Kindersitzen, in den Sitzschienen, in den Gurtschlössern, in den Fugen der
          Rückbank. Dort sammeln sich Krümel, die irgendwann zu riechen anfangen.
        </p>

        <h2>Die vier Problemzonen im Familienauto</h2>
        <h3>1. Unter dem Kindersitz</h3>
        <p>
          Der Bereich um die Isofix-Halterungen ist der dreckigste im ganzen Auto. Der Sitz drückt Krümel tief ins
          Polster, und Getränke laufen genau dorthin. Wir saugen, bürsten und reinigen die Sitzfläche gründlich – bei
          Flecken mit der <Link href="/polsterreinigung-auto">Polsterreinigung</Link> per Sprühextraktion.
        </p>
        <h3>2. Die Rückbank</h3>
        <p>
          Saft, Milch, Schokolade, Sonnencreme: Flecken auf Stoffsitzen sind im Familienauto normal. Gefährlich wird es
          bei Milch und Erbrochenem – beides zieht tief ein und riecht nach Tagen sauer. Hier hilft nur eine
          Tiefenreinigung, bei hartnäckigem Restgeruch eine{" "}
          <Link href="/geruchsentfernung-auto">Ozonbehandlung</Link>.
        </p>
        <h3>3. Der Kofferraum</h3>
        <p>
          Kinderwagen, Laufrad, Fußballschuhe, Einkäufe – und oft der Hund. Der Kofferraumteppich ist robust, aber
          Hundehaare verhaken sich darin so fest, dass ein normaler Staubsauger kaum etwas ausrichtet. Wir arbeiten mit
          speziellen Bürsten und Gummiwerkzeugen. Mehr dazu auf der Seite{" "}
          <Link href="/auto-innenreinigung">Auto-Innenreinigung</Link>.
        </p>
        <h3>4. Himmel und Türverkleidungen</h3>
        <p>
          Kleine Füße treten gegen die Rückseiten der Vordersitze, kleine Hände greifen an den Dachhimmel. Die
          Himmelreinigung ({extraPrice("himmel")}) machen wir besonders vorsichtig, weil der Stoff dort nur geklebt ist
          und zu viel Feuchtigkeit Blasen werfen kann.
        </p>

        <h2>Nur kurz den Berg runter</h2>
        <p>
          Aus den Höhengemeinden ist Bodenheim schnell erreicht. Am einfachsten verbinden Sie die Abgabe mit dem Weg zur
          Arbeit oder zum Einkaufen im Tal und holen das Auto am Nachmittag wieder ab. Wenn Sie aus dem Ortskern von
          Bodenheim kommen, lesen Sie auch unsere Seite zur{" "}
          <Link href="/autoaufbereitung-bodenheim">Autoaufbereitung in Bodenheim</Link>.
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="sofort-tipps">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Sofort-Hilfe"
            title={<span id="sofort-tipps">Was Sie bei frischen Flecken tun sollten – und was nicht.</span>}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal className="hairline rounded-3xl bg-ink/40 p-8">
              <p className="font-display text-xl text-snow">Richtig</p>
              <ul className="prose-lux mt-5">
                <li>Flüssigkeit sofort mit einem saugfähigen Tuch abtupfen – von außen nach innen.</li>
                <li>Mit wenig lauwarmem Wasser nachtupfen, nicht durchnässen.</li>
                <li>Das Auto lüften, damit das Polster trocknen kann.</li>
                <li>Bei Milch oder Erbrochenem: zeitnah einen Termin machen.</li>
              </ul>
            </Reveal>
            <Reveal className="hairline rounded-3xl bg-ink/40 p-8" delay={120}>
              <p className="font-display text-xl text-snow">Besser nicht</p>
              <ul className="prose-lux mt-5">
                <li>Reiben – das treibt den Fleck tiefer und raut den Stoff auf.</li>
                <li>Haushaltsreiniger oder Bleichmittel – sie hinterlassen helle Ränder.</li>
                <li>Mit Duftspray überdecken – der Geruch kommt zurück.</li>
                <li>Den nassen Sitz wieder mit dem Kindersitz zudecken.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection title="Fragen aus Gau-Bischofsheim, Harxheim & Lörzweiler" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        eyebrow="In der Nähe"
        title="Nachbarorte und Leistungen"
        paths={[
          "/autoaufbereitung-bodenheim",
          "/autoaufbereitung-nackenheim",
          "/autoaufbereitung-mainz",
          "/polsterreinigung-auto",
          "/geruchsentfernung-auto",
          "/auto-innenreinigung",
        ]}
      />

      <CTASection
        title={
          <>
            Familienauto? <span className="text-shine">Wieder wie neu.</span>
          </>
        }
        text="Schicken Sie uns Fotos von Rückbank und Kofferraum per WhatsApp – wir sagen Ihnen vorab, was es kostet."
      />
    </>
  );
}
