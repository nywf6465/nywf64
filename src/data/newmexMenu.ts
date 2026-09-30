import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * newmex menu — nav-menu topics for all routes beginning with `newmex`.
 * Labels match `media/newmex-menu-topics-source.jpg` (+ Overview at top).
 * Guidebook label is Official Guidebook only (no Souvenir Map Entries).
 * Non-Overview routes: `newmex01`…`newmex03`.
 */
export const NEWMEX_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/newmexoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook",
    href: "/newmex01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/newmex02",
  },
  {
    label: "Photograph Album",
    href: "/newmex03",
  },
];
