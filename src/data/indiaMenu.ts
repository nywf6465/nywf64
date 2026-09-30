import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * India menu — nav-menu topics for all routes beginning with `india`.
 * Labels match `media/india-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `india01`…`india05`.
 */
export const INDIA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/indiaoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/india01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/india02",
  },
  {
    label: "Postcards",
    href: "/india03",
  },
  {
    label: "Advertising",
    href: "/india04",
  },
  {
    label: "Gallery of Photographs",
    href: "/india05",
  },
];
