import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Tower of Light menu — nav-menu topics for all routes beginning with `twrlit`.
 * Labels match uploaded menu topics.
 * Non-Overview routes: `twrlit01`…`twrlit32`.
 */
export const TWRLIT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/twrlit01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/twrlit02",
  },
  {
    label: "Postcards",
    href: "/twrlit03",
  },
  {
    label: "Advertising",
    href: "/twrlit04",
  },
  {
    label: "Photograph Album",
    href: "/twrlit05",
  },
  {
    label: "Original Concept",
    href: "/twrlit06",
  },
  {
    label: "Final Concept",
    href: "/twrlit07",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/twrlit08",
  },
  {
    label: "Brochure: Tower of Light",
    href: "/twrlit09",
  },
  {
    label: "Brochure: Follow the Tower of Light",
    href: "/twrlit10",
  },
  {
    label: "Brochure: Con Edison at the Fair",
    href: "/twrlit11",
  },
  {
    label: "Information Request Card",
    href: "/twrlit12",
  },
  {
    label: "Kite & Key Club Guest Card",
    href: "/twrlit13",
  },
  {
    label: "Newsletter: January 1965 - First Fair Season a Success",
    href: "/twrlit14",
  },
  {
    label: 'Newsletter: March 1965 - Holiday With Light Press Preview "A Hit"',
    href: "/twrlit15",
  },
  {
    label: "1964's The Enjoyment of Electricity - The Production Script",
    href: "/twrlit16",
    parts: [
      { text: "1964's " },
      { text: "The Enjoyment of Electricity", italic: true },
      { text: " - The Production Script" },
    ],
  },
  {
    label: "1965's Holiday With Light - The Script",
    href: "/twrlit17",
    parts: [
      { text: "1965's " },
      { text: "Holiday With Light", italic: true },
      { text: " - The Script" },
    ],
  },
  {
    label:
      "Article: The History of the Industry's Participation in the N.Y. World's Fair",
    href: "/twrlit18",
  },
  {
    label:
      "Article: Magnificent Pavilion Houses Show of Investor-Owned Electric Utility Industry",
    href: "/twrlit19",
  },
  {
    label:
      "Article: The Story of the 'Tower of Light' and 'The Enjoyment of Electricity'",
    href: "/twrlit20",
  },
  {
    label: "Article: 'Tower of Light' Pavilion is Major Fair Attraction",
    href: "/twrlit21",
  },
  {
    label: "Article: Bliss Creates Electronically Controlled Characters",
    href: "/twrlit22",
  },
  {
    label: "Article: 'Tower of Light' Beacon Produces 12 Billion Candlepower",
    href: "/twrlit23",
  },
  {
    label: "Article: Birds, Aircraft and the 'Tower of Light'",
    href: "/twrlit24",
  },
  {
    label:
      "Article: Exterior Illumination of 'Tower of Light' Creates a Man-Made Aurora Borealis",
    href: "/twrlit25",
  },
  {
    label:
      "Article: 'Tower of Light' Pavilion Covered with Sandwich-Type Aluminum",
    href: "/twrlit26",
  },
  {
    label:
      "Article: Giant 'Lazy Susan' Takes Fair Visitors Through Industry Show",
    href: "/twrlit27",
  },
  {
    label:
      "Article: 'Tower of Light' Architects Known Around the Globe for Out-of-This World' Creations",
    href: "/twrlit28",
  },
  {
    label: "Article: Aluminum Sculpture Adds Final Touch to Exhibit Building",
    href: "/twrlit29",
  },
  {
    label: "Article: Lighting at the Fair - Tower of Light Pavilion",
    href: "/twrlit30",
  },
  {
    label: "Essay: Remembering the Tower of Light",
    href: "/twrlit31",
    parts: [
      { text: "Essay: " },
      { text: "Remembering the Tower of Light", italic: true },
    ],
  },
  {
    label: "The End of the Fair: Memo from The Boss",
    href: "/twrlit32",
  },
];
