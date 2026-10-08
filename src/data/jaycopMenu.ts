import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * jaycop menu — nav-menu topics for all routes beginning with `jaycop`.
 * Labels match `media/jaycop-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `jaycop01`…`jaycop04`.
 */
export const JAYCOP_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/jaycopoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/jaycop01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/jaycop02",
  },
  {
    label: "Photograph Album",
    href: "/jaycop03",
  },
  {
    label: "Brochure: Jaycopter",
    href: "/jaycop04",
  },
];
