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
  hours: "Mon–Fri 8 AM–6 PM · Book online 24/7",
  // State registration confirmed by the owner (BHGS / BEAR Major Appliance
  // Repair, status Clear, expires 31 Mar 2027). Shown so customers can verify.
  license: "CA Bureau of Household Goods & Services · Major Appliance Repair No. 50829",
  licenseHref:
    "https://search.dca.ca.gov/details/3900/A/50829/74c24905a98775ee65175f3b0bbdfcbf",
};

export const offer = {
  badge: "Clear diagnostic pricing",
  text: "Service call: $100 for homes, $135 for businesses. Applied toward your approved repair. Decline the repair and the service call is all you pay.",
  cta: "Call (424) 421-7771",
};

// Real quarterly maintenance program, described verbatim by the owner
// 3 Sept 2026 - for restaurant chains and independent restaurants that
// contract IOGAI for ongoing service instead of one-off repair calls.
export const maintenance = {
  label: "Restaurant groups · 5+ locations",
  title: "One Contract for Every Location",
  intro:
    "For restaurant groups with five or more locations: one schedule, one point of contact and one invoice for every site. Priced for your portfolio after a walk-through. A single location? IOGAI Care Restaurant is the simpler fit, from $149 per month.",
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
  cta: "Request a portfolio quote",
};

// ONE PLACE for the Google review count. Change it here and every page,
// the structured data (layout.tsx) and Igor's page update together.
// public/llms.txt is static text: update the two numbers there too.
// Google is the only platform with a verified count right now (Yelp shows 5.0 / 7 reviews,
// but that count wasn't in the source pasted - left off rather than guessed).
export const rating = { value: "5.0", count: "137", source: "Google" };

export const nav = {
  links: [
    { label: "Services", href: "/service-areas" },
    { label: "IOGAI Care", href: "/care" },
    { label: "How it works", href: "/#process" },
    { label: "Reviews", href: "/#testimonials" },
    { label: "FAQ", href: "/#faq" },
  ],
  cta: "Book a Repair",
};

export const hero = {
  eyebrow: "Orange County & Los Angeles County",
  title: ["High-End Appliance", "& Refrigeration Repair"],
  sub: "When the cold stops, everything waits. We repair Sub-Zero, Viking, Thermador, Wolf and Miele in your home, and keep ice machines and kitchen refrigeration running for local businesses. Owner-led: the owner's name stands behind every job.",
  ctaPrimary: "Request Service",
  ctaSecondary: "Call (424) 421-7771",
};

// "10+ years" is now verified - it's on iogai.com's own About page ("Over 10
// years of success working with systems of any complexity"), checked 2 Sept 2026.
export const advantages = {
  label: "Our advantages",
  title: "Experienced hands for the appliances you care about most",
  stats: [
    { value: "13", unit: "+", caption: "Years of hands-on refrigeration experience — Igor Ogai" },
    { value: "5.0", unit: "/5", caption: `Average rating from ${rating.count} Google reviews` },
    { value: "24", unit: "/7", caption: "Request service online anytime. We confirm your technician's arrival window." },
  ],
};

export const guarantees = {
  label: "The IOGAI Promise",
  title: "One standard: perfect.",
  intro:
    "You approve the price before any work. If a repair we made fails within the warranty, we come back and make it right at no labor cost. That is the IOGAI Promise.",
  items: [
    { k: "Swift response", v: "Call or text us with your equipment issue. We confirm technician availability before scheduling your visit." },
    { k: "Clear repair estimates", v: "Diagnosis comes first. Review the scope and price before approving a repair." },
    { k: "Written warranty", v: "Every completed repair is covered: 30 days on labor and 90 days on parts, in writing on your invoice." },
    { k: "Urgent commercial service", v: "Equipment warming up? Call to check the soonest technician availability. We confirm the arrival window and pricing before dispatch." },
  ],
};

// The old CoolFix "brands we service" section named AC brands the business
// doesn't actually work on. Replaced with the real service categories from
// iogai.com's own sitemap instead of guessing at brand relationships.
// Google Business Profile lists IOGAI's category as general Appliance
// Repair Service (washers, dryers, ovens, dishwashers) alongside
// refrigeration - confirmed real by the owner 5 Sept 2026, added here
// without touching the refrigeration specialist
// positioning the rest of the site is built around.
export const brands = {
  label: "What we service",
  note: "Appliances, commercial refrigeration, and ice makers — tell us your equipment type and the problem.",
  names: [
    "Refrigerators",
    "Built-In & High-End Appliances",
    "Commercial Refrigeration",
    "Reach-In Coolers",
    "Freezers",
    "Ice Makers",
    "Restaurant Equipment",
    "Washers & Dryers",
    "Ovens & Stoves",
    "Dishwashers",
    "Medical & Lab Refrigeration",
    "Beauty Clinic Equipment Cooling",
  ],
};

export const services = {
  label: "Our services",
  title: "Repair & Maintenance Services",
  intro:
    "From a warm Sub-Zero to an ice machine that stopped mid-shift, we handle it. Explore the repair and maintenance services IOGAI offers across Orange County and LA.",
  items: [
    {
      no: "01",
      slug: "built-in-high-end-appliance-repair",
      name: "Built-In & High-End Appliance Repair",
      titleName: "High-End Appliance Repair",
      body: "Sub-Zero, Viking, Thermador, Wolf, Miele, Monogram and other luxury built-ins — refrigerators, wine coolers, ranges, wall ovens and dishwashers — repaired with care by refrigeration specialists.",
      image: "/media/real/svc-specialty.jpg",
    },
    {
      no: "02",
      slug: "commercial-refrigeration",
      name: "Commercial Refrigeration & Restaurant Equipment",
      titleName: "Commercial Refrigeration",
      body: "Ice machines (Hoshizaki, Manitowoc, Scotsman), reach-in refrigerators and freezers, prep tables, bar coolers and display cases — kept running for restaurants, bars and markets that can't afford downtime.",
      image: "/media/real/svc-commercial.jpg",
    },
    {
      no: "03",
      slug: "refrigerator-freezer-repair",
      name: "Refrigerator & Freezer Repair",
      // Short label for title tags - "Refrigerator & Freezer Repair in
      // [longest city]" blows past 60 chars; the full name still shows
      // in on-page copy.
      titleName: "Refrigerator Repair",
      body: "Residential and commercial refrigerators and freezers, diagnosed on site, with repair options and pricing explained before work begins.",
      image: "/media/real/svc-refrigerator.jpg",
    },
  ],
};

export const process = {
  label: "How it works",
  title: "From First Call to Running Again",
  intro:
    "Five clear steps, with the price agreed before any work begins.",
  steps: [
    { no: "01", name: "Contact us", body: "Call or book online. Tell us the equipment and the symptom." },
    { no: "02", name: "Confirm your visit", body: "Pick a 2-hour arrival window: 8–10, 10–12, 12–2, 2–4 or 4–6. We text you when the technician is 30 minutes away." },
    { no: "03", name: "Diagnosis & quote", body: "A technician diagnoses the issue and explains repair options and pricing for your approval." },
    { no: "04", name: "Approve & pay", body: "Work starts only after you approve the price. Secure payment, no surprises on the invoice." },
    { no: "05", name: "Back to normal", body: "Your equipment running again, with a written record of the work and the warranty on your invoice." },
  ],
};

// Real Google reviews, pasted by the owner from the Business Profile 2 Sept 2026.
// No reviewer names or locations were included in that paste, so none are shown
// here - inventing a name/city to match the CoolFix template would be exactly
// the kind of fabricated proof this project rules out.
export const testimonials = {
  label: "Testimonials",
  title: "What Our Clients Say",
  intro:
    `${rating.value} stars across ${rating.count} Google reviews. A few of them, word for word.`,
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
      image: "/media/real/svc-refrigerator.jpg",
    },
    {
      quote: "He quickly diagnosed the issue, and had it fixed asap same day!",
      name: "Google review",
      role: "Verified customer",
      image: "/media/real/svc-icemaker.jpg",
    },
  ],
};

// Customer-facing service details, including owner-approved diagnostic prices
// and 24/7 online intake (updated 17 Nov 2026). Visits require confirmation.
export const faq = {
  label: "FAQ",
  title: "Frequently Asked Questions",
  intro:
    "A few of the things people ask us most. Can't find your answer? Give us a call.",
  items: [
    {
      q: "What types of equipment do you repair?",
      a: "We specialize in ice machines (Hoshizaki, Manitowoc, Scotsman), reach-in refrigerators and freezers, prep tables and bar coolers, home refrigerators and freezers, and high-end built-ins like Sub-Zero, Viking and Thermador.",
    },
    {
      q: "Do you offer emergency repair services?",
      a: "For urgent commercial refrigeration problems, call (424) 421-7771 so we can check the soonest available technician. Phone hours: Monday to Friday, 8 AM to 6 PM; online requests 24/7. Emergency and after-hours visits depend on technician availability; we confirm the arrival window and any additional charges before dispatch.",
    },
    {
      q: "How much is the service call?",
      a: "The service call is $100 for homes and $135 for businesses. It covers a diagnostic visit and is applied toward your approved repair. Repairs are quoted separately for your approval before work begins. Any additional diagnostic or access work requires your approval first. If you decide not to repair, the service call is all you pay.",
    },
    {
      q: "Do you offer maintenance plans?",
      a: "Yes, IOGAI Care. Care Home: $119 per maintenance visit for built-in and high-end refrigeration, no annual fee and no prepayment. Care Property: for property managers, HOAs, landlords and vacation rentals, $100 per home or $135 per business service call, $119 turnover check per unit, one monthly invoice. Care Restaurant: scheduled maintenance from $149 per month, month to month. Details at iogai.com/care.",
    },
    {
      q: "Do you service medical, lab and beauty clinic equipment?",
      a: "Yes, plug-in refrigeration of any complexity: pharmacy and vaccine refrigerators, lab refrigerators and freezers, ultra-low freezers, blood bank and specimen refrigerators, mortuary refrigerators, and the cooling systems in aesthetic clinic devices. We do not service X-ray or other radiation equipment, and equipment under a manufacturer's warranty goes to the manufacturer first. Details at iogai.com/medical-lab-beauty-refrigeration.",
    },
    {
      q: "Is my requested time the technician's arrival time?",
      a: "Choose a 2-hour arrival window, Monday to Friday: 8–10 AM, 10 AM–12 PM, 12–2 PM, 2–4 PM or 4–6 PM. Your technician texts you 30 minutes before arrival, so you don't have to wait by the door. Same-day and next-day visits are often available.",
    },
    {
      q: "Can you service my equipment?",
      a: "Send the equipment type, brand, model, and ZIP code. We will confirm whether we can accept the work before scheduling.",
    },
    {
      q: "Do you provide a warranty for your services?",
      a: "Yes. Every completed repair is covered for 30 days on labor and 90 days on parts, in writing on your invoice.",
    },
  ],
};

export const closing = {
  eyebrow: "Ready when you are",
  title: ["We'll Take It", "From Here."],
  sub: "High-end appliance and refrigeration repair across Orange County and LA. Same-day and next-day visits are often available.",
  ctaPrimary: "Book a Repair",
  ctaSecondary: "Call (424) 421-7771",
};

export const contact = {
  label: "Request service online",
  title: "Request a service visit",
  intro:
    "Tell us what's wrong, online 24/7. We call to confirm your arrival window. Urgent problem at a business? Call us now.",
  serviceStep: {
    heading: "What do you need help with?",
    options: [
      { id: "repair", label: "Appliance Repair", note: "Built-in & high-end appliances, refrigerators, ovens, dishwashers, washers & dryers." },
      { id: "commercial", label: "Commercial", note: "Ice machine, reach-in, prep table or bar cooler" },
      { id: "medical", label: "Medical / Lab / Beauty", note: "Pharmacy, vaccine, lab or clinic refrigeration" },
      { id: "other", label: "Something else", note: "Tell us the equipment and we will confirm" },
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
  success: "Received. We'll call to confirm your visit, Mon–Fri, 8 AM–6 PM.",
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
        { label: "Repair Problems", href: "/repair" },
        { label: "IOGAI Care Membership", href: "/care" },
        { label: "How it works", href: "/#process" },
        { label: "Reviews", href: "/#testimonials" },
        { label: "FAQ", href: "/#faq" },
        { label: "Service Areas", href: "/service-areas" },
        { label: "Medical, Lab & Beauty", href: "/medical-lab-beauty-refrigeration" },
        { label: "Restaurant Groups", href: "/maintenance-contracts" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Instagram", href: "https://www.instagram.com/iogai.services" },
        { label: "Facebook", href: "https://www.facebook.com/iogai.services" },
        { label: "YouTube", href: "https://www.youtube.com/@iogai.services" },
        { label: "TikTok", href: "https://www.tiktok.com/@iogai.services" },
        { label: "Find us on Yelp", href: "https://www.yelp.com/biz/iogai-refrigeration-huntington-beach" },
        { label: "Thumbtack", href: "https://www.thumbtack.com/ca/huntington-beach/appliance-repair/iogai-appliance-refrigeration-repair-service/service/499058102966788108" },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} IOGAI. All rights reserved.`,
  legalLinks: [
    { label: "Founder: Igor Ogai", href: "/igor-ogai" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
