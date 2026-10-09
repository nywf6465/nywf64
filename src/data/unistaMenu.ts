import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Unista menu — nav-menu topic list for all routes beginning with `unista`.
 * Labels match the unista-menu-topics mockup; non-Overview routes are sequential
 * `unista01`…`unista15`. Italic script titles via `parts`.
 */
export const UNISTA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/unista01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/unista02",
  },
  {
    label: "Postcards",
    href: "/unista03",
  },
  {
    label: "Photograph Album",
    href: "/unista04",
  },
  {
    label: "Executive Order 11014",
    href: "/unista05",
  },
  {
    label: "Proposal for a National Center of Science and Education",
    href: "/unista06",
  },
  {
    label: "The United States Goes to the Fair",
    href: "/unista07",
  },
  {
    label: "Groundbreaking & Construction",
    href: "/unista08",
  },
  {
    label: 'Article: A "Hovering" Hollow Square',
    href: "/unista09",
  },
  {
    label: "Brochure: United States Pavilion",
    href: "/unista10",
  },
  {
    label: "Article: The Many Images of the United States",
    href: "/unista11",
  },
  {
    label: "Scripts: The American Journey and Voyage to America",
    href: "/unista12",
    parts: [
      { text: "Scripts: " },
      { text: "The American Journey", italic: true },
      { text: " and " },
      { text: "Voyage to America", italic: true },
    ],
  },
  {
    label: "Library USA",
    href: "/unista13",
  },
  {
    label: "Article: Lighting at the Fair - United States Pavilion",
    href: "/unista14",
  },
  {
    label: "After the Fair",
    href: "/unista15",
  },
];
