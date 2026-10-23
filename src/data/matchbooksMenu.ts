import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Matchbook Collection menu — ordered by nav Page / NEXT chain.
 * Page 1 Overview → Pages 2–5 Exhibitor (01–04) → Page 6 Souvenir (05) →
 * Page 7 Exhibitor (06) → Page 8 Souvenir (07) → Page 9 Advertising (08).
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
    label: "Exhibitor Matchbooks (5)",
    href: "/matchbooks06",
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
