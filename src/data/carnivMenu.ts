import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Carniv menu — nav-menu topics for all routes beginning with `carniv`.
 * Labels match the carniv-menu-topics mockup; Overview at top.
 * Non-Overview routes: `carniv01`…`carniv03`.
 */
export const CARNIV_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/carnivoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/carniv01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/carniv02",
  },
  {
    label: "Press Clippings",
    href: "/carniv03",
  },
];
