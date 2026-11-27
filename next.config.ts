import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js dev overlay badge (the floating "N"). Dev-only anyway;
  // never appears in a production build.
  devIndicators: false,

  // The old WordPress site's URLs are already indexed by Google (confirmed
  // via site:iogai.com 3 Sept 2026) - none of these paths exist on the new
  // Next.js site, so without a redirect they'd 404 the moment Google
  // recrawls them, killing whatever ranking/link value they had. Mapped to
  // the closest real equivalent page rather than a blanket homepage dump.
  // igorogai.com (once its DNS points at this Vercel project) shows Igor's
  // personal page at its own root instead of forwarding to iogai.com.
  async rewrites() {
    return [
      { source: "/", has: [{ type: "host", value: "(www\\.)?igorogai\\.com" }], destination: "/igor-ogai" },
    ];
  },

  async redirects() {
    return [
      // Specialty services stay off public offer until scope and qualifications are verified.
      { source: "/service-areas/marine-mortuary-refrigeration/:city", destination: "/service-areas", permanent: false },
      { source: "/about-us", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/cases", destination: "/", permanent: true },
      { source: "/author/admin", destination: "/", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
      { source: "/hvac-repair-case", destination: "/", permanent: true },
      // Walk-in systems and HVAC need a CSLB contractor license (C-38 / C-20).
      // Until IOGAI holds one, those pages point to the plug-in equipment pages.
      { source: "/service-areas/hvac-repair/:city", destination: "/service-areas/refrigerator-freezer-repair/:city", permanent: false },
      { source: "/repair/walk-in-cooler-not-cooling", destination: "/repair/reach-in-refrigerator-not-cooling", permanent: false },
      { source: "/repair/walk-in-freezer-not-freezing", destination: "/repair/reach-in-refrigerator-not-cooling", permanent: false },
      {
        source: "/refrigerator-service",
        destination: "/service-areas/refrigerator-freezer-repair/huntington-beach",
        permanent: true,
      },
      {
        source: "/commercial-refrigerator-service",
        destination: "/service-areas/commercial-refrigeration/huntington-beach",
        permanent: true,
      },
      {
        source: "/ice-maker-service",
        destination: "/service-areas/commercial-refrigeration/huntington-beach",
        permanent: true,
      },
      {
        source: "/walk-in-cooler-service",
        destination: "/service-areas/commercial-refrigeration/huntington-beach",
        permanent: true,
      },
      {
        source: "/restaurant-equipment-service",
        destination: "/maintenance-contracts",
        permanent: true,
      },
      {
        source: "/hvac-repair-service",
        destination: "/service-areas/refrigerator-freezer-repair/huntington-beach",
        permanent: true,
      },
      {
        source: "/marine-refrigerator-ac-service",
        destination: "/service-areas",
        permanent: true,
      },
      {
        source: "/mortuary-refrigerator-service",
        destination: "/service-areas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
