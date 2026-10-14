import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Magazine Articles / Periodicals of the Fair menu.
 * Overview + Life / Saturday Evening Post indexes; Look / Newsweek
 * indexes join as their pages land.
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
  {
    label: "Saturday Evening Post Index",
    href: "/post01",
  },
];
