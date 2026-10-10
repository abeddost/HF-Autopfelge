import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  light?: boolean;
}) {
  const center = align === "center";
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${center ? "justify-center" : ""} ${light ? "!text-champagne-deep" : ""}`}>{eyebrow}</p>
      <Tag
        className={`h-display mt-5 text-[2.4rem] sm:text-5xl lg:text-[3.6rem] ${light ? "text-ink" : "text-snow"}`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-6 text-lg leading-relaxed ${light ? "text-ink/70" : "text-mist"} ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
