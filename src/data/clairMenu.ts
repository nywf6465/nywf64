import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Clairol menu — nav-menu topics for all routes beginning with `clair`.
 * Labels match the clair menu-topics mockup; Overview at top.
 * Non-Overview routes: `clair01`…`clair09`.
 */
export const CLAIR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/clairoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/clair01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/clair02",
  },
  {
    label: "Advertising",
    href: "/clair03",
  },
  {
    label: "Photograph Album",
    href: "/clair04",
  },
  {
    label: "Good Afternoon Ladies...",
    href: "/clair05",
  },
  {
    label: "Those Amazing Bubbles",
    href: "/clair06",
  },
  {
    label: "Souvenir Analysis Card",
    href: "/clair07",
  },
  {
    label: "Souvenir Booklet",
    href: "/clair08",
  },
  {
    label: "After the Fair - Beauty on Wheels",
    href: "/clair09",
  },
];
