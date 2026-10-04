import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Texas menu — nav-menu topics for all routes beginning with `texas`.
 * Labels match the texas-menu-topics mockup; Overview at top.
 * Non-Overview routes: `texas01`…`texas11`.
 * Spelling in labels matches the source menu mockup (Ephemra, Redording).
 */
export const TEXAS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/texasoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/texas01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/texas02",
  },
  {
    label: "Advertising",
    href: "/texas03",
  },
  {
    label: "Gallery of Photographs",
    href: "/texas04",
  },
  {
    label: "Texan with Big Dreams + Big Apple = Big Trouble",
    href: "/texas05",
  },
  {
    label: "An Oasis of Entertainment at the Fair",
    href: "/texas06",
  },
  {
    label: "Texas Pavilions - Press Releases",
    href: "/texas07",
  },
  {
    label: "To Broadway With Love - Press Releases",
    href: "/texas08",
  },
  {
    label: "To Broadway With Love - Ephemra & Gallery",
    href: "/texas09",
  },
  {
    label: "To Broadway With Love - Original Cast Redording",
    href: "/texas10",
  },
  {
    label: "To Broadway With Love - Souvenir Program",
    href: "/texas11",
  },
];
