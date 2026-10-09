import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Continental Insurance menu — nav-menu topics for all routes beginning with `conins`.
 * Labels match the conins menu-topics mockup.
 * Non-Overview routes: `conins01`…`conins11`.
 */
export const CONINS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/conins01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/conins02",
  },
  {
    label: "Postcards",
    href: "/conins03",
  },
  {
    label: "Advertising",
    href: "/conins04",
  },
  {
    label: "Photograph Album",
    href: "/conins05",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/conins06",
  },
  {
    label: "Brochure: Your Guide to the Continental Insurance Pavilion",
    href: "/conins07",
  },
  {
    label: "Brochure: Fall In",
    href: "/conins08",
  },
  {
    label: "Order Form: Cinema '76 Record Album",
    href: "/conins09",
  },
  {
    label: "Cinema '76: Illustrated Transcript with Audio",
    href: "/conins10",
  },
  {
    label: "Article: Continental in Cinema-76",
    href: "/conins11",
  },
];
