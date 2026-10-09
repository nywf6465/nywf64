import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Rheingold menu — topics for routes beginning with `rheing`.
 * Labels match the rheing menu-topics mockup; Overview at top.
 * Non-Overview routes: `rheing01`…`rheing04`.
 */
export const RHEING_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/rheingoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/rheing01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/rheing02",
  },
  {
    label: "Advertising",
    href: "/rheing03",
  },
  {
    label: "Photograph Album",
    href: "/rheing04",
  },
];
