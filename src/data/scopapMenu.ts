import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Scott Paper menu — nav-menu topics for all routes beginning with `scopap`.
 * Labels match the scopap-menu-topics mockup; Overview at top.
 * Non-Overview routes: `scopap01`…`scopap10`.
 */
export const SCOPAP_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/scopapoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/scopap01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/scopap02",
  },
  {
    label: "Advertising",
    href: "/scopap03",
  },
  {
    label: "Photograph Album",
    href: "/scopap04",
  },
  {
    label: "Pavilion & Exhibit Concept",
    href: "/scopap05",
  },
  {
    label: "Press Release & Floor Plan",
    href: "/scopap06",
  },
  {
    label: "The Scott Enchanted Forest at the World's Fair",
    href: "/scopap07",
    parts: [
      { text: "The " },
      { text: "Scott Enchanted Forest", italic: true },
      { text: " at the World's Fair" },
    ],
  },
  {
    label: "Brochure: Explore the Enchanted Forest",
    href: "/scopap08",
  },
  {
    label: "Scott Enterprise Magazine",
    href: "/scopap09",
    parts: [
      { text: "Scott " },
      { text: "Enterprise", italic: true },
      { text: " Magazine" },
    ],
  },
  {
    label: "A Brief History of Scott Paper Before and After 1964",
    href: "/scopap10",
  },
];
