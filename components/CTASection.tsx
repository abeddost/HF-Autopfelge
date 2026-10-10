import type { ReactNode } from "react";
import { hoursSummary } from "@/lib/site";
import { videos } from "@/lib/services";
import { CallButton, WhatsAppButton } from "./ContactButtons";
import LoopVideo from "./LoopVideo";
import Reveal from "./Reveal";

export default function CTASection({
  title = (
    <>
      Bereit für <span className="text-gold">neuen Glanz?</span>
    </>
  ),
  text = "Rufen Sie an oder schreiben Sie uns per WhatsApp – wir besprechen Ihr Fahrzeug und finden einen passenden Termin.",
}: {
  title?: ReactNode;
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="cta-title">
      <LoopVideo slug={videos.werkstatt.slug} alt={videos.werkstatt.alt} decorative className="-z-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(11,12,14,0.35),rgba(11,12,14,0.9)_70%)]" />
      <div className="container-lux section text-center">
        <Reveal>
          <p className="eyebrow justify-center">Termin anfragen</p>
          <h2 id="cta-title" className="h-display mx-auto mt-6 max-w-3xl text-[2.6rem] sm:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-pearl">{text}</p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <CallButton showNumber />
            <WhatsAppButton />
          </div>
          <p className="mt-8 text-sm text-mist">{hoursSummary}</p>
        </Reveal>
      </div>
    </section>
  );
}
