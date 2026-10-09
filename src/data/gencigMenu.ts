import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * General Cigar menu — nav-menu topics for all routes beginning with `gencig`.
 * Labels match `media/gencig-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `gencig01`…`gencig09`.
 */
export const GENCIG_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/gencigoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/gencig01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/gencig02",
  },
  {
    label: "Postcards",
    href: "/gencig03",
  },
  {
    label: "Advertising",
    href: "/gencig04",
  },
  {
    label: "Photograph Album",
    href: "/gencig05",
  },
  {
    label: "Groundbreaking",
    href: "/gencig06",
  },
  {
    label: "Brochure: The Hall of Magic",
    href: "/gencig07",
  },
  {
    label: 'Article: A Look into "Patterns in Sports"',
    href: "/gencig08",
  },
  {
    label: "Magician Mark Wilson",
    href: "/gencig09",
  },
];
