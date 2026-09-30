import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Adminbldg menu — nav-menu topics for all routes beginning with `adminbldg`.
 * Overview at top; Introduction (/adminbldg01) removed from the drawer.
 * Non-Overview routes: `adminbldg02`…`adminbldg03`.
 */
export const ADMINBLDG_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/adminbldgoverview",
  },
  {
    label: "At the Fair",
    href: "/adminbldg02",
  },
  {
    label: "After the Fair",
    href: "/adminbldg03",
  },
];
