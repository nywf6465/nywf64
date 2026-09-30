import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * lowengar menu — nav-menu topics for all routes beginning with `lowengar`.
 * Labels match `media/lowengar-menu-topics-source.jpg` (+ Overview at top).
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `lowengar01`…`lowengar03`.
 */
export const LOWENGAR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/lowengaroverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/lowengar01",
  },
  {
    label: "Postcards",
    href: "/lowengar02",
  },
  {
    label: "Gallery of Photographs",
    href: "/lowengar03",
  },
];
