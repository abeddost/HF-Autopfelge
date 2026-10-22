import Image from "next/image";
import Link from "next/link";

// Light-on-transparent variants generated from public/logo.png (the original stays as source master).
const variants = {
  wordmark: { src: "/logo-wordmark.png", width: 680, height: 64, className: "h-auto w-[min(255px,calc(100vw-6.5rem))] sm:w-[340px]" },
  full: { src: "/logo-full.png", width: 640, height: 92, className: "h-auto w-[240px] sm:w-[280px]" },
} as const;

export default function Logo({
  variant = "wordmark",
  className = "",
}: {
  variant?: keyof typeof variants;
  className?: string;
}) {
  const v = variants[variant];
  return (
    <Link href="/" className={`group inline-flex items-center ${className}`}>
      <Image
        src={v.src}
        width={v.width}
        height={v.height}
        alt="HF Autopflege Bodenheim – Startseite"
        priority={variant === "wordmark"}
        className={`${v.className} transition-opacity duration-500 group-hover:opacity-85`}
      />
    </Link>
  );
}
