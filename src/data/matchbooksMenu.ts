import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Matchbook Collection menu.
 * Overview (Page 1); Exhibitor Matchbooks at /matchbooks01–03 (Pages 2–4).
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
  {
    label: "Exhibitor Matchbooks (2)",
    href: "/matchbooks02",
  },
  {
    label: "Exhibitor Matchbooks (3)",
    href: "/matchbooks03",
  },
];
