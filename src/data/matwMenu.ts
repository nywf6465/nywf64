import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * The “Men at Work” Book / matw menu.
 * Overview + Page 2 (legacy MatW02 → /matw01) + Page 3 (legacy MatW03 → /matw02).
 */
export const MATW_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/matwoverview",
  },
  {
    label: "Page 2",
    href: "/matw01",
  },
  {
    label: "Page 3",
    href: "/matw02",
  },
];
