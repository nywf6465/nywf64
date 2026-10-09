import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Africa menu — nav-menu topics for all routes beginning with `africa`.
 * Labels match the africa-menu-topics mockup.
 * Non-Overview routes: `africa01`…`africa05`.
 */
export const AFRICA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/africa01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/africa02",
  },
  {
    label: "Postcards",
    href: "/africa03",
  },
  {
    label: "Photograph Album",
    href: "/africa04",
  },
  {
    label: "Pamphlet: Press Announcement",
    href: "/africa05",
  },
];
