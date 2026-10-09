import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Eastern Air Lines menu — nav-menu topics for all routes beginning with `eastern`.
 * Labels match the eastern menu-topics mockup.
 * Non-Overview routes: `eastern01`…`eastern07`.
 */
export const EASTERN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/eastern01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/eastern02",
  },
  {
    label: "Postcards",
    href: "/eastern03",
  },
  {
    label: "Photograph Album",
    href: "/eastern04",
  },
  {
    label: "Pamphlet: World's Fair Handbook",
    href: "/eastern05",
  },
  {
    label: "Pamphlet: Happy Holidays",
    href: "/eastern06",
  },
  {
    label: "Booklet: Come Have Fun at the Fair",
    href: "/eastern07",
  },
];
