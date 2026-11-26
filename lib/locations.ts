// Restored historical service areas while preserving all currently published cities.

export type Region =
  | "Coastal Orange County"
  | "North Orange County"
  | "Central Orange County"
  | "South Orange County"
  | "Westside Los Angeles County"
  | "South Bay / SE Los Angeles County";

export type Location = {
  slug: string;
  city: string;
  region: Region;
  /** Core market: indexed, in the sitemap, with its own local copy. */
  focus?: boolean;
  /** Unique local paragraph for home-appliance pages. */
  home?: string;
  /** Unique local paragraph for commercial refrigeration pages. */
  commercial?: string;
};

const oc = (city: string, region: Region): Location => ({
  slug: city.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  city,
  region,
});

export const locations: Location[] = [
  oc("Huntington Beach", "Coastal Orange County"),
  oc("Newport Beach", "Coastal Orange County"),
  oc("Costa Mesa", "Coastal Orange County"),
  oc("Fountain Valley", "Coastal Orange County"),
  oc("Seal Beach", "Coastal Orange County"),
  oc("Laguna Beach", "Coastal Orange County"),
  oc("Dana Point", "Coastal Orange County"),
  oc("San Clemente", "Coastal Orange County"),
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
  oc("Santa Ana", "Central Orange County"),
  oc("Garden Grove", "Central Orange County"),
  oc("Orange", "Central Orange County"),
  oc("Westminster", "Central Orange County"),
  oc("Tustin", "Central Orange County"),
  oc("Villa Park", "Central Orange County"),
  oc("Irvine", "South Orange County"),
  oc("Mission Viejo", "South Orange County"),
  oc("Lake Forest", "South Orange County"),
  oc("Laguna Niguel", "South Orange County"),
  oc("Laguna Hills", "South Orange County"),
  oc("Aliso Viejo", "South Orange County"),
  oc("Rancho Santa Margarita", "South Orange County"),
  oc("San Juan Capistrano", "South Orange County"),
  oc("Laguna Woods", "South Orange County"),
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
  oc("Los Angeles", "South Bay / SE Los Angeles County"),
  oc("Santa Monica", "Westside Los Angeles County"),
];

// Core markets: close to the Huntington Beach base, high-end homes and dense
// restaurant corridors. Only these city pages are indexed and listed in the
// sitemap — one strong, unique page per city beats dozens of near-copies.
const FOCUS: Record<string, { home: string; commercial: string }> = {
  "huntington-beach": {
    home: "Huntington Beach is our home base — the shop is on Frankfort Ave, a few minutes from most neighborhoods, from Huntington Harbour to the homes off Goldenwest and Brookhurst. Salt air this close to the ocean is hard on condenser coils and electrical connections, so we check both on every refrigerator call.",
    commercial: "From Main Street and Pacific City to the plazas along Beach Blvd and Brookhurst, Huntington Beach kitchens run hard all summer. Our shop is on Frankfort Ave, so walk-ins, ice machines and reach-ins in town get some of our shortest drive times.",
  },
  "newport-beach": {
    home: "Newport Coast, Corona del Mar, Balboa Island and Dover Shores homes are full of built-in Sub-Zero, Thermador, Wolf and Miele kitchens — exactly the equipment we focus on. Marine air speeds up coil and connector corrosion, which is behind many of the 'fridge is warm' calls we get near the water.",
    commercial: "Restaurants and bars from Lido Marina Village and the Balboa Peninsula to Fashion Island and Westcliff depend on ice machines and walk-ins that can't go down on a weekend. We service Newport Beach from our Huntington Beach shop, one city over.",
  },
  "costa-mesa": {
    home: "Costa Mesa sits right next to our Huntington Beach shop. Mesa Verde, Eastside and College Park homes often have older refrigerators worth repairing instead of replacing — we tell you honestly which side of that line yours is on.",
    commercial: "The South Coast Plaza area, The LAB and the 17th Street and Harbor Blvd corridors are packed with kitchens and bars. We keep their ice machines, prep tables and walk-ins running, minutes from our Huntington Beach base.",
  },
  "fountain-valley": {
    home: "Fountain Valley borders Huntington Beach, so it's one of the quickest areas for us to reach. We repair refrigerators, freezers and built-in appliances in homes across the city, with a written estimate before any work starts.",
    commercial: "Restaurants, cafés and markets along Brookhurst, Magnolia and Warner are close to our Huntington Beach shop, which helps when an ice machine or walk-in cooler goes down mid-shift.",
  },
  "seal-beach": {
    home: "Seal Beach homes near the water deal with the same salt air that wears down condenser coils and fan motors. We service refrigerators, freezers and high-end built-ins across town, from Old Town to College Park East.",
    commercial: "Main Street Seal Beach and the shopping centers along PCH have tight kitchens where a failed reach-in or ice machine stops service fast. We're just up the coast in Huntington Beach.",
  },
  "laguna-beach": {
    home: "Laguna Beach hillside and oceanfront homes often have premium built-in refrigeration and wine storage. Salt air and limited access make careful work important — we confirm parts and the visit window before we come out.",
    commercial: "Restaurants and galleries along Coast Highway and Forest Ave rely on bar coolers, ice machines and walk-ins through the busy season. We plan visits around service hours where we can.",
  },
  irvine: {
    home: "Many Irvine homes, from Turtle Rock and Shady Canyon to the newer villages, came with built-in appliance packages from Sub-Zero, Thermador, Monogram and Miele. We repair those brands and explain repair-vs-replace honestly.",
    commercial: "Irvine Spectrum, the Diamond Jamboree and Business District kitchens and the campus-area restaurants run high volumes, so we focus on finding the root cause — not just resetting the unit.",
  },
  "dana-point": {
    home: "Monarch Beach, Capistrano Beach and the homes above the harbor see constant ocean air. We repair refrigerators, wine coolers and built-in appliances, and check for corrosion that shortens equipment life on the coast.",
    commercial: "Dana Point Harbor restaurants and the hospitality kitchens along PCH need ice and cold storage every day. We service commercial refrigeration across south Orange County by appointment.",
  },
  "long-beach": {
    home: "From Naples and Belmont Shore to Bixby Knolls and Los Altos, Long Beach has a mix of classic homes and remodeled kitchens with high-end built-ins. We service refrigerators, freezers and premium appliances across the city.",
    commercial: "2nd Street in Belmont Shore, Pine Ave downtown and the Bixby Knolls corridor are full of restaurants and bars. We keep their walk-ins, ice machines and bar coolers running, with clear pricing before work starts.",
  },
  westminster: {
    home: "Westminster borders Huntington Beach, making it one of our fastest service areas. We repair home refrigerators, freezers and built-in appliances with a written estimate first.",
    commercial: "Little Saigon along Bolsa Ave and Brookhurst is one of the densest restaurant and market districts in Orange County — and walk-ins, display cases and ice machines there work hard every day. We're right next door in Huntington Beach.",
  },
  "garden-grove": {
    home: "We repair refrigerators, freezers and built-in appliances across Garden Grove, a short drive from our Huntington Beach shop, with the price explained before any work begins.",
    commercial: "Garden Grove Blvd's restaurant row, the Brookhurst corridor and the hotel kitchens near Harbor Blvd all rely on dependable cold storage and ice. We service walk-ins, reach-ins and ice machines across the city.",
  },
  "manhattan-beach": {
    home: "From the Sand Section and the Tree Section to the Hill Section, Manhattan Beach homes often have built-in Sub-Zero, Thermador and Wolf kitchens. Ocean air is hard on condenser coils and connections, so we check both on every refrigeration call.",
    commercial: "Restaurants and bars along Manhattan Beach Blvd, Highland Ave and Manhattan Village rely on ice machines and walk-ins through every busy weekend. We service them by appointment, with the price confirmed before work starts.",
  },
  "hermosa-beach": {
    home: "Hermosa Beach homes near the Strand and up the hill toward PCH live with salt air every day — one of the main reasons refrigerators and built-ins near the water lose cooling. We repair them with a written estimate first.",
    commercial: "Pier Plaza, Hermosa Ave and the PCH corridor are full of bars and kitchens that can't run out of ice on a Friday night. We keep their ice machines, bar coolers and walk-ins running.",
  },
  "redondo-beach": {
    home: "From the Hollywood Riviera to North Redondo, many homes have remodeled kitchens with premium built-in refrigeration. We repair refrigerators, freezers and wine coolers and tell you honestly when repair is worth it.",
    commercial: "Riviera Village, the Redondo Pier and King Harbor restaurants depend on cold storage and ice every day. We service walk-ins, reach-ins and ice machines across Redondo Beach by appointment.",
  },
  torrance: {
    home: "Torrance has everything from Walteria and Riviera homes to newer kitchens around Del Amo. We repair refrigerators, freezers and premium built-ins with the price explained before any work begins.",
    commercial: "Old Torrance, the Hawthorne Blvd and Del Amo corridors and the city's many Japanese and Korean restaurants keep commercial kitchens busy all day. We service their refrigeration and ice machines with clear pricing up front.",
  },
  "san-clemente": {
    home: "From the Pier Bowl and Avenida Del Mar to Talega and Forster Ranch, San Clemente homes near the coast see faster coil corrosion. We repair refrigerators, freezers and built-in appliances with a written estimate first.",
    commercial: "Avenida Del Mar, the Pier and the restaurants along El Camino Real rely on ice and cold storage every day. We service commercial refrigeration across south Orange County by appointment.",
  },
  "laguna-niguel": {
    home: "Laguna Niguel homes from Bear Brand to the neighborhoods off Crown Valley Parkway often have high-end built-in kitchens. We repair Sub-Zero, Thermador, Wolf and Miele refrigeration with honest repair-vs-replace advice.",
    commercial: "Restaurants and shopping-center kitchens along Crown Valley Parkway and Alicia Parkway need dependable walk-ins and ice. We service commercial refrigeration in Laguna Niguel by appointment.",
  },
  "mission-viejo": {
    home: "Mission Viejo homes around the lake and across the hills have many family kitchens with refrigerators worth repairing. We tell you honestly whether repair or replacement makes sense, before any work.",
    commercial: "The Shops at Mission Viejo, Kaleidoscope and the restaurant pads along Marguerite and Crown Valley Parkways run busy kitchens. We keep their walk-ins, reach-ins and ice machines working.",
  },
  tustin: {
    home: "From Tustin Ranch and Lower Peters Canyon to Old Town Tustin, homes range from classic to newly remodeled with premium built-ins. We repair refrigerators, freezers and built-in appliances with clear pricing first.",
    commercial: "Old Town Tustin, The District at Tustin Legacy and the Tustin Marketplace area are full of restaurants that depend on cold storage and ice. We service their commercial refrigeration by appointment.",
  },
  "yorba-linda": {
    home: "Yorba Linda's larger homes, from East Lake Village to the hills off Yorba Linda Blvd, often have built-in and high-end refrigeration. We repair them with a written estimate and honest advice.",
    commercial: "Restaurants and markets along Yorba Linda Blvd and the Savi Ranch area need reliable walk-ins, reach-ins and ice machines. We service commercial refrigeration across north Orange County.",
  },
  "villa-park": {
    home: "Villa Park's large custom homes are full of built-in Sub-Zero, Thermador and Wolf kitchens — exactly the equipment we focus on. We repair them carefully, with the price agreed before any work.",
    commercial: "We also service commercial refrigeration for kitchens and businesses around Villa Park and nearby Orange, with clear pricing up front.",
  },
  anaheim: {
    home: "From Anaheim Hills to the neighborhoods near Brookhurst, Anaheim homes run everything from builder-grade refrigerators to full built-in kitchens. We diagnose on site and give the price before any repair.",
    commercial: "Hotels, restaurants and food halls around the Anaheim Resort district and the Packing District run ice machines and walk-ins around the clock. We keep them running with by-appointment service and clear pricing.",
  },
  fullerton: {
    home: "Sunny Hills, Raymond Hills and the older homes near downtown Fullerton often have built-in refrigerators that are worth repairing, not replacing. We tell you honestly which is which.",
    commercial: "Downtown Fullerton bars and restaurants along Harbor Blvd, and kitchens near the university, depend on ice machines and bar coolers every night. We service them with the price confirmed first.",
  },
  orange: {
    home: "Historic homes in Old Towne Orange and the larger properties in Orange Park Acres need careful work around finished cabinetry. We repair built-in refrigerators, freezers and ovens in place.",
    commercial: "Restaurants around the Old Towne Plaza and along Chapman Ave and Tustin St rely on reach-ins and walk-ins. We find the root cause instead of just resetting the unit.",
  },
  cypress: {
    home: "Cypress homes near the 605 and Valley View are a short drive from our base. We repair refrigerators, freezers, ice makers and ovens, with the price agreed before work.",
    commercial: "Restaurants and businesses along Katella Ave and Valley View St, and around the Los Alamitos Race Course, rely on reach-ins and ice machines we keep running.",
  },
  "lake-forest": {
    home: "Foothill Ranch, Portola Hills and the homes around the lakes often have built-in Sub-Zero and Thermador kitchens. We repair them carefully, with the price agreed first.",
    commercial: "Business parks and restaurants along Lake Forest Dr and in Foothill Ranch need reliable refrigeration for break rooms, kitchens and storage. Maintenance contracts available.",
  },
  "aliso-viejo": {
    home: "Aliso Viejo homes and townhomes have refrigerators, freezers and ovens that work hard every day. We diagnose on site and explain every option before any repair.",
    commercial: "Restaurants at Aliso Viejo Town Center and the office parks along Enterprise and Pacific Park run ice machines and reach-ins we keep in service by appointment.",
  },
  "san-juan-capistrano": {
    home: "Equestrian estates and homes near the Mission often have large built-in kitchens and outdoor refrigeration. We repair them with care for the finished spaces around them.",
    commercial: "Restaurants around Los Rios and downtown near the Mission rely on walk-ins and ice machines through busy weekends. We service them with the price confirmed before work.",
  },
  "los-alamitos": {
    home: "Los Alamitos and nearby Rossmoor homes are close to our Huntington Beach base, so we reach them quickly. Built-in and freestanding refrigerators, freezers and ovens repaired.",
    commercial: "Restaurants and medical offices along Los Alamitos Blvd and Katella Ave rely on refrigeration that cannot fail. We find the cause and fix it right the first time.",
  },
  "signal-hill": {
    home: "Hilltop homes in Signal Hill often have built-in kitchens with views to match. We repair refrigerators, wine coolers and ovens in place, with the price agreed first.",
    commercial: "Restaurants at the Signal Hill Town Center and the warehouses below the hill depend on walk-ins and reach-ins. Fast diagnosis, clear pricing.",
  },
  lakewood: {
    home: "Lakewood's ranch-style homes have refrigerators and freezers that families depend on every day. We repair warm fridges, frost and ice makers at a fair, approved price.",
    commercial: "Restaurants around Lakewood Center and along Lakewood Blvd keep reach-ins, prep tables and ice machines running all day. We service them by appointment.",
  },
  "santa-ana": {
    home: "From Floral Park and French Park to Riverview West, Santa Ana homes range from historic houses to remodeled kitchens. We repair refrigerators, freezers and premium built-ins with honest repair-vs-replace advice.",
    commercial: "Downtown Santa Ana's 4th Street dining and the busy corridors along Bristol, Main and 17th keep commercial kitchens running long hours. We service their refrigeration by appointment, with pricing confirmed up front.",
  },
};

for (const loc of locations) {
  const f = FOCUS[loc.slug];
  if (f) Object.assign(loc, { focus: true, ...f });
}

export const focusLocations = locations.filter((l) => l.focus);

export function findLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
