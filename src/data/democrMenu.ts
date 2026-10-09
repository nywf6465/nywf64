import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Demonstration Center menu — nav-menu topics for all routes beginning with `democr`.
 * Labels match the democroverview menu-topics mockup; Overview at top.
 * Non-Overview routes: `democr01`…`democr05`.
 */
export const DEMOCR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/democroverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/democr01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/democr02",
  },
  {
    label: "Advertising",
    href: "/democr03",
  },
  {
    label: "Photograph Album",
    href: "/democr04",
  },
  {
    label: "List of Sub-Exhibitors",
    href: "/democr05",
  },
];
