import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * France menu — nav-menu topics for all routes beginning with `france`.
 * Labels match `media/france-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `france01`…`france05`.
 */
export const FRANCE_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/franceoverview",
  },
  {
    label: "1964 & 1965 Official Guide Book & Souvenir Map",
    href: "/france01",
  },
  {
    label: "Groundbreaking",
    href: "/france02",
  },
  {
    label: "Fair News",
    href: "/france03",
    parts: [{ text: "Fair News", italic: true }],
  },
  {
    label: "Press Releases",
    href: "/france04",
  },
  {
    label: "A World's Fair Phantom",
    href: "/france05",
  },
];
