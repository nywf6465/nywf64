import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Tipband menu — nav-menu topics for all routes beginning with `tipband`.
 * Labels match the tipband-menu-topics mockup.
 * Non-Overview routes: `tipband01`…`tipband03`.
 */
export const TIPBAND_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/tipband01",
  },
  {
    label: "Gallery of Photographs",
    href: "/tipband02",
  },
  {
    label: "Brochure",
    href: "/tipband03",
  },
];
