import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * minnesota menu — nav-menu topics for all routes beginning with `minnesota`.
 * Labels match `media/minnesota-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `minnesota01`…`minnesota04`.
 */
export const MINNESOTA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/minnesota01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/minnesota02",
  },
  {
    label: "Postcards",
    href: "/minnesota03",
  },
  {
    label: "Photograph Album",
    href: "/minnesota04",
  },
];
