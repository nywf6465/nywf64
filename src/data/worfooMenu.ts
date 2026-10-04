import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World of Food menu — nav-menu topics for all routes beginning with `worfoo`.
 * Labels match uploaded menu topics (+ Overview at top).
 * Non-Overview routes: `worfoo01`…`worfoo09`.
 */
export const WORFOO_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/worfoooverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/worfoo01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/worfoo02",
  },
  {
    label: "Postcards",
    href: "/worfoo03",
  },
  {
    label: "The Concept",
    href: "/worfoo04",
  },
  {
    label: "Exhibitors",
    href: "/worfoo05",
  },
  {
    label: "Groundbreaking",
    href: "/worfoo06",
  },
  {
    label: "The Problem was Financing",
    href: "/worfoo07",
  },
  {
    label: "The Smoking Gun",
    href: "/worfoo08",
  },
  {
    label: "The End for the World of Food",
    href: "/worfoo09",
  },
];
