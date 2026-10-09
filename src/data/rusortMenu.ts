import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Rusort menu — nav-menu topics for all routes beginning with `rusort`.
 * Labels match the rusort-menu-topics mockup.
 * Non-Overview routes: `rusort01`…`rusort04`.
 */
export const RUSORT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/rusort01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/rusort02",
  },
  {
    label: "Postcards",
    href: "/rusort03",
  },
  {
    label: "Gallery of Photographs",
    href: "/rusort04",
  },
];
