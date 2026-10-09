import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Philippines menu — topics for all routes beginning with `philip`.
 * Labels match the philip menu-topics mockup; Overview at top.
 * Non-Overview routes: `philip01`…`philip08`.
 */
export const PHILIP_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/philipoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/philip01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/philip02",
  },
  {
    label: "Postcards",
    href: "/philip03",
  },
  {
    label: "Photograph Album",
    href: "/philip04",
  },
  {
    label: "Photograph Album",
    href: "/philip05",
  },
  {
    label: "Photograph Album",
    href: "/philip06",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/philip07",
  },
  {
    label: "Pavilion Guide",
    href: "/philip08",
  },
];
