import { faqs } from "@/lib/services";
import { PlusIcon } from "./icons";

export default function FAQ() {
  return (
    <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
      {faqs.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg text-snow transition-colors hover:text-champagne-light sm:text-xl [&::-webkit-details-marker]:hidden">
            <span className="font-display">{item.q}</span>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-champagne transition-transform duration-500 group-open:rotate-45">
              <PlusIcon width={18} height={18} />
            </span>
          </summary>
          <p className="max-w-2xl pb-7 pr-14 leading-relaxed text-mist">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
