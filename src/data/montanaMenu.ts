import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * montana menu — nav-menu topics for all routes beginning with `montana`.
 * Labels match `media/montana-menu-topics-source.jpg` (+ Overview at top).
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `montana01`…`montana04`.
 */
export const MONTANA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/montanaoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/montana01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/montana02",
  },
  {
    label: "Postcards",
    href: "/montana03",
  },
  {
    label: "Gallery of Photographs",
    href: "/montana04",
  },
];
