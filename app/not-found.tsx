import Link from "next/link";
import { CallButton } from "@/components/ContactButtons";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pt-28">
      <div className="container-lux text-center">
        <p className="eyebrow justify-center">Fehler 404</p>
        <h1 className="h-display mt-6 text-5xl sm:text-7xl">
          Diese Seite <span className="text-gold">glänzt</span> durch Abwesenheit.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-mist">Die gesuchte Seite gibt es leider nicht.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-ghost">
            Zur Startseite
          </Link>
          <CallButton />
        </div>
      </div>
    </section>
  );
}
