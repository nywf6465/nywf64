import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Chrysler menu — nav-menu topic list for all routes beginning with `chrysler`.
 * Labels match the chrysler-menu-topics mockup (both Photograph Album rows kept;
 * italic “autofare” via `parts`).
 */
export const CHRYSLER_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/chryslerguidebook",
  },
  {
    label: "World's Fair Information Manual",
    href: "/chryslermanual",
  },
  {
    label: "Postcards",
    href: "/chryslerpostcards",
  },
  {
    label: "Advertising",
    href: "/chrysleradvertising",
  },
  {
    label: "Photograph Album",
    href: "/chryslerphotographalbumi",
  },
  {
    label: "Photograph Album",
    href: "/chryslerphotographalbumii",
  },
  {
    label: "Press Release",
    href: "/chryslerpressrelease",
  },
  {
    label: "Pamphlet: THIS IS autofare",
    href: "/chryslerpamphletautofare",
    parts: [
      { text: "Pamphlet: THIS IS " },
      { text: "autofare", italic: true },
    ],
  },
  {
    label: "Brochure: THIS IS autofare",
    href: "/chryslerbrochureautofare",
    parts: [
      { text: "Brochure: THIS IS " },
      { text: "autofare", italic: true },
    ],
  },
  {
    label: "Dodge News Magazine",
    href: "/chryslerdodgenews",
  },
  {
    label: "Article: The Chrysler Show-Go-Around",
    href: "/chryslershowgoaround",
  },
  {
    label: "The Puppetry Journal",
    href: "/chryslerpuppetryjournal",
  },
];
