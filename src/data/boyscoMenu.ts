import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Boysco menu — nav-menu topics for all routes beginning with `boysco`.
 * Labels match the boysco-menu-topics mockup; Overview at top.
 * Non-Overview routes: `boysco01`…`boysco06`.
 */
export const BOYSCO_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/boyscooverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/boysco01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/boysco02",
  },
  {
    label: "Postcards",
    href: "/boysco03",
  },
  {
    label: "Photograph Album",
    href: "/boysco04",
  },
  {
    label: "Pamphlet: Start of Construction",
    href: "/boysco05",
  },
  {
    label: "Brochure: The Wonderful World of Scouting",
    href: "/boysco06",
  },
];
