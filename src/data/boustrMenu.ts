import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Boustr menu — nav-menu topics for all routes beginning with `boustr`.
 * Labels match the boustr-menu-topics mockup.
 * Non-Overview routes: `boustr01`…`boustr03`.
 */
export const BOUSTR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/boustr01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/boustr02",
  },
  {
    label: "Photograph Album",
    href: "/boustr03",
  },
];
