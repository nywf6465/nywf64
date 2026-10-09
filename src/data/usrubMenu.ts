import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * U.S. Rubber menu — nav-menu topics for all routes beginning with `usrub`.
 * Labels match the usrub-menu-topics mockup; Overview at top.
 * Non-Overview routes: `usrub01`…`usrub09`.
 */
export const USRUB_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/usruboverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/usrub01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/usrub02",
  },
  {
    label: "Postcards",
    href: "/usrub03",
  },
  {
    label: "Advertising",
    href: "/usrub04",
  },
  {
    label: "Photograph Album",
    href: "/usrub05",
  },
  {
    label: "Photograph Album",
    href: "/usrub06",
  },
  {
    label: "Brochures",
    href: "/usrub07",
  },
  {
    label: 'U.S. Royal "GIANT TIRE" Toy',
    href: "/usrub08",
  },
  {
    label: "A Royal Legacy",
    href: "/usrub09",
  },
];
