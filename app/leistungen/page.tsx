import type { Metadata } from "next";
import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import ExtrasTable from "@/components/ExtrasTable";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import JsonLd from "@/components/JsonLd";
import LoopVideo from "@/components/LoopVideo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { extras, formatPrice, packages } from "@/lib/pricing";
import { breadcrumbJsonLd } from "@/lib/seo";
import { services, videos } from "@/lib/services";

export const metadata: Metadata = {
  title: "Fahrzeugaufbereitung Bodenheim – Leistungen",
  description:
    "Fahrzeugaufbereitung in Bodenheim: Innenaufbereitung, Politur, Lackversiegelung, Keramikversiegelung und Einzelleistungen wie Scheinwerferaufbereitung. Jetzt Termin anfragen.",
  alternates: { canonical: "/leistungen" },
  openGraph: { url: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Leistungen", path: "/leistungen" }])} />
      <PageHero
        eyebrow="Leistungen"
        title={
          <>
            Fahrzeugaufbereitung in <span className="text-gold">Bodenheim</span>
          </>
        }
        intro="Innen, außen und im Detail: Wir stimmen jede Aufbereitung auf Ihr Fahrzeug ab – und besprechen Umfang und Preis vorab mit Ihnen."
        video={videos.scheinwerfer}
      />

      <div className="section space-y-28 lg:space-y-40">
        {services.map((service, i) => {
          const pkg = packages.find((p) => p.id === service.packageId);
          const minExtra = Math.min(...extras.flatMap((e) => (e.price === null ? [] : [e.price])));
          const price = pkg ? { label: pkg.name, value: pkg.price } : { label: "Einzelleistungen", value: minExtra };
          const reversed = i % 2 === 1;
          return (
            <section key={service.id} id={service.id} aria-labelledby={`${service.id}-title`} className="container-lux scroll-mt-28">
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                  <div className="hairline relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-[5/4]">
                    <LoopVideo slug={service.video.slug} alt={service.video.alt} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    <span className="absolute bottom-6 left-6 font-display text-7xl leading-none text-white/25">0{i + 1}</span>
                  </div>
                </Reveal>
                <Reveal delay={150} className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                  <p className="eyebrow">{service.eyebrow}</p>
                  <h2 id={`${service.id}-title`} className="h-display mt-5 text-[2.3rem] sm:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-mist">{service.text}</p>
                  <ul className="mt-8 space-y-3.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3 text-pearl">
                        <CheckIcon width={18} height={18} className="mt-1 shrink-0 text-champagne" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-9 flex items-baseline gap-3 border-t border-white/[0.08] pt-7">
                    <span className="text-sm text-mist">{price.label}</span>
                    <span className="font-display text-3xl text-snow">{formatPrice(price.value)}</span>
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <WhatsAppButton
                      variant="gold"
                      label="Termin anfragen"
                      text={`Hallo HF Autopflege, ich interessiere mich für: ${service.title}. Wann hätten Sie einen Termin frei?`}
                    />
                    <Link href="/preise" className="btn btn-ghost">
                      Preise <ArrowRightIcon width={18} height={18} />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      {/* Einzelleistungen */}
      <section className="section bg-coal" aria-labelledby="einzelleistungen">
        <div className="container-lux grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Einzelleistungen"
              title={<span id="einzelleistungen">Gezielt, wo es nötig ist.</span>}
              intro="Einzelne Leistungen lassen sich buchen oder mit einem Paket kombinieren. Sprechen Sie uns einfach an."
            />
            <Reveal delay={120} className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <CallButton />
              <WhatsAppButton />
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7" delay={150}>
            <ExtrasTable />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
