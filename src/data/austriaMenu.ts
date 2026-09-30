import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Austria menu — nav-menu topics for all routes beginning with `austria`.
 * Labels match the austria-menu-topics mockup; Overview at top.
 * Non-Overview routes: `austria01`…`austria08`.
 */
export const AUSTRIA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/austriaoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/austria01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/austria02",
  },
  {
    label: "Photograph Album",
    href: "/austria03",
  },
  {
    label: "Pamphlet: Groundbreaking Ceremonies",
    href: "/austria04",
  },
  {
    label: "Book: Assembling Manual",
    href: "/austria05",
  },
  {
    label: "Pamphlet: Austria",
    href: "/austria06",
  },
  {
    label: "Brochure: Austrian Information",
    href: "/austria07",
  },
  {
    label: "A World's Fair Legacy Lost",
    href: "/austria08",
  },
];
