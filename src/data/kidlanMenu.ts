import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * kidlan menu — nav-menu topics for all routes beginning with `kidlan`.
 * Labels match `media/kidlan-menu-topics-source.jpg`.
 * Source image has two distinct lines (not merged): Guidebook & Souvenir,
 * then Map Entries.
 * Non-Overview routes: `kidlan01`…`kidlan02`.
 */
export const KIDLAN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir",
    href: "/kidlan01",
  },
  {
    label: "Map Entries",
    href: "/kidlan02",
  },
];
