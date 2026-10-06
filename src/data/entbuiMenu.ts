import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Entrance Building menu — nav-menu topics for all routes beginning with `entbui`.
 * Labels match `media/entbuioverview/04-menu-topics-v2.jpg`.
 * Non-Overview routes: `entbui01`…`entbui04`.
 */
export const ENTBUI_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/entbui01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/entbui02",
  },
  {
    label: "Postcards",
    href: "/entbui03",
  },
  {
    label: "Photograph Album",
    href: "/entbui04",
  },
];
