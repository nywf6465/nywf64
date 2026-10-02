import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Sweden menu — nav-menu topics for all routes beginning with `sweden`.
 * Labels match the sweden-menu-topics mockup; Overview at top.
 * Non-Overview routes: `sweden01`…`sweden03`.
 */
export const SWEDEN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/swedenoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/sweden01",
  },
  {
    label: "Postcards",
    href: "/sweden02",
  },
  {
    label: "Gallery of Photographs",
    href: "/sweden03",
  },
];
