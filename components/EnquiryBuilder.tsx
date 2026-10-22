"use client";

import { useId, useState } from "react";
import { packages, vehicleSizes } from "@/lib/pricing";
import { whatsappLink } from "@/lib/site";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";

const vehicleTypes = vehicleSizes.map((s) => s.name);
const dayOptions = ["So bald wie möglich", "Diese Woche", "Nächste Woche", "Flexibel"];

/**
 * Stellt eine WhatsApp-Nachricht zusammen. Es werden keine Daten auf der Website
 * gespeichert oder übertragen – die Nachricht wird erst in WhatsApp abgeschickt.
 */
export default function EnquiryBuilder() {
  const id = useId();
  const [pkg, setPkg] = useState(packages.find((p) => p.featured)?.name ?? packages[0].name);
  const [vehicle, setVehicle] = useState(vehicleTypes[1]);
  const [model, setModel] = useState("");
  const [when, setWhen] = useState(dayOptions[0]);
  const [note, setNote] = useState("");

  const message = [
    "Hallo HF Autopflege,",
    `ich interessiere mich für: ${pkg}.`,
    `Fahrzeug: ${vehicle}${model.trim() ? ` (${model.trim()})` : ""}.`,
    `Wunschtermin: ${when}.`,
    note.trim() ? `Anmerkung: ${note.trim()}` : "",
    "Vielen Dank!",
  ]
    .filter(Boolean)
    .join("\n");

  const field =
    "w-full rounded-2xl border border-white/10 bg-ink/60 px-4 py-3.5 text-snow placeholder:text-mist/70 transition-colors focus:border-brand/60 focus:outline-none";
  const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-mist";

  return (
    <form
      className="hairline rounded-[2rem] bg-coal/80 p-6 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
      }}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-whatsapp/15 text-whatsapp">
          <WhatsAppIcon />
        </span>
        <div>
          <h3 className="font-display text-2xl text-snow">Anfrage in 30 Sekunden</h3>
          <p className="text-sm text-mist">Wir stellen Ihre WhatsApp-Nachricht zusammen.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-pkg`} className={label}>
            Leistung
          </label>
          <select id={`${id}-pkg`} value={pkg} onChange={(e) => setPkg(e.target.value)} className={field}>
            {packages.map((p) => (
              <option key={p.id}>{p.name}</option>
            ))}
            <option>Einzelleistung / Beratung</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-vehicle`} className={label}>
            Fahrzeugtyp
          </label>
          <select id={`${id}-vehicle`} value={vehicle} onChange={(e) => setVehicle(e.target.value)} className={field}>
            {vehicleTypes.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-when`} className={label}>
            Wunschtermin
          </label>
          <select id={`${id}-when`} value={when} onChange={(e) => setWhen(e.target.value)} className={field}>
            {dayOptions.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-model`} className={label}>
            Marke & Modell <span className="normal-case tracking-normal text-mist/60">(optional)</span>
          </label>
          <input
            id={`${id}-model`}
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="z. B. VW Golf"
            className={field}
            autoComplete="off"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-note`} className={label}>
            Anmerkung <span className="normal-case tracking-normal text-mist/60">(optional)</span>
          </label>
          <textarea
            id={`${id}-note`}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="z. B. Tierhaare im Kofferraum, Flecken auf dem Sitz …"
            className={`${field} resize-none`}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-8 w-full">
        Nachricht in WhatsApp öffnen
        <ArrowRightIcon width={18} height={18} />
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-mist">
        Es werden keine Daten auf dieser Website gespeichert. Die Nachricht wird erst in WhatsApp von Ihnen abgeschickt.
      </p>
    </form>
  );
}
