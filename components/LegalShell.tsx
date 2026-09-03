import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";

// Simple shell for legal / long-form pages (own header — not the hero-aware Nav).
export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-hairline bg-paper">
        <div className="mx-auto flex h-20 max-w-3xl items-center justify-between px-5 sm:px-8">
          <Link href="/">
            <Logo />
          </Link>
          <Link href="/" className="text-sm text-ink-2 transition-colors hover:text-accent">
            ← Back to home
          </Link>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <h1 className="display text-[clamp(2rem,5vw,3rem)] text-ink">{title}</h1>
        <p className="mt-3 text-sm text-ink-3">Last updated: {updated}</p>
        <div className="legal mt-10">{children}</div>
      </main>
      <Footer />
    </>
  );
}
