import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Hawaii menu — nav-menu topics for all routes beginning with `hawaii`.
 * Labels match `media/hawaii-menu-topics-source.jpg`.
 * Non-Overview routes: `hawaii01`…`hawaii06`.
 */
export const HAWAII_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/hawaii01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/hawaii02",
  },
  {
    label: "Gallery of Photographs",
    href: "/hawaii03",
  },
  {
    label: "List of Sub-Exhibitors",
    href: "/hawaii04",
  },
  {
    label: "Exhibit Proposal by IVEL",
    href: "/hawaii05",
  },
  {
    label: "Article: A Pineapple Show",
    href: "/hawaii06",
  },
];
