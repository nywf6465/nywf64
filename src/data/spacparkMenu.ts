import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Spacpark menu — nav-menu topics for all routes beginning with `spacpark`.
 * Labels match the spacpark-menu-topics mockup.
 * Non-Overview routes: `spacpark01`…`spacpark12`.
 * Italic *The Space Age* via `parts` on spacpark06.
 */
export const SPACPARK_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/spacpark01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/spacpark02",
  },
  {
    label: "Postcards",
    href: "/spacpark03",
  },
  {
    label: "Photograph Album",
    href: "/spacpark04",
  },
  {
    label: "Photograph Album",
    href: "/spacpark05",
  },
  {
    label: "The Space Age for Real!",
    href: "/spacpark06",
    parts: [
      { text: "The Space Age", italic: true },
      { text: " for Real!" },
    ],
  },
  {
    label: "Exhibit Layout",
    href: "/spacpark07",
  },
  {
    label: "The US Space Park",
    href: "/spacpark08",
  },
  {
    label: "The US Space Park (continued)",
    href: "/spacpark09",
  },
  {
    label: "Press Releases",
    href: "/spacpark10",
  },
  {
    label: "Project Mercury | Dedication Remarks",
    href: "/spacpark11",
  },
  {
    label: "Epilogue",
    href: "/spacpark12",
  },
];
