import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Hertz menu — nav-menu topics for all routes beginning with `hertz`.
 * Labels match `media/hertz-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `hertz01`…`hertz02`.
 */
export const HERTZ_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/hertzoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/hertz01",
  },
  {
    label: "Gallery of Photographs",
    href: "/hertz02",
  },
];
