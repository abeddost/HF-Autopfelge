import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/** Schwebender WhatsApp-Button – ab Tablet-Breite (mobil übernimmt die Kontaktleiste). */
export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp-Nachricht schreiben (öffnet WhatsApp)"
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-0 rounded-full border border-white/10 bg-graphite/90 py-2.5 pl-2.5 pr-2.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500 hover:gap-3 hover:border-whatsapp/50 hover:pr-5 md:inline-flex"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-whatsapp text-white">
        <WhatsAppIcon width={22} height={22} />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-snow transition-all duration-500 group-hover:max-w-40">
        Termin per WhatsApp
      </span>
    </a>
  );
}
