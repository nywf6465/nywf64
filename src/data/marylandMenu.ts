import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * maryland menu — nav-menu topics for all routes beginning with `maryland`.
 * Labels match `media/maryland-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `maryland01`…`maryland05`.
 */
export const MARYLAND_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/maryland01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/maryland02",
  },
  {
    label: "Gallery of Photographs",
    href: "/maryland03",
  },
  {
    label: "Pavilion Plan and Interior Model",
    href: "/maryland04",
  },
  {
    label: "Article: O'er the Ramparts",
    href: "/maryland05",
  },
];
