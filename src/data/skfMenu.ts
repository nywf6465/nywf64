import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * SKF menu — nav-menu topics for all routes beginning with `skf`.
 * Labels match the skf-menu-topics mockup; Overview at top.
 * Non-Overview routes: `skf01`…`skf10`.
 */
export const SKF_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/skfoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/skf01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/skf02",
  },
  {
    label: "Postcards",
    href: "/skf03",
  },
  {
    label: "Advertising",
    href: "/skf04",
  },
  {
    label: "Photograph Album",
    href: "/skf05",
  },
  {
    label: "Artist's Concept of the Pavilion",
    href: "/skf06",
  },
  {
    label: "Why SKF at the Fair?",
    href: "/skf07",
  },
  {
    label: "The SKF Pavilion & Exhibits",
    href: "/skf08",
  },
  {
    label: '"Fair" Architect',
    href: "/skf09",
  },
  {
    label: "Old Abe's Encounter with Motion Engineering",
    href: "/skf10",
    parts: [
      { text: "Old Abe's Encounter with " },
      { text: "Motion Engineering", italic: true },
    ],
  },
];
