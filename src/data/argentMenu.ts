import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Argent menu — nav-menu topics for all routes beginning with `argent`.
 * Labels match the argent-menu-topics mockup; Overview at top.
 * Non-Overview routes: `argent01`…`argent04`.
 */
export const ARGENT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/argentoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/argent01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/argent02",
  },
  {
    label: "Photograph Album",
    href: "/argent03",
  },
  {
    label: "Pamphlet: Cornerstone Laying Ceremony",
    href: "/argent04",
  },
];
