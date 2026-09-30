import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Easkod menu — nav-menu topic list for all routes beginning with `easkod`.
 * Labels match the easkod-menu-topics mockup; non-Overview routes are sequential
 * `easkod01`…`easkod21`. Italic script title via `parts`.
 */
export const EASKOD_MENU_TOPICS: AttractionTopic[] = [
  { label: "Overview", href: "/easkodoverview" },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/easkod01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/easkod02",
  },
  { label: "Postcards", href: "/easkod03" },
  { label: "Advertising", href: "/easkod04" },
  { label: "Advertising Supplement", href: "/easkod05" },
  { label: "Photograph Album", href: "/easkod06" },
  { label: "Pamphlet: Groundbreaking", href: "/easkod07" },
  { label: "Construction", href: "/easkod08" },
  { label: "Press Releases", href: "/easkod09" },
  { label: "Article: The Kodak Pavilion", href: "/easkod10" },
  { label: "Brochure: Kodak at the Fair", href: "/easkod11" },
  { label: "Brochure: The Dome Theatre Show", href: "/easkod12" },
  { label: "Brochure: Invitation to Shareholders", href: "/easkod13" },
  { label: "Brochure: Picturetaking at the Fair", href: "/easkod14" },
  {
    label: "Article: Multi-Image Look at the Idea of Seeing",
    href: "/easkod15",
  },
  {
    label: "Script: The Searching Eye",
    href: "/easkod16",
    parts: [
      { text: "Script: " },
      { text: "The Searching Eye", italic: true },
    ],
  },
  { label: "The Picture Tower", href: "/easkod17" },
  {
    label: "Article: Lighting at the Fair - Kodak Pavilion",
    href: "/easkod18",
  },
  { label: "World's Fair Flash Camera", href: "/easkod19" },
  { label: "Pavilion Model for Kodak Dealers", href: "/easkod20" },
  { label: "The End of the Fair", href: "/easkod21" },
];
