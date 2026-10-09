import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Oregon menu — nav-menu topics for all routes beginning with `oregon`.
 * Labels match the oregon menu-topics mockup; Overview at top.
 * Non-Overview routes: `oregon01`…`oregon04`.
 */
export const OREGON_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/oregonoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/oregon01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/oregon02",
  },
  {
    label: "Photograph Album",
    href: "/oregon03",
  },
  {
    label: "Timber Carnival Program",
    href: "/oregon04",
  },
];
