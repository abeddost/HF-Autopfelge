import { extras, formatPrice } from "@/lib/pricing";

export default function ExtrasTable({ light = false }: { light?: boolean }) {
  return (
    <ul className={`divide-y ${light ? "divide-ink/10 border-y border-ink/10" : "divide-white/[0.08] border-y border-white/[0.08]"}`}>
      {extras.map((extra) => (
        <li key={extra.name} className="flex items-baseline gap-4 py-5">
          <span className={`text-[1.05rem] ${light ? "text-ink" : "text-snow"}`}>
            {extra.name}
            {extra.note && extra.price !== null && (
              <span className={`ml-2 text-sm ${light ? "text-ink/50" : "text-mist"}`}>({extra.note})</span>
            )}
          </span>
          <span
            aria-hidden
            className={`min-w-6 flex-1 translate-y-[-4px] border-b border-dotted ${light ? "border-ink/20" : "border-white/15"}`}
          />
          <span className={`whitespace-nowrap font-display text-xl tabular-nums ${light ? "text-ink" : "text-champagne-light"}`}>
            {formatPrice(extra.price, extra.note ?? "auf Anfrage")}
          </span>
        </li>
      ))}
    </ul>
  );
}
