import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Thai menu — nav-menu topics for all routes beginning with `thai`.
 * Labels match the thai-menu-topics mockup.
 * Non-Overview routes: `thai01`…`thai05`.
 */
export const THAI_MENU_TOPICS: AttractionTopic[] = [
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
    label: "Gallery of Photographs",
    href: "/thai04",
  },
  {
    label: "Thailand Travel Talk",
    href: "/thai05",
  },
];
