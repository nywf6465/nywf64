import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Pennsylvania menu — topics for `pennsyoverview` and `pennsylvania*` routes.
 * Labels match the pennsy menu-topics mockup; Overview at top.
 * Non-Overview routes: `pennsylvania01`…`pennsylvania06`.
 */
export const PENNSY_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/pennsyoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/pennsylvania01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/pennsylvania02",
  },
  {
    label: "Photograph Album",
    href: "/pennsylvania03",
  },
  {
    label: "Dedication Ceremonies",
    href: "/pennsylvania04",
  },
  {
    label: "Bell Ringer Certificate",
    href: "/pennsylvania05",
  },
  {
    label: "The New Pennsylvania | Looking Ahead",
    href: "/pennsylvania06",
  },
];
