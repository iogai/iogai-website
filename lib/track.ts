// Safe conversion tracking — no-ops until a pixel/tag is actually loaded.
// Meta Pixel: window.fbq · Google (GA4/Ads): window.gtag
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

type Params = Record<string, unknown>;

export function track(event: string, params?: Params) {
  if (typeof window === "undefined") return;
  try {
    window.fbq?.("track", event, params);
    window.gtag?.("event", event, params);
  } catch {
    /* tracking must never break the UI */
  }
}

// A completed booking — the money event for ad optimization.
export const trackLead = (service?: string) =>
  track("Lead", { content_name: "AC Booking", content_category: service });

// Intent signals (tel: taps, "Book" clicks) — feed the ad algorithms too.
export const trackContact = (method: string) => track("Contact", { method });
