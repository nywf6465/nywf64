import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Amind menu — nav-menu topics for all routes beginning with `amind`.
 * Labels match the amind-menu-topics mockup; Overview at top.
 * Non-Overview routes: `amind01`…`amind02`.
 */
export const AMIND_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/amindoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/amind01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/amind02",
  },
];
