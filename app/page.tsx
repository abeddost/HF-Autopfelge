import { Fragment, type CSSProperties } from "react";
import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import CTASection from "@/components/CTASection";
import BeforeAfter from "@/components/BeforeAfter";
import FAQ from "@/components/FAQ";
import { HoursCard, LocationCard } from "@/components/HoursCard";
import { ArrowRightIcon, CheckIcon, ClockIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import JsonLd from "@/components/JsonLd";
import LoopVideo from "@/components/LoopVideo";
import PriceCard from "@/components/PriceCard";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ScrollHero from "@/components/ScrollHero";
import ServiceCard from "@/components/ServiceCard";
import { showcasePairs } from "@/lib/beforeAfter";
import { orte } from "@/lib/pages";
import { packages } from "@/lib/pricing";
import { faqJsonLd } from "@/lib/seo";
import { services, videos } from "@/lib/services";
import { hoursSummary, site } from "@/lib/site";

const heroFrame = (name: string) => ({ src: `/hero/${name}-1920.jpg`, srcSmall: `/hero/${name}-1280.jpg` });
const d = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function HomePage() {
  const teaser = ["innen", "komplett", "aussen"].map((id) => packages.find((p) => p.id === id)!);
  const showcase = showcasePairs();

  const infoBar = (
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
      {[
        { icon: MapPinIcon, label: "Adresse", value: `${site.address.street}, ${site.address.city}`, href: site.mapsUrl },
        { icon: ClockIcon, label: "Öffnungszeiten", value: "Mo–Sa · 10–18 Uhr" },
        { icon: PhoneIcon, label: "Telefon & WhatsApp", value: site.phone.display, href: site.phone.href },
      ].map(({ icon: Icon, label, value, href }) => (
        <li key={label} className="flex items-center gap-4 bg-ink/70 px-5 py-4 backdrop-blur-md">
          <Icon className="shrink-0 text-brand" />
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
  );

  return (
    <>
      <JsonLd data={faqJsonLd()} />

      {/* Hero – Scroll-Szene: schmutzig → Schaum → poliert */}
      <ScrollHero
        dirty={heroFrame("hero-schmutzig")}
        foam={heroFrame("hero-schaum")}
        clean={heroFrame("hero-sauber")}
        alt="Dunkelblaue BMW-3er-Limousine, frisch aufbereitet und poliert, im Studio von HF Autopflege (Symbolbild, KI-generiert)"
        footer={infoBar}
      >
        <h1 className="h-display animate-hero-in max-w-3xl text-[2.4rem] sm:text-6xl lg:text-[4.6rem]" style={d(120)}>
          Autopflege & <span className="text-shine">Fahrzeugaufbereitung</span> in Bodenheim
        </h1>
        <p className="animate-hero-in mt-6 max-w-xl text-lg leading-relaxed text-pearl sm:text-xl" style={d(240)}>
          Gründliche Pflege für Ihr Auto – innen wie außen. Rufen Sie an oder schreiben Sie uns, wir finden einen
          passenden Termin.
        </p>
        <div className="animate-hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={d(360)}>
          <CallButton />
          <WhatsAppButton />
        </div>
      </ScrollHero>
      <div className="container-lux pt-8 sm:hidden">{infoBar}</div>

      {/* Vorher / Nachher */}
      <section className="section relative isolate overflow-hidden" aria-labelledby="vorher-nachher">
        <div aria-hidden className="floor-grid -z-10" />
        <div aria-hidden className="absolute left-1/2 top-1/3 -z-10 h-[38rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
        <div className="container-lux">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Vorher / Nachher"
              title={
                <span id="vorher-nachher">
                  Der Unterschied, <span className="text-shine">zum Anfassen</span>.
                </span>
              }
              intro="Ziehen Sie den Regler und sehen Sie, was eine gründliche Aufbereitung aus einem Auto macht."
            />
            <Reveal delay={150}>
              <Link href="/preisrechner" className="btn btn-ghost">
                Zum Preisrechner <ArrowRightIcon width={18} height={18} />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:gap-10">
            {showcase.map((pair, i) => (
              <Reveal
                key={pair.id}
                delay={i * 120}
                className={
                  i % 2 === 1
                    ? "md:mt-20"
                    : i === showcase.length - 1
                      ? "md:col-span-2 md:mx-auto md:w-2/3" // ungerade Anzahl: letzte Karte mittig
                      : ""
                }
              >
                <div className="relative">
                  <BeforeAfter pair={pair} className="hairline" />
                  <span
                    className="pointer-events-none absolute -bottom-4 left-5 z-20 inline-flex items-center gap-3 rounded-full border border-white/10 bg-ink/80 px-4 py-2 shadow-2xl backdrop-blur-md"
                  >
                    <span className="font-display text-sm text-brand">0{i + 1}</span>
                    <span className="text-sm font-semibold text-snow">{pair.label}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-xs text-mist">Symbolbilder (KI-generiert) – zeigen typische Ergebnisse.</p>
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
                  Pflege, die man <span className="text-shine">sieht</span> und spürt.
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
                Gründlich statt <span className="text-shine">schnell</span>.
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
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand/40 text-brand">
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
        <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand/20 blur-3xl" />
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
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/preisrechner" className="btn btn-primary">
                Preis berechnen <ArrowRightIcon width={18} height={18} />
              </Link>
              <Link href="/preise" className="btn btn-dark">
                Alle Preise ansehen <ArrowRightIcon width={18} height={18} />
              </Link>
            </div>
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
                Ihre Autopflege in <span className="text-shine">Bodenheim</span>.
              </span>
            }
            intro={
              <>
                Sie finden uns in der {site.address.street} in Bodenheim – nur wenige Minuten von Mainz entfernt. Wir
                freuen uns auf Kundinnen und Kunden aus{" "}
                {orte.map((ort, i) => (
                  <Fragment key={ort.path}>
                    <Link href={ort.path} className="link-underline text-pearl hover:text-snow">
                      {ort.label}
                    </Link>
                    {i < orte.length - 2 ? ", " : i === orte.length - 2 ? " und " : ""}
                  </Fragment>
                ))}{" "}
                – und dem ganzen <Link href="/einzugsgebiet" className="link-underline text-pearl hover:text-snow">Einzugsgebiet</Link>.
              </>
            }
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
                <a href={site.phone.href} className="link-underline text-brand-light">
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
