import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * An Unofficial World’s Fair / true_fair menu — 3 topic cards.
 * Card 1 is Overview; cards 2–3 are filled when following true_fair pages
 * are created (labels from legacy true_fair01–02 for now).
 */
export const TRUE_FAIR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/true_fairoverview",
  },
  {
    label: "Introduction",
    href: "/true_fair01",
  },
  {
    label: "Robert Moses & the BIE",
    href: "/true_fair02",
  },
];
