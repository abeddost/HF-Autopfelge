import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "./JsonLd";

/** Sichtbare Brotkrumen unter dem Hero – inklusive BreadcrumbList-JSON-LD. */
export default function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Start", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Brotkrumen" className="container-lux pt-8">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-mist">
          {all.map((item, i) => {
            const last = i === all.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-pearl">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.path} className="link-underline hover:text-snow">
                      {item.name}
                    </Link>
                    <span aria-hidden className="text-steel">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
