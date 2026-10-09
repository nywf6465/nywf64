import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Autthr menu — nav-menu topics for all routes beginning with `autthr`.
 * Labels match the autthr-menu-topics mockup.
 * Non-Overview routes: `autthr01`…`autthr07`.
 */
export const AUTTHR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/autthr01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/autthr02",
  },
  {
    label: "Postcards",
    href: "/autthr03",
  },
  {
    label: "Photograph Album",
    href: "/autthr04",
  },
  {
    label: "Pamphlet: Preview",
    href: "/autthr05",
  },
  {
    label: "1965 Official Souvenir Program",
    href: "/autthr06",
  },
  {
    label: "Article: Dodge Stars at New York Fair",
    href: "/autthr07",
  },
];
