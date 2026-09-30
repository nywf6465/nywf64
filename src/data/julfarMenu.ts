import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * julfar menu — nav-menu topics for all routes beginning with `julfar`.
 * Labels match `media/julfar-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `julfar01`…`julfar04`.
 */
export const JULFAR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/julfaroverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/julfar01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/julfar02",
  },
  {
    label: "Gallery of Photographs",
    href: "/julfar03",
  },
  {
    label: "Brochure: Pavilion Guide",
    href: "/julfar04",
  },
];
