import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * lakcru menu — nav-menu topics for all routes beginning with `lakcru`.
 * Labels match `media/lakcru-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `lakcru01`…`lakcru03`.
 */
export const LAKCRU_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/lakcruoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/lakcru01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/lakcru02",
  },
  {
    label: "Gallery of Photographs",
    href: "/lakcru03",
  },
];
