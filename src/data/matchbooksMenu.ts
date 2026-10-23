import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Matchbook Collection menu.
 * Overview (Page 1); Exhibitor Matchbooks at /matchbooks01–04 (Pages 2–5); Advertising at /matchbooks08 (Page 7).
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
  {
    label: "Exhibitor Matchbooks (4)",
    href: "/matchbooks04",
  },
  {
    label: "Advertising Matchbooks",
    href: "/matchbooks08",
  },
];
