import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Polynesia menu — topics for `polyneoverview` and `polynesia*` routes.
 * Labels match the polyne menu-topics mockup.
 * Non-Overview routes: `polynesia01`…`polynesia04`.
 */
export const POLYNE_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/polynesia01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/polynesia02",
  },
  {
    label: "Postcards",
    href: "/polynesia03",
  },
  {
    label: "Photograph Album",
    href: "/polynesia04",
  },
];
