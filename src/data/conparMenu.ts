import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Continental Park menu — nav-menu topics for all routes beginning with `conpar`.
 * Labels match the conpar menu-topics mockup.
 * Non-Overview routes: `conpar01`…`conpar02`.
 */
export const CONPAR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/conpar01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/conpar02",
  },
];
