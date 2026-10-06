import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Seven-Up menu — nav-menu topics for all routes beginning with `sevup`.
 * Labels match the sevup-menu-topics mockup.
 * Non-Overview routes: `sevup01`…`sevup10`.
 */
export const SEVUP_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/sevup01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/sevup02",
  },
  {
    label: "Photograph Album",
    href: "/sevup03",
  },
  {
    label: "Pamphlet: Ground Uniting",
    href: "/sevup04",
  },
  {
    label: "Progress Report",
    href: "/sevup05",
  },
  {
    label: "The 7up Leader",
    href: "/sevup06",
  },
  {
    label: "1964 Menu",
    href: "/sevup07",
  },
  {
    label: "1965 Menu",
    href: "/sevup08",
  },
  {
    label: "Out Like a Lion",
    href: "/sevup09",
    parts: [{ text: "Out Like a Lion", italic: true }],
  },
  {
    label: "Article: Lighting at the Fair - 7-Up Pavilion",
    href: "/sevup10",
  },
];
