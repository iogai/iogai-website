// Equipment brands IOGAI actually services, confirmed by the owner (commercial
// list 3 Sept 2026; luxury built-ins per the owner's High-End service copy,
// Nov 2026; Manitowoc/Scotsman ice machines per the Commercial service copy).
// No manufacturer certification or authorization is claimed - just repair
// capability. Do not add a brand without the same kind of confirmation.

export type Brand = {
  slug: string;
  name: string;
  blurb: string;
  kind: "commercial" | "residential";
};

export const brands: Brand[] = [
  {
    slug: "hoshizaki",
    name: "Hoshizaki",
    blurb: "ice machines, reach-in refrigerators and freezers, and glass-door merchandisers.",
    kind: "commercial",
  },
  {
    slug: "true",
    name: "True",
    blurb: "reach-in and glass-door refrigerators, freezers, and beverage/wine coolers.",
    kind: "commercial",
  },
  {
    slug: "atosa",
    name: "Atosa",
    blurb: "commercial refrigerators, freezers, and glass-door merchandisers.",
    kind: "commercial",
  },
  {
    slug: "traulsen",
    name: "Traulsen",
    blurb: "reach-in and glass-door refrigerators, freezers, and shock freezers.",
    kind: "commercial",
  },
  {
    slug: "beverage-air",
    name: "Beverage-Air",
    blurb: "reach-in refrigerators, freezers, and beverage/wine coolers.",
    kind: "commercial",
  },
  {
    slug: "manitowoc",
    name: "Manitowoc",
    blurb: "ice machines — water fill, harvest and freeze-cycle problems, sensors and controls.",
    kind: "commercial",
  },
  {
    slug: "scotsman",
    name: "Scotsman",
    blurb: "ice machines and nugget/flake ice makers — no ice, slow ice, leaks and controls.",
    kind: "commercial",
  },
  {
    slug: "sub-zero",
    name: "Sub-Zero",
    blurb: "built-in and integrated refrigerators, freezers and wine storage — warm compartments, frost build-up, ice makers, sealed-system and control problems.",
    kind: "residential",
  },
  {
    slug: "viking",
    name: "Viking",
    blurb: "built-in refrigerators, ranges, wall ovens and dishwashers.",
    kind: "residential",
  },
  {
    slug: "thermador",
    name: "Thermador",
    blurb: "Freedom column refrigerators, ranges, wall ovens and dishwashers.",
    kind: "residential",
  },
  {
    slug: "wolf",
    name: "Wolf",
    blurb: "ranges, rangetops, wall ovens and cooktops — igniters, gas valves, heating and control problems.",
    kind: "residential",
  },
  {
    slug: "miele",
    name: "Miele",
    blurb: "built-in refrigerators, wall ovens and dishwashers.",
    kind: "residential",
  },
  {
    slug: "monogram",
    name: "Monogram",
    blurb: "built-in refrigerators, wine reserves, ranges and wall ovens.",
    kind: "residential",
  },
];

export function findBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
