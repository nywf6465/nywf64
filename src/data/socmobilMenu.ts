import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Socony Mobil menu — nav-menu topics for all routes beginning with `socmobil`.
 * Labels match the socmobil-menu-topics mockup; Overview at top.
 * Non-Overview routes: `socmobil01`…`socmobil03`.
 */
export const SOCMOBIL_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/socmobiloverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/socmobil01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/socmobil02",
  },
  {
    label: "Photograph Album",
    href: "/socmobil03",
  },
];
