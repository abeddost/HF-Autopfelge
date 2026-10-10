import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`}>
      <span aria-hidden className="relative grid h-11 w-11 place-items-center rounded-full border border-champagne/50 transition-colors duration-500 group-hover:border-champagne">
        <span className="font-display text-[1.05rem] italic leading-none tracking-tight text-champagne-light">HF</span>
        <span className="absolute inset-1 rounded-full border border-white/5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="sr-only">Startseite: </span>
        <span className="font-display text-[1.15rem] tracking-tight text-snow">HF Autopflege</span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-mist">Bodenheim</span>
      </span>
    </Link>
  );
}
