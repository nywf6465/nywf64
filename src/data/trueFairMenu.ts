import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * An Unofficial World’s Fair / true_fair menu — 3 topic cards.
 * Overview + Page 1 (legacy true_fair02) + Page 2 (legacy true_fair03).
 */
export const TRUE_FAIR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/true_fairoverview",
  },
  {
    label: "Robert Moses & the BIE",
    href: "/true_fair01",
  },
  {
    label: "Moses Speaks Out on the BIE",
    href: "/true_fair02",
  },
];
