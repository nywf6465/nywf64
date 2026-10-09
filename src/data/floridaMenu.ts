import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Florida menu — nav-menu topic list for all routes beginning with `florida`.
 * Labels match the florida-menu-topics mockup.
 * Non-Overview routes: `florida01`…`florida08`.
 */
export const FLORIDA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/florida01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/florida02",
  },
  {
    label: "Postcards",
    href: "/florida03",
  },
  {
    label: "Advertising",
    href: "/florida04",
  },
  {
    label: "Photograph Album",
    href: "/florida05",
  },
  {
    label: "List of Sub-Exhibitors",
    href: "/florida06",
  },
  {
    label: "Article: Visualizing the Good Life",
    href: "/florida07",
  },
  {
    label: "After the Fair",
    href: "/florida08",
  },
];
