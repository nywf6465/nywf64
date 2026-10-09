import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * lebano menu — nav-menu topics for all routes beginning with `lebano`.
 * Labels match `media/lebano-menu-topics-source.jpg` (+ Overview at top).
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `lebano01`…`lebano04`.
 */
export const LEBANO_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/lebanooverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/lebano01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/lebano02",
  },
  {
    label: "Photograph Album",
    href: "/lebano03",
  },
  {
    label: "Exhibit Descriptions",
    href: "/lebano04",
  },
];
