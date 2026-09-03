// Copy for the scroll walkthrough. Service name + body are pulled straight
// from lib/copy.ts services.items so this section never drifts from the
// money pages - one source of truth for what IOGAI actually does.
import { services } from "./copy";

export const walkthrough = {
  id: "services",
  label: "Inside every repair",
  stages: [
    {
      image: "/media/real/walkthrough/01-door.png",
      eyebrow: "IOGAI",
      title: "Every repair starts at a door most people never open.",
      body: "",
    },
    {
      image: "/media/real/walkthrough/02-threshold.png",
      eyebrow: "What's behind it",
      title: "A system that has to work perfectly, every single day.",
      body: "",
    },
    {
      image: "/media/real/walkthrough/03-refrigerator.png",
      eyebrow: "01",
      title: services.items[0].name,
      body: services.items[0].body,
    },
    {
      image: "/media/real/walkthrough/04-commercial.png",
      eyebrow: "02",
      title: services.items[1].name,
      body: services.items[1].body,
    },
    {
      image: "/media/real/walkthrough/05-hvac.png",
      eyebrow: "03",
      title: services.items[2].name,
      body: services.items[2].body,
    },
    {
      image: "/media/real/walkthrough/06-specialty.png",
      eyebrow: "04",
      title: services.items[3].name,
      body: services.items[3].body,
    },
  ],
};
