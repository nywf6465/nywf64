import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Fair News Newsletters / fairnews menu — 2 topic cards.
 * Card 1 is Overview; card 2 will be filled when the following page is created.
 */
export const FAIR_NEWS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/fairnewsoverview",
  },
  {
    label: "…",
    href: "/fairnews01",
  },
];
