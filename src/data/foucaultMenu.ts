import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Foucault menu — nav-menu topics for Fountains of the Fairs pages.
 * Labels match the foufair-menu-topics mockup; Overview added at top.
 * Menu hub: `/Foucault`. Topic routes: `/foufai01`…`/foufai04` (legacy foufai*).
 * Overview route (separate): `/foufaioverview`.
 */
export const FOUCAULT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/foufai01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/foufai02",
  },
  {
    label: "Postcards",
    href: "/foufai03",
  },
  {
    label: "Photograph Album",
    href: "/foufai04",
  },
];
