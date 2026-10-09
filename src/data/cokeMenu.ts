import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Coca-Cola menu — nav-menu topics for all routes beginning with `coke`.
 * Labels match the coke menu-topics mockup.
 * Non-Overview routes: `coke01`…`coke13` (two distinct Photograph Album stubs).
 */
export const COKE_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/coke01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/coke02",
  },
  {
    label: "Postcards",
    href: "/coke03",
  },
  {
    label: "Photograph Album",
    href: "/coke04",
  },
  {
    label: "Photograph Album",
    href: "/coke05",
  },
  {
    label: "Pamphlet: Dedication Ceremonies",
    href: "/coke06",
  },
  {
    label: "Press Releases",
    href: "/coke07",
  },
  {
    label: "Pavilion Guide",
    href: "/coke08",
  },
  {
    label: "Did you Know?",
    href: "/coke09",
  },
  {
    label: "K2US Log Sheet",
    href: "/coke10",
  },
  {
    label: "The Refresher May-June 1964",
    href: "/coke11",
    parts: [
      { text: "The Refresher", italic: true },
      { text: " May-June 1964" },
    ],
  },
  {
    label: "Brochure: News of the World of Refreshment 1964",
    href: "/coke12",
  },
  {
    label: "Brochure: News of the World of Refreshment 1965",
    href: "/coke13",
  },
];
