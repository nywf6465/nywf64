import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Proort menu — nav-menu topics for all routes beginning with `proort`.
 * Labels match the proort-menu-topics mockup.
 * Non-Overview routes: `proort01`…`proort04`.
 */
export const PROORT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/proort01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/proort02",
  },
  {
    label: "Postcards",
    href: "/proort03",
  },
  {
    label: "Photograph Album",
    href: "/proort04",
  },
];
