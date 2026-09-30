import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Lunfount menu — nav-menu topics for all routes beginning with `lunfount`.
 * Labels match the lunfount-menu-topics mockup; Overview added at top.
 * Non-Overview routes: `lunfount01`…`lunfount04`.
 */
export const LUNFOUNT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/lunfountoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/lunfount01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/lunfount02",
  },
  {
    label: "Postcards",
    href: "/lunfount03",
  },
  {
    label: "Gallery of Photographs",
    href: "/lunfount04",
  },
];
