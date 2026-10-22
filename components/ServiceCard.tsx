import Link from "next/link";
import type { Service } from "@/lib/services";
import { ArrowRightIcon } from "./icons";
import LoopVideo from "./LoopVideo";
import SheenCard from "./SheenCard";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <SheenCard as="article" className="group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.5rem]">
        <LoopVideo
          slug={service.video.slug}
          alt={service.video.alt}
          className="transition-transform duration-[1.6s] ease-[var(--ease-lux)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/10 to-transparent" />
        <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-snow backdrop-blur-md">
          {service.eyebrow}
        </span>
        <span className="absolute bottom-4 right-6 font-display text-5xl text-white/20">0{index + 1}</span>
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3 className="font-display text-[1.7rem] leading-tight text-snow">{service.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-mist">{service.text}</p>
        <Link
          href={`/leistungen#${service.id}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-light"
        >
          <span className="link-underline">Mehr erfahren</span>
          <ArrowRightIcon width={16} height={16} className="transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </div>
    </SheenCard>
  );
}
