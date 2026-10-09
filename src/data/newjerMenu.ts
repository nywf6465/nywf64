import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * newjer menu — nav-menu topics for all routes beginning with `newjer`.
 * Labels match `media/newjer-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `newjer01`…`newjer04`.
 */
export const NEWJER_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/newjer01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/newjer02",
  },
  {
    label: "Postcards",
    href: "/newjer03",
  },
  {
    label: "Photograph Album",
    href: "/newjer04",
  },
];
