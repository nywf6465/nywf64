import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Progress Reports / report menu — 2 topic cards.
 * Card 1 is Overview; card 2 will be filled when the following page is created.
 */
export const REPORT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/reportoverview",
  },
  {
    label: "…",
    href: "/report01",
  },
];
