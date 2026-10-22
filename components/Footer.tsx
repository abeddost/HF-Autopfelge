import Link from "next/link";
import { leistungsseiten, orte, ratgeber } from "@/lib/pages";
import { hoursSummary, nav, site, whatsappLink } from "@/lib/site";
import Logo from "./Logo";
import { ArrowUpRightIcon, ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-coal pb-28 pt-20 md:pb-12">
      <div className="container-lux">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="full" />
            <p className="mt-6 max-w-sm leading-relaxed text-mist">
              Autopflege und Fahrzeugaufbereitung in Bodenheim – für Kundinnen und Kunden aus Bodenheim, Mainz und
              Rheinhessen.
            </p>
          </div>

          {/* NAP-Block: Name, Adresse, Telefon – identisch mit Google-Unternehmensprofil halten */}
          <address className="not-italic lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">Kontakt</h2>
            <ul className="mt-6 space-y-4 text-pearl">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 shrink-0 text-mist" />
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                  {site.name}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </a>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 shrink-0 text-mist" />
                <a href={site.phone.href} className="link-underline">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 shrink-0 text-mist" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-underline">
                  WhatsApp-Nachricht
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 shrink-0 text-mist" />
                <span>{hoursSummary}</span>
              </li>
            </ul>
          </address>

          <nav aria-label="Footer-Navigation" className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">Seiten</h2>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex items-center gap-1.5 text-pearl hover:text-snow">
                    <span className="link-underline">{item.label}</span>
                    <ArrowUpRightIcon width={14} height={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* SEO-Linkspalten: Leistungen, Orte, Ratgeber (Daten aus lib/pages.ts) */}
        <div className="mt-16 grid gap-12 border-t border-white/[0.06] pt-14 sm:grid-cols-2 lg:grid-cols-12">
          <FooterLinks title="Leistungen" links={leistungsseiten} className="lg:col-span-4" />
          <FooterLinks
            title="Autoaufbereitung in"
            links={orte}
            href="/einzugsgebiet"
            columns
            className="lg:col-span-5"
          />
          <FooterLinks title="Ratgeber" links={ratgeber} href="/ratgeber" className="lg:col-span-3" />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.06] pt-8 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="link-underline hover:text-snow">
              Impressum
            </Link>
            <Link href="/datenschutz" className="link-underline hover:text-snow">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
  href,
  columns = false,
  className = "",
}: {
  title: string;
  links: { path: string; label: string }[];
  href?: string;
  columns?: boolean;
  className?: string;
}) {
  return (
    <nav aria-label={title} className={className}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
        {href ? (
          <Link href={href} className="link-underline">
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <ul className={`mt-6 text-sm ${columns ? "gap-x-8 sm:columns-2 [&>li+li]:mt-3" : "space-y-3"}`}>
        {links.map((link) => (
          <li key={link.path} className="break-inside-avoid">
            <Link href={link.path} className="link-underline text-mist hover:text-snow">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
