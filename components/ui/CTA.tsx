import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "solid" | "ghost" | "light";

const base =
  "group inline-flex items-center justify-center gap-2 px-7 h-12 text-sm font-medium tracking-wide rounded-md transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-xdr hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(20,30,60,0.5)] active:scale-[0.98] active:translate-y-0 motion-reduce:transform-none";

const variants: Record<Variant, string> = {
  // Primary — brushed gold, sharp corners
  solid: "bg-accent text-ink hover:bg-accent-strong hover:text-paper",
  // Secondary on light — outlined, sharp corners
  ghost: "border border-hairline text-ink hover:border-ink-3 hover:bg-mist",
  // On dark sections — white, sharp corners
  light: "bg-paper text-ink hover:bg-mist",
};

export function CTA({
  variant = "solid",
  href,
  children,
  className = "",
  ...rest
}: {
  variant?: Variant;
  href: string;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
