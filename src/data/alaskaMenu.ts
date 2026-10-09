import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Alaska menu — nav-menu topics for all routes beginning with `alaska`.
 * Labels match the alaska-menu-topics mockup; Overview at top.
 * Non-Overview routes: `alaska01`…`alaska04`.
 */
export const ALASKA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/alaskaoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/alaska01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/alaska02",
  },
  {
    label: "Postcards",
    href: "/alaska03",
  },
  {
    label: "Photograph Album",
    href: "/alaska04",
  },
];
