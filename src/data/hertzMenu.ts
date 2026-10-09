import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Hertz menu — nav-menu topics for all routes beginning with `hertz`.
 * Labels match `media/hertz-menu-topics-source.jpg`.
 * Non-Overview routes: `hertz01`…`hertz02`.
 */
export const HERTZ_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/hertz01",
  },
  {
    label: "Photograph Album",
    href: "/hertz02",
  },
];
