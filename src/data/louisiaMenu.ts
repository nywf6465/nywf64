import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * louisia menu — nav-menu topics for all routes beginning with `louisia`.
 * Labels match `media/louisia-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `louisia01`…`louisia03`.
 */
export const LOUISIA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/louisia01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/louisia02",
  },
  {
    label: "Photograph Album",
    href: "/louisia03",
  },
];
