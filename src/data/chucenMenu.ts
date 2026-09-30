import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Churchill Center menu — nav-menu topics for all routes beginning with `chucen`.
 * Labels match the chucen menu-topics mockup; Overview at top.
 * Non-Overview routes: `chucen01`…`chucen04`.
 */
export const CHUCEN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/chucenoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/chucen01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/chucen02",
  },
  {
    label: "Postcards",
    href: "/chucen03",
  },
  {
    label: "Photograph Album",
    href: "/chucen04",
  },
];
