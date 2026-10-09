import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Singer Bowl menu — nav-menu topics for all routes beginning with `singer`.
 * Labels match the singer-menu-topics mockup; Overview at top.
 * Non-Overview routes: `singer01`…`singer10`.
 */
export const SINGER_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/singeroverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/singer01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/singer02",
  },
  {
    label: "Postcards",
    href: "/singer03",
  },
  {
    label: "Photograph Album",
    href: "/singer04",
  },
  {
    label: "Evolution of an Arena",
    href: "/singer05",
  },
  {
    label: "The Singer Bowl is Born",
    href: "/singer06",
    parts: [
      { text: "The Singer Bowl", italic: true },
      { text: " is Born" },
    ],
  },
  {
    label: "Red Letter Days",
    href: "/singer07",
  },
  {
    label: "Singer at the Fair",
    href: "/singer08",
  },
  {
    label: "Millionaire Fabric Collection",
    href: "/singer09",
  },
  {
    label: "Epilogue",
    href: "/singer10",
  },
];
