import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Litwaycro menu — nav-menu topics for all routes beginning with `litwaycro`.
 * Labels match the litwaycro-menu-topics mockup.
 * Non-Overview routes: `litwaycro01`…`litwaycro03`.
 */
export const LITWAYCRO_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/litwaycro01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/litwaycro02",
  },
  {
    label: "Photograph Album",
    href: "/litwaycro03",
  },
];
