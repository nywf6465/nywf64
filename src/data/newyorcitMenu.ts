import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * newyorcit menu — nav-menu topics for all routes beginning with `newyorcit`.
 * Labels match `media/newyorcit-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `newyorcit01`…`newyorcit03`.
 */
export const NEWYORCIT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/newyorcit01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/newyorcit02",
  },
  {
    label: "Gallery of Photographs",
    href: "/newyorcit03",
  },
];
