import { seoPage } from "@/lib/pages";
import { ArrowRightIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SheenCard from "./SheenCard";

/** Linkraster zu verwandten Orts-, Leistungs- und Ratgeberseiten (interne Verlinkung). */
export default function RelatedLinks({
  eyebrow = "Weiterlesen",
  title,
  paths,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  paths: string[];
  className?: string;
}) {
  const pages = paths.map(seoPage);
  return (
    <section className={`section ${className}`} aria-label={title}>
      <div className="container-lux">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, i) => (
            <Reveal as="li" key={page.path} delay={(i % 3) * 100}>
              <SheenCard as="a" href={page.path} className="group flex h-full flex-col p-7">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand">
                  {page.kind === "ort" ? `Autoaufbereitung · ${page.drive}` : page.kind === "ratgeber" ? "Ratgeber" : "Leistung"}
                </span>
                <span className="mt-3 font-display text-2xl text-snow">{page.label}</span>
                <span className="mt-2 flex-1 leading-relaxed text-mist">{page.summary}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-light">
                  <span className="link-underline">Mehr erfahren</span>
                  <ArrowRightIcon width={16} height={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </SheenCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
