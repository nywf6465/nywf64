import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * moroco menu — nav-menu topics for all routes beginning with `moroco`.
 * Labels match `media/moroco-menu-topics-source.jpg` (+ Overview at top).
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `moroco01`…`moroco06`.
 * Slug spelling is `moroco` (not “morocco”).
 */
export const MOROCO_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/morocooverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/moroco01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/moroco02",
  },
  {
    label: "Postcards",
    href: "/moroco03",
  },
  {
    label: "Gallery of Photographs",
    href: "/moroco04",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/moroco05",
  },
  {
    label: "Pamphlet: Welcome to the Moroccan Pavilion",
    href: "/moroco06",
  },
];
