import type { Metadata } from "next";
import type { ReactNode } from "react";
import EnquiryBuilder from "@/components/EnquiryBuilder";
import { HoursCard, LocationCard } from "@/components/HoursCard";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SheenCard from "@/components/SheenCard";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { videos } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/kontakt",
  title: "Kontakt & Termin – Autopflege Bodenheim | HF Autopflege",
  description:
    "Termin bei HF Autopflege in Bodenheim anfragen: telefonisch unter 0176 62878366 oder per WhatsApp. Hilgestraße 14, 55294 Bodenheim. Mo–Sa 10–18 Uhr.",
});

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Kontakt", path: "/kontakt" }])} />
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Termin anfragen – <span className="text-shine">ganz einfach.</span>
          </>
        }
        intro="Rufen Sie an oder schreiben Sie uns per WhatsApp. Wir melden uns schnellstmöglich und finden gemeinsam einen passenden Termin."
        video={videos.innenraum}
      />

      <section className="section pt-16 lg:pt-24" aria-labelledby="kontaktwege">
        <h2 id="kontaktwege" className="sr-only">
          Kontaktmöglichkeiten
        </h2>
        <div className="container-lux grid gap-6 md:grid-cols-2">
          <Reveal>
            <SheenCard as="a" href={site.phone.href} className="group block p-8 sm:p-10">
              <ContactTile
                icon={<PhoneIcon width={26} height={26} />}
                label="Anrufen"
                value={site.phone.display}
                hint="Mo–Sa, 10:00–18:00 Uhr"
              />
            </SheenCard>
          </Reveal>
          <Reveal delay={120}>
            <SheenCard as="a" href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group block p-8 sm:p-10">
              <ContactTile
                icon={<WhatsAppIcon width={26} height={26} className="text-whatsapp" />}
                label="WhatsApp"
                value="Nachricht schreiben"
                hint="Gerne mit Fotos Ihres Fahrzeugs"
              />
            </SheenCard>
          </Reveal>
        </div>

        <div className="container-lux mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <LocationCard />
          </Reveal>
          <Reveal delay={120}>
            <HoursCard />
          </Reveal>
        </div>
      </section>

      <section className="section bg-coal" aria-labelledby="anfrage">
        <div className="container-lux grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Schnellanfrage"
              title={<span id="anfrage">Sagen Sie uns, was Ihr Auto braucht.</span>}
              intro="Ein paar Angaben genügen – wir bereiten die WhatsApp-Nachricht für Sie vor."
            />
          </div>
          <Reveal className="lg:col-span-7" delay={150}>
            <EnquiryBuilder />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactTile({ icon, label, value, hint }: { icon: ReactNode; label: string; value: string; hint: string }) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <span className="grid h-14 w-14 place-items-center rounded-2xl border border-brand/30 bg-brand/[0.06] text-brand">
          {icon}
        </span>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-mist">{label}</p>
        <p className="mt-2 font-display text-3xl text-snow sm:text-4xl">{value}</p>
        <p className="mt-2 text-mist">{hint}</p>
      </div>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 text-snow transition-all duration-500 group-hover:border-brand-dark group-hover:bg-brand-dark group-hover:text-white">
        <ArrowRightIcon width={18} height={18} />
      </span>
    </div>
  );
}
