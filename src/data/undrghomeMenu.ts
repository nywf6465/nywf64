import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Underground World Home menu — nav-menu topics for all routes beginning with `undrghome`.
 * Labels match uploaded menu topics.
 * Non-Overview routes: `undrghome01`…`undrghome09`.
 */
export const UNDRGHOME_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/undrghome01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/undrghome02",
  },
  {
    label: "Advertising",
    href: "/undrghome03",
  },
  {
    label: "Photograph Album",
    href: "/undrghome04",
  },
  {
    label: "The Underground World Home",
    href: "/undrghome05",
    parts: [{ text: "The Underground World Home", italic: true }],
  },
  {
    label: "Brochure",
    href: "/undrghome06",
  },
  {
    label: "Booklet",
    href: "/undrghome07",
  },
  {
    label: "Booklet (continued)",
    href: "/undrghome08",
  },
  {
    label: "Epilogue",
    href: "/undrghome09",
  },
];
