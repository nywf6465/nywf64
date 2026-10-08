import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Oklahoma menu — nav-menu topics for all routes beginning with `oklahoma`.
 * Labels match the oklahoma menu-topics mockup; Overview at top.
 * Non-Overview routes: `oklahoma01`…`oklahoma04`.
 */
export const OKLAHOMA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/oklahomaoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/oklahoma01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/oklahoma02",
  },
  {
    label: "Photograph Album",
    href: "/oklahoma03",
  },
  {
    label: "Brochure: Commemorative Postage Stamps & Pavilion Information",
    href: "/oklahoma04",
  },
];
