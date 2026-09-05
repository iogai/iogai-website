// All copy in one place. Every fact here is sourced from iogai.com (live site,
// checked 2 Sept 2026) or the Google Business Profile the owner pasted in chat
// the same day. Nothing below is invented - see ../../context/proof/proof-inventory.md.

export const site = {
  brand: "IOGAI",
  suffix: "",
  domain: "iogai.com",
  phoneDisplay: "(424) 421-7771",
  phoneHref: "tel:+14244217771",
  email: "support@iogai.com",
  emailHref: "mailto:support@iogai.com",
  address: "517 Frankfort Ave, Huntington Beach, CA 92648",
  hours: "Mon-Sun, 8am-6pm", // confirmed by owner 2 Sept 2026, overrides old site (7am-11pm) and Yelp (7am-8pm)
};

export const offer = {
  badge: "Same-day service",
  text: "Call now for your quote - we'll walk you through what to expect before a tech ever shows up. Diagnostics are free on every repair call.",
  cta: "Call (424) 421-7771",
};

// Real quarterly maintenance program, described verbatim by the owner
// 3 Sept 2026 - for restaurant chains and independent restaurants that
// contract IOGAI for ongoing service instead of one-off repair calls.
export const maintenance = {
  label: "Maintenance Contracts",
  title: "Annual Maintenance Contracts for Restaurants",
  intro:
    "For restaurant chains and independent restaurants that need their refrigeration running every day, not just fixed when it breaks. One contract, a set schedule, no surprise downtime.",
  schedule: [
    {
      k: "Every 3 months",
      v: "Full refrigeration and freezer service visit - four times a year.",
    },
    {
      k: "Every 6 months",
      v: "Ice maker service.",
    },
    {
      k: "Once a year",
      v: "Filter replacement.",
    },
  ],
  includes: [
    "Condenser coil cleaning with chemical treatment",
    "Drain system cleaning and repair",
    "Electrical connection diagnostics",
    "Full equipment check at every technician visit",
  ],
  cta: "Ask about a maintenance contract",
};

// Google is the only platform with a verified count right now (Yelp shows 5.0 / 7 reviews,
// but that count wasn't in the source pasted - left off rather than guessed).
export const rating = { value: "5.0", count: "118", source: "Google" };

export const nav = {
  links: [
    { label: "Services", href: "#top" },
    { label: "How it works", href: "#process" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Book a Repair",
};

export const hero = {
  eyebrow: "Refrigeration & HVAC repair - Orange County & LA",
  title: ["Cooling Solutions", "You Can Trust."],
  sub: "Refrigerator, freezer, walk-in cooler, ice maker, marine, and HVAC repair for homes and businesses across Orange County and LA. Certified technicians, same-day dispatch.",
  ctaPrimary: "Book a Repair",
  ctaSecondary: "Get Estimate",
};

// "10+ years" is now verified - it's on iogai.com's own About page ("Over 10
// years of success working with systems of any complexity"), checked 2 Sept 2026.
export const advantages = {
  label: "Our advantages",
  title: "A team you can count on for cool, comfortable repairs",
  stats: [
    { value: "10", unit: "+", caption: "Years repairing systems of any complexity" },
    { value: "5.0", unit: "/5", caption: "Average rating from 118 Google reviews" },
    { value: "10", unit: "hr", caption: "Open daily, 8am to 6pm" },
  ],
};

// Pulled straight from the live iogai.com "why us" icons - already public claims
// made by the business, not new ones invented for this redesign.
export const trustbar = [
  "Swift Response",
  "Certified Technicians",
  "Service Warranty",
  "Same-Day Dispatch",
];

export const guarantees = {
  label: "Our promise",
  title: "Service you can trust",
  intro:
    "This is what the current iogai.com already tells customers. Ask the owner for the exact warranty terms and licence/insurance details so this section can say something more specific.",
  items: [
    { k: "Swift response", v: "Technicians are ready to respond quickly and get your equipment back in operation without delays." },
    { k: "Certified team", v: "Technicians are certified and experienced across a wide range of brands and equipment types." },
    { k: "Service warranty", v: "Repair and maintenance work is backed by a warranty. Ask the owner for the exact terms and length to publish here." },
    { k: "Emergency service", v: "Emergency repairs are available to minimize downtime and keep equipment running." },
  ],
};

// The old CoolFix "brands we service" section named AC brands the business
// doesn't actually work on. Replaced with the real service categories from
// iogai.com's own sitemap instead of guessing at brand relationships.
// Google Business Profile lists IOGAI's category as general Appliance
// Repair Service (washers, dryers, ovens, dishwashers) alongside
// refrigeration - confirmed real by the owner 5 Sept 2026, added here
// without touching the refrigeration/HVAC/marine/mortuary specialist
// positioning the rest of the site is built around.
export const brands = {
  label: "What we service",
  note: "From single refrigerators to mortuary and marine units - see the full list below.",
  names: [
    "Refrigerators",
    "Commercial Refrigeration",
    "Walk-In Coolers",
    "Freezers",
    "Ice Makers",
    "Restaurant Equipment",
    "Marine Refrigeration & AC",
    "Mortuary Refrigeration",
    "HVAC Systems",
    "Washers & Dryers",
    "Ovens & Stoves",
    "Dishwashers",
  ],
};

export const services = {
  label: "Our services",
  title: "Everything Your Equipment Could Ever Need",
  intro:
    "From a warm fridge to a down walk-in cooler, we handle it. Explore the repair and maintenance services IOGAI offers across Orange County and LA.",
  items: [
    {
      no: "01",
      slug: "refrigerator-freezer-repair",
      name: "Refrigerator & Freezer Repair",
      // Short label for title tags - "Refrigerator & Freezer Repair in
      // [longest city]" blows past 60 chars; the full name still shows
      // in on-page copy.
      titleName: "Refrigerator Repair",
      body: "Residential and commercial refrigerators and freezers, diagnosed and fixed - usually the same visit.",
      image: "/media/real/svc-refrigerator.jpg",
    },
    {
      no: "02",
      slug: "commercial-refrigeration",
      name: "Commercial Refrigeration & Restaurant Equipment",
      titleName: "Commercial Refrigeration",
      body: "Walk-in coolers, ice makers, and restaurant equipment kept running for businesses that can't afford downtime.",
      image: "/media/real/svc-walkin.jpg",
    },
    {
      no: "03",
      slug: "hvac-repair",
      name: "HVAC Repair",
      titleName: "HVAC Repair",
      body: "Heating and air conditioning repair for homes and small businesses, done right the first time.",
      image: "/media/real/svc-hvac.jpg",
    },
    {
      no: "04",
      slug: "marine-mortuary-refrigeration",
      name: "Specialty Refrigeration",
      titleName: "Specialty Refrigeration",
      body: "Marine refrigeration & AC, mortuary refrigeration, shock freezers, and hospital/medical freezers - equipment most repair companies won't touch.",
      image: "/media/real/svc-specialty.jpg",
    },
  ],
};

export const process = {
  label: "How it works",
  title: "From Call To Fixed In 5 Steps",
  intro:
    "Getting your equipment back on track is easier than you think - just five simple steps.",
  steps: [
    { no: "01", name: "Contact us", body: "Call or book online. Tell us the equipment and the symptom." },
    { no: "02", name: "Pick a time", body: "Choose when we come - same-day windows where available." },
    { no: "03", name: "Get a service", body: "A certified tech diagnoses and fixes it, and quotes before any work." },
    { no: "04", name: "Pay safely", body: "Transparent pricing and secure payment - no surprises on the bill." },
    { no: "05", name: "Ready", body: "Your equipment back in operation, with a written record of the work." },
  ],
};

// Real Google reviews, pasted by the owner from the Business Profile 2 Sept 2026.
// No reviewer names or locations were included in that paste, so none are shown
// here - inventing a name/city to match the CoolFix template would be exactly
// the kind of fabricated proof this project rules out.
export const testimonials = {
  label: "Testimonials",
  title: "Look What Our Clients Say",
  intro:
    "5.0 stars across 118 Google reviews. A few of them, word for word.",
  items: [
    {
      quote: "Igor's company very good work, good price & great customer service!",
      name: "Google review",
      role: "Verified customer",
      // No reviewer photo exists for this one, so this shows real IOGAI work
      // instead of a stock face standing in for a customer we've never seen.
      image: "/media/real/about-1.jpg",
    },
    {
      quote: "Saturday service - quick response time - AWESOME knowledgable workers.",
      name: "Google review",
      role: "Verified customer",
      image: "/media/real/svc-freezer.jpg",
    },
    {
      quote: "He quickly diagnosed the issue, and had it fixed asap same day!",
      name: "Google review",
      role: "Verified customer",
      image: "/media/real/svc-icemaker.jpg",
    },
  ],
};

// Questions and answers copied from the live iogai.com FAQ accordion word for
// word (checked 2 Sept 2026) - already-published claims, not new ones.
export const faq = {
  label: "FAQ",
  title: "Frequently Asked Questions",
  intro:
    "A few of the things people ask us most. Can't find your answer? Give us a call.",
  items: [
    {
      q: "What types of equipment do you repair?",
      a: "We specialize in repairing commercial and residential refrigeration units, HVAC systems, freezers, walk-in coolers, and ice makers.",
    },
    {
      q: "Do you offer emergency repair services?",
      a: "Yes, we provide fast emergency repair services to minimize downtime and keep your equipment running smoothly.",
    },
    {
      q: "Are your technicians certified?",
      a: "Our technicians are certified and experienced in handling repairs for a wide range of brands and equipment types.",
    },
    {
      q: "Do you provide a warranty for your services?",
      a: "Yes, we offer a warranty on our repair and maintenance services.",
    },
  ],
};

export const closing = {
  eyebrow: "Ready when you are",
  title: ["Cooling Solutions -", "We've Got This."],
  sub: "Same-day refrigeration and HVAC repair. Trusted local service across Orange County and LA.",
  ctaPrimary: "Book a Repair",
  ctaSecondary: "Get Estimate",
};

export const contact = {
  label: "Book online",
  title: "Book your repair",
  intro:
    "Three quick steps. Start with what you need - we ask for your details last, once you know we're the right fit.",
  serviceStep: {
    heading: "What do you need help with?",
    options: [
      { id: "repair", label: "Repair", note: "It stopped working or isn't cooling right" },
      { id: "commercial", label: "Commercial", note: "Walk-in cooler, ice maker, or restaurant equipment" },
      { id: "hvac", label: "HVAC", note: "Heating or air conditioning issue" },
      { id: "specialty", label: "Marine / Mortuary", note: "Specialty refrigeration" },
    ],
  },
  detailStep: {
    heading: "Tell us a little more",
    messageLabel: "What's happening?",
    messagePlaceholder: "It stopped cooling last night, making a rattling sound…",
    photoLabel: "Add a photo of the unit (optional)",
    photoHint: "A quick photo helps us arrive with the right parts.",
    photoCta: "Choose photo",
  },
  contactStep: {
    heading: "Where should we reach you?",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone",
    email: "Email",
    address: "Service address",
    consent: "We'll only use these to confirm and schedule your service.",
  },
  textUs: {
    label: "Prefer to text?",
    cta: "Text us a photo",
    prefill:
      "Hi IOGAI, I have equipment that needs repair. Here's what's going on: ",
  },
  steps: ["Service", "Details", "Your info"],
  back: "Back",
  next: "Continue",
  submit: "Request Service",
  submitting: "Sending…",
  success: "Received. A technician will call you shortly at the number you gave us.",
  error: "Something went wrong. Please call or email us directly.",
  directLabel: "Or reach us directly",
};

export const footer = {
  tagline: "You read this far - might as well book that repair.",
  newsletter: {
    label: "Newsletter",
    blurb: "Seasonal tips and the occasional offer. No spam.",
    placeholderName: "Your name",
    placeholderEmail: "you@email.com",
    cta: "Sign Up",
  },
  columns: [
    {
      title: "Quick links",
      links: [
        { label: "Services", href: "#top" },
        { label: "How it works", href: "#process" },
        { label: "Reviews", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
        { label: "Service Areas", href: "/service-areas" },
        { label: "Maintenance Contracts", href: "/maintenance-contracts" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Instagram", href: "https://www.instagram.com/iogai_services" },
        { label: "Facebook", href: "https://www.facebook.com/iogai.services" },
        { label: "Yelp", href: "https://www.yelp.com/biz/iogai-refrigeration-huntington-beach" },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} IOGAI. All rights reserved.`,
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
