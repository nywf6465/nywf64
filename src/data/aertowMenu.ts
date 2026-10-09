import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Aertow menu — nav-menu topics for all routes beginning with `aertow`.
 * Labels match the aertow-menu-topics mockup.
 * Non-Overview routes: `aertow01`…`aertow03`.
 */
export const AERTOW_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/aertow01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/aertow02",
  },
  {
    label: "Photograph Album",
    href: "/aertow03",
  },
];
