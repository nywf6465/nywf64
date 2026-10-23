import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Matchbook Collection menu.
 * Overview (Page 1); Exhibitor Matchbooks at /matchbooks01–04 (Pages 2–5); Souvenir at /matchbooks05 & /matchbooks07 (Pages 6–7); Advertising at /matchbooks08 (Page 8).
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
    label: "Souvenir Matchbooks",
    href: "/matchbooks05",
  },
  {
    label: "Souvenir Matchbooks (2)",
    href: "/matchbooks07",
  },
  {
    label: "Advertising Matchbooks",
    href: "/matchbooks08",
  },
];
