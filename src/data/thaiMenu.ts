import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Thai menu — nav-menu topics for all routes beginning with `thai`.
 * Labels match the thai-menu-topics mockup; Overview at top.
 * Non-Overview routes: `thai01`…`thai05`.
 */
export const THAI_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/thaioverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/thai01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/thai02",
  },
  {
    label: "Postcards",
    href: "/thai03",
  },
  {
    label: "Photograph Album",
    href: "/thai04",
  },
  {
    label: "Thailand Travel Talk",
    href: "/thai05",
  },
];
