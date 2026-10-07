import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * International Plaza menu — nav-menu topics for all routes beginning with `intpla`.
 * Labels match legacy intpla01–intpla04 titles; Overview at top.
 * Non-Overview routes: `intpla01`…`intpla04`.
 */
export const INTPLA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/intplaoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/intpla01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/intpla02",
  },
  {
    label: "Postcards",
    href: "/intpla03",
  },
  {
    label: "Gallery of Photographs",
    href: "/intpla04",
  },
];
