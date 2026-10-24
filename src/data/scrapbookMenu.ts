import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Scrapbook menu — ordered by nav Page / NEXT chain.
 * Page 1 Overview → Page 2 Page One (`/scrapbook01`).
 */
export const SCRAPBOOK_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/scrapbookoverview",
  },
  {
    label: "1964 Scrapbook - Page One",
    href: "/scrapbook01",
  },
];
