import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Dancing Waters menu — nav-menu topics for all routes beginning with `danwat`.
 * Labels match the danwat menu-topics mockup; Overview at top.
 * Non-Overview routes: `danwat01`…`danwat04`.
 */
export const DANWAT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/danwatoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/danwat01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/danwat02",
  },
  {
    label: "Photograph Album",
    href: "/danwat03",
  },
  {
    label: "Souvenir Program",
    href: "/danwat04",
  },
];
