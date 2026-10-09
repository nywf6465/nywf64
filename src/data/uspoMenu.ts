import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * U.S. Post Office menu — nav-menu topics for all routes beginning with `uspo`.
 * Labels match the uspo-menu-topics mockup; Overview at top.
 * Non-Overview routes: `uspo01`…`uspo04`.
 */
export const USPO_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/uspooverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/uspo01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/uspo02",
  },
  {
    label: "Photograph Album",
    href: "/uspo03",
  },
  {
    label: "Postal Bulletin - World's Fair Commemorative Stamp",
    href: "/uspo04",
  },
];
