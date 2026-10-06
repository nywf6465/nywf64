import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * neweng menu — nav-menu topics for all routes beginning with `neweng`.
 * Labels match `media/neweng-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `neweng01`…`neweng05`.
 */
export const NEWENG_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/neweng01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/neweng02",
  },
  {
    label: "Gallery of Photographs",
    href: "/neweng03",
  },
  {
    label: "Article: What it Took to get New England to the Fair",
    href: "/neweng04",
  },
  {
    label: "Article: New England Scenes",
    href: "/neweng05",
  },
];
