import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Pakistan menu — nav-menu topics for all routes beginning with `pakist`.
 * Labels match the pakist menu-topics mockup; Overview at top.
 * Non-Overview routes: `pakist01`…`pakist04`.
 */
export const PAKIST_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/pakistoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/pakist01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/pakist02",
  },
  {
    label: "Gallery of Photographs",
    href: "/pakist03",
  },
  {
    label: "Brochure: Commemorative Postage Stamps & Pavilion Information",
    href: "/pakist04",
  },
];
