import type { CSSProperties, ReactNode } from "react";
import type { Video } from "@/lib/services";
import LoopVideo from "./LoopVideo";

/** Kopfbereich der Unterseiten mit Video-Hintergrund. */
export default function PageHero({
  eyebrow,
  title,
  intro,
  video,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  video: Video;
  children?: ReactNode;
}) {
  return (
    <section className="grain relative isolate flex min-h-[78svh] items-end overflow-hidden pb-16 pt-36 sm:pb-24 lg:min-h-[72vh]">
      <LoopVideo slug={video.slug} alt={video.alt} priority decorative className="animate-slow-zoom -z-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
      <div className="container-lux">
        <p className="eyebrow animate-hero-in">{eyebrow}</p>
        <h1
          className="h-display animate-hero-in mt-6 max-w-4xl text-[2.75rem] sm:text-6xl lg:text-[5.25rem]"
          style={{ "--delay": "120ms" } as CSSProperties}
        >
          {title}
        </h1>
        <p
          className="animate-hero-in mt-7 max-w-xl text-lg leading-relaxed text-pearl"
          style={{ "--delay": "240ms" } as CSSProperties}
        >
          {intro}
        </p>
        {children && (
          <div className="animate-hero-in mt-10" style={{ "--delay": "360ms" } as CSSProperties}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
