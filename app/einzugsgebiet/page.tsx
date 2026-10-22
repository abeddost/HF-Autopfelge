// VORSCHLAG – Texte vor Veröffentlichung vom Inhaber prüfen.
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import { HoursCard, LocationCard } from "@/components/HoursCard";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import { orte } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { videos } from "@/lib/services";
import { site } from "@/lib/site";

const path = "/einzugsgebiet";

export const metadata = pageMetadata({
  path,
  title: "Einzugsgebiet – Autoaufbereitung Mainz & Rheinhessen",
  description:
    "Autoaufbereitung für Bodenheim, Mainz, Wiesbaden, Rüsselsheim, Ingelheim, Nierstein, Oppenheim und Umgebung – mit Fahrzeiten zur Werkstatt in der Hilgestraße 14.",
});

export default function EinzugsgebietPage() {
  return (
    <>
      <PageHero
        eyebrow="Einzugsgebiet"
        title={
          <>
            Von Rheinhessen bis <span className="text-shine">Rhein-Main</span>.
          </>
        }
        intro="Unsere Werkstatt liegt in Bodenheim – zwischen Mainz und Nierstein, direkt an B9 und A60. So sind Sie aus vielen Orten der Region in wenigen Minuten bei uns."
        video={videos.werkstatt}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton />
        </div>
      </PageHero>
      <Breadcrumbs items={[{ name: "Einzugsgebiet", path }]} />

      <section className="section pb-0 pt-14 lg:pt-20">
        <div className="container-lux grid gap-14 lg:grid-cols-12">
          <Reveal className="prose-lux lg:col-span-7">
            <h2>Ein Standort, kurze Wege</h2>
            <p>
              Wir arbeiten ausschließlich in unserer Werkstatt in der {site.address.street} in Bodenheim. Dort haben wir
              Licht, Ruhe und das Werkzeug, das eine gründliche Aufbereitung braucht. Sie bringen Ihr Auto vorbei,
              erledigen Ihren Tag und holen es gepflegt wieder ab.
            </p>
            <p>
              Aus den Nachbarorten <Link href="/autoaufbereitung-nackenheim">Nackenheim</Link>,{" "}
              <Link href="/autoaufbereitung-mainz-laubenheim">Mainz-Laubenheim</Link> und{" "}
              <Link href="/autoaufbereitung-gau-bischofsheim">Gau-Bischofsheim</Link> sind es nur wenige Minuten. Über die
              B9 erreichen Sie uns aus <Link href="/autoaufbereitung-nierstein">Nierstein</Link> und{" "}
              <Link href="/autoaufbereitung-oppenheim">Oppenheim</Link>, über die A60 aus{" "}
              <Link href="/autoaufbereitung-mainz">Mainz</Link>,{" "}
              <Link href="/autoaufbereitung-wiesbaden">Wiesbaden</Link>,{" "}
              <Link href="/autoaufbereitung-ruesselsheim">Rüsselsheim</Link> und{" "}
              <Link href="/autoaufbereitung-ingelheim">Ingelheim</Link>.
            </p>
            <p>
              Praktisch für die Abgabe: Bodenheim hat einen Bahnhof an der Strecke Mainz–Worms. Wer das Auto bei uns
              lässt, kommt mit dem Zug schnell nach Mainz oder in die Orte entlang des Rheins.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <div className="hairline overflow-hidden rounded-3xl">
              <table className="w-full text-left text-[0.95rem]">
                <caption className="sr-only">Fahrzeiten nach Bodenheim</caption>
                <thead className="bg-white/[0.03] text-snow">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 font-semibold">
                      Ort
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">
                      Fahrzeit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {orte.map((ort) => (
                    <tr key={ort.path}>
                      <td className="px-5 py-3">
                        <Link href={ort.path} className="link-underline text-pearl hover:text-snow">
                          {ort.label}
                        </Link>
                      </td>
                      <td className="px-5 py-3 text-mist">{ort.drive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-mist">Richtwerte bei normalem Verkehr.</p>
          </Reveal>
        </div>
      </section>

      <RelatedLinks eyebrow="Orte" title="Autoaufbereitung in Ihrer Nähe" paths={orte.map((o) => o.path)} />

      <section className="section pt-0" aria-label="Standort und Öffnungszeiten">
        <div className="container-lux grid gap-6 lg:grid-cols-2">
          <Reveal>
            <LocationCard />
          </Reveal>
          <Reveal delay={120}>
            <HoursCard />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
