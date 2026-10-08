import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * mainmall menu — nav-menu topics for all routes beginning with `mainmall`.
 * Labels match `media/mainmall-menu-topics-source.jpg` (+ Overview at top).
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `mainmall01`…`mainmall02`.
 */
export const MAINMALL_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/mainmalloverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/mainmall01",
  },
  {
    label: "Photograph Album",
    href: "/mainmall02",
  },
];
