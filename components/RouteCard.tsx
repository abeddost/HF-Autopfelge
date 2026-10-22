import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { ArrowUpRightIcon, MapPinIcon } from "./icons";
import SheenCard from "./SheenCard";

/** Anfahrt aus einem Ort zur Werkstatt – Fahrzeit, Strecke und Routenlink zu Google Maps. */
export default function RouteCard({
  from,
  minutes,
  km,
  route,
  children,
}: {
  from: string;
  minutes: string;
  km: string;
  route: string;
  children?: ReactNode;
}) {
  const destination = `${site.address.street}, ${site.address.zip} ${site.address.city}`;
  const mapsRoute =
    "https://www.google.com/maps/dir/?api=1&origin=" +
    encodeURIComponent(from) +
    "&destination=" +
    encodeURIComponent(destination);

  return (
    <SheenCard className="flex h-full flex-col p-8 sm:p-10">
      <h3 className="flex items-center gap-3 font-display text-2xl text-snow">
        <MapPinIcon className="text-brand" /> Anfahrt aus {from}
      </h3>
      <dl className="mt-8 grid grid-cols-2 gap-6 border-b border-white/[0.06] pb-8">
        <div>
          <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mist">Fahrzeit</dt>
          <dd className="mt-1 font-display text-3xl text-snow">{minutes}</dd>
        </div>
        <div>
          <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mist">Strecke</dt>
          <dd className="mt-1 font-display text-3xl text-snow">{km}</dd>
        </div>
      </dl>
      <p className="mt-8 leading-relaxed text-pearl">{route}</p>
      {children && <div className="mt-4 leading-relaxed text-mist">{children}</div>}
      <p className="mt-6 text-sm text-mist">
        Ziel: {site.name}, {destination}
      </p>
      <a
        href={mapsRoute}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-brand-light"
      >
        <span className="link-underline">Route in Google Maps öffnen</span>
        <ArrowUpRightIcon width={16} height={16} />
      </a>
    </SheenCard>
  );
}
