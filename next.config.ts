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
  async redirects() {
    return [
      { source: "/about-us", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/cases", destination: "/", permanent: true },
      { source: "/author/admin", destination: "/", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
      { source: "/hvac-repair-case", destination: "/", permanent: true },
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
        destination: "/service-areas/hvac-repair/huntington-beach",
        permanent: true,
      },
      {
        source: "/marine-refrigerator-ac-service",
        destination: "/service-areas/marine-mortuary-refrigeration/huntington-beach",
        permanent: true,
      },
      {
        source: "/mortuary-refrigerator-service",
        destination: "/service-areas/marine-mortuary-refrigeration/huntington-beach",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
