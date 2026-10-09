import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Hong Kong (honkon) menu — nav-menu topics for all routes beginning with `honkon`.
 * Labels match `media/honkon-menu-topics-source.jpg`.
 * Non-Overview routes: `honkon01`…`honkon04`.
 */
export const HONKON_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/honkon01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/honkon02",
  },
  {
    label: "Postcards",
    href: "/honkon03",
  },
  {
    label: "Photograph Album",
    href: "/honkon04",
  },
];
