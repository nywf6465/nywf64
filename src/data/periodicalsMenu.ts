import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Magazine Articles / Periodicals of the Fair menu.
 * Overview + Life Magazine Index (legacy life01); later Look / Newsweek /
 * Saturday Evening Post indexes join here.
 */
export const PERIODICALS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/periodicalsoverview",
  },
  {
    label: "Life Magazine Index",
    href: "/life01",
  },
];
