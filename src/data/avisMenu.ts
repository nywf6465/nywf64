import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Avis menu — nav-menu topics for all routes beginning with `avis`.
 * Labels match the avis-menu-topics mockup.
 * Non-Overview routes: `avis01`…`avis05`.
 */
export const AVIS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/avis01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/avis02",
  },
  {
    label: "Photograph Album",
    href: "/avis03",
  },
  {
    label: "Pamphlet: Dedication Day",
    href: "/avis04",
  },
  {
    label: "Map & Guide to Avis at the Fair",
    href: "/avis05",
  },
];
