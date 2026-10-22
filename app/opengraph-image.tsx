import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "HF Autopflege – Autopflege & Fahrzeugaufbereitung in Bodenheim";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const poster = await readFile(join(process.cwd(), "public/videos/detailing.jpg"));
  const src = `data:image/jpeg;base64,${poster.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#0b0c0e" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={1200} height={675} style={{ position: "absolute", inset: 0, objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(11,12,14,0.95) 0%, rgba(11,12,14,0.75) 55%, rgba(11,12,14,0.3) 100%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80 }}>
          <div style={{ color: "#3b7bff", fontSize: 24, letterSpacing: 8, textTransform: "uppercase" }}>HF Autopflege</div>
          <div style={{ color: "#f3f1ec", fontSize: 72, lineHeight: 1.05, marginTop: 24, maxWidth: 820, fontFamily: "serif" }}>
            Autopflege & Fahrzeugaufbereitung in Bodenheim
          </div>
          <div style={{ color: "#c9ccd2", fontSize: 28, marginTop: 36 }}>
            {`${site.address.street}, ${site.address.city} · ${site.phone.display}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
