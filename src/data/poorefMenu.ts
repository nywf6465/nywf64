import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Pooref menu — nav-menu topics for all routes beginning with `pooref`.
 * Labels match the pooref-menu-topics mockup; Overview added at top.
 * Non-Overview routes: `pooref01`…`pooref04`.
 */
export const POOREF_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/pooref01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/pooref02",
  },
  {
    label: "Postcards",
    href: "/pooref03",
  },
  {
    label: "Photograph Album",
    href: "/pooref04",
  },
];
