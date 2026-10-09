import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Nprogfount menu — nav-menu topics for all routes beginning with `nprogfount`.
 * Labels match the nprogfount-menu-topics mockup (“Guide Book” as two words);
 * Overview added at top. Non-Overview routes: `nprogfount01`…`nprogfount03`.
 */
export const NPROGFOUNT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/nprogfountoverview",
  },
  {
    label: "1964 & 1965 Official Guide Book & Souvenir Map",
    href: "/nprogfount01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/nprogfount02",
  },
  {
    label: "Photograph Album",
    href: "/nprogfount03",
  },
];
