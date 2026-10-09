import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * malaysia menu — nav-menu topics for all routes beginning with `malaysia`.
 * Labels match `media/malaysia-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `malaysia01`…`malaysia03`.
 */
export const MALAYSIA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/malaysia01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/malaysia02",
  },
  {
    label: "Photograph Album",
    href: "/malaysia03",
  },
];
