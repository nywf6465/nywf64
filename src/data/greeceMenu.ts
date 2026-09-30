import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Greece menu — nav-menu topics for all routes beginning with `greece`.
 * Labels match `media/greece-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `greece01`…`greece03`.
 */
export const GREECE_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/greeceoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/greece01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/greece02",
  },
  {
    label: "Photograph Album",
    href: "/greece03",
  },
];
