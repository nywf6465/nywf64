import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Swisky menu — nav-menu topics for all routes beginning with `swisky`.
 * Labels match the swisky-menu-topics mockup.
 * Non-Overview routes: `swisky01`…`swisky05`.
 */
export const SWISKY_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/swisky01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/swisky02",
  },
  {
    label: "Postcards",
    href: "/swisky03",
  },
  {
    label: "Gallery of Photographs",
    href: "/swisky04",
  },
  {
    label: "Brochure",
    href: "/swisky05",
  },
];
