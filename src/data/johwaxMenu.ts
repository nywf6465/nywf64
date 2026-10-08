import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Johwax menu — nav-menu topic list for all routes beginning with `johwax`.
 * Labels match the johwax-menu-topics mockup; non-Overview routes are sequential
 * `johwax01`…`johwax17`. Duplicate Brochure: Golden Rondelle kept as separate topics.
 * Italic *to be alive!* via `parts`.
 */
export const JOHWAX_MENU_TOPICS: AttractionTopic[] = [
  { label: "Overview", href: "/johwaxoverview" },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/johwax01",
  },
  { label: "World's Fair Information Manual", href: "/johwax02" },
  { label: "Postcards", href: "/johwax03" },
  { label: "Advertising", href: "/johwax04" },
  { label: "Photograph Album", href: "/johwax05" },
  { label: "Johnson Wax Photograph Album", href: "/johwax06" },
  { label: "Pamphlet: Groundbreaking", href: "/johwax07" },
  { label: "Brochure: Golden Rondelle", href: "/johwax08" },
  { label: "Brochure: Golden Rondelle", href: "/johwax09" },
  { label: "Map", href: "/johwax10" },
  { label: "Souvenir Question & Answer Card", href: "/johwax11" },
  { label: "Johnson Magazine", href: "/johwax12" },
  {
    label: "Article: Three Screens Full of Happiness",
    href: "/johwax13",
  },
  {
    label: 'Article: It\'s Great "To Be Alive!"',
    href: "/johwax14",
  },
  {
    label: "to be alive!",
    href: "/johwax15",
    parts: [{ text: "to be alive!", italic: true }],
  },
  {
    label: "Article: World's Fair Jewel Gets a New Setting",
    href: "/johwax16",
  },
  { label: "The Golden Rondelle Today", href: "/johwax17" },
];
