import type { Package } from "@/lib/pricing";
import { whatsappLink } from "@/lib/site";
import { ArrowRightIcon, CheckIcon } from "./icons";
import SheenCard from "./SheenCard";

export default function PriceCard({ pkg, light = false }: { pkg: Package; light?: boolean }) {
  const featured = pkg.featured;
  const message = `Hallo HF Autopflege, ich interessiere mich für das Paket „${pkg.name}“ und hätte gerne einen Termin.`;

  if (light && !featured) {
    return (
      <article className="group relative flex h-full flex-col rounded-3xl border border-ink/10 bg-white/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-champagne-dark/40 hover:shadow-[0_30px_60px_-30px_rgba(60,45,20,0.35)] sm:p-9">
        <CardBody pkg={pkg} message={message} tone="light" />
      </article>
    );
  }

  return (
    <SheenCard
      as="article"
      className={`flex h-full flex-col p-8 sm:p-9 ${
        featured ? "!border-champagne/40 !bg-[linear-gradient(160deg,#23201a,#121418_70%)] shadow-[0_40px_80px_-40px_rgba(201,168,106,0.45)]" : ""
      } ${light ? "!bg-ink" : ""}`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-8 rounded-full bg-champagne px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-ink">
          Beliebt
        </span>
      )}
      <CardBody pkg={pkg} message={message} tone="dark" featured={featured} />
    </SheenCard>
  );
}

function CardBody({
  pkg,
  message,
  tone,
  featured,
}: {
  pkg: Package;
  message: string;
  tone: "light" | "dark";
  featured?: boolean;
}) {
  const dark = tone === "dark";
  return (
    <>
      <h3 className={`font-display text-2xl ${dark ? "text-snow" : "text-ink"}`}>{pkg.name}</h3>
      <p className={`mt-2 text-sm ${dark ? "text-mist" : "text-ink/60"}`}>{pkg.tagline}</p>
      <p className="mt-7 flex items-baseline gap-2">
        <span className={`text-sm ${dark ? "text-mist" : "text-ink/60"}`}>ab</span>
        <span className={`font-display text-5xl tracking-tight ${dark ? "text-snow" : "text-ink"}`}>
          {pkg.price !== null ? pkg.price.toLocaleString("de-DE") : "–"}
        </span>
        <span className={`text-xl ${dark ? "text-champagne" : "text-champagne-dark"}`}>€</span>
      </p>
      <div className={`my-7 h-px ${dark ? "bg-white/[0.08]" : "bg-ink/10"}`} />
      <ul className="flex-1 space-y-3.5">
        {pkg.includes.map((item) => (
          <li key={item} className={`flex gap-3 text-[0.95rem] ${dark ? "text-pearl" : "text-ink/80"}`}>
            <CheckIcon width={18} height={18} className={`mt-0.5 shrink-0 ${dark ? "text-champagne" : "text-champagne-dark"}`} />
            {item}
          </li>
        ))}
      </ul>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn mt-9 w-full ${featured ? "btn-gold" : dark ? "btn-ghost" : "btn-dark"}`}
        aria-label={`Termin anfragen: ${pkg.name} (öffnet WhatsApp)`}
      >
        Termin anfragen
        <ArrowRightIcon width={18} height={18} />
      </a>
    </>
  );
}
