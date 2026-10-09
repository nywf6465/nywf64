import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * United Nations menu — nav-menu topics for all routes beginning with `un`.
 * Labels match uploaded menu topics (+ Overview at top).
 * Non-Overview routes: `un01`…`un03`.
 */
export const UN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/unoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/un01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/un02",
  },
  {
    label: "Photograph Album",
    href: "/un03",
  },
];
