import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Indonesia (indones) menu — nav-menu topics for all routes beginning with `indones`.
 * Labels match `media/indones-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `indones01`…`indones08`.
 */
export const INDONES_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/indonesoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/indones01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/indones02",
  },
  {
    label: "Postcards",
    href: "/indones03",
  },
  {
    label: "Advertising",
    href: "/indones04",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/indones05",
  },
  {
    label: "Photograph Album I",
    href: "/indones06",
  },
  {
    label: "Photograph Album II",
    href: "/indones07",
  },
  {
    label: "The Indonesia Controversy at the Fair",
    href: "/indones08",
  },
];
