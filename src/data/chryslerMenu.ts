import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Chrysler menu — nav-menu topic list for all routes beginning with `chrysler`.
 * Labels match the chrysler-menu-topics mockup (both Photograph Album rows kept;
 * italic “autofare” via `parts`). Non-Overview routes: `chrysler01`…`chrysler12`.
 */
export const CHRYSLER_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/chrysler01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/chrysler02",
  },
  {
    label: "Postcards",
    href: "/chrysler03",
  },
  {
    label: "Advertising",
    href: "/chrysler04",
  },
  {
    label: "Photograph Album",
    href: "/chrysler05",
  },
  {
    label: "Photograph Album",
    href: "/chrysler06",
  },
  {
    label: "Press Release",
    href: "/chrysler07",
  },
  {
    label: "Pamphlet: THIS IS autofare",
    href: "/chrysler08",
    parts: [
      { text: "Pamphlet: THIS IS " },
      { text: "autofare", italic: true },
    ],
  },
  {
    label: "Brochure: THIS IS autofare",
    href: "/chrysler09",
    parts: [
      { text: "Brochure: THIS IS " },
      { text: "autofare", italic: true },
    ],
  },
  {
    label: "Dodge News Magazine",
    href: "/chrysler10",
  },
  {
    label: "Article: The Chrysler Show-Go-Around",
    href: "/chrysler11",
  },
  {
    label: "The Puppetry Journal",
    href: "/chrysler12",
  },
];
