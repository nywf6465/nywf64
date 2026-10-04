import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World's Fair Pavilion menu — nav-menu topics for all routes beginning with `wfpav`.
 * Labels match uploaded menu topics (+ Overview at top).
 * Non-Overview routes: `wfpav01`…`wfpav04`.
 */
export const WFPAV_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/wfpavoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/wfpav01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/wfpav02",
  },
  {
    label: "Postcards",
    href: "/wfpav03",
  },
  {
    label: "Gallery of Photographs",
    href: "/wfpav04",
  },
];
