import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Walter's International Wax Museum menu — topics for all routes beginning with `walwax`.
 * Labels match uploaded menu topics (+ Overview at top).
 * Non-Overview routes: `walwax01`…`walwax04`.
 */
export const WALWAX_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/walwaxoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/walwax01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/walwax02",
  },
  {
    label: "Postcards",
    href: "/walwax03",
  },
  {
    label: "Gallery of Photographs",
    href: "/walwax04",
  },
];
