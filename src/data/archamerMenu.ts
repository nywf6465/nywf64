import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Archamer menu — nav-menu topics for all routes beginning with `archamer`.
 * Labels match the archamer-menu-topics mockup.
 * Non-Overview routes: `archamer01`…`archamer02`.
 */
export const ARCHAMER_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/archamer01",
  },
  {
    label: "The Story of the Arch",
    href: "/archamer02",
  },
];
