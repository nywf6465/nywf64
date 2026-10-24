import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Scrapbook menu — ordered by nav Page / NEXT chain.
 * Page 1 Overview → Pages 2–4 (1964) → Pages 5–8 (1965).
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
  {
    label: "1965 Scrapbook - Page Five",
    href: "/scrapbook05",
  },
  {
    label: "1965 Scrapbook - Page Six",
    href: "/scrapbook06",
  },
  {
    label: "1965 Scrapbook - Page Seven",
    href: "/scrapbook07",
  },
];
