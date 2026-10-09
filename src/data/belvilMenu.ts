import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Belvil menu — nav-menu topics for all routes beginning with `belvil`.
 * Labels match the belvil-menu-topics mockup; Overview at top.
 * Non-Overview routes: `belvil01`…`belvil08`.
 */
export const BELVIL_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/belviloverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/belvil01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/belvil02",
  },
  {
    label: "Postcards",
    href: "/belvil03",
  },
  {
    label: "Photograph Album",
    href: "/belvil04",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/belvil05",
  },
  {
    label: "Brochure: Sales Brochure",
    href: "/belvil06",
  },
  {
    label: "Booklet: Souvenir Program",
    href: "/belvil07",
  },
  {
    label: "Brochure: Inventions Exhibit",
    href: "/belvil08",
  },
];
