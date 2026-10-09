import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * First National City Bank menu — nav-menu topics for all routes beginning with `firnat`.
 * Labels match `media/firnat-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `firnat01`…`firnat04`.
 */
export const FIRNAT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/firnatoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/firnat01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/firnat02",
  },
  {
    label: "Photograph Album",
    href: "/firnat03",
  },
  {
    label: "Folder: The Bank at the Fair",
    href: "/firnat04",
  },
];
