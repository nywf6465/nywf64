import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Archamer menu — nav-menu topics for all routes beginning with `archamer`.
 * Labels match the archamer-menu-topics mockup; Overview at top.
 * Non-Overview routes: `archamer01`…`archamer02`.
 */
export const ARCHAMER_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/archameroverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/archamer01",
  },
  {
    label: "About the Arch",
    href: "/archamer02",
  },
];
