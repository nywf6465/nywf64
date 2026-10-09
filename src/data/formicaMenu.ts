import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Formica menu — nav-menu topics for all routes beginning with `formica`.
 * Labels match `media/formica-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `formica01`…`formica19`.
 */
export const FORMICA_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/formicaoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/formica01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/formica02",
  },
  {
    label: "Advertising",
    href: "/formica03",
  },
  {
    label: "Photograph Album",
    href: "/formica04",
  },
  {
    label: "Press Release / Photos",
    href: "/formica05",
  },
  {
    label: "The House Takes Shape",
    href: "/formica06",
  },
  {
    label: "Entrance & Main Hallway",
    href: "/formica07",
  },
  {
    label: "Master Bedroom & Master Bath",
    href: "/formica08",
  },
  {
    label: "Living Room",
    href: "/formica09",
  },
  {
    label: "Dining Room",
    href: "/formica10",
  },
  {
    label: "Kitchen",
    href: "/formica11",
  },
  {
    label: "Family Room",
    href: "/formica12",
  },
  {
    label: "Bar & Laundry Room",
    href: "/formica13",
  },
  {
    label: "Boy's Room",
    href: "/formica14",
  },
  {
    label: "Girl's Room & Children's Bath",
    href: "/formica15",
  },
  {
    label: "The 1965 Season",
    href: "/formica16",
  },
  {
    label: "A World's Fair House in Ohio",
    href: "/formica17",
  },
  {
    label: "A World's Fair House in Sheboygan?",
    href: "/formica18",
    parts: [
      { text: "A World's Fair House in " },
      { text: "Sheboygan", italic: true },
      { text: "?" },
    ],
  },
  {
    label: "History of the Formica Corporation",
    href: "/formica19",
  },
];
