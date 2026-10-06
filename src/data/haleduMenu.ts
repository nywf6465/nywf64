import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Hall of Education menu — nav-menu topics for all routes beginning with `haledu`.
 * Labels match `media/haledu-menu-topics-source.jpg`.
 * Non-Overview routes: `haledu01`…`haledu07`.
 */
export const HALEDU_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/haledu01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/haledu02",
  },
  {
    label: "Postcards",
    href: "/haledu03",
  },
  {
    label: "Advertising",
    href: "/haledu04",
  },
  {
    label: "Photograph Album",
    href: "/haledu05",
  },
  {
    label: "List of Sub-Exhibitors",
    href: "/haledu06",
  },
  {
    label: "Brochure: Concrete at the Fair",
    href: "/haledu07",
  },
];
