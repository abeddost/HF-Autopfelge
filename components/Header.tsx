"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { nav, site, whatsappLink } from "@/lib/site";
import Logo from "./Logo";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-lux)] ${
        solid ? "border-b border-white/[0.06] bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className={`container-lux flex items-center justify-between transition-all duration-700 ${solid ? "h-[4.5rem]" : "h-[5.5rem]"}`}>
        <Logo />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-10 md:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm tracking-wide transition-colors duration-300 hover:text-snow ${
                  active ? "text-snow" : "text-pearl/80"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-brand transition-all duration-500 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2.5 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-snow transition-colors duration-300 hover:border-brand/60 lg:inline-flex"
          >
            <PhoneIcon width={16} height={16} className="text-brand" />
            {site.phone.display}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-snow md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobiles Menü */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/[0.06] bg-ink md:hidden"
      >
        <nav aria-label="Mobile Navigation" className="container-lux flex flex-col pt-6">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="animate-hero-in flex items-center justify-between border-b border-white/[0.06] py-5 font-display text-3xl text-snow"
              style={{ "--delay": `${i * 60}ms` } as CSSProperties}
            >
              {item.label}
              <span className="text-base text-brand">0{i + 1}</span>
            </Link>
          ))}
          <div className="mt-10 grid gap-3 pb-10">
            <a href={site.phone.href} className="btn btn-primary w-full">
              <PhoneIcon /> {site.phone.display}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full">
              <WhatsAppIcon className="text-whatsapp" /> WhatsApp-Nachricht
            </a>
            <p className="mt-4 text-center text-sm text-mist">
              {site.address.street}, {site.address.zip} {site.address.city}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
