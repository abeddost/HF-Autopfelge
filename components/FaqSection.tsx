import { faqJsonLd } from "@/lib/seo";
import type { FaqItem } from "@/lib/services";
import { hoursSummary, site } from "@/lib/site";
import FAQ from "./FAQ";
import JsonLd from "./JsonLd";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Seiteneigene FAQ mit FAQPage-JSON-LD. */
export default function FaqSection({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section className="section" aria-labelledby="faq">
      <JsonLd data={faqJsonLd(items)} />
      <div className="container-lux grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title={<span id="faq">{title}</span>} />
          <Reveal delay={100}>
            <p className="mt-6 text-mist">
              Ihre Frage ist nicht dabei? Rufen Sie an: <br />
              <a href={site.phone.href} className="link-underline text-brand-light">
                {site.phone.display}
              </a>
            </p>
            <p className="mt-2 text-sm text-mist">{hoursSummary}</p>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-8" delay={150}>
          <FAQ items={items} />
        </Reveal>
      </div>
    </section>
  );
}
