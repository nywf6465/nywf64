import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Entrance Towers menu — nav-menu topics for all routes beginning with `towers`.
 * Labels match `media/towersoverview/04-menu-topics.jpg`.
 * Non-Overview routes: `towers01`…`towers03`.
 */
export const TOWERS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/towers01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/towers02",
  },
  {
    label: "Photograph Album",
    href: "/towers03",
  },
];
