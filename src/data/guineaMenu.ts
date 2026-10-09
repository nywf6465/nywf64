import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Guinea menu — nav-menu topics for all routes beginning with `guinea`.
 * Labels match `media/guinea-menu-topics-source.jpg`.
 * Non-Overview routes: `guinea01`…`guinea03`.
 */
export const GUINEA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/guinea01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/guinea02",
  },
  {
    label: "Photograph Album",
    href: "/guinea03",
  },
];
