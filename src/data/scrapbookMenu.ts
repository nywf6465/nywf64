import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Scrapbook menu — ordered by nav Page / NEXT chain.
 * Page 1 Overview → Page 2 Page One → Page 3 Page Two → Page 4 Page Three.
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
];
