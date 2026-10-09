import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Genele menu — nav-menu topic list for all routes beginning with `genele`.
 * Labels match the genele-menu-topics mockup (italics via `parts` where needed).
 * Both Photograph Album rows are kept (distinct routes).
 * Routes: `genele01`…`genele22` (+ Overview).
 */
export const GENELE_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/geneleoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/genele01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/genele02",
  },
  {
    label: "Postcards",
    href: "/genele03",
  },
  {
    label: "Advertising",
    href: "/genele04",
  },
  {
    label: "Photograph Album",
    href: "/genele05",
  },
  {
    label: "Photograph Album",
    href: "/genele06",
  },
  {
    label: "Construction",
    href: "/genele07",
  },
  {
    label: "The Souvenir Booklet",
    href: "/genele08",
  },
  {
    label: "Brochure: Your Tour of Progressland",
    href: "/genele09",
  },
  {
    label: "Brochure: Facts About General Electric's Nuclear Fusion Demonstration",
    href: "/genele10",
  },
  {
    label: "Ride the Carousel of Progress",
    href: "/genele11",
  },
  {
    label: "There's a Great Big Beautiful Tomorrow",
    href: "/genele12",
    parts: [{ text: "There's a Great Big Beautiful Tomorrow", italic: true }],
  },
  {
    label: "Scrims",
    href: "/genele13",
  },
  {
    label: "Transcript of the Skydome Spectacular Show",
    href: "/genele14",
    parts: [
      { text: "Transcript of the " },
      { text: "Skydome Spectacular", italic: true },
      { text: " Show" },
    ],
  },
  {
    label: "Article: Preview of Disney's World's Fair Shows",
    href: "/genele15",
  },
  {
    label: 'Article: G.E.\'s "Progressland"',
    href: "/genele16",
  },
  {
    label: "Article: G.E. in Progressland",
    href: "/genele17",
  },
  {
    label: "Article: Lighting at the Fair - General Electric Pavilion",
    href: "/genele18",
  },
  {
    label: "Article: An Elegantly Domed Carousel",
    href: "/genele19",
  },
  {
    label: "Article: Parrot & Atoms Help GE Tell Story of Power",
    href: "/genele20",
  },
  {
    label: "The Progressland Model Auction",
    href: "/genele21",
  },
  {
    label: "Beyond the Fair: the Carousel of Progress' Beautiful Tomorrow",
    href: "/genele22",
    parts: [
      {
        text: "Beyond the Fair: the Carousel of Progress' Beautiful Tomorrow",
        italic: true,
      },
    ],
  },
];
