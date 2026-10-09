import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * China menu — nav-menu topics for all routes beginning with `china`.
 * Labels match the china-menu-topics mockup.
 * Non-Overview routes: `china01`…`china09`.
 */
export const CHINA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/china01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/china02",
  },
  {
    label: "Postcards",
    href: "/china03",
  },
  {
    label: "Advertising",
    href: "/china04",
  },
  {
    label: "Photograph Album",
    href: "/china05",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/china06",
  },
  {
    label: "Brochure: Welcome to the China Pavilion (1964)",
    href: "/china07",
  },
  {
    label: "Brochure: Welcome to the China Pavilion (1965)",
    href: "/china08",
  },
  {
    label: "Saved from the China Pavilion",
    href: "/china09",
  },
];
