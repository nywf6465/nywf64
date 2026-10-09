import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Korea menu — nav-menu topics for all routes beginning with `korea`.
 * Labels match `media/korea-menu-topics-source.jpg`.
 * Non-Overview routes: `korea01`…`korea04`.
 */
export const KOREA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/korea01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/korea02",
  },
  {
    label: "Advertising",
    href: "/korea03",
  },
  {
    label: "Gallery of Photographs",
    href: "/korea04",
  },
];
