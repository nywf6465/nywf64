import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Cities Service Band menu — nav-menu topics for all routes beginning with `citserv`.
 * Labels match the citserv menu-topics mockup; Overview at top.
 * Non-Overview routes: `citserv01`…`citserv06`.
 */
export const CITSERV_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/citservoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/citserv01",
  },
  {
    label: "Postcards",
    href: "/citserv02",
  },
  {
    label: "Advertising",
    href: "/citserv03",
  },
  {
    label: "Photograph Album",
    href: "/citserv04",
  },
  {
    label: "About the World's Fair Band of America",
    href: "/citserv05",
  },
  {
    label: "Paul Lavalle",
    href: "/citserv06",
  },
];
