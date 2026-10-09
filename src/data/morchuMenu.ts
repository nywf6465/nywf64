import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Morchu menu — nav-menu topics for all routes beginning with `morchu`.
 * Labels match the morchu-menu-topics mockup.
 * Non-Overview routes: `morchu01`…`morchu07`.
 */
export const MORCHU_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/morchu01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/morchu02",
  },
  {
    label: "Postcards",
    href: "/morchu03",
  },
  {
    label: "Gallery of Photographs",
    href: "/morchu04",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/morchu05",
  },
  {
    label: "Brochure: Man's Search for Happiness",
    href: "/morchu06",
  },
  {
    label: "Brochure: Mormon Pavilion",
    href: "/morchu07",
  },
];
