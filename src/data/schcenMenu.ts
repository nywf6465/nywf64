import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Schaefer Center menu — nav-menu topics for all routes beginning with `schcen`.
 * Labels match the schcen-menu-topics mockup.
 * Non-Overview routes: `schcen01`…`schcen09`.
 */
export const SCHCEN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/schcen01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/schcen02",
  },
  {
    label: "Postcards",
    href: "/schcen03",
  },
  {
    label: "Advertising",
    href: "/schcen04",
  },
  {
    label: "Photograph Album",
    href: "/schcen05",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/schcen06",
  },
  {
    label: "Plastics Solve Design Problems",
    href: "/schcen07",
    parts: [{ text: "Plastics Solve Design Problems", italic: true }],
  },
  {
    label: "Brochures",
    href: "/schcen08",
  },
  {
    label: "Don't Miss It!",
    href: "/schcen09",
    parts: [{ text: "Don't Miss It!", italic: true }],
  },
];
