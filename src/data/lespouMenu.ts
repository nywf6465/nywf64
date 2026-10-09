import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * lespou menu — nav-menu topics for all routes beginning with `lespou`.
 * Labels match `media/lespou-menu-topics-source.jpg`.
 * Source has 2 distinct buttons; Guidebook & Souvenir Map Entries is one
 * wrapped row (not split). Non-Overview routes: `lespou01`…`lespou02`.
 */
export const LESPOU_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/lespou01",
  },
  {
    label: "Photograph Album",
    href: "/lespou02",
  },
];
