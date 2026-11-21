import type { MetadataRoute } from "next";
import { services } from "@/lib/copy";
import { focusLocations } from "@/lib/locations";
import { brands } from "@/lib/brands";

const base = "https://iogai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceAreaPages = services.items.flatMap((svc) =>
    focusLocations.map((loc) => ({
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
    { url: `${base}/igor-ogai`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/careers`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
