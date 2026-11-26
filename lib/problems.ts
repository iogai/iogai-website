// Symptom pages: the exact problems customers type into Google when something
// breaks ("ice machine not making ice"). High buying intent, one page each,
// written from real field causes. No prices beyond the published service
// call; no manufacturer affiliation claimed.

export type Problem = {
  slug: string;
  /** H1 / title phrase, the way customers search it. */
  title: string;
  kind: "commercial" | "residential";
  /** Short meta description lead. */
  summary: string;
  intro: string;
  causes: string[];
  /** Safe checks an owner can do before calling. */
  checks: string[];
  /** When to stop and call. */
  urgent: string;
  /** Related brand slugs from lib/brands.ts. */
  brands: string[];
  /** Related service slug from lib/copy.ts services. */
  service: string;
};

export const problems: Problem[] = [
  {
    slug: "ice-machine-not-making-ice",
    title: "Ice Machine Not Making Ice",
    kind: "commercial",
    summary: "Commercial ice machine making no ice or slow ice? Repair for Hoshizaki, Manitowoc and Scotsman.",
    intro:
      "When an ice machine stops producing, a bar or restaurant feels it within hours. Most no-ice calls come down to water supply, a dirty machine that can no longer harvest, or a failed sensor or control — and most are fixed on the first visit once the root cause is found.",
    causes: [
      "Clogged water filter or low water pressure — the machine cannot fill the trough",
      "Scale build-up on the evaporator, so ice will not release during harvest",
      "Dirty condenser coil or failed condenser fan — the unit overheats and shuts down",
      "Faulty water-level, thickness or bin-level sensor",
      "Failed water inlet valve, water pump or hot-gas valve",
      "Refrigerant leak or compressor problem (less common, found by testing pressures)",
    ],
    checks: [
      "Confirm the water supply valve behind the machine is fully open",
      "Check the date on the water filter — most need changing every 6 months",
      "Look at the condenser: if it is covered in dust or grease, airflow is blocked",
      "Make sure the bin is not full or the bin sensor is not blocked by ice",
    ],
    urgent:
      "If the machine shows an error light, is leaking, or the compressor runs constantly with no ice, turn it off and call — running it that way can damage the compressor.",
    brands: ["hoshizaki", "manitowoc", "scotsman"],
    service: "commercial-refrigeration",
  },
  {
    slug: "walk-in-cooler-not-cooling",
    title: "Walk-In Cooler Not Cooling",
    kind: "commercial",
    summary: "Walk-in cooler warm or above 41°F? Fast diagnosis to protect your inventory and health inspection.",
    intro:
      "A walk-in above 41°F puts your product and your health inspection at risk. The cause is usually airflow, ice on the evaporator, or a component that has quietly failed — we find it, explain it, and give you the price before any repair.",
    causes: [
      "Evaporator coil iced over from a defrost problem or a door left open",
      "Dirty condenser coil on the roof or outside unit",
      "Failed evaporator or condenser fan motor",
      "Worn door gaskets, strip curtains or a door that does not close",
      "Bad thermostat, temperature control or contactor",
      "Low refrigerant from a leak, or a compressor that is not starting",
    ],
    checks: [
      "Check that the door closes and seals fully, and the strip curtain is in place",
      "Look inside the evaporator (the fan unit on the ceiling): are the fans turning, is the coil covered in ice?",
      "Make sure boxes are not stacked against the evaporator and blocking airflow",
      "Check the breaker for the condensing unit",
    ],
    urgent:
      "If product is above 41°F for more than a few hours, move it to another cooler and call right away.",
    brands: ["true", "traulsen", "beverage-air", "atosa"],
    service: "commercial-refrigeration",
  },
  {
    slug: "walk-in-freezer-not-freezing",
    title: "Walk-In Freezer Not Freezing",
    kind: "commercial",
    summary: "Walk-in freezer warming up or icing over? Defrost, fan and refrigeration repair in OC and LA.",
    intro:
      "Walk-in freezers fail differently from coolers: defrost heaters, drain-line heaters and timers are the usual suspects, and a small problem turns into a block of ice on the coil within a day.",
    causes: [
      "Failed defrost heater, defrost timer or termination switch",
      "Frozen drain line, so defrost water refreezes on the coil",
      "Evaporator fan motor failure",
      "Door heater or gasket failure letting warm, humid air in",
      "Dirty condenser, low refrigerant or compressor problem",
    ],
    checks: [
      "Look for heavy ice on the evaporator coil or ice on the floor under it",
      "Check that the door closes completely and the frame is not frosted",
      "Listen for the evaporator fans — silence often means a defrost cycle or a failed motor",
    ],
    urgent:
      "If the box reads above 0°F and rising, keep the door closed, move product if you can, and call.",
    brands: ["true", "traulsen", "beverage-air", "atosa"],
    service: "commercial-refrigeration",
  },
  {
    slug: "reach-in-refrigerator-not-cooling",
    title: "Commercial Reach-In Refrigerator Not Cooling",
    kind: "commercial",
    summary: "Reach-in or prep refrigerator running warm? Repair for True, Traulsen, Atosa and Beverage-Air.",
    intro:
      "Reach-ins and prep tables work hardest in hot kitchens. Most warm-box calls are airflow and coil problems that a proper cleaning and one part fix — not a new unit.",
    causes: [
      "Condenser coil packed with grease and dust",
      "Evaporator fan motor or condenser fan motor failure",
      "Iced-up evaporator from a defrost or door-gasket problem",
      "Faulty thermostat or electronic control",
      "Refrigerant leak or failed start components on the compressor",
    ],
    checks: [
      "Check that nothing blocks the vents inside and the unit is not overloaded",
      "Inspect door gaskets for tears and make sure doors close on their own",
      "Look at the condenser coil at the bottom or top — if it is grey with dust, airflow is blocked",
    ],
    urgent:
      "If the box is above 41°F, move food to a working unit and call before the next service.",
    brands: ["true", "traulsen", "atosa", "beverage-air", "hoshizaki"],
    service: "commercial-refrigeration",
  },
  {
    slug: "refrigerator-not-cooling",
    title: "Refrigerator Not Cooling",
    kind: "residential",
    summary: "Fridge warm but freezer cold, or both warm? Home refrigerator repair in Orange County and LA.",
    intro:
      "A warm refrigerator is the most common call we get. Often the freezer still feels cold while the fresh-food side warms up — a classic sign of an airflow or defrost problem rather than a dead compressor.",
    causes: [
      "Frost-blocked evaporator from a failed defrost heater, sensor or control",
      "Evaporator or condenser fan not running",
      "Dirty condenser coils (common near the coast and with pets)",
      "Failed damper or air duct between freezer and refrigerator",
      "Control board, start relay or compressor problem",
      "Sealed-system leak (diagnosed by testing, never guessed)",
    ],
    checks: [
      "Check the temperature setting and that the unit was not switched to showroom or Sabbath mode",
      "Make sure vents inside are not blocked by food",
      "Listen for the fans when the door is open and the switch is pressed",
      "Feel the back wall of the freezer — heavy frost behind the panel points to defrost",
    ],
    urgent:
      "If the refrigerator is above 40°F, keep the doors closed and call. Food safety comes first.",
    brands: ["sub-zero", "thermador", "viking", "miele", "monogram"],
    service: "refrigerator-freezer-repair",
  },
  {
    slug: "freezer-not-freezing",
    title: "Freezer Not Freezing",
    kind: "residential",
    summary: "Freezer soft or frosting up? Home freezer and built-in freezer repair across OC and LA.",
    intro:
      "Soft ice cream and frost on the walls usually point to a defrost, fan or door-seal problem. Built-in column freezers and drawer freezers need careful access in finished kitchens — that is our daily work.",
    causes: [
      "Defrost system failure — heater, thermostat, sensor or board",
      "Evaporator fan motor stopped",
      "Torn or loose door gasket, door out of alignment",
      "Dirty condenser coil",
      "Refrigerant leak or compressor problem",
    ],
    checks: [
      "Make sure the door or drawer closes fully and the gasket seals all around",
      "Check that the freezer is not overpacked around the vents",
      "Look for frost build-up on the back panel",
    ],
    urgent: "If frozen food starts to thaw, move it to a cooler with ice and call.",
    brands: ["sub-zero", "thermador", "monogram", "miele", "viking"],
    service: "refrigerator-freezer-repair",
  },
  {
    slug: "refrigerator-ice-maker-not-working",
    title: "Refrigerator Ice Maker Not Working",
    kind: "residential",
    summary: "Home ice maker stopped making ice? Repair for built-in and freestanding refrigerators.",
    intro:
      "When the ice maker stops, the cause is usually water supply, a frozen fill tube or the ice maker module itself. We check the whole path, from the valve under the sink to the module.",
    causes: [
      "Clogged water filter or low household water pressure",
      "Frozen fill tube or failed water inlet valve",
      "Failed ice maker module, sensor or switch",
      "Freezer not cold enough for the ice maker to cycle",
    ],
    checks: [
      "Make sure the ice maker switch is on and the bail arm or sensor is not blocked",
      "Replace the water filter if it is older than 6 months",
      "Check that the water valve behind the refrigerator is open",
    ],
    urgent:
      "If there is water leaking onto the floor or under the cabinet, shut the water supply and call.",
    brands: ["sub-zero", "thermador", "monogram", "viking", "miele"],
    service: "refrigerator-freezer-repair",
  },
  {
    slug: "refrigerator-leaking-water",
    title: "Refrigerator Leaking Water",
    kind: "residential",
    summary: "Water under or inside your refrigerator? Find the source before it damages floors and cabinets.",
    intro:
      "Water on the floor can ruin hardwood and cabinetry in a finished kitchen, so we treat leaks as a priority. Most leaks come from a blocked defrost drain or the water supply line.",
    causes: [
      "Blocked or frozen defrost drain line",
      "Cracked or misaligned drain pan",
      "Leaking water supply line, filter housing or inlet valve",
      "Ice maker or dispenser overflow",
    ],
    checks: [
      "Find where the water appears: inside the fresh-food bottom, under the unit, or behind it",
      "Check that the water filter is seated and locked",
      "Turn off the water supply if water keeps coming",
    ],
    urgent: "Shut off the water supply to the refrigerator and call — floor damage gets worse every hour.",
    brands: ["sub-zero", "thermador", "monogram", "miele", "viking"],
    service: "refrigerator-freezer-repair",
  },
  {
    slug: "oven-not-heating",
    title: "Oven Not Heating",
    kind: "residential",
    summary: "Wall oven or range oven not heating? Repair for Wolf, Thermador, Viking, Miele and Monogram.",
    intro:
      "A high-end oven that will not heat is usually an igniter, element, sensor or control problem. We diagnose it on site and quote the part and labor before any work.",
    causes: [
      "Weak or failed gas igniter (gas ovens)",
      "Burned-out bake or broil element (electric ovens)",
      "Failed temperature sensor",
      "Gas safety valve or control board fault",
    ],
    checks: [
      "Make sure the oven is not in Sabbath, lock or demo mode",
      "Check the breaker, and for gas models that the gas valve is open",
      "Note any error code on the display — it speeds up diagnosis",
    ],
    urgent:
      "If you smell gas, do not try to light the oven. Leave the house and call your gas company first.",
    brands: ["wolf", "thermador", "viking", "miele", "monogram"],
    service: "built-in-high-end-appliance-repair",
  },
  {
    slug: "sub-zero-not-cooling",
    title: "Sub-Zero Refrigerator Not Cooling",
    kind: "residential",
    summary: "Sub-Zero warm? Independent repair for built-in and integrated Sub-Zero refrigerators in OC and LA.",
    intro:
      "Sub-Zero units are built to last decades, so a warm compartment almost always has a fixable cause. We repair them in place with care for the cabinetry around them.",
    causes: [
      "Dirty condenser at the top grille (needs cleaning every 6 months)",
      "Failed condenser or evaporator fan",
      "Defrost heater or sensor failure",
      "Control board or display board fault",
      "Sealed-system problem on older units, diagnosed by testing",
    ],
    checks: [
      "Check the display for a service light or error",
      "Make sure the top grille is not blocked and the condenser fan runs",
      "Confirm doors close and the gaskets seal",
    ],
    urgent: "If the refrigerator is above 40°F, keep the doors closed and call.",
    brands: ["sub-zero"],
    service: "built-in-high-end-appliance-repair",
  },
];

export function findProblem(slug: string): Problem | undefined {
  return problems.find((p) => p.slug === slug);
}
