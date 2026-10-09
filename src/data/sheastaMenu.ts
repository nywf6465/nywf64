import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Shea Stadium menu — nav-menu topics for all routes beginning with `sheasta`.
 * Labels match the sheasta-menu-topics mockup.
 * Non-Overview routes: `sheasta01`…`sheasta07`.
 */
export const SHEASTA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/sheasta01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/sheasta02",
  },
  {
    label: "Postcards",
    href: "/sheasta03",
  },
  {
    label: "Photograph Album",
    href: "/sheasta04",
  },
  {
    label: "Groundbreaking",
    href: "/sheasta05",
  },
  {
    label: "Construction",
    href: "/sheasta06",
  },
  {
    label: "Essay: Shea Stadium and the Moses Vision",
    href: "/sheasta07",
    parts: [
      { text: "Essay: " },
      { text: "Shea Stadium and the Moses Vision", italic: true },
    ],
  },
];
