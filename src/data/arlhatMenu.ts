import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Arlhat menu — nav-menu topics for all routes beginning with `arlhat`.
 * Labels match the arlhat-menu-topics mockup.
 * Non-Overview routes: `arlhat01`…`arlhat03`.
 */
export const ARLHAT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/arlhat01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/arlhat02",
  },
  {
    label: "Photograph Album",
    href: "/arlhat03",
  },
];
