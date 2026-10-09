import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Vatican menu — nav-menu topic list for all routes beginning with `vatican`.
 * Non-Overview routes: `vatican01`…`vatican10`.
 */
export const VATICAN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/vatican01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/vatican02",
  },
  {
    label: "Postcards",
    href: "/vatican03",
  },
  {
    label: "Photograph Album I",
    href: "/vatican04",
  },
  {
    label: "Photograph Album II",
    href: "/vatican05",
  },
  {
    label: "Groundbreaking & Construction",
    href: "/vatican06",
  },
  {
    label: "Pavilion Guide",
    href: "/vatican07",
  },
  {
    label: "The Pieta",
    href: "/vatican08",
  },
  {
    label: "Epilogue",
    href: "/vatican09",
  },
  {
    label: "The Irony",
    href: "/vatican10",
  },
];
