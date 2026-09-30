import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Foucon menu — nav-menu topics for all routes beginning with `foucon`.
 * Labels match the foucon-menu-topics mockup; Overview added at top.
 * Non-Overview routes: `foucon01`…`foucon04`.
 */
export const FOUCON_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/fouconoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/foucon01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/foucon02",
  },
  {
    label: "Postcards",
    href: "/foucon03",
  },
  {
    label: "Photograph Album",
    href: "/foucon04",
  },
];
