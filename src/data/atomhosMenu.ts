import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Atomhos menu — nav-menu topics for all routes beginning with `atomhos`.
 * Labels match the atomhos-menu-topics mockup; Overview at top.
 * Non-Overview routes: `atomhos01`…`atomhos03`.
 */
export const ATOMHOS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/atomhosoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/atomhos01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/atomhos02",
  },
  {
    label: "Photograph Album",
    href: "/atomhos03",
  },
];
