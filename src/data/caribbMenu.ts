import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Caribb menu — nav-menu topics for all routes beginning with `caribb`.
 * Labels match the caribb-menu-topics mockup; Overview at top.
 * Non-Overview routes: `caribb01`…`caribb05`.
 */
export const CARIBB_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/caribboverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/caribb01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/caribb02",
  },
  {
    label: "Postcards",
    href: "/caribb03",
  },
  {
    label: "Advertising",
    href: "/caribb04",
  },
  {
    label: "Photograph Album",
    href: "/caribb05",
  },
];
