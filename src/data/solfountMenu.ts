import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Solfount menu — nav-menu topics for all routes beginning with `solfount`.
 * Labels match the solfount-menu-topics mockup; Overview added at top.
 * Non-Overview routes: `solfount01`…`solfount04`.
 */
export const SOLFOUNT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/solfountoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/solfount01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/solfount02",
  },
  {
    label: "Postcards",
    href: "/solfount03",
  },
  {
    label: "Gallery of Photographs",
    href: "/solfount04",
  },
];
