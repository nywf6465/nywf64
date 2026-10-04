import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Wisconsin menu — nav-menu topics for all routes beginning with `wisconsin`.
 * Labels match uploaded menu topics (+ Overview at top).
 * Non-Overview routes: `wisconsin01`…`wisconsin08`.
 */
export const WISCONSIN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/wisconsinoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/wisconsin01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/wisconsin02",
  },
  {
    label: "Postcards",
    href: "/wisconsin03",
  },
  {
    label: "Gallery of Photographs",
    href: "/wisconsin04",
  },
  {
    label: "Wisconsin at the Fair",
    href: "/wisconsin05",
  },
  {
    label: "Figures Never Lie",
    href: "/wisconsin06",
  },
  {
    label: "The Big Cheese",
    href: "/wisconsin07",
  },
  {
    label: "The Wisconsin Pavilion: A World's Fair Legacy",
    href: "/wisconsin08",
  },
];
