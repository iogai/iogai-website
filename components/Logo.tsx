import Image from "next/image";

// Preserve the original wordmark and lettering on a permanent dark backing.
export function Logo({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  return (
    <span className={`inline-flex rounded-lg bg-[#01123d] px-3 py-2 ${tone === "paper" ? "ring-1 ring-white/15" : "shadow-sm"}`}>
      <Image src="/media/real/logo-gold.svg" alt="IOGAI" width={130} height={46}
        priority className="h-9 w-auto" />
    </span>
  );
}
