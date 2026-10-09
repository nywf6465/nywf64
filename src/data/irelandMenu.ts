import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * ireland menu — nav-menu topics for all routes beginning with `ireland`.
 * Labels match `media/ireland-menu-topics-source.jpg`.
 * Non-Overview routes: `ireland01`…`ireland04`.
 */
export const IRELAND_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/ireland01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/ireland02",
  },
  {
    label: "Photograph Album",
    href: "/ireland03",
  },
  {
    label: "Brochure: Concrete at the Fair",
    href: "/ireland04",
  },
];
