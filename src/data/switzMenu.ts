import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Switz menu — nav-menu topics for all routes beginning with `switz`.
 * Labels match the switz-menu-topics mockup.
 * Non-Overview routes: `switz01`…`switz07`.
 */
export const SWITZ_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/switz01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/switz02",
  },
  {
    label: "Gallery of Photographs",
    href: "/switz03",
  },
  {
    label: "The Pavilion of Time",
    href: "/switz04",
  },
  {
    label: "Pavilion Guide",
    href: "/switz05",
  },
  {
    label: "Watch Exhibit | Time Center | Clock Towers",
    href: "/switz06",
  },
  {
    label: "Swiss Watch Industry Meets the Space Age",
    href: "/switz07",
  },
];
