import type { CSSProperties } from "react";
import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import { HoursCard, LocationCard } from "@/components/HoursCard";
import { ArrowRightIcon, CheckIcon, ClockIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import JsonLd from "@/components/JsonLd";
import LoopVideo from "@/components/LoopVideo";
import PriceCard from "@/components/PriceCard";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { packages } from "@/lib/pricing";
import { faqJsonLd } from "@/lib/seo";
import { services, videos } from "@/lib/services";
import { hoursSummary, site } from "@/lib/site";

const d = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function HomePage() {
  const teaser = ["innen", "komplett", "aussen"].map((id) => packages.find((p) => p.id === id)!);

  return (
    <>
      <JsonLd data={faqJsonLd()} />

      {/* Hero */}
      <section className="grain relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <LoopVideo slug={videos.detailing.slug} alt={videos.detailing.alt} priority decorative className="animate-slow-zoom -z-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/35 to-transparent" />

        <div className="container-lux pb-14 pt-36 sm:pb-20 lg:pb-24">
          <h1 className="h-display animate-hero-in max-w-5xl text-[2.9rem] sm:text-7xl lg:text-[6.4rem]" style={d(120)}>
            Autopflege & <span className="text-gold">Fahrzeugaufbereitung</span> in Bodenheim
          </h1>
          <p className="animate-hero-in mt-7 max-w-xl text-lg leading-relaxed text-pearl sm:text-xl" style={d(240)}>
            Gründliche Pflege für Ihr Auto – innen wie außen. Rufen Sie an oder schreiben Sie uns, wir finden einen
            passenden Termin.
          </p>
          <div className="animate-hero-in mt-10 flex flex-col gap-3 sm:flex-row" style={d(360)}>
            <CallButton />
            <WhatsAppButton />
          </div>

          <ul
            className="animate-hero-in mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3"
            style={d(480)}
          >
            {[
              { icon: MapPinIcon, label: "Adresse", value: `${site.address.street}, ${site.address.city}`, href: site.mapsUrl },
              { icon: ClockIcon, label: "Öffnungszeiten", value: "Mo–Sa · 10–18 Uhr" },
              { icon: PhoneIcon, label: "Telefon & WhatsApp", value: site.phone.display, href: site.phone.href },
            ].map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4 bg-ink/70 px-5 py-4 backdrop-blur-md">
                <Icon className="shrink-0 text-champagne" />
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mist">{label}</p>
                  <p className="truncate text-snow">
                    {href ? (
                      <a
                        href={href}
                        className="link-underline"
                        {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leistungen */}
      <section className="section" aria-labelledby="leistungen">
        <div className="container-lux">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Leistungen"
              title={
                <span id="leistungen">
                  Pflege, die man <span className="text-gold">sieht</span> und spürt.
                </span>
              }
              intro="Von der gründlichen Innenreinigung bis zur Lackversiegelung – wir stimmen den Umfang auf Ihr Fahrzeug und Ihre Wünsche ab."
            />
            <Reveal delay={150}>
              <Link href="/leistungen" className="btn btn-ghost">
                Alle Leistungen <ArrowRightIcon width={18} height={18} />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 120}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video-Split */}
      <section className="relative overflow-hidden bg-coal" aria-labelledby="sorgfalt">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[44rem]">
            <LoopVideo slug={videos.politur.slug} alt={videos.politur.alt} />
            <div className="absolute inset-0 bg-gradient-to-t from-coal/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-coal" />
          </div>
          <div className="container-lux flex items-center py-20 lg:py-28 lg:pl-16 xl:pl-24">
            <Reveal className="max-w-xl">
              <p className="eyebrow">Unser Anspruch</p>
              <h2 id="sorgfalt" className="h-display mt-5 text-[2.4rem] sm:text-5xl">
                Gründlich statt <span className="text-gold">schnell</span>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-mist">
                Eine gute Aufbereitung braucht Zeit und Aufmerksamkeit. Deshalb besprechen wir vorab, was Ihr Fahrzeug
                braucht – und was es kostet.
              </p>
              <ul className="mt-10 space-y-5">
                {[
                  ["Klare Absprache", "Umfang und Preis stehen vor dem Start fest."],
                  ["Persönlich vor Ort", "Ihr Ansprechpartner direkt in Bodenheim."],
                  ["Termin nach Wunsch", "Montag bis Samstag, 10 bis 18 Uhr."],
                ].map(([title, text]) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-champagne/40 text-champagne">
                      <CheckIcon width={15} height={15} />
                    </span>
                    <div>
                      <p className="font-semibold text-snow">{title}</p>
                      <p className="mt-1 text-mist">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section" aria-labelledby="ablauf">
        <div className="container-lux">
          <SectionHeading
            eyebrow="So einfach geht's"
            title={<span id="ablauf">In drei Schritten zum gepflegten Auto.</span>}
            align="center"
          />
          <div className="mt-14 lg:mt-20">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Preise-Teaser */}
      <section className="section relative overflow-hidden bg-ivory text-ink" aria-labelledby="preise">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-champagne/20 blur-3xl" />
        <div className="container-lux relative">
          <SectionHeading
            light
            eyebrow="Preise"
            title={<span id="preise">Transparente Richtpreise.</span>}
            intro="Damit Sie wissen, woran Sie sind: Unsere Pakete starten bei fairen Richtpreisen. Den genauen Preis stimmen wir vorab mit Ihnen ab."
            align="center"
          />
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3 lg:mt-20">
            {teaser.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 120} className={pkg.featured ? "md:-my-4" : ""}>
                <PriceCard pkg={pkg} light />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Link href="/preise" className="btn btn-dark">
              Alle Preise ansehen <ArrowRightIcon width={18} height={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Standort */}
      <section className="section" aria-labelledby="standort">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Standort & Öffnungszeiten"
            title={
              <span id="standort">
                Ihre Autopflege in <span className="text-gold">Bodenheim</span>.
              </span>
            }
            intro={`Sie finden uns in der ${site.address.street} in Bodenheim – nur wenige Minuten von Mainz entfernt. Wir freuen uns auf Kundinnen und Kunden aus Bodenheim, Nackenheim, Gau-Bischofsheim, Harxheim, Lörzweiler, Mainz-Laubenheim, Nierstein und Oppenheim.`}
          />
          <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
            <Reveal>
              <LocationCard />
            </Reveal>
            <Reveal delay={120}>
              <HoursCard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-0" aria-labelledby="faq">
        <div className="container-lux grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title={<span id="faq">Häufige Fragen</span>} />
            <Reveal delay={100}>
              <p className="mt-6 text-mist">
                Noch etwas offen? Rufen Sie uns an: <br />
                <a href={site.phone.href} className="link-underline text-champagne-light">
                  {site.phone.display}
                </a>
              </p>
              <p className="mt-2 text-sm text-mist">{hoursSummary}</p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-8" delay={150}>
            <FAQ />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
