import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * mason menu — nav-menu topics for all routes beginning with `mason`.
 * Labels match `media/mason-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map is one topic (wrapped in source; no "Entries").
 * Non-Overview routes: `mason01`…`mason05`.
 */
export const MASON_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/mason01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/mason02",
  },
  {
    label: "Postcards",
    href: "/mason03",
  },
  {
    label: "Photograph Album",
    href: "/mason04",
  },
  {
    label: "Booklet: The Masonic Brotherhood Center",
    href: "/mason05",
  },
];
