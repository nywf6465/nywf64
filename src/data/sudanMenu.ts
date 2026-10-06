import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Sudan menu — nav-menu topics for all routes beginning with `sudan`.
 * Labels match the sudan-menu-topics mockup.
 * Non-Overview routes: `sudan01`…`sudan04`.
 */
export const SUDAN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook Entries",
    href: "/sudan01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/sudan02",
  },
  {
    label: "Postcards",
    href: "/sudan03",
  },
  {
    label: "Gallery of Photographs",
    href: "/sudan04",
  },
];
