// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen (Ablauf der Ozonbehandlung, Lüftungszeiten).
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

const path = "/geruchsentfernung-auto";
const description = `Rauchgeruch, Hundegeruch oder muffiger Geruch im Auto? Wir reinigen die Ursache und neutralisieren den Rest per Ozonbehandlung (${extraPrice("ozon")}). HF Autopflege bei Mainz.`;

export const metadata = pageMetadata({
  path,
  title: "Rauchgeruch im Auto entfernen – Ozonbehandlung | HF Autopflege",
  description,
});

const whatsappText = "Hallo HF Autopflege, mein Auto riecht unangenehm (Rauch/Tier/muffig). Fahrzeug: ";

const gerueche = [
  ["Kalter Rauch", "Nikotin und Teer in Dachhimmel, Polstern, Lüftung und auf allen Kunststoffen", "Innenreinigung inkl. Himmel, danach Ozon"],
  ["Hund", "Haare, Hautfett und Speichel in Teppich, Polster und Kofferraum", "Tierhaarentfernung, Polsterreinigung, Ozon"],
  ["Muffig, feucht", "Wasser im Fußraum oder unter der Kofferraummulde, nasse Matten", "Ursache finden und trocknen, dann reinigen"],
  ["Säuerlich", "Milch, Erbrochenes, Lebensmittel tief im Polster", "Tiefenreinigung per Sprühextraktion, Ozon"],
  ["Beim Einschalten der Lüftung", "Bakterien und Pilze am Klimaverdampfer, alter Innenraumfilter", "Filterwechsel und Klimareinigung in der Werkstatt"],
] as const;

const faqs = [
  {
    q: "Wie funktioniert eine Ozonbehandlung im Auto?",
    a: "Ein Ozongenerator erzeugt im geschlossenen Fahrzeug für eine begrenzte Zeit Ozon (O₃). Das Gas dringt in Polster, Himmel und Lüftungskanäle ein und oxidiert Geruchsmoleküle und Keime. Anschließend wird das Auto gründlich gelüftet, bis kein Ozon mehr im Innenraum ist.",
  },
  {
    q: "Ist Ozon gefährlich?",
    a: "In hoher Konzentration ist Ozon gesundheitsschädlich. Deshalb befindet sich während der Behandlung niemand im Fahrzeug, und es wird danach ausreichend gelüftet. Wenn Sie Ihr Auto abholen, ist das Ozon längst wieder zu normalem Sauerstoff zerfallen.",
  },
  {
    q: "Bekommen Sie jeden Rauchgeruch weg?",
    a: "Bei Autos, in denen über Jahre stark geraucht wurde, ist das nicht immer vollständig möglich. Teer kann sich so tief in Dachhimmel und Schaumstoff eingelagert haben, dass ein leichter Restgeruch bleibt – vor allem an heißen Tagen. Wir sagen Ihnen vorher ehrlich, womit Sie rechnen können.",
  },
  {
    q: "Reicht nicht einfach ein Duftbaum oder Geruchsspray?",
    a: "Nein. Duftstoffe überdecken den Geruch nur, die Ursache bleibt. Oft entsteht eine noch unangenehmere Mischung. Dauerhaft hilft nur, die Quelle zu reinigen und den Rest zu neutralisieren.",
  },
  {
    q: "Mein Auto riecht muffig, obwohl es sauber ist. Woran liegt das?",
    a: "Fast immer an Feuchtigkeit: undichte Türdichtungen, verstopfte Wasserabläufe unter der Frontscheibe, ein nasser Teppich unter der Fußmatte oder Wasser in der Reserveradmulde. Solange Wasser eindringt, kommt der Geruch zurück. Lassen Sie die Ursache in der Werkstatt beheben – danach reinigen und trocknen wir den Innenraum.",
  },
];

export default function GeruchPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Geruchsentfernung und Ozonbehandlung",
          description,
          path,
          serviceType: "Geruchsentfernung im Fahrzeug",
          minPrice: extras.find((e) => e.id === "ozon")!.price,
        })}
      />
      <PageHero
        eyebrow="Geruchsentfernung"
        title={
          <>
            Gerüche im Auto entfernen – <span className="text-shine">an der Ursache</span>.
          </>
        }
        intro="Kalter Rauch, Hund, Feuchtigkeit oder verschüttete Milch: Wir reinigen zuerst, wo der Geruch entsteht, und neutralisieren den Rest mit einer Ozonbehandlung. Ohne Duftbaum, ohne Überdecken."
        video={videos.innenraum}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton variant="primary" label="Problem schildern" text={whatsappText} />
          <CallButton variant="ghost" />
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Leistungen", path: "/leistungen" },
          { name: "Geruchsentfernung", path },
        ]}
      />

      <ArticleLayout
        aside={
          <QuickFacts
            title="Gegen Gerüche"
            facts={[
              ["Ozonbehandlung", extraPrice("ozon")],
              ["Innenaufbereitung", packagePrice("innen")],
              ["Himmelreinigung", extraPrice("himmel")],
              ["Polster/Teppich", extraPrice("polster")],
              ["Tierhaare", extraPrice("tierhaare")],
            ]}
            whatsappText={whatsappText}
          >
            Meist ist eine Kombination nötig. Welche, hängt von der Ursache ab – erzählen Sie uns kurz, wonach es riecht.
          </QuickFacts>
        }
      >
        <h2>Erst die Quelle, dann der Geruch</h2>
        <p>
          Ein Geruch im Auto ist kein Problem der Luft, sondern der Oberflächen. Geruchsmoleküle haften an Polstern,
          Teppichen, am Dachhimmel, in der Lüftung und auf Kunststoffen. Solange sie dort sind, riecht es – egal, wie oft
          gelüftet wird.
        </p>
        <p>
          Deshalb ist die wichtigste Regel: <strong>Erst reinigen, dann neutralisieren.</strong> Eine Ozonbehandlung in
          einem verschmutzten Auto ist wie Lüften in einem Zimmer mit vollem Mülleimer – es hilft kurz, aber der Geruch
          kommt zurück. Wir beginnen deshalb immer mit der Reinigung der betroffenen Bereiche: per{" "}
          <Link href="/auto-innenreinigung">Innenreinigung</Link>, bei Bedarf mit{" "}
          <Link href="/polsterreinigung-auto">Polsterreinigung</Link> und Himmelreinigung.
        </p>

        <h2>Rauchgeruch: der hartnäckigste Fall</h2>
        <p>
          Zigarettenrauch hinterlässt Nikotin und Teer – klebrige Rückstände, die sich als gelblicher Film auf jede
          Oberfläche legen. Besonders betroffen sind der Dachhimmel (der Rauch steigt nach oben), die Lüftungskanäle,
          die Gurte und die Scheiben von innen. Ein Raucherauto zu neutralisieren heißt deshalb:
        </p>
        <ol>
          <li>Aschereste aus allen Fugen, Sitzschienen und Ablagen entfernen</li>
          <li>Kunststoffe, Scheiben und Gurte vom Teerfilm befreien</li>
          <li>
            Dachhimmel vorsichtig reinigen ({extraPrice("himmel")}) – er speichert besonders viel Geruch
          </li>
          <li>Polster und Teppiche per Sprühextraktion tiefenreinigen</li>
          <li>Ozonbehandlung, um Restgeruch in Schaumstoff und Lüftung zu neutralisieren</li>
        </ol>
        <p>
          Ein Tipp vor dem Verkauf eines Raucherautos: Käufer riechen den Unterschied sofort. Mehr dazu auf unserer Seite
          zur <Link href="/leasingrueckgabe-aufbereitung">Aufbereitung vor Verkauf und Leasingrückgabe</Link>.
        </p>

        <h2>So läuft die Ozonbehandlung ab</h2>
        <p>
          Ozon (O₃) ist eine besonders reaktive Form von Sauerstoff. Es oxidiert Geruchsmoleküle, Bakterien und
          Schimmelsporen und zerfällt danach wieder zu normalem Sauerstoff. Weil es ein Gas ist, erreicht es auch Stellen,
          an die kein Reiniger kommt – tief im Schaumstoff der Sitze oder in den Lüftungskanälen.
        </p>
        <ul>
          <li>Der Generator wird im geschlossenen, menschenleeren Fahrzeug aufgestellt.</li>
          <li>Die Lüftung läuft auf Umluft, damit das Ozon auch durch die Kanäle zirkuliert.</li>
          <li>Die Behandlung läuft zeitlich begrenzt und kontrolliert.</li>
          <li>Danach wird das Auto gründlich gelüftet, bevor jemand einsteigt.</li>
        </ul>
        <p>
          Preis der Ozonbehandlung: <strong>{extraPrice("ozon")}</strong>, in Kombination mit Reinigungsleistungen.
        </p>

        <h2>Realistische Erwartungen</h2>
        <p>
          Die meisten Gerüche – Hund, Essen, Feuchtigkeit nach einer behobenen Undichtigkeit, leichter Rauch – bekommen
          wir mit Reinigung und Ozon vollständig weg. Bei jahrelang stark verrauchten Fahrzeugen kann ein schwacher
          Restgeruch bleiben, der bei Hitze stärker wird. Und wenn die Ursache noch da ist – etwa eindringendes Wasser
          oder eine verschmutzte Klimaanlage –, kommt auch der Geruch wieder. Das sagen wir Ihnen vorher, nicht hinterher.
        </p>
      </ArticleLayout>

      <section className="section bg-coal" aria-labelledby="geruchsarten">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Geruch erkennen"
            title={<span id="geruchsarten">Welcher Geruch, welche Ursache, welche Lösung.</span>}
          />
          <Reveal className="prose-lux mt-12 !max-w-none">
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Geruch</th>
                    <th scope="col">Typische Ursache</th>
                    <th scope="col">Was hilft</th>
                  </tr>
                </thead>
                <tbody>
                  {gerueche.map(([geruch, ursache, loesung]) => (
                    <tr key={geruch}>
                      <td>
                        <strong>{geruch}</strong>
                      </td>
                      <td>{ursache}</td>
                      <td>{loesung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm">
              Klimaanlagen-Desinfektion und Innenraumfilter-Wechsel gehören in die Kfz-Werkstatt – das bieten wir nicht an.
              Danach kümmern wir uns gern um den Rest.
            </p>
          </Reveal>
        </div>
      </section>

      <FaqSection title="Fragen zur Geruchsentfernung" items={faqs} />

      <RelatedLinks
        className="bg-coal"
        title="Passend dazu"
        paths={[
          "/polsterreinigung-auto",
          "/auto-innenreinigung",
          "/autoaufbereitung-gau-bischofsheim",
          "/autoaufbereitung-ingelheim",
          "/leasingrueckgabe-aufbereitung",
          "/autoaufbereitung-bodenheim",
        ]}
      />

      <CTASection
        title={
          <>
            Endlich wieder <span className="text-shine">frische Luft.</span>
          </>
        }
        text="Beschreiben Sie uns kurz per WhatsApp, wonach Ihr Auto riecht und seit wann – wir schlagen Ihnen die passende Behandlung vor."
      />
    </>
  );
}
