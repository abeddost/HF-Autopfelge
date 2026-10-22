import { site, whatsappLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

type Variant = "primary" | "ghost" | "dark";

export function CallButton({
  variant = "primary",
  label = "Jetzt anrufen",
  showNumber = false,
  className = "",
}: {
  variant?: Variant;
  label?: string;
  showNumber?: boolean;
  className?: string;
}) {
  return (
    <a
      href={site.phone.href}
      className={`btn btn-${variant} ${className}`}
    >
      <PhoneIcon />
      <span>{showNumber ? site.phone.display : label}</span>
    </a>
  );
}

export function WhatsAppButton({
  variant = "ghost",
  label = "Per WhatsApp anfragen",
  text,
  className = "",
}: {
  variant?: Variant;
  label?: string;
  text?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${variant} ${className}`}
      aria-label={`${label} (öffnet WhatsApp)`}
    >
      <WhatsAppIcon className="text-whatsapp" />
      <span>{label}</span>
    </a>
  );
}
