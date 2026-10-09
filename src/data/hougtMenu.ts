import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * House of Good Taste (hougt) menu — nav-menu topics for all routes beginning with `hougt`.
 * Labels match `media/hougt-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `hougt01`…`hougt11`.
 */
export const HOUGT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/hougtoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/hougt01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/hougt02",
  },
  {
    label: "Postcards",
    href: "/hougt03",
  },
  {
    label: "Advertising",
    href: "/hougt04",
  },
  {
    label: "Photograph Album",
    href: "/hougt05",
  },
  {
    label: "Lists of Sub-Exhibitors",
    href: "/hougt06",
  },
  {
    label: "Introduction to the House of Good Taste",
    href: "/hougt07",
  },
  {
    label: "Magazine: Better Homes & Gardens - September 1964",
    href: "/hougt08",
  },
  {
    label: "Selected Biographies",
    href: "/hougt09",
  },
  {
    label: "Trend Setting Home",
    href: "/hougt10",
  },
  {
    label: "The Pavilion Guide",
    href: "/hougt11",
  },
];
