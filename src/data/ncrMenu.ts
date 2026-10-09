import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * ncr menu — nav-menu topics for all routes beginning with `ncr`.
 * Labels match `media/ncr-menu-topics-source.jpg`.
 * Guidebook label ends at “Souvenir Map” (no “Entries”).
 * Non-Overview routes: `ncr01`…`ncr06`.
 */
export const NCR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/ncr01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/ncr02",
  },
  {
    label: "Postcards",
    href: "/ncr03",
  },
  {
    label: "Photograph Album",
    href: "/ncr04",
  },
  {
    label: "Essay: Space Frame Design for a Space Age Look",
    href: "/ncr05",
  },
  {
    label: "Article: The New Business World",
    href: "/ncr06",
  },
];
