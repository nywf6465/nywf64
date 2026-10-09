import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Fine Arts Pavilion menu — nav-menu topics for all routes beginning with `finart`.
 * Labels match `media/finart-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `finart01`…`finart02`.
 */
export const FINART_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/finartoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/finart01",
  },
  {
    label: "Photograph Album",
    href: "/finart02",
  },
];
