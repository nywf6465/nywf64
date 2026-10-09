import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Dynamic Maturity menu — nav-menu topics for all routes beginning with `dynmat`.
 * Labels match the dynmatoverview menu-topics mockup; Overview at top.
 * Non-Overview routes: `dynmat01`…`dynmat06`.
 */
export const DYNMAT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/dynmatoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/dynmat01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/dynmat02",
  },
  {
    label: "Postcards",
    href: "/dynmat03",
  },
  {
    label: "Photograph Album",
    href: "/dynmat04",
  },
  {
    label: "Pamphlet: Welcome",
    href: "/dynmat05",
  },
  {
    label: "Pamphlet: Helpful Hints",
    href: "/dynmat06",
  },
];
