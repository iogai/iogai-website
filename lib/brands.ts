// Equipment brands IOGAI actually services, confirmed by the owner 3 Sept
// 2026. No manufacturer certification is claimed here - just repair
// capability, which is what was confirmed. Do not add a brand without
// the same kind of confirmation.

export type Brand = {
  slug: string;
  name: string;
  blurb: string;
};

export const brands: Brand[] = [
  {
    slug: "hoshizaki",
    name: "Hoshizaki",
    blurb: "ice machines, reach-in refrigerators and freezers, and glass-door merchandisers.",
  },
  {
    slug: "true",
    name: "True",
    blurb: "reach-in and glass-door refrigerators, freezers, and beverage/wine coolers.",
  },
  {
    slug: "atosa",
    name: "Atosa",
    blurb: "commercial refrigerators, freezers, and glass-door merchandisers.",
  },
  {
    slug: "traulsen",
    name: "Traulsen",
    blurb: "reach-in and glass-door refrigerators, freezers, and shock freezers.",
  },
  {
    slug: "beverage-air",
    name: "Beverage-Air",
    blurb: "reach-in refrigerators, freezers, and beverage/wine coolers.",
  },
];

export function findBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
