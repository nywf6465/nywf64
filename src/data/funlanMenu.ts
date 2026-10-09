import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Funlan menu — nav-menu topics for all routes beginning with `funlan`.
 * Labels match `media/funlan-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `funlan01`.
 */
export const FUNLAN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/funlanoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/funlan01",
  },
];
