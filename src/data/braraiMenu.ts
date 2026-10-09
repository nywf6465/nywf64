import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Brarai menu — nav-menu topics for all routes beginning with `brarai`.
 * Labels match the brarai-menu-topics mockup; Overview at top.
 * Non-Overview routes: `brarai01`…`brarai03`.
 */
export const BRARAI_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/braraioverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/brarai01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/brarai02",
  },
  {
    label: "Photograph Album",
    href: "/brarai03",
  },
];
