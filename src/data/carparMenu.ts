import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Carpar menu — nav-menu topics for all routes beginning with `carpar`.
 * Labels match the carpar-menu-topics mockup.
 * Non-Overview routes: `carpar01`…`carpar03`.
 */
export const CARPAR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/carpar01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/carpar02",
  },
  {
    label: "Photograph Album",
    href: "/carpar03",
  },
];
