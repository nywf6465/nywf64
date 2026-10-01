import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * RCA menu — topics for routes beginning with `rca`.
 * Labels match the rca menu-topics mockup; Overview at top.
 * Non-Overview routes: `rca01`…`rca09`.
 */
export const RCA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/rcaoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/rca01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/rca02",
  },
  {
    label: "Postcards",
    href: "/rca03",
  },
  {
    label: "Advertising",
    href: "/rca04",
  },
  {
    label: "Gallery of Photographs",
    href: "/rca05",
  },
  {
    label: "Press Release",
    href: "/rca06",
  },
  {
    label: "Pavilion Floorplan",
    href: "/rca07",
  },
  {
    label: "The RCA Pavilion",
    href: "/rca08",
  },
  {
    label: "See Yourself on Color TV",
    href: "/rca09",
    parts: [{ text: "See Yourself on Color TV", italic: true }],
  },
];
