import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { leistungsseiten, ratgeber } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { videos } from "@/lib/services";

const path = "/ratgeber";

export const metadata = pageMetadata({
  path,
  title: "Ratgeber Autopflege – Kosten, Lackschutz & Tipps | HF Autopflege",
  description:
    "Ratgeber zur Fahrzeugaufbereitung: was eine Aufbereitung kostet, Keramikversiegelung oder Wachs – ehrliche Tipps aus unserer Werkstatt in Bodenheim.",
});

export default function RatgeberPage() {
  return (
    <>
      <PageHero
        eyebrow="Ratgeber"
        title={
          <>
            Wissen aus der <span className="text-shine">Werkstatt</span>.
          </>
        }
        intro="Was kostet eine Aufbereitung? Welcher Lackschutz lohnt sich? Hier beantworten wir Fragen, die sich vor einer Aufbereitung fast jeder stellt – ehrlich und ohne Fachchinesisch."
        video={videos.werkstatt}
      />
      <Breadcrumbs items={[{ name: "Ratgeber", path }]} />
      <RelatedLinks eyebrow="Artikel" title="Alle Ratgeber" paths={ratgeber.map((r) => r.path)} />
      <RelatedLinks
        className="bg-coal"
        eyebrow="Leistungen"
        title="Unsere Leistungen im Detail"
        paths={leistungsseiten.map((l) => l.path)}
      />
      <CTASection />
    </>
  );
}
