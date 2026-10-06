import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Chukin Inn menu — nav-menu topics for all routes beginning with `chukininn`.
 * Labels match the chukininn-menu-topics mockup.
 * Non-Overview routes: `chukininn01`…`chukininn04`.
 */
export const CHUKININN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/chukininn01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/chukininn02",
  },
  {
    label: "Advertising",
    href: "/chukininn03",
  },
  {
    label: "Photograph Album",
    href: "/chukininn04",
  },
];
