import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Astfount menu — nav-menu topics for all routes beginning with `astfount`.
 * Labels match the astfount-menu-topics mockup; Overview added at top.
 * Non-Overview routes are sequential `astfount01`…`astfount05`.
 */
export const ASTFOUNT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/astfount01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/astfount02",
  },
  {
    label: "Postcards",
    href: "/astfount03",
  },
  {
    label: "Photograph Album",
    href: "/astfount04",
  },
  {
    label: "Article: Lighting at the Fair - Astral Fountain",
    href: "/astfount05",
  },
];
