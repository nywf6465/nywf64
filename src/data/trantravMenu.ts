import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Transportation & Travel menu — nav-menu topics for all routes beginning with `trantrav`.
 * Labels match uploaded menu topics (+ Overview at top).
 * Non-Overview routes: `trantrav01`…`trantrav14`.
 */
export const TRANTRAV_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/trantravoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/trantrav01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/trantrav02",
  },
  {
    label: "Postcards",
    href: "/trantrav03",
  },
  {
    label: "Photograph Album",
    href: "/trantrav04",
  },
  {
    label: "Photograph Album",
    href: "/trantrav05",
  },
  {
    label: "Sales Brochure - Proposed Pavilion Design",
    href: "/trantrav06",
  },
  {
    label: "Sales Brochure - Final Pavilion Design",
    href: "/trantrav07",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/trantrav08",
  },
  {
    label: "To the Moon and Beyond",
    href: "/trantrav09",
  },
  {
    label: "United Air Lines",
    href: "/trantrav10",
  },
  {
    label: "U.S. Navy and Marine Corps.",
    href: "/trantrav11",
  },
  {
    label: "Cavalcade of Custom Cars",
    href: "/trantrav12",
  },
  {
    label: "TWA",
    href: "/trantrav13",
  },
  {
    label: "Sea Hunt, Imperial '400' & More",
    href: "/trantrav14",
  },
];
