import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Adminbldg menu — nav-menu topics for all routes beginning with `adminbldg`.
 * Overview at top; Introduction omitted (legacy adminbldg01).
 * At the Fair → /adminbldg01 (legacy adminbldg02.html).
 * After the Fair → /adminbldg02 (legacy adminbldg03.html).
 */
export const ADMINBLDG_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/adminbldgoverview",
  },
  {
    label: "At the Fair",
    href: "/adminbldg01",
  },
  {
    label: "After the Fair",
    href: "/adminbldg02",
  },
];
