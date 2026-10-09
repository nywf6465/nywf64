import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Barbuf menu — nav-menu topics for all routes beginning with `barbuf`.
 * Labels match the barbuf-menu-topics mockup.
 * Non-Overview routes: `barbuf01`…`barbuf02`.
 */
export const BARBUF_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/barbuf01",
  },
  {
    label: "Photograph Album",
    href: "/barbuf02",
  },
];
