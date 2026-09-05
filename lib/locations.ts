// Real cities from IOGAI's own Google Business Profile service area
// (checked 5 Sept 2026) - trimmed from an earlier speculative 52-city list
// down to exactly the 19 cities Igor configured on GBP himself. "Orange
// County" is also listed there but isn't a city, so it isn't a page here -
// it's already the region the rest of the site talks about.

export type Region =
  | "Coastal Orange County"
  | "North Orange County"
  | "Central Orange County"
  | "South Orange County"
  | "South Bay / SE Los Angeles County";

export type Location = {
  slug: string;
  city: string;
  region: Region;
};

const oc = (city: string, region: Region): Location => ({
  slug: city.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  city,
  region,
});

export const locations: Location[] = [
  // Orange County - coastal
  oc("Huntington Beach", "Coastal Orange County"),
  oc("Newport Beach", "Coastal Orange County"),
  oc("Costa Mesa", "Coastal Orange County"),
  oc("Fountain Valley", "Coastal Orange County"),
  oc("Seal Beach", "Coastal Orange County"),
  oc("Laguna Beach", "Coastal Orange County"),

  // Orange County - north
  oc("Anaheim", "North Orange County"),

  // Orange County - central
  oc("Santa Ana", "Central Orange County"),
  oc("Garden Grove", "Central Orange County"),
  oc("Westminster", "Central Orange County"),
  oc("Tustin", "Central Orange County"),

  // Orange County - south
  oc("Irvine", "South Orange County"),
  oc("Laguna Niguel", "South Orange County"),

  // South Bay / SE LA County
  oc("Long Beach", "South Bay / SE Los Angeles County"),
  oc("Torrance", "South Bay / SE Los Angeles County"),
  oc("Redondo Beach", "South Bay / SE Los Angeles County"),
  oc("Hermosa Beach", "South Bay / SE Los Angeles County"),
  oc("Manhattan Beach", "South Bay / SE Los Angeles County"),
  oc("Los Angeles", "South Bay / SE Los Angeles County"),
];

export function findLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
