// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen.
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import { CheckIcon } from "@/components/icons";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import QuickFacts from "@/components/QuickFacts";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { extraPrice, packagePrice, packages } from "@/lib/pricing";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/leasingrueckgabe-aufbereitung";
const description = `Aufbereitung vor Leasingrückgabe und Autoverkauf: Checkliste, normale Abnutzung vs. Schaden, Timing. Paket ${packagePrice("leasing")} – HF Autopflege bei Mainz.`;

export const metadata = pageMetadata({
  path,
  title: "Leasingrückgabe: Aufbereitung & Checkliste | HF Autopflege",
  description,
});

const whatsappText =
  "Hallo HF Autopflege, ich möchte mein Auto vor der Leasingrückgabe / dem Verkauf aufbereiten lassen. Fahrzeug & Termin: ";

const checkliste = [
  {
    titel: "Innenraum",
    punkte: [
      "Flecken in Sitzen, Himmel und Teppichen",
      "Tierhaare – auch im Kofferraum und unter den Sitzen",
      "Rauch- oder Tiergeruch",
      "Zustand von Lenkrad, Schaltknauf, Fahrersitzwange",
      "Kratzer an Kunststoffen und Einstiegsleisten",
    ],
  },
  {
    titel: "Außen",
    punkte: [
      "Lack bei Tageslicht prüfen: Waschkratzer, matte Stellen",
      "Kratzer mit Fingernagel-Test einordnen",
      "Felgen: Bordsteinschäden, festgebackener Bremsstaub",
      "Scheinwerfer: vergilbt oder milchig?",
      "Steinschläge in der Frontscheibe",
    ],
  },
  {
    titel: "Technik & Reifen",
    punkte: [
      "Reifenprofil (Mindestprofil laut Vertrag beachten)",
      "Warnleuchten im Cockpit",
      "Serviceintervalle laut Herstellervorgabe eingehalten?",
      "Bremsen, Wischerblätter, Beleuchtung",
    ],
  },
  {
    titel: "Unterlagen & Zubehör",
    punkte: [
      "alle Schlüssel inkl. Zweitschlüssel",
      "Serviceheft bzw. digitaler Servicenachweis",
      "Zulassungsbescheinigung Teil I",
      "Bordmappe, Ladekabel, Kofferraumabdeckung",
      "Warndreieck, Verbandskasten, Warnweste",
    ],
  },
];

const faqs = [
  {
    q: "Wann sollte ich das Auto vor der Leasingrückgabe aufbereiten lassen?",
    a: "Ideal sind ein bis drei Wochen vor dem Termin. So ist das Ergebnis frisch, und Sie haben noch Zeit, falls sich zeigt, dass ein Lackierer oder Smart Repair für tiefere Schäden nötig ist. Danach bitte nicht mehr durch die Bürstenwaschanlage.",
  },
  {
    q: "Lohnt sich eine Aufbereitung vor der Rückgabe finanziell?",
    a: "Das hängt von Zustand und Leasinggeber ab. Starke Verschmutzung, Flecken, Tierhaare oder Gerüche werden bei vielen Rückgaben als Mangel bewertet und nachberechnet. Wenn sie sich durch eine Aufbereitung beseitigen lassen, ist das oft günstiger. Eine Garantie, dass keine Nachzahlung anfällt, kann aber niemand geben – das entscheidet der Gutachter.",
  },
  {
    q: "Entfernen Sie auch Kratzer und Dellen?",
    a: "Leichte Kratzer im Klarlack polieren wir aus, soweit möglich. Dellen, tiefe Kratzer bis zur Grundierung, Bordsteinschäden an Felgen und Steinschläge in der Scheibe können wir nicht reparieren. Dafür empfehlen wir Lackierer, Smart Repair bzw. Glaser.",
  },
  {
    q: "Was ist der Unterschied zwischen Verkaufs- und Leasingaufbereitung?",
    a: "Technisch kaum einer – beide Male soll das Auto in bestmöglichem Zustand übergeben werden. Beim Verkauf kommt es zusätzlich auf den ersten Eindruck an: glänzender Lack, gepflegter Motorraum und klare Scheinwerfer wirken auf Fotos und bei der Besichtigung.",
  },
  {
    q: "Ich gebe das Auto in einer anderen Stadt zurück. Ist das ein Problem?",
    a: "Nein. Viele Rückgaben finden beim Händler oder an einer Sammelstelle statt. Wichtig ist nur, dass Sie zwischen unserer Aufbereitung und dem Termin keine Waschstraße und keine Feldwege mehr fahren.",
  },
];

export default function LeasingPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Aufbereitung vor Leasingrückgabe und Verkauf",
          description,
          path,
          serviceType: "Fahrzeugaufbereitung für Leasingrückgabe",
          minPrice: packages.find((p) => p.id === "leasing")!.price,
        })}
      />
      <PageHero
        eyebrow="Leasingrückgabe & Verkauf"
        title={
          <>
            Leasingrückgabe ohne <span className="text-shine">böse Überraschung</span>.
          </>
        }
        intro="Was der Gutachter als Schaden bewertet, ist oft nur Schmutz. Wir bereiten Ihr Auto vor Rückgabe oder Verkauf so auf, dass nur noch bleibt, was wirklich Abnutzung ist."
        video={videos.detailing}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Rückgabe vorbereiten" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Leasingrückgabe & Verkauf", path },
        ]}
      />

      <ArticleLayout
        aside={
          <QuickFacts
            title="Leasingrückgabe & Verkauf"
            facts={[
              ["Paketpreis", packagePrice("leasing")],
              ["Scheinwerfer (Paar)", extraPrice("scheinwerfer")],
              ["Motorraum", extraPrice("motorraum")],
              ["Ozon gegen Gerüche", extraPrice("ozon")],
              ["Tierhaare", extraPrice("tierhaare")],
            ]}
            whatsappText={whatsappText}
          >
            Im Paket: Komplettaufbereitung, Intensivreinigung stark beanspruchter Bereiche, Polster- bzw.
            Teppichreinigung und Auspolieren leichter Kratzer, soweit möglich.
          </QuickFacts>
        }
      >
        <h2>Wie eine Leasingrückgabe abläuft</h2>
        <p>
          Am Ende der Laufzeit wird Ihr Fahrzeug von einem Gutachter begutachtet – meist von einer unabhängigen
          Prüforganisation im Auftrag des Leasinggebers. Er dokumentiert jeden Mangel, fotografiert ihn und vergleicht
          ihn mit dem Rückgabeleitfaden bzw. Schadenkatalog Ihres Vertrags. Alles, was über die „normale, dem Alter und
          der Laufleistung entsprechende Abnutzung“ hinausgeht, kann nachberechnet werden.
        </p>
        <p>
          Das Entscheidende: Die Begutachtung findet bei gutem Licht statt, oft in einer Halle mit Prüflampen. Was Sie
          im Carport nicht sehen, sieht der Gutachter sehr wohl. Und ein verschmutztes Auto wird nicht nur als
          verschmutzt bewertet – Schmutz kann auch Schäden verdecken, sodass genauer hingeschaut wird.
        </p>

        <h2>Normale Abnutzung oder Schaden?</h2>
        <p>
          Die genauen Grenzen legt jeder Leasinggeber selbst fest. Lesen Sie deshalb unbedingt den Leitfaden Ihres
          Vertrags. Als grobe Orientierung gilt bei vielen Anbietern:
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Bereich</th>
                <th scope="col">meist normale Abnutzung</th>
                <th scope="col">häufig nachberechnet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lack</td>
                <td>feine Waschkratzer, einzelne kleine Steinschläge</td>
                <td>Kratzer bis in die Grundierung, Dellen, Lackabplatzer</td>
              </tr>
              <tr>
                <td>Polster</td>
                <td>leichte Sitzfalten, geringe Abnutzung</td>
                <td>Flecken, Brandlöcher, Risse, Tierhaare</td>
              </tr>
              <tr>
                <td>Innenraum</td>
                <td>normale Gebrauchsspuren</td>
                <td>starke Verschmutzung, Rauch- oder Tiergeruch</td>
              </tr>
              <tr>
                <td>Felgen</td>
                <td>leichte Gebrauchsspuren</td>
                <td>Bordsteinschäden, verbogene Felgen</td>
              </tr>
              <tr>
                <td>Scheiben</td>
                <td>–</td>
                <td>Steinschläge im Sichtfeld, Risse</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Gut zu wissen: Viele Punkte in der rechten Spalte – Flecken, Tierhaare, Gerüche, starke Verschmutzung,
          polierbare Kratzer – sind Fälle für die Aufbereitung, nicht für die Werkstatt.
        </p>

        <h2>Was wir vor der Rückgabe machen</h2>
        <p>
          Unser Paket <strong>Leasingrückgabe & Verkauf</strong> ({packagePrice("leasing")}) baut auf der
          Komplettaufbereitung auf und geht an den beanspruchten Stellen weiter:
        </p>
        <ul>
          <li>
            Komplette <Link href="/auto-innenreinigung">Innenreinigung</Link> mit{" "}
            <Link href="/polsterreinigung-auto">Polster- bzw. Teppichreinigung</Link>
          </li>
          <li>Intensivreinigung von Fahrersitz, Lenkrad, Einstiegen und Kofferraum</li>
          <li>
            Handwäsche, Felgen, Radkästen und <Link href="/lackaufbereitung-politur">Politur</Link> leichter Kratzer,
            soweit möglich
          </li>
          <li>Kunststoff- und Gummipflege innen und außen</li>
        </ul>
        <p>
          Je nach Zustand ergänzen wir: <Link href="/geruchsentfernung-auto">Ozonbehandlung</Link> gegen Rauch- und
          Tiergeruch ({extraPrice("ozon")}), <Link href="/scheinwerfer-aufbereiten">Scheinwerferaufbereitung</Link> (
          {extraPrice("scheinwerfer")} pro Paar) oder Tierhaarentfernung ({extraPrice("tierhaare")}).
        </p>

        <h2>Was eine Aufbereitung nicht kann</h2>
        <p>
          Wir sagen Ihnen vorher ehrlich, wo unsere Arbeit endet. Dellen, tiefe Kratzer, Bordsteinschäden an Felgen,
          Risse im Leder und Steinschläge in der Scheibe sind Reparaturen. Ob sich eine Reparatur vor der Rückgabe
          lohnt oder ob die Nachberechnung günstiger ist, sollten Sie mit einem Kostenvoranschlag vergleichen. Wir
          können Ihnen dabei helfen, die Mängel zu erkennen – den Kostenvergleich müssen Sie selbst ziehen.
        </p>

        <h2>Aufbereitung vor dem Autoverkauf</h2>
        <p>
          Beim Privatverkauf entscheidet der erste Eindruck – erst auf den Fotos im Inserat, dann bei der Besichtigung.
          Ein Auto, das sauber riecht und glänzt, wirkt gepflegt und gibt dem Käufer weniger Ansatzpunkte zum Handeln.
          Unsere Tipps:
        </p>
        <ul>
          <li>Aufbereitung kurz vor den Fotos – dann sehen die Bilder so gut aus wie das Auto.</li>
          <li>Fotos bei bedecktem Himmel oder in der Abendsonne, nicht in der Mittagssonne.</li>
          <li>
            Ein sauberer <Link href="/motorraumreinigung">Motorraum</Link> ({extraPrice("motorraum")}) schafft
            Vertrauen – vorausgesetzt, er ist nicht frisch „glänzend“ verdeckt, sondern ehrlich sauber.
          </li>
          <li>Persönliche Gegenstände, Duftbäume und Aufkleber vorher entfernen.</li>
        </ul>
        <p>
          Was eine Aufbereitung insgesamt kostet und womit Sie rechnen sollten, zeigt unser Ratgeber{" "}
          <Link href="/ratgeber/autoaufbereitung-kosten">Was kostet eine Autoaufbereitung?</Link>
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="checkliste">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Checkliste"
            title={<span id="checkliste">Vor der Leasingrückgabe prüfen.</span>}
            intro="Gehen Sie diese Punkte etwa vier Wochen vor dem Termin durch – bei Tageslicht und mit einer Taschenlampe."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {checkliste.map((gruppe, i) => (
              <Reveal key={gruppe.titel} delay={i * 100} className="hairline rounded-3xl bg-ink/40 p-7">
                <p className="font-display text-xl text-snow">{gruppe.titel}</p>
                <ul className="mt-5 space-y-3">
                  {gruppe.punkte.map((punkt) => (
                    <li key={punkt} className="flex gap-3 text-[0.95rem] text-pearl">
                      <CheckIcon width={16} height={16} className="mt-1 shrink-0 text-brand" />
                      {punkt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Fragen zur Leasingrückgabe" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Passend dazu"
        paths={[
          "/autoaufbereitung-ruesselsheim",
          "/autoaufbereitung-mainz-laubenheim",
          "/lackaufbereitung-politur",
          "/geruchsentfernung-auto",
          "/scheinwerfer-aufbereiten",
          "/ratgeber/autoaufbereitung-kosten",
        ]}
      />

      <CTASection
        title={
          <>
            Rückgabetermin steht? <span className="text-shine">Wir auch.</span>
          </>
        }
        text="Schicken Sie uns Fahrzeug, Rückgabedatum und ein paar Fotos per WhatsApp – wir planen die Aufbereitung rechtzeitig vor Ihrem Termin."
      />
    </>
  );
}
