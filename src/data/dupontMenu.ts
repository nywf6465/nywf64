import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * DuPont menu — nav-menu topic list for all routes beginning with `dupont`.
 * Labels match the dupont-menu-topics mockup; non-Overview routes are sequential
 * `dupont01`…`dupont15`. Duplicate Photograph Album rows kept as separate topics.
 * Italic show title via `parts`.
 */
export const DUPONT_MENU_TOPICS: AttractionTopic[] = [
  { label: "Overview", href: "/dupontoverview" },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/dupont01",
  },
  { label: "Postcards", href: "/dupont02" },
  { label: "Photograph Album", href: "/dupont03" },
  { label: "Photograph Album", href: "/dupont04" },
  { label: "Press Releases", href: "/dupont05" },
  { label: "Brochure: DuPont Presents (1964)", href: "/dupont06" },
  { label: "Brochure: DuPont Presents (1965)", href: "/dupont07" },
  { label: "Brochure: Visit DuPont", href: "/dupont08" },
  {
    label: "Article: wonderful world of CHEMISTRY",
    href: "/dupont09",
  },
  { label: "Article: Backstage at the Fair", href: "/dupont10" },
  { label: "Article: First Year at the Fair", href: "/dupont11" },
  { label: "Article: Backstage Toil and Skill", href: "/dupont12" },
  {
    label: "Article: Lighting at the Fair - Dupont Pavilion",
    href: "/dupont13",
  },
  { label: "The Red Room", href: "/dupont14" },
  {
    label: "Audio Selections from The Wonderful World of Chemistry",
    href: "/dupont15",
    parts: [
      { text: "Audio Selections from " },
      { text: "The Wonderful World of Chemistry", italic: true },
    ],
  },
];
