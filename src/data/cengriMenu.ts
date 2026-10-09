import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Cengri menu — nav-menu topics for all routes beginning with `cengri`.
 * Labels match the cengri-menu-topics mockup.
 * Non-Overview routes: `cengri01`…`cengri04`.
 */
export const CENGRI_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/cengri01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/cengri02",
  },
  {
    label: "Photograph Album",
    href: "/cengri03",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/cengri04",
  },
];
