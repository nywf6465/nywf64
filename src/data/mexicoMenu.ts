import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * mexico menu — nav-menu topics for all routes beginning with `mexico`.
 * Labels match `media/mexico-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `mexico01`…`mexico04`.
 */
export const MEXICO_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/mexico01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/mexico02",
  },
  {
    label: "Postcards",
    href: "/mexico03",
  },
  {
    label: "Photograph Album",
    href: "/mexico04",
  },
];
