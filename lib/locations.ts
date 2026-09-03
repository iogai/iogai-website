// Real cities IOGAI can credibly serve from its Huntington Beach shop
// (517 Frankfort Ave, 92648): all of Orange County (IOGAI's home county)
// plus the South Bay / SE-LA-County cities that sit on the same freeway
// corridor (405/605/22). No city here is invented - this is public municipal
// geography, grouped by real region, not a fabricated business claim.
// If IOGAI's real service radius is narrower than this, trim the list.

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
  // Orange County - coastal (closest to the shop)
  oc("Huntington Beach", "Coastal Orange County"),
  oc("Newport Beach", "Coastal Orange County"),
  oc("Costa Mesa", "Coastal Orange County"),
  oc("Fountain Valley", "Coastal Orange County"),
  oc("Seal Beach", "Coastal Orange County"),
  oc("Laguna Beach", "Coastal Orange County"),
  oc("Dana Point", "Coastal Orange County"),
  oc("San Clemente", "Coastal Orange County"),

  // Orange County - north
  oc("Anaheim", "North Orange County"),
  oc("Fullerton", "North Orange County"),
  oc("Buena Park", "North Orange County"),
  oc("La Habra", "North Orange County"),
  oc("La Palma", "North Orange County"),
  oc("Brea", "North Orange County"),
  oc("Placentia", "North Orange County"),
  oc("Yorba Linda", "North Orange County"),
  oc("Cypress", "North Orange County"),
  oc("Los Alamitos", "North Orange County"),
  oc("Stanton", "North Orange County"),

  // Orange County - central
  oc("Santa Ana", "Central Orange County"),
  oc("Garden Grove", "Central Orange County"),
  oc("Orange", "Central Orange County"),
  oc("Westminster", "Central Orange County"),
  oc("Tustin", "Central Orange County"),
  oc("Villa Park", "Central Orange County"),

  // Orange County - south
  oc("Irvine", "South Orange County"),
  oc("Mission Viejo", "South Orange County"),
  oc("Lake Forest", "South Orange County"),
  oc("Laguna Niguel", "South Orange County"),
  oc("Laguna Hills", "South Orange County"),
  oc("Aliso Viejo", "South Orange County"),
  oc("Rancho Santa Margarita", "South Orange County"),
  oc("San Juan Capistrano", "South Orange County"),
  oc("Laguna Woods", "South Orange County"),

  // South Bay / SE LA County - same freeway corridor as Huntington Beach
  oc("Long Beach", "South Bay / SE Los Angeles County"),
  oc("Signal Hill", "South Bay / SE Los Angeles County"),
  oc("Lakewood", "South Bay / SE Los Angeles County"),
  oc("Cerritos", "South Bay / SE Los Angeles County"),
  oc("Bellflower", "South Bay / SE Los Angeles County"),
  oc("Downey", "South Bay / SE Los Angeles County"),
  oc("Norwalk", "South Bay / SE Los Angeles County"),
  oc("Artesia", "South Bay / SE Los Angeles County"),
  oc("La Mirada", "South Bay / SE Los Angeles County"),
  oc("Compton", "South Bay / SE Los Angeles County"),
  oc("Carson", "South Bay / SE Los Angeles County"),
  oc("Torrance", "South Bay / SE Los Angeles County"),
  oc("Redondo Beach", "South Bay / SE Los Angeles County"),
  oc("Hermosa Beach", "South Bay / SE Los Angeles County"),
  oc("Manhattan Beach", "South Bay / SE Los Angeles County"),
  oc("Gardena", "South Bay / SE Los Angeles County"),
  oc("Hawthorne", "South Bay / SE Los Angeles County"),
  oc("El Segundo", "South Bay / SE Los Angeles County"),
];

export function findLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
