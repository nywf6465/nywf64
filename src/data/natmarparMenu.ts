import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * natmarpar menu — nav-menu topics for all routes beginning with `natmarpar`.
 * Labels match `media/natmarpar-menu-topics-source.jpg` (+ Overview at top).
 * Source shows one wrapped Guidebook button (not two topics).
 * Non-Overview routes: `natmarpar01`.
 */
export const NATMARPAR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/natmarparoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/natmarpar01",
  },
];
