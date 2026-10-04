import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * United Arab Republic menu — nav-menu topics for all routes beginning with `uar`.
 * Labels match uploaded menu topics (+ Overview at top).
 * Non-Overview routes: `uar01`…`uar04`.
 */
export const UAR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/uaroverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/uar01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/uar02",
  },
  {
    label: "Advertising",
    href: "/uar03",
  },
  {
    label: "Gallery of Photographs",
    href: "/uar04",
  },
];
