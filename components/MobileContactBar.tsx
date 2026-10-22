import { site, whatsappLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

/** Fixierte Kontaktleiste am unteren Bildschirmrand – nur auf Mobilgeräten. */
export default function MobileContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-ink/85 px-3 pt-3 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-2.5">
        <a href={site.phone.href} className="btn btn-primary min-h-[3.25rem] w-full px-3" aria-label={`Anrufen: ${site.phone.display}`}>
          <PhoneIcon />
          Anrufen
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost min-h-[3.25rem] w-full px-3"
          aria-label="WhatsApp-Nachricht schreiben (öffnet WhatsApp)"
        >
          <WhatsAppIcon className="text-whatsapp" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
