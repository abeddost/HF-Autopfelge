"use client";

import { useEffect, useState } from "react";
import { openingHours } from "@/lib/site";

type Status = { open: boolean; text: string };

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function computeStatus(now: Date): Status {
  // Uhrzeit in Bodenheim, unabhängig von der Zeitzone des Besuchers
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));

  const today = openingHours.find((h) => h.day === day);
  if (today?.open && today.close) {
    if (minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
      return { open: true, text: `Jetzt geöffnet · bis ${today.close} Uhr` };
    }
    if (minutes < toMinutes(today.open)) {
      return { open: false, text: `Geschlossen · öffnet heute um ${today.open} Uhr` };
    }
  }
  for (let i = 1; i <= 7; i++) {
    const next = openingHours.find((h) => h.day === (day + i) % 7);
    if (next?.open) {
      const when = i === 1 ? "morgen" : next.label;
      return { open: false, text: `Geschlossen · öffnet ${when} um ${next.open} Uhr` };
    }
  }
  return { open: false, text: "Geschlossen" };
}

export default function OpeningStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(computeStatus(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={`inline-flex min-h-8 items-center gap-2.5 rounded-full border border-white/10 bg-black/30 px-3.5 py-1.5 text-xs font-medium tracking-wide text-pearl backdrop-blur-md ${className}`}
      aria-live="polite"
    >
      <span
        className={`h-2 w-2 shrink-0 rounded-full ${
          status === null ? "bg-mist" : status.open ? "animate-pulse-dot bg-green-400" : "bg-brand"
        }`}
      />
      {status?.text ?? "Mo–Sa 10:00–18:00 Uhr"}
    </span>
  );
}
