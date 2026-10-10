"use client";

import type { ComponentPropsWithoutRef, ElementType, PointerEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "children" | "className">;

/** Karte, deren Lichtreflex am Rand dem Mauszeiger folgt (Styles: .card-lux). */
export default function SheenCard({ children, as: Tag = "div", className = "", ...rest }: Props) {
  function onPointerMove(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <Tag {...rest} onPointerMove={onPointerMove} className={`card-lux ${className}`}>
      {children}
    </Tag>
  );
}
