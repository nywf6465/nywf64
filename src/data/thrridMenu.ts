import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Thrrid menu — nav-menu topics for all routes beginning with `thrrid`.
 * Labels match the thrrid-menu-topics mockup; Overview at top.
 * Non-Overview routes: `thrrid01`.
 */
export const THRRID_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/thrridoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/thrrid01",
  },
];
