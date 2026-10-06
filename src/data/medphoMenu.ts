import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * medpho menu — nav-menu topics for all routes beginning with `medpho`.
 * Labels match `media/medpho-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `medpho01`…`medpho03`.
 */
export const MEDPHO_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/medpho01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/medpho02",
  },
  {
    label: "Gallery of Photographs",
    href: "/medpho03",
  },
];
