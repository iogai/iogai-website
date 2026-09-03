import type { MetadataRoute } from "next";
import { services } from "@/lib/copy";
import { locations } from "@/lib/locations";
import { brands } from "@/lib/brands";

const base = "https://iogai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceAreaPages = services.items.flatMap((svc) =>
    locations.map((loc) => ({
      url: `${base}/service-areas/${svc.slug}/${loc.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const brandPages = brands.map((b) => ({
    url: `${base}/brands/${b.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/maintenance-contracts`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/service-areas`, changeFrequency: "monthly", priority: 0.7 },
    ...serviceAreaPages,
    ...brandPages,
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
