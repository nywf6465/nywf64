import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Hall of Free Enterprise menu — nav-menu topics for all routes beginning with `halfre`.
 * Labels match `media/halfre-menu-topics-source.jpg`.
 * Non-Overview routes: `halfre01`…`halfre04`.
 */
export const HALFRE_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/halfre01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/halfre02",
  },
  {
    label: "Postcards",
    href: "/halfre03",
  },
  {
    label: "Photograph Album",
    href: "/halfre04",
  },
];
