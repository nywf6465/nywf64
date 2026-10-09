import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Port Authority Heliport menu — topics for routes beginning with `poraut`.
 * Labels match the poraut menu-topics mockup.
 * Non-Overview routes: `poraut01`…`poraut10`.
 */
export const PORAUT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/poraut01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/poraut02",
  },
  {
    label: "Postcards",
    href: "/poraut03",
  },
  {
    label: "Advertising",
    href: "/poraut04",
  },
  {
    label: "Photograph Album",
    href: "/poraut05",
  },
  {
    label: "View from the Top",
    href: "/poraut06",
  },
  {
    label: "Construction",
    href: "/poraut07",
  },
  {
    label: "The Film",
    href: "/poraut08",
  },
  {
    label: "Top of the Fair",
    href: "/poraut09",
  },
  {
    label: "Today: Terrace on the Park",
    href: "/poraut10",
    parts: [
      { text: "Today: " },
      { text: "Terrace on the Park", italic: true },
    ],
  },
];
