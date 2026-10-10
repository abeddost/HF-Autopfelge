import { openingHours, site } from "@/lib/site";
import { ArrowUpRightIcon, ClockIcon, MapPinIcon } from "./icons";
import OpeningStatus from "./OpeningStatus";
import SheenCard from "./SheenCard";

export function HoursCard() {
  return (
    <SheenCard className="h-full p-8 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="flex items-center gap-3 font-display text-2xl text-snow">
          <ClockIcon className="text-champagne" /> Öffnungszeiten
        </h3>
        <OpeningStatus />
      </div>
      <dl className="mt-8 divide-y divide-white/[0.06]">
        {openingHours.map((h) => (
          <div key={h.day} className="flex justify-between py-3.5 text-[0.95rem]">
            <dt className="text-pearl">{h.label}</dt>
            <dd className={h.open ? "text-snow tabular-nums" : "text-mist"}>
              {h.open ? `${h.open} – ${h.close} Uhr` : "Geschlossen"}
            </dd>
          </div>
        ))}
      </dl>
    </SheenCard>
  );
}

export function LocationCard() {
  return (
    <SheenCard className="flex h-full flex-col p-8 sm:p-10">
      <h3 className="flex items-center gap-3 font-display text-2xl text-snow">
        <MapPinIcon className="text-champagne" /> Standort
      </h3>
      <address className="mt-8 text-lg not-italic leading-relaxed text-pearl">
        {site.name}
        <br />
        {site.address.street}
        <br />
        {site.address.zip} {site.address.city}
      </address>
      <p className="mt-6 flex-1 leading-relaxed text-mist">
        Gut erreichbar aus {site.serviceArea.slice(1, 6).join(", ")} und Umgebung.
      </p>
      <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-8 self-start">
        Route planen
        <ArrowUpRightIcon width={18} height={18} />
      </a>
    </SheenCard>
  );
}
