import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Panama menu — nav-menu topics for all routes beginning with `panamg`.
 * Labels match the panama-menu-topics mockup; Overview at top.
 * Non-Overview routes: `panamg01`…`panamg03`.
 */
export const PANAMG_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/panamgoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/panamg01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/panamg02",
  },
  {
    label: "Photograph Album",
    href: "/panamg03",
  },
];
