import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * GM menu — nav-menu topic list for all routes beginning with `gm`.
 * Labels match the gm-menu-topics mockup (italics via `parts` where needed).
 * All three Photograph Album rows kept (distinct routes).
 */
export const GM_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/gmoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/gmguidebook",
  },
  {
    label: "World's Fair Information Manual",
    href: "/gmmanual",
  },
  {
    label: "Postcards",
    href: "/gmpostcards",
  },
  {
    label: "Advertising",
    href: "/gmadvertising",
  },
  {
    label: "Photograph Album",
    href: "/gmphotographalbumi",
  },
  {
    label: "Photograph Album",
    href: "/gmphotographalbumii",
  },
  {
    label: "Photograph Album",
    href: "/gmphotographalbumiii",
  },
  {
    label: "Press Releases",
    href: "/gmpressreleases",
  },
  {
    label: "Invitation to Preview Futurama",
    href: "/gminvitationpreview",
  },
  {
    label: "The Souvenir Book",
    href: "/gmsouvenirbook",
  },
  {
    label: "Transcript of the Futurama II Ride with audio!",
    href: "/gmtranscriptfuturama",
    parts: [
      { text: "Transcript of the Futurama II Ride " },
      { text: "with audio!", italic: true },
    ],
  },
  {
    label: "Booklet: Let's Go to the Fair and Futurama",
    href: "/gmletsgotothefair",
  },
  {
    label: "Brochure: Your Guide to the General Motors Futurama",
    href: "/gmyourguide",
  },
  {
    label: "Brochure: See the Future First",
    href: "/gmseethefuturefirst",
  },
  {
    label: "Mailer: If You've Only Seen it Once",
    href: "/gmmaileronce",
  },
  {
    label: "Brochure: Frigidaire at the Fair",
    href: "/gmfrigidaire",
  },
  {
    label: "Article: Will this be the No. 1 Show?",
    href: "/gmno1show",
  },
  {
    label: "Article: Oldsmobile Rocket Circle Magazine - March/April 1964",
    href: "/gmoldsmarch1964",
  },
  {
    label: "Article: Oldsmobile Rocket Circle Magazine - May/June 1964",
    href: "/gmoldsmay1964",
  },
  {
    label: "Article: Pontiac Safari Magazine - January/February 1964",
    href: "/gmpontiacjan1964",
  },
  {
    label: "Article: Pontiac Safari Magazine - March/April 1964",
    href: "/gmpontiacmarch1964",
  },
  {
    label: "Article: Lighting at the Fair - General Motors Pavilion",
    href: "/gmlighting",
  },
  {
    label: "Article: Design Summary of the GM Futurama II Ride",
    href: "/gmdesignsummary",
  },
];
