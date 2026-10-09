import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Brilion menu — nav-menu topics for all routes beginning with `brilion`.
 * Labels match the brilion-menu-topics mockup.
 * Non-Overview routes: `brilion01`…`brilion03`.
 */
export const BRILION_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/brilion01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/brilion02",
  },
  {
    label: "Photograph Album",
    href: "/brilion03",
  },
];
