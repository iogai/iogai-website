import { trustbar } from "@/lib/copy";

// Slim credibility strip right under the hero — the fastest trust signal.
export function TrustBar() {
  return (
    <div className="border-y border-hairline bg-mist">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 sm:px-8">
        {trustbar.map((item) => (
          <span key={item} className="inline-flex items-center gap-2 text-sm font-medium text-ink-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="text-accent">
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
