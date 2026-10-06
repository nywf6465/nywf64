import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Fiesta menu — nav-menu topics for all routes beginning with `fiesta`.
 * Labels match `media/fiesta-menu-topics-source.jpg`.
 * Non-Overview routes: `fiesta01`…`fiesta02`.
 */
export const FIESTA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/fiesta01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/fiesta02",
  },
];
