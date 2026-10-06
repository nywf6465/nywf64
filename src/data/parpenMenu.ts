import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Parker Pen menu — nav-menu topics for all routes beginning with `parpen`.
 * Labels match the parpen menu-topics mockup.
 * Non-Overview routes: `parpen01`…`parpen08`.
 */
export const PARPEN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/parpen01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/parpen02",
  },
  {
    label: "Postcards",
    href: "/parpen03",
  },
  {
    label: "Gallery of Photographs",
    href: "/parpen04",
  },
  {
    label: "Peace through Understanding through Writing",
    href: "/parpen05",
  },
  {
    label: "Penfriend Application",
    href: "/parpen06",
  },
  {
    label: "Best Seat in the House",
    href: "/parpen07",
  },
  {
    label: "Parker Pavilion at Lodge of the Four Seasons",
    href: "/parpen08",
  },
];
