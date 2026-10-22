import type { Metadata } from "next";
import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import EnquiryBuilder from "@/components/EnquiryBuilder";
import ExtrasTable from "@/components/ExtrasTable";
import { ArrowRightIcon, SparkleIcon } from "@/components/icons";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PriceCard from "@/components/PriceCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { packagePrice, packages, priceNote, taxNote } from "@/lib/pricing";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { videos } from "@/lib/services";

export const metadata: Metadata = pageMetadata({
  path: "/preise",
  title: "Preise – Autoaufbereitung Bodenheim | HF Autopflege",
  description: `Autopflege-Preise in Bodenheim: Innenaufbereitung ${packagePrice("innen")}, Komplettaufbereitung ${packagePrice("komplett")}, Keramik ${packagePrice("keramik")}. Alle Richtpreise & Einzelleistungen.`,
});

export default function PreisePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Preise", path: "/preise" }])} />
      <PageHero
        eyebrow="Preise"
        title={
          <>
            Klare Preise für <span className="text-shine">Glanz</span> und Pflege.
          </>
        }
        intro="Unsere Pakete auf einen Blick. Alle Angaben sind Richtpreise – den genauen Preis stimmen wir vorab verbindlich mit Ihnen ab."
        video={videos.politur}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/preisrechner" className="btn btn-primary">
            Preis berechnen <ArrowRightIcon width={18} height={18} />
          </Link>
          <CallButton variant="ghost" />
          <WhatsAppButton />
        </div>
      </PageHero>

      {/* Pakete */}
      <section className="section relative overflow-hidden bg-ivory text-ink" aria-labelledby="pakete">
        <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="container-lux relative">
          <SectionHeading
            light
            eyebrow="Pakete"
            title={<span id="pakete">Das passende Paket für Ihr Fahrzeug.</span>}
            align="center"
          />
          <div className="mt-16 grid gap-6 pt-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-7">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={(i % 3) * 120}>
                <PriceCard pkg={pkg} light />
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-14 flex max-w-2xl items-start gap-4 rounded-2xl border border-ink/10 bg-white/60 p-6 text-ink/75">
            <SparkleIcon className="mt-0.5 shrink-0 text-brand-dark" />
            <p className="text-[0.95rem] leading-relaxed">{priceNote}</p>
          </Reveal>
        </div>
      </section>

      {/* Einzelleistungen */}
      <section className="section" aria-labelledby="extras">
        <div className="container-lux grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Einzelleistungen"
              title={<span id="extras">Einzeln buchbar oder als Extra.</span>}
              intro="Kombinieren Sie Ihr Paket mit einzelnen Leistungen – oder buchen Sie gezielt nur das, was Ihr Fahrzeug gerade braucht."
            />
          </div>
          <Reveal className="lg:col-span-7" delay={150}>
            <ExtrasTable />
            <p className="mt-6 text-sm text-mist">{taxNote}</p>
          </Reveal>
        </div>
      </section>

      {/* Anfrage */}
      <section className="section bg-coal pt-24" aria-labelledby="anfrage">
        <div className="container-lux grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Anfrage"
              title={
                <span id="anfrage">
                  Ihr Wunschtermin – <span className="text-shine">unkompliziert</span>.
                </span>
              }
              intro="Wählen Sie Leistung und Fahrzeug, wir bereiten Ihre WhatsApp-Nachricht vor. Lieber telefonieren? Wir sind Mo–Sa von 10 bis 18 Uhr erreichbar."
            />
            <Reveal delay={120} className="mt-10">
              <CallButton variant="ghost" showNumber />
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7" delay={150}>
            <EnquiryBuilder />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
