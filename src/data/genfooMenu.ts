import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * General Foods Arches menu — nav-menu topics for all routes beginning with `genfoo`.
 * Labels match `media/genfoo-menu-topics-source.jpg`.
 * Non-Overview routes: `genfoo01`…`genfoo10`.
 */
export const GENFOO_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/genfoo01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/genfoo02",
  },
  {
    label: "Postcards",
    href: "/genfoo03",
  },
  {
    label: "Advertising",
    href: "/genfoo04",
  },
  {
    label: "Photograph Album",
    href: "/genfoo05",
  },
  {
    label: "Press Releases",
    href: "/genfoo06",
  },
  {
    label: "Brochure: General Foods at the New York World's Fair",
    href: "/genfoo07",
  },
  {
    label: "Booklet: Recipes from the Fair",
    href: "/genfoo08",
  },
  {
    label: "Article: Archways to Understanding",
    href: "/genfoo09",
  },
  {
    label: "Epilogue: Old Archway gets a New Life!",
    href: "/genfoo10",
  },
];
