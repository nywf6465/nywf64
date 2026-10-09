import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Bilgra menu — nav-menu topics for all routes beginning with `bilgra`.
 * Labels match the bilgra-menu-topics mockup; Overview at top.
 * Non-Overview routes: `bilgra01`…`bilgra11`.
 */
export const BILGRA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/bilgraoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/bilgra01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/bilgra02",
  },
  {
    label: "Postcards",
    href: "/bilgra03",
  },
  {
    label: "Advertising",
    href: "/bilgra04",
  },
  {
    label: "Photograph Album",
    href: "/bilgra05",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/bilgra06",
  },
  {
    label: "The Story of the Billy Graham Pavilion",
    href: "/bilgra07",
    parts: [{ text: "The Story of the Billy Graham Pavilion", italic: true }],
  },
  {
    label: "Movie with a Message | The Miracle of TODD-AO | Brochure",
    href: "/bilgra08",
  },
  {
    label: "Brochure: Man in the Fifth Dimension",
    href: "/bilgra09",
  },
  {
    label: "Book: Man in the Fifth Dimension",
    href: "/bilgra10",
  },
  {
    label: "Summary of Religious Participation at the Fair",
    href: "/bilgra11",
  },
];
