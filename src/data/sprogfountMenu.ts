import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Sprogfount menu — nav-menu topics for all routes beginning with `sprogfount`.
 * Labels match the sprogfount-menu-topics mockup; Overview added at top.
 * Non-Overview routes: `sprogfount01`…`sprogfount03`.
 */
export const SPROGFOUNT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/sprogfount01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/sprogfount02",
  },
  {
    label: "Photograph Album",
    href: "/sprogfount03",
  },
];
