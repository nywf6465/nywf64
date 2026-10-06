import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Hall of Science menu — nav-menu topics for all routes beginning with `halsci`.
 * Labels match `media/halsci-menu-topics-source.jpg`.
 * Non-Overview routes: `halsci01`…`halsci04`.
 */
export const HALSCI_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/halsci01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/halsci02",
  },
  {
    label: "Photograph Album",
    href: "/halsci03",
  },
  {
    label: "List of Sub-Exhibitors",
    href: "/halsci04",
  },
];
