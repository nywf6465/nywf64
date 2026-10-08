import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Santa Maria menu — nav-menu topics for all routes beginning with `sanmar`.
 * Labels match the sanmar-menu-topics mockup; Overview at top.
 * Non-Overview routes: `sanmar01`…`sanmar03`.
 */
export const SANMAR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/sanmaroverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/sanmar01",
  },
  {
    label: "Postcards",
    href: "/sanmar02",
  },
  {
    label: "Photograph Album",
    href: "/sanmar03",
  },
];
