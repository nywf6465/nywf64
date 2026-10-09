import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Allsta menu — nav-menu topics for all routes beginning with `allsta`.
 * Labels match the allsta-menu-topics mockup.
 * Non-Overview routes: `allsta01`…`allsta03`.
 */
export const ALLSTA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/allsta01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/allsta02",
  },
  {
    label: "Photograph Album",
    href: "/allsta03",
  },
];
