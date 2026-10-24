import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Scrapbook menu — ordered by nav Page / NEXT chain.
 * Page 1 Overview → Page 2–4 (1964) → Page 5 Page Four (1965).
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
  {
    label: "1964 Scrapbook - Page Two",
    href: "/scrapbook02",
  },
  {
    label: "1964 Scrapbook - Page Three",
    href: "/scrapbook03",
  },
  {
    label: "1965 Scrapbook - Page Four",
    href: "/scrapbook04",
  },
];
