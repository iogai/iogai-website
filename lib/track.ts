// Safe conversion tracking — no-ops until a pixel/tag is actually loaded.
// Meta Pixel: window.fbq · Google (GA4/Ads): window.gtag
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

type Params = Record<string, unknown>;

// Google Ads conversion actions (Goals → Conversions → each action's tag
// gives "AW-XXXXXXXXX/LABEL"). Set the label part only, as env vars:
//   NEXT_PUBLIC_ADS_LEAD_LABEL  — text / callback / booking-link tap
//   NEXT_PUBLIC_ADS_CALL_LABEL  — tap on the phone number (Secondary)
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ADS_LEAD_LABEL = process.env.NEXT_PUBLIC_ADS_LEAD_LABEL;
const ADS_CALL_LABEL = process.env.NEXT_PUBLIC_ADS_CALL_LABEL;

export function track(event: string, params?: Params) {
  if (typeof window === "undefined") return;
  try {
    window.fbq?.("track", event, params);
    window.gtag?.("event", event, params);
  } catch {
    /* tracking must never break the UI */
  }
}

function adsConversion(label?: string) {
  if (typeof window === "undefined" || !ADS_ID || !label) return;
  try {
    window.gtag?.("event", "conversion", { send_to: `${ADS_ID}/${label}` });
  } catch {
    /* tracking must never break the UI */
  }
}

// A completed service request — the money event for ad optimization.
export const trackLead = (service?: string) => {
  track("Lead", { content_name: "Service Request", content_category: service });
  adsConversion(ADS_LEAD_LABEL);
};

// Intent signals (tel: taps, "Book" clicks) — feed the ad algorithms too.
export const trackContact = (method: string) => {
  track("Contact", { method });
  if (method === "phone") adsConversion(ADS_CALL_LABEL);
  else if (["sms", "callback", "booking"].includes(method)) adsConversion(ADS_LEAD_LABEL);
};
