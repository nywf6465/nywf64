import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Berlin menu — nav-menu topics for all routes beginning with `berlin`.
 * Labels match the berlin-menu-topics mockup.
 * Non-Overview routes: `berlin01`…`berlin06`.
 */
export const BERLIN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/berlin01",
  },
  {
    label: "Postcards",
    href: "/berlin02",
  },
  {
    label: "Photograph Album",
    href: "/berlin03",
  },
  {
    label: "Brochure: Pavilion Guide I",
    href: "/berlin04",
  },
  {
    label: "Brochure: Pavilion Guide II",
    href: "/berlin05",
  },
  {
    label: "A Spherical View of Berlin",
    href: "/berlin06",
    parts: [
      {
        text: "A Spherical View of Berlin",
        italic: true,
      },
    ],
  },
];
