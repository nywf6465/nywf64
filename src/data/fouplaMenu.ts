import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Foupla menu — nav-menu topics for all routes beginning with `foupla`.
 * Labels match the foupla-menu-topics mockup; Overview added at top.
 * Non-Overview routes: `foupla01`…`foupla07`.
 */
export const FOUPLA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/fouplaoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/foupla01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/foupla02",
  },
  {
    label: "Postcards",
    href: "/foupla03",
  },
  {
    label: "Photograph Album",
    href: "/foupla04",
  },
  {
    label: "Construction",
    href: "/foupla05",
  },
  {
    label: "Fountain Show Music",
    href: "/foupla06",
  },
  {
    label: "The Parker Pen Brochure",
    href: "/foupla07",
  },
];
