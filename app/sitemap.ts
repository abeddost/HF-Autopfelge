import type { MetadataRoute } from "next";
import { seoPages } from "@/lib/pages";
import { site } from "@/lib/site";

// Bei inhaltlichen Änderungen an den Kernseiten Datum anpassen.
const coreUpdated = "2026-10-22";

export default function sitemap(): MetadataRoute.Sitemap {
  const core: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/autoaufbereitung-bodenheim", priority: 0.9 },
    { path: "/leistungen", priority: 0.9 },
    { path: "/preise", priority: 0.9 },
    { path: "/preisrechner", priority: 0.8 },
    { path: "/kontakt", priority: 0.8 },
    { path: "/einzugsgebiet", priority: 0.7 },
    { path: "/ratgeber", priority: 0.6 },
  ];
  const corePaths = new Set(core.map((p) => p.path));

  return [
    ...core.map(({ path, priority }) => ({
      url: `${site.url}${path}`,
      lastModified: coreUpdated,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...seoPages
      .filter((p) => !corePaths.has(p.path))
      .map((p) => ({
        url: `${site.url}${p.path}`,
        lastModified: p.updated,
        changeFrequency: "monthly" as const,
        priority: p.kind === "ratgeber" ? 0.6 : 0.8,
      })),
  ];
}
