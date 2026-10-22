import type { ReactNode } from "react";

/** Langer Fließtext mit mitlaufender Seitenspalte (Faktenkarte, Preise, Links). */
export default function ArticleLayout({ children, aside }: { children: ReactNode; aside: ReactNode }) {
  return (
    <section className="section pt-14 lg:pt-20">
      <div className="container-lux grid gap-14 lg:grid-cols-12 lg:gap-16">
        <article className="prose-lux lg:col-span-8">{children}</article>
        <aside className="lg:col-span-4">
          <div className="space-y-6 lg:sticky lg:top-28">{aside}</div>
        </aside>
      </div>
    </section>
  );
}
