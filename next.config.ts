import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js dev overlay badge (the floating "N"). Dev-only anyway;
  // never appears in a production build.
  devIndicators: false,
};

export default nextConfig;
