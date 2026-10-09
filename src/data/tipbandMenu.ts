import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Tipband menu — nav-menu topics for all routes beginning with `tipband`.
 * Labels match the tipband-menu-topics mockup; Overview at top.
 * Non-Overview routes: `tipband01`…`tipband03`.
 */
export const TIPBAND_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/tipbandoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/tipband01",
  },
  {
    label: "Photograph Album",
    href: "/tipband02",
  },
  {
    label: "Brochure",
    href: "/tipband03",
  },
];
