import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Amprid menu — nav-menu topics for all routes beginning with `amprid`.
 * Labels match the amprid-menu-topics mockup.
 * Non-Overview routes: `amprid01`…`amprid03`.
 */
export const AMPRID_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/amprid01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/amprid02",
  },
  {
    label: "Photograph Album",
    href: "/amprid03",
  },
];
