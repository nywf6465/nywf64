import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * maspiz menu — nav-menu topics for all routes beginning with `maspiz`.
 * Labels match `media/maspiz-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `maspiz01`…`maspiz02`.
 */
export const MASPIZ_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/maspiz01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/maspiz02",
  },
];
