import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Pan American Highway Gardens menu — topics for `panamg*` / `panama*` routes.
 * Labels match the panamg menu-topics mockup; Overview at top.
 * Non-Overview routes: `panama01`…`panama03`.
 */
export const PANAMG_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/panamgoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/panamg01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/panamg02",
  },
  {
    label: "Photograph Album",
    href: "/panamg03",
  },
];
