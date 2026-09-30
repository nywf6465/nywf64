import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Foucault menu — nav-menu topics for Fountains of the Fairs pages.
 * Labels match the foufair-menu-topics mockup; Overview added at top.
 * Menu hub: `/Foucault`. Non-Overview routes: `Foucault01`…`Foucault04`.
 * Overview route (separate): `/foufaioverview`.
 */
export const FOUCAULT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/foufaioverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/Foucault01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/Foucault02",
  },
  {
    label: "Postcards",
    href: "/Foucault03",
  },
  {
    label: "Photograph Album",
    href: "/Foucault04",
  },
];
