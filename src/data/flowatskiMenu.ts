import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Florida Citrus Water Ski Show menu — nav-menu topics for all routes beginning with `flowatski`.
 * Labels match `media/flowatski-menu-topics-source.jpg`.
 * Non-Overview routes: `flowatski01`…`flowatski03`.
 */
export const FLOWATSKI_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/flowatski01",
  },
  {
    label: "Photograph Album",
    href: "/flowatski02",
  },
  {
    label: "Pamphlet: Florida Citrus Water Ski Show",
    href: "/flowatski03",
  },
];
