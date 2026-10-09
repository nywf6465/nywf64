import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Continental Circus menu — nav-menu topics for all routes beginning with `concir`.
 * Labels match the concir menu-topics mockup.
 * Non-Overview routes: `concir01`…`concir05`.
 */
export const CONCIR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/concir01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/concir02",
  },
  {
    label: "Postcards",
    href: "/concir03",
  },
  {
    label: "Photograph Album",
    href: "/concir04",
  },
  {
    label: "Souvenir Program",
    href: "/concir05",
  },
];
