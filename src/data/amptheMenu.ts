import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Ampthe menu — nav-menu topics for all routes beginning with `ampthe`.
 * Labels match the ampthe-menu-topics mockup.
 * Non-Overview routes: `ampthe01`…`ampthe04`.
 */
export const AMPTHE_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/ampthe01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/ampthe02",
  },
  {
    label: "Photograph Album",
    href: "/ampthe03",
  },
  {
    label: "Wonder World Playbill",
    href: "/ampthe04",
  },
];
