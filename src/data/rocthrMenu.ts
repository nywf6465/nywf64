import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Rocket Thrower menu — topics for routes beginning with `rocthr`.
 * Labels match the rocthr menu-topics mockup; Overview at top.
 * Non-Overview routes: `rocthr01`…`rocthr04`.
 */
export const ROCTHR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/rocthroverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/rocthr01",
  },
  {
    label: "About The Rocket Thrower",
    href: "/rocthr02",
  },
  {
    label: "Postcards",
    href: "/rocthr03",
  },
  {
    label: "Photograph Album",
    href: "/rocthr04",
  },
];
