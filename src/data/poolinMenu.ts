import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Poolin menu — nav-menu topics for all routes beginning with `poolin`.
 * Labels match the poolin-menu-topics mockup; Overview added at top.
 * Non-Overview routes: `poolin01`…`poolin07`.
 */
export const POOLIN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/poolin01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/poolin02",
  },
  {
    label: "Postcards",
    href: "/poolin03",
  },
  {
    label: "Photograph Album",
    href: "/poolin04",
  },
  {
    label: "Construction",
    href: "/poolin05",
  },
  {
    label: "Fountain Show Music",
    href: "/poolin06",
  },
  {
    label: "The Parker Pen Brochure",
    href: "/poolin07",
  },
];
