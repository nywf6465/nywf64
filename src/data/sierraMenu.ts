import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Sierra Leone menu — nav-menu topics for all routes beginning with `sierra`.
 * Labels match the sierra-menu-topics mockup; Overview at top.
 * Non-Overview routes: `sierra01`…`sierra06`.
 */
export const SIERRA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/sierraoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/sierra01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/sierra02",
  },
  {
    label: "Advertising",
    href: "/sierra03",
  },
  {
    label: "Photograph Album",
    href: "/sierra04",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/sierra05",
  },
  {
    label: "Sierra Leone Since the Fair",
    href: "/sierra06",
  },
];
