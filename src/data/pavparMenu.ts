import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Pavilion of Paris menu — topics for routes beginning with `pavpar`.
 * Labels match the pavpar menu-topics mockup.
 * Non-Overview routes: `pavpar01`…`pavpar06`.
 */
export const PAVPAR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/pavpar01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/pavpar02",
  },
  {
    label: "Postcards",
    href: "/pavpar03",
  },
  {
    label: "Photograph Album",
    href: "/pavpar04",
  },
  {
    label: "Promotional Brochure",
    href: "/pavpar05",
  },
  {
    label: "Not French Enough?",
    href: "/pavpar06",
  },
];
