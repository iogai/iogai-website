import Image from "next/image";

// The real IOGAI logo, pulled from iogai.com (checked 2 Sept 2026) - gold
// gradient wordmark, viewBox 866x304. "paper" tone renders on dark sections
// where a plain white lockup reads cleaner than the gold gradient.
export function Logo({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  if (tone === "paper") {
    return (
      <span className="inline-flex items-center">
        <span className="font-display text-lg font-bold tracking-tight text-paper">IOGAI</span>
      </span>
    );
  }
  return (
    <Image
      src="/media/real/logo-gold.svg"
      alt="IOGAI"
      width={130}
      height={46}
      priority
      className="h-9 w-auto"
      // The gradient's lightest stop (#FFFFD1) nearly disappears on the
      // scrolled nav's near-white bg-paper/85 backdrop. A soft navy-tinted
      // shadow gives the mark an edge without changing brand colors.
      style={{ filter: "drop-shadow(0 1px 2px rgba(1,18,61,0.35))" }}
    />
  );
}
