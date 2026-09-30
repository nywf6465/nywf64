import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Bounty menu — nav-menu topics for all routes beginning with `bounty`.
 * Labels match the bounty-menu-topics mockup; Overview at top.
 * Non-Overview routes: `bounty01`…`bounty04`.
 */
export const BOUNTY_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/bountyoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/bounty01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/bounty02",
  },
  {
    label: "Photograph Album",
    href: "/bounty03",
  },
  {
    label: "Brochure: Board the Bounty",
    href: "/bounty04",
  },
];
