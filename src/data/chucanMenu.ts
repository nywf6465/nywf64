import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Chunky Candy menu — nav-menu topics for all routes beginning with `chucan`.
 * Labels match the chucan menu-topics mockup.
 * Non-Overview routes: `chucan01`…`chucan05`.
 */
export const CHUCAN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/chucan01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/chucan02",
  },
  {
    label: "Postcards",
    href: "/chucan03",
  },
  {
    label: "Photograph Album",
    href: "/chucan04",
  },
  {
    label: "The Sculpture Continuum",
    href: "/chucan05",
  },
];
