import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Matchbook Collection menu.
 * Overview (Page 1); Exhibitor Matchbooks at /matchbooks01 (Page 2).
 */
export const MATCHBOOKS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/matchbooksoverview",
  },
  {
    label: "Exhibitor Matchbooks",
    href: "/matchbooks01",
  },
];
