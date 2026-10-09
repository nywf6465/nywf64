import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * GM menu — nav-menu topic list for all routes beginning with `gm`.
 * Labels match the gm-menu-topics mockup (italics via `parts` where needed).
 * All three Photograph Album rows kept (distinct routes).
 * Routes: `gm01`…`gm23` (+ Overview).
 */
export const GM_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/gmoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/gm01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/gm02",
  },
  {
    label: "Postcards",
    href: "/gm03",
  },
  {
    label: "Advertising",
    href: "/gm04",
  },
  {
    label: "Photograph Album",
    href: "/gm05",
  },
  {
    label: "Photograph Album",
    href: "/gm06",
  },
  {
    label: "Photograph Album",
    href: "/gm07",
  },
  {
    label: "Press Releases",
    href: "/gm08",
  },
  {
    label: "Invitation to Preview Futurama",
    href: "/gm09",
  },
  {
    label: "The Souvenir Book",
    href: "/gm10",
  },
  {
    label: "Transcript of the Futurama II Ride with audio!",
    href: "/gm11",
    parts: [
      { text: "Transcript of the Futurama II Ride " },
      { text: "with audio!", italic: true },
    ],
  },
  {
    label: "Booklet: Let's Go to the Fair and Futurama",
    href: "/gm12",
  },
  {
    label: "Brochure: Your Guide to the General Motors Futurama",
    href: "/gm13",
  },
  {
    label: "Brochure: See the Future First",
    href: "/gm14",
  },
  {
    label: "Mailer: If You've Only Seen it Once",
    href: "/gm15",
  },
  {
    label: "Brochure: Frigidaire at the Fair",
    href: "/gm16",
  },
  {
    label: "Article: Will this be the No. 1 Show?",
    href: "/gm17",
  },
  {
    label: "Article: Oldsmobile Rocket Circle Magazine - March/April 1964",
    href: "/gm18",
  },
  {
    label: "Article: Oldsmobile Rocket Circle Magazine - May/June 1964",
    href: "/gm19",
  },
  {
    label: "Article: Pontiac Safari Magazine - January/February 1964",
    href: "/gm20",
  },
  {
    label: "Article: Pontiac Safari Magazine - March/April 1964",
    href: "/gm21",
  },
  {
    label: "Article: Lighting at the Fair - General Motors Pavilion",
    href: "/gm22",
  },
  {
    label: "Article: Design Summary of the GM Futurama II Ride",
    href: "/gm23",
  },
];
