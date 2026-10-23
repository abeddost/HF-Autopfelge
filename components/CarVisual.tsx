"use client";

import { useId, type ReactNode } from "react";
import type { Zone } from "@/lib/calculator";
import { CheckIcon } from "./icons";

export type View = "aussen" | "innen";

/**
 * Vorschau aus KI-generierten Fotopaaren (gleiches Auto, gleiche Perspektive). Grundlage ist immer
 * das verschmutzte Foto; jede gewählte Leistung blendet in ihrem Bereich das saubere Foto darüber.
 * Originale liegen in source-images/vorher-nachher/, Web-Versionen erzeugt `npm run photos`.
 * Koordinaten in Pixeln der Originalfotos (1915 × 821).
 */
const W = 1915;
const H = 821;
const photo = (name: string) => `/vorher-nachher/${name}.jpg`;

/** Polygon als Punktliste „x,y x,y …“ oder Kreis als [cx, cy, r]. */
type Shape = string | [number, number, number];

type Region = {
  src: string;
  /** Bereich wird sauber, sobald eine dieser Zonen gewählt ist. */
  zones: Zone[];
  /** Ohne Angabe: ganzes Bild. */
  shapes?: Shape[];
  /** Ausgesparte Bereiche, die eigene Leistungen haben. */
  cut?: Shape[];
};

// Außen
const WHEELS: Shape[] = [
  [443, 557, 134],
  [1522, 557, 134],
];
const HEADLIGHT: Shape = "1630,405 1660,390 1722,390 1760,404 1762,448 1730,454 1688,448 1648,428";
const WINDOWS: Shape =
  "466,294 488,246 536,206 600,184 700,170 830,163 960,166 1062,178 1134,204 1202,250 1252,300 1246,326 1196,324 1192,292 1164,266 1112,266 1104,298 1108,318 800,306 600,298";
const exteriorParts = [...WHEELS, HEADLIGHT, WINDOWS];

const exterior: Region[] = [
  { src: photo("aussen-gewaschen"), zones: ["lackSchmutz"], cut: exteriorParts },
  { src: photo("aussen-sauber"), zones: ["glanz", "swirls", "kratzer"], cut: exteriorParts },
  { src: photo("aussen-sauber"), zones: ["felgen"], shapes: WHEELS },
  { src: photo("aussen-sauber"), zones: ["scheinwerfer"], shapes: [HEADLIGHT] },
  { src: photo("aussen-sauber"), zones: ["scheibeAussen"], shapes: [WINDOWS] },
];

// Innen
const SEATS: Shape[] = [
  "722,92 760,64 822,64 852,92 852,190 912,206 992,330 1004,522 912,566 760,494 698,252 716,192",
  "1088,62 1150,40 1290,44 1314,100 1312,238 1382,250 1474,330 1488,764 1078,704 1032,330 1058,252 1086,240",
];
const BENCH: Shape = "0,80 150,190 330,430 560,428 704,500 1012,821 0,821";
const FLOOR: Shape = "718,514 916,514 916,600 1092,622 1092,690 1384,690 1400,821 1012,821 962,752 870,650";
const DASH: Shape[] = ["996,158 1094,164 1094,332 996,332", "1308,196 1496,176 1496,352 1318,352"];
const WINDSHIELD: Shape = "996,34 1060,22 1498,6 1496,176 1308,196 1094,164 996,158";
const HEADLINER: Shape = "686,0 1500,0 1498,6 1060,22 996,34 686,34";

const interior: Region[] = [
  { src: photo("innen-sauber"), zones: ["polster", "tierhaare"], shapes: [BENCH] },
  { src: photo("innen-sauber"), zones: ["staub"], shapes: [FLOOR] },
  { src: photo("innen-sauber"), zones: ["cockpit"], shapes: DASH, cut: SEATS },
  { src: photo("innen-sauber"), zones: ["scheibeInnen"], shapes: [WINDSHIELD], cut: SEATS },
  { src: photo("innen-sauber"), zones: ["himmel"], shapes: [HEADLINER] },
  { src: photo("innen-sauber"), zones: ["polster"], shapes: SEATS },
];

/** Leistungen ohne sichtbaren Schmutz erscheinen als Hinweis im Nachher-Bild. */
const badges: Record<View, Zone[]> = {
  aussen: ["keramik", "scheibeVersiegelt"],
  innen: ["leder", "geruch"],
};

function ShapeEl({ shape, ...props }: { shape: Shape; fill: string; stroke?: string; strokeWidth?: number }) {
  return typeof shape === "string" ? (
    <polygon points={shape} {...props} />
  ) : (
    <circle cx={shape[0]} cy={shape[1]} r={shape[2]} {...props} />
  );
}

function Layer({ show, children }: { show: boolean; children: ReactNode }) {
  return (
    <g className="transition-opacity duration-700 ease-[var(--ease-lux)]" style={{ opacity: show ? 1 : 0 }}>
      {children}
    </g>
  );
}

function Photo({ src }: { src: string }) {
  return <image href={src} width={W} height={H} preserveAspectRatio="none" />;
}

/** Motorraum ist von der Seite nicht zu sehen – deshalb als runde Lupe (unterhalb des „Nachher“-Labels). */
function EngineInset({ clean, uid }: { clean: boolean; uid: string }) {
  const [cx, cy, r] = [1808, 295, 95];
  const img = (name: string) => (
    <image href={photo(name)} x={cx - r} y={cy - r} width={r * 2} height={r * 2} clipPath={`url(#${uid}-engine)`} />
  );
  return (
    <>
      <clipPath id={`${uid}-engine`}>
        <circle cx={cx} cy={cy} r={r} />
      </clipPath>
      {img("motorraum-schmutzig")}
      <Layer show={clean}>{img("motorraum-sauber")}</Layer>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="4" />
    </>
  );
}

const labels: Record<Zone, string> = {
  lackSchmutz: "Lack sauber",
  swirls: "Waschkratzer entfernt",
  kratzer: "leichte Kratzer auspoliert",
  glanz: "Glanz",
  keramik: "Keramikschutz",
  felgen: "Felgen sauber",
  scheinwerfer: "Scheinwerfer klar",
  scheibeAussen: "Scheiben außen sauber",
  scheibeVersiegelt: "Frontscheibe versiegelt",
  motorraum: "Motorraum sauber",
  staub: "Teppiche & Fußraum sauber",
  cockpit: "Cockpit sauber",
  scheibeInnen: "Scheiben innen klar",
  polster: "Polster fleckenfrei",
  leder: "Leder gepflegt",
  himmel: "Dachhimmel sauber",
  geruch: "Gerüche neutralisiert",
  tierhaare: "Tierhaare entfernt",
};

const interiorZones = new Set<Zone>(["staub", "cockpit", "scheibeInnen", "polster", "leder", "himmel", "geruch", "tierhaare"]);

/** Foto eines Autos, dessen Bereiche je nach gewählten Leistungen sauber werden. */
export default function CarVisual({ view, clean }: { view: View; clean: ReadonlySet<Zone> }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const regions = view === "aussen" ? exterior : interior;
  const done = [...clean].filter((z) => interiorZones.has(z) === (view === "innen")).map((z) => labels[z]);
  const shownBadges = badges[view].filter((z) => clean.has(z));

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block h-full w-full"
        role="img"
        aria-label={`Symbolbild ${view === "aussen" ? "außen" : "innen"}: ${done.length ? done.join(", ") : "ungereinigt"}`}
      >
        <defs>
          <filter id={`${uid}-feather`}>
            <feGaussianBlur stdDeviation="3" />
          </filter>
          {regions.map((region, i) => (
            <mask key={i} id={`${uid}-m${i}`} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
              <g filter={`url(#${uid}-feather)`}>
                {region.shapes ? (
                  region.shapes.map((s, j) => <ShapeEl key={j} shape={s} fill="#fff" stroke="#fff" strokeWidth={6} />)
                ) : (
                  <rect width={W} height={H} fill="#fff" />
                )}
                {region.cut?.map((s, j) => <ShapeEl key={`c${j}`} shape={s} fill="#000" />)}
              </g>
            </mask>
          ))}
        </defs>

        <Photo src={photo(view === "aussen" ? "aussen-schmutzig" : "innen-schmutzig")} />
        {regions.map((region, i) => (
          <Layer key={i} show={region.zones.some((z) => clean.has(z))}>
            <g mask={`url(#${uid}-m${i})`}>
              <Photo src={region.src} />
            </g>
          </Layer>
        ))}
        {view === "aussen" && <EngineInset clean={clean.has("motorraum")} uid={uid} />}
      </svg>

      {shownBadges.length > 0 && (
        <ul className="pointer-events-none absolute bottom-2.5 right-2.5 flex flex-col items-end gap-1.5">
          {shownBadges.map((z) => (
            <li
              key={z}
              className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-brand-dark/85 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur"
            >
              <CheckIcon width={10} height={10} strokeWidth={3} />
              {labels[z]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
