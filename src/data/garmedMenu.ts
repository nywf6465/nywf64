import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Garden of Meditation menu — nav-menu topics for all routes beginning with `garmed`.
 * Labels match `media/garmed-menu-topics-source.jpg`.
 * Non-Overview routes: `garmed01`…`garmed03`.
 */
export const GARMED_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/garmed01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/garmed02",
  },
  {
    label: "Photograph Album",
    href: "/garmed03",
  },
];
