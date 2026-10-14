import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Magazine Articles / Periodicals of the Fair menu.
 * Overview + Life / Newsweek indexes; Look / Saturday Evening Post
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
    label: "Newsweek Magazine Index",
    href: "/newsweek01",
  },
];
