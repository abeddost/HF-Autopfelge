import type { ReactNode } from "react";
import { CallButton, WhatsAppButton } from "./ContactButtons";
import SheenCard from "./SheenCard";

/** Kompakte Faktenkarte für die Seitenspalte langer Texte – mit Anfrage-Buttons. */
export default function QuickFacts({
  title,
  facts,
  whatsappText,
  children,
}: {
  title: string;
  facts: [label: string, value: ReactNode][];
  whatsappText: string;
  children?: ReactNode;
}) {
  return (
    <SheenCard className="p-7 sm:p-8">
      <p className="font-display text-xl text-snow">{title}</p>
      <dl className="mt-6 divide-y divide-white/[0.06]">
        {facts.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 py-3 text-[0.95rem]">
            <dt className="text-mist">{label}</dt>
            <dd className="text-right text-snow">{value}</dd>
          </div>
        ))}
      </dl>
      {children && <div className="mt-5 text-sm leading-relaxed text-mist">{children}</div>}
      <div className="mt-7 grid gap-3">
        <WhatsAppButton variant="primary" label="Termin anfragen" text={whatsappText} />
        <CallButton variant="ghost" showNumber />
      </div>
    </SheenCard>
  );
}
