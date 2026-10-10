import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * 1964/1965 The Era of the Fair / fair_era menu — 3 topic cards.
 * Overview + Page 1 (legacy fair_era02) + stub for the following page.
 */
export const FAIR_ERA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/fair_eraoverview",
  },
  {
    label: "Events of 1964",
    href: "/fair_era01",
  },
  {
    label: "Events of 1965",
    href: "/fair_era02",
  },
];
