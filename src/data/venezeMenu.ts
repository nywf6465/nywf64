import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Venezuela menu — nav-menu topics for `veneerview` and routes beginning with `veneze`.
 * Labels match uploaded menu topics.
 * Non-Overview routes: `veneze01`…`veneze05`.
 */
export const VENEZE_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/veneze01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/veneze02",
  },
  {
    label: "Gallery of Photographs",
    href: "/veneze03",
  },
  {
    label: "Groundbreaking",
    href: "/veneze04",
  },
  {
    label: "Press Release / News",
    href: "/veneze05",
  },
];
