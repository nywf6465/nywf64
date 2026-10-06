import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World's Fair Marina menu — nav-menu topics for all routes beginning with `wfmar`.
 * Labels match uploaded menu topics.
 * Non-Overview routes: `wfmar01`…`wfmar04`.
 */
export const WFMAR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/wfmar01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/wfmar02",
  },
  {
    label: "Postcards",
    href: "/wfmar03",
  },
  {
    label: "Gallery of Photographs",
    href: "/wfmar04",
  },
];
