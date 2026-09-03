import type { MetadataRoute } from "next";
import { services } from "@/lib/copy";
import { locations } from "@/lib/locations";

const base = "https://iogai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceAreaPages = services.items.flatMap((svc) =>
    locations.map((loc) => ({
      url: `${base}/service-areas/${svc.slug}/${loc.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/service-areas`, changeFrequency: "monthly", priority: 0.7 },
    ...serviceAreaPages,
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
