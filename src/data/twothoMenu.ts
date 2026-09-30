import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Twotho menu — nav-menu topics for all routes beginning with `twotho`.
 * Labels match the twotho-menu-topics mockup; Overview at top.
 * Non-Overview routes: `twotho01`…`twotho04`.
 */
export const TWOTHO_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/twothooverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/twotho01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/twotho02",
  },
  {
    label: "Postcards",
    href: "/twotho03",
  },
  {
    label: "Gallery of Photographs",
    href: "/twotho04",
  },
];
