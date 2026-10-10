import { CalendarIcon, ChatIcon, KeyIcon } from "./icons";
import Reveal from "./Reveal";

const steps = [
  {
    icon: ChatIcon,
    title: "Anfragen",
    text: "Kurz anrufen oder per WhatsApp schreiben – gerne mit ein paar Fotos Ihres Fahrzeugs.",
  },
  {
    icon: CalendarIcon,
    title: "Termin abstimmen",
    text: "Wir besprechen Umfang und Preis vorab und vereinbaren einen Termin, der Ihnen passt.",
  },
  {
    icon: KeyIcon,
    title: "Fahrzeug abholen",
    text: "Sie holen Ihr Auto gepflegt in Bodenheim ab – und genießen das Ergebnis.",
  },
];

export default function ProcessSteps() {
  return (
    <ol className="grid gap-5 md:grid-cols-3 md:gap-6">
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 120} className="relative">
          <div className="hairline relative h-full rounded-3xl bg-coal/60 p-8 sm:p-9">
            <div className="flex items-center justify-between">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-champagne/30 bg-champagne/[0.06] text-champagne">
                <step.icon width={24} height={24} />
              </span>
              <span className="font-display text-6xl leading-none text-white/[0.06]">0{i + 1}</span>
            </div>
            <h3 className="mt-8 font-display text-2xl text-snow">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-mist">{step.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
