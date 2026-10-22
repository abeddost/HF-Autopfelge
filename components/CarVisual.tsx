"use client";

import { useId, type ReactNode } from "react";
import type { Zone } from "@/lib/calculator";

export type View = "aussen" | "innen";

/**
 * Eigene Vorher/Nachher-Fotos: hier je Ansicht eintragen (Dateien in public/), dann zeigt der
 * Vergleichsregler die Fotos statt der Illustration. Beispiel:
 * aussen: { before: "/vorher-nachher/aussen-vorher.jpg", after: "/vorher-nachher/aussen-nachher.jpg" }
 */
export const photoSlots: Partial<Record<View, { before: string; after: string }>> = {};

/** Deterministische Pseudo-Zufallspunkte – gleich auf Server und Client. */
function points(count: number, seed: number, [x, y, w, h]: [number, number, number, number]) {
  let s = seed;
  const rnd = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
  return Array.from({ length: count }, () => ({ x: x + rnd() * w, y: y + rnd() * h, r: rnd() }));
}

function Layer({ show, children }: { show: boolean; children: ReactNode }) {
  return (
    <g className="transition-opacity duration-700 ease-[var(--ease-lux)]" style={{ opacity: show ? 1 : 0 }}>
      {children}
    </g>
  );
}

/** Kleiner Funkel-Stern als „sauber“-Signal. */
function Sparkle({ x, y, size = 10, show }: { x: number; y: number; size?: number; show: boolean }) {
  const s = size;
  return (
    <Layer show={show}>
      <path
        d={`M ${x} ${y - s} Q ${x + s * 0.18} ${y - s * 0.18} ${x + s} ${y} Q ${x + s * 0.18} ${y + s * 0.18} ${x} ${y + s} Q ${x - s * 0.18} ${y + s * 0.18} ${x - s} ${y} Q ${x - s * 0.18} ${y - s * 0.18} ${x} ${y - s} Z`}
        fill="#ffffff"
        opacity={0.85}
      />
    </Layer>
  );
}

const BODY =
  "M 80 250 L 80 196 Q 82 162 122 154 L 248 140 Q 300 84 372 78 L 512 78 Q 552 80 604 132 L 692 148 Q 736 158 738 200 L 738 250 L 648 250 A 58 58 0 0 0 532 250 L 268 250 A 58 58 0 0 0 152 250 Z";
const WINDOW_REAR = "M 266 138 Q 308 96 372 90 L 440 90 L 440 138 Z";
const WINDOW_FRONT = "M 452 90 L 510 90 Q 546 93 588 136 L 452 138 Z";
const HEADLIGHT = "M 700 160 L 732 168 Q 738 178 733 186 L 704 182 Q 696 170 700 160 Z";

const speckle = points(90, 7, [84, 150, 650, 98]);
const swirlRings = [14, 24, 34, 46, 58, 72];
const beads = points(22, 11, [130, 92, 590, 120]);
const windowBeads = points(12, 23, [280, 96, 300, 38]);

function Exterior({ clean, uid }: { clean: ReadonlySet<Zone>; uid: string }) {
  const dirty = (z: Zone) => !clean.has(z);
  const id = (name: string) => `${uid}-${name}`;
  const wheels = [210, 590];

  return (
    <>
      <defs>
        <linearGradient id={id("paint")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b7bff" />
          <stop offset="0.55" stopColor="#1846b8" />
          <stop offset="1" stopColor="#0b1d4f" />
        </linearGradient>
        <linearGradient id={id("mud")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.45" stopColor="#6e5434" stopOpacity="0" />
          <stop offset="1" stopColor="#6e5434" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id={id("shine")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.35" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("beam")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e4edff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#e4edff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={id("rim")} cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#f3f1ec" />
          <stop offset="1" stopColor="#7d838d" />
        </radialGradient>
        <clipPath id={id("body")}>
          <path d={BODY} />
        </clipPath>
        <clipPath id={id("windows")}>
          <path d={WINDOW_REAR} />
          <path d={WINDOW_FRONT} />
        </clipPath>
      </defs>

      <ellipse cx="410" cy="304" rx="340" ry="14" fill="#000" opacity="0.55" />

      {/* Karosserie */}
      <path d={BODY} fill={`url(#${id("paint")})`} />
      <g clipPath={`url(#${id("body")})`}>
        <Layer show={dirty("glanz")}>
          <rect x="0" y="0" width="800" height="330" fill="#a3abba" opacity="0.28" />
        </Layer>
        <Layer show={!dirty("glanz")}>
          <path d="M 120 168 Q 400 150 730 176 L 730 186 Q 400 162 120 180 Z" fill={`url(#${id("shine")})`} />
          <ellipse cx="360" cy="112" rx="120" ry="10" fill="#ffffff" opacity="0.22" />
        </Layer>
        <Layer show={dirty("swirls")}>
          <g fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.32">
            {swirlRings.map((r) => (
              <circle key={r} cx="470" cy="196" r={r} />
            ))}
            {swirlRings.slice(0, 4).map((r) => (
              <circle key={`b${r}`} cx="230" cy="186" r={r} />
            ))}
          </g>
        </Layer>
        <Layer show={dirty("kratzer")}>
          <g stroke="#e8ecf4" strokeWidth="1.4" strokeLinecap="round" opacity="0.75">
            <path d="M 300 200 L 352 188" />
            <path d="M 318 214 L 360 205" />
            <path d="M 610 208 L 650 200" />
          </g>
        </Layer>
        <Layer show={dirty("lackSchmutz")}>
          <rect x="0" y="140" width="800" height="120" fill={`url(#${id("mud")})`} />
          <g fill="#7b6342">
            {speckle.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={0.8 + p.r * 2.2} opacity={0.35 + p.r * 0.5} />
            ))}
          </g>
        </Layer>
        <Layer show={!dirty("keramik")}>
          <g fill="#ffffff">
            {beads.map((p, i) => (
              <g key={i} opacity={0.5}>
                <circle cx={p.x} cy={p.y + 40} r={2 + p.r * 3} opacity={0.35} />
                <circle cx={p.x - 1} cy={p.y + 39} r={0.9} />
              </g>
            ))}
          </g>
        </Layer>
      </g>

      {/* Türen, Griffe, Spiegel */}
      <g fill="none" stroke="#000" strokeOpacity="0.35" strokeWidth="1.5">
        <path d="M 446 140 L 446 246" />
        <path d="M 300 142 Q 292 200 296 246" />
        <path d="M 598 140 Q 606 200 600 246" />
      </g>
      <rect x="400" y="158" width="28" height="6" rx="3" fill="#0b0c0e" opacity="0.55" />
      <rect x="550" y="158" width="28" height="6" rx="3" fill="#0b0c0e" opacity="0.55" />
      <path d="M 572 130 L 598 128 L 600 142 L 578 142 Z" fill="#14306f" />

      {/* Scheiben */}
      <path d={WINDOW_REAR} fill="#0d1726" />
      <path d={WINDOW_FRONT} fill="#0d1726" />
      <g clipPath={`url(#${id("windows")})`}>
        <path d="M 300 140 L 360 86 L 380 86 L 320 140 Z" fill="#ffffff" opacity="0.08" />
        <path d="M 480 140 L 534 86 L 548 86 L 494 140 Z" fill="#ffffff" opacity="0.08" />
        <Layer show={dirty("scheibeAussen")}>
          <rect x="250" y="80" width="360" height="70" fill="#8a7a5c" opacity="0.5" />
          <path d="M 300 136 Q 360 104 430 128 M 470 132 Q 520 110 580 132" stroke="#c9b48a" strokeWidth="2" fill="none" opacity="0.45" />
        </Layer>
        <Layer show={!dirty("scheibeVersiegelt")}>
          <g fill="#ffffff">
            {windowBeads.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={1.5 + p.r * 2.5} opacity={0.4} />
            ))}
          </g>
        </Layer>
      </g>

      {/* Lichter */}
      <path d="M 82 170 L 102 166 L 102 186 L 82 188 Z" fill="#b3122a" />
      <path d={HEADLIGHT} fill="#e4edff" />
      <Layer show={!dirty("scheinwerfer")}>
        <path d="M 738 176 L 800 156 L 800 200 Z" fill={`url(#${id("beam")})`} />
      </Layer>
      <Layer show={dirty("scheinwerfer")}>
        <path d={HEADLIGHT} fill="#c9a03e" opacity="0.88" />
      </Layer>
      <Sparkle x={716} y={160} size={9} show={!dirty("scheinwerfer")} />

      {/* Räder */}
      {wheels.map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="250" r="47" fill="#0b0c0e" />
          <circle cx={cx} cy="250" r="30" fill={`url(#${id("rim")})`} />
          <g stroke="#4a4f57" strokeWidth="4" strokeLinecap="round">
            {[0, 72, 144, 216, 288].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return <line key={deg} x1={cx} y1={250} x2={cx + Math.cos(rad) * 26} y2={250 + Math.sin(rad) * 26} />;
            })}
          </g>
          <circle cx={cx} cy="250" r="6" fill="#2a2e35" />
          <Layer show={dirty("felgen")}>
            <circle cx={cx} cy="250" r="30" fill="#4d3b26" opacity="0.72" />
            {points(14, cx, [cx - 26, 224, 52, 52]).map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={1 + p.r * 1.8} fill="#2b2016" opacity="0.7" />
            ))}
          </Layer>
          <Sparkle x={cx + 18} y={226} size={8} show={!dirty("felgen")} />
        </g>
      ))}

      <Sparkle x={330} y={110} size={11} show={!dirty("glanz")} />
      <Sparkle x={520} y={170} size={8} show={!dirty("glanz")} />

      {/* Motorraum-Lupe */}
      <path d="M 650 138 L 690 104" stroke="#8b9099" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="722" cy="72" r="42" fill="#121418" stroke="#2a2e35" strokeWidth="2" />
      <g>
        <rect x="696" y="58" width="52" height="30" rx="5" fill="#4a505a" />
        <rect x="704" y="50" width="12" height="10" rx="2" fill="#5e6570" />
        <rect x="726" y="50" width="12" height="10" rx="2" fill="#5e6570" />
        <circle cx="702" cy="92" r="6" fill="#2a2e35" stroke="#6b7280" />
        <path d="M 748 70 L 758 66 L 758 84 L 748 80" fill="#5e6570" />
      </g>
      <Layer show={dirty("motorraum")}>
        <circle cx="722" cy="72" r="40" fill="#5a4630" opacity="0.55" />
        {points(18, 5, [692, 46, 60, 52]).map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={1 + p.r * 2} fill="#2b2016" opacity="0.75" />
        ))}
      </Layer>
      <Sparkle x={742} y={50} size={8} show={!dirty("motorraum")} />
      <text x="722" y="132" textAnchor="middle" fontSize="11" fill="#8b9099" letterSpacing="2">
        MOTORRAUM
      </text>

      {/* Keramik-Schild */}
      <Layer show={!dirty("keramik")}>
        <g transform="translate(40 30)">
          <path d="M 18 0 L 0 7 V 20 C 0 31 8 40 18 44 C 28 40 36 31 36 20 V 7 Z" fill="#004ae1" />
          <path d="m 10 22 l 6 6 l 11 -12" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="46" y="27" fontSize="13" fill="#8fb4ff" letterSpacing="1.5">
            KERAMIK-SCHUTZ
          </text>
        </g>
      </Layer>
    </>
  );
}

const SEAT_FABRIC = "#5d6573";
const crumbs = points(40, 3, [80, 262, 620, 26]);
const hairs = points(46, 9, [130, 196, 170, 90]);
const dashDust = points(30, 13, [570, 140, 180, 80]);

function Interior({ clean, uid }: { clean: ReadonlySet<Zone>; uid: string }) {
  const dirty = (z: Zone) => !clean.has(z);
  const id = (name: string) => `${uid}-${name}`;
  const seats = [
    { x: 150, w: 170 }, // Rückbank
    { x: 380, w: 150 }, // Fahrersitz
  ];

  return (
    <>
      <defs>
        <linearGradient id={id("sheen")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Kabine */}
      <path d="M 40 300 L 40 112 Q 58 40 200 32 L 600 32 Q 704 36 760 112 L 760 300 Z" fill="#171a20" stroke="#ffffff" strokeOpacity="0.1" />

      {/* Dachhimmel */}
      <path d="M 62 96 Q 74 52 200 44 L 600 44 Q 690 48 742 102 L 742 116 Q 690 64 600 60 L 200 60 Q 84 66 74 108 Z" fill="#3b4049" />
      <Layer show={dirty("himmel")}>
        <ellipse cx="300" cy="53" rx="28" ry="6" fill="#7a6240" opacity="0.7" />
        <ellipse cx="478" cy="54" rx="18" ry="5" fill="#7a6240" opacity="0.6" />
        <ellipse cx="160" cy="62" rx="14" ry="4" fill="#7a6240" opacity="0.55" />
      </Layer>
      <Sparkle x={400} y={52} size={7} show={!dirty("himmel")} />

      {/* Frontscheibe */}
      <path d="M 612 68 Q 690 74 736 122 L 702 152 Q 662 112 600 102 Z" fill="#0d1726" />
      <path d="M 650 82 L 676 92 L 642 126 L 624 116 Z" fill="#ffffff" opacity="0.07" />
      <Layer show={dirty("scheibeInnen")}>
        <path d="M 612 68 Q 690 74 736 122 L 702 152 Q 662 112 600 102 Z" fill="#9b8f75" opacity="0.45" />
        <path d="M 622 90 Q 660 96 700 128 M 616 100 Q 650 104 690 136" stroke="#d6c9a8" strokeWidth="1.5" fill="none" opacity="0.5" />
      </Layer>

      {/* Armaturenbrett */}
      <path d="M 556 168 Q 594 126 700 152 L 760 164 L 760 232 L 604 232 Q 560 214 556 168 Z" fill="#22262d" />
      <rect x="640" y="168" width="64" height="24" rx="5" fill="#0b0d10" />
      <rect x="646" y="174" width="30" height="4" rx="2" fill="#3b7bff" opacity="0.7" />
      <circle cx="588" cy="182" r="34" fill="none" stroke="#3a3f48" strokeWidth="8" />
      <path d="M 588 182 L 620 208" stroke="#3a3f48" strokeWidth="8" strokeLinecap="round" />
      <Layer show={dirty("cockpit")}>
        <g fill="#a8987a">
          {dashDust.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={0.8 + p.r * 1.6} opacity={0.45 + p.r * 0.4} />
          ))}
        </g>
      </Layer>
      <Sparkle x={672} y={160} size={8} show={!dirty("cockpit")} />

      {/* Teppich */}
      <path d="M 70 262 L 720 262 L 720 292 L 70 292 Z" fill="#2a2e35" />
      <Layer show={dirty("staub")}>
        <g>
          {crumbs.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={1 + p.r * 2.4} fill={i % 3 ? "#8a7a5c" : "#c8b68e"} opacity={0.75} />
          ))}
        </g>
      </Layer>

      {/* Sitze */}
      {seats.map(({ x, w }, i) => (
        <g key={x}>
          <rect x={x - 10} y={84} width={34} height={26} rx={10} fill={SEAT_FABRIC} transform={`rotate(-10 ${x + 7} 97)`} />
          <path
            d={`M ${x - 6} 116 Q ${x + 16} 106 ${x + 38} 118 L ${x + 50} 236 Q ${x + 34} 246 ${x + 12} 238 L ${x - 18} 132 Q ${x - 20} 120 ${x - 6} 116 Z`}
            fill={SEAT_FABRIC}
            stroke="#ffffff"
            strokeOpacity="0.08"
          />
          <rect x={x - 6} y={224} width={w} height={34} rx={16} fill="#6a7280" stroke="#ffffff" strokeOpacity="0.08" />
          <Layer show={!dirty("leder")}>
            <path d={`M ${x - 4} 122 Q ${x + 16} 114 ${x + 32} 124 L ${x + 40} 200 Q ${x + 22} 196 ${x + 8} 200 Z`} fill={`url(#${id("sheen")})`} />
            <rect x={x} y={228} width={w - 20} height={8} rx={4} fill="#ffffff" opacity="0.14" />
          </Layer>
          <Layer show={dirty("leder")}>
            <ellipse cx={x + 24} cy={214} rx={18} ry={14} fill="#000000" opacity="0.28" />
            <ellipse cx={x + w - 40} cy={238} rx={22} ry={7} fill="#000000" opacity="0.25" />
          </Layer>
          <Layer show={dirty("polster")}>
            <ellipse cx={x + w * 0.45} cy={240} rx={16} ry={6} fill="#6b4a2a" opacity="0.75" />
            <ellipse cx={x + 16} cy={160 + i * 14} rx={9} ry={12} fill="#6b4a2a" opacity="0.6" />
            {i === 0 && <ellipse cx={x + w * 0.78} cy={236} rx={10} ry={4} fill="#8a5a3a" opacity="0.7" />}
          </Layer>
          <Sparkle x={x + w * 0.6} y={218} size={8} show={!dirty("polster")} />
        </g>
      ))}

      {/* Tierhaare */}
      <Layer show={dirty("tierhaare")}>
        <g stroke="#e6dcc8" strokeWidth="1.1" strokeLinecap="round" opacity="0.85">
          {hairs.map((p, i) => {
            const a = p.r * Math.PI;
            return <line key={i} x1={p.x} y1={p.y} x2={p.x + Math.cos(a) * 7} y2={p.y + Math.sin(a) * 4} />;
          })}
        </g>
      </Layer>

      {/* Geruch */}
      <Layer show={dirty("geruch")}>
        <g className="animate-odor" fill="none" stroke="#9fb08a" strokeWidth="2.5" strokeLinecap="round" opacity="0.6">
          <path d="M 250 200 q -10 -14 0 -28 t 0 -28 t 0 -28" />
          <path d="M 280 196 q -10 -14 0 -28 t 0 -28" />
          <path d="M 460 196 q -10 -14 0 -28 t 0 -28 t 0 -28" />
        </g>
      </Layer>
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

/** Illustration eines Autos, deren Bereiche je nach gewählten Leistungen sauber werden. */
export default function CarVisual({ view, clean }: { view: View; clean: ReadonlySet<Zone> }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const done = [...clean].filter((z) => interiorZones.has(z) === (view === "innen")).map((z) => labels[z]);
  return (
    <svg
      viewBox="0 0 800 330"
      className="block h-full w-full"
      role="img"
      aria-label={`Illustration ${view === "aussen" ? "außen" : "innen"}: ${done.length ? done.join(", ") : "ungereinigt"}`}
    >
      {view === "aussen" ? <Exterior clean={clean} uid={uid} /> : <Interior clean={clean} uid={uid} />}
    </svg>
  );
}
