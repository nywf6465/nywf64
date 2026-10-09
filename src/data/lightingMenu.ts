import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Lighting menu — nav-menu topics for all routes beginning with `lighting`.
 * Labels match the lighting-menu-topics mockup; Overview added at top.
 * Non-Overview routes: `lighting01`…`lighting12`.
 */
export const LIGHTING_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/lighting01",
  },
  {
    label: "World's Fair Information Manual - Walks & Roadways",
    href: "/lighting02",
  },
  {
    label: "Photograph Album - Walks & Roadways",
    href: "/lighting03",
  },
  {
    label: "World's Fair Information Manual - Encircling Promenades",
    href: "/lighting04",
  },
  {
    label: "Photograph Album - Encircling Promenades",
    href: "/lighting05",
  },
  {
    label: "World's Fair Information Manual - Flying Flags",
    href: "/lighting06",
  },
  {
    label: "Photograph Album - Flying Flags",
    href: "/lighting07",
  },
  {
    label: "World's Fair Information Manual - Trees & Shrubbery",
    href: "/lighting08",
  },
  {
    label: "Photograph Album - Trees & Shrubbery",
    href: "/lighting09",
  },
  {
    label: "World's Fair Information Manual - Unisphere Theme Center",
    href: "/lighting10",
  },
  {
    label: "Photograph Album - Unisphere Theme Center",
    href: "/lighting11",
  },
  {
    label: "World's Fair Information Manual - Sound System & Background Music",
    href: "/lighting12",
  },
];
