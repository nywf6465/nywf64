import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Spain menu — nav-menu topic list for all routes beginning with `spain`.
 * Labels match the spain-menu-topics mockup; non-Overview routes are sequential
 * `spain01`…`spain14`.
 */
export const SPAIN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/spainoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/spain01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/spain02",
  },
  {
    label: "Postcards",
    href: "/spain03",
  },
  {
    label: "Photograph Album",
    href: "/spain04",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/spain05",
  },
  {
    label: "The Jewel of the Fair",
    href: "/spain06",
  },
  {
    label: "The 1964 Season",
    href: "/spain07",
  },
  {
    label: "1965 Pavilion Plan",
    href: "/spain08",
  },
  {
    label: "The 1965 Season",
    href: "/spain09",
  },
  {
    label: "Art Tour",
    href: "/spain10",
  },
  {
    label: "Shows",
    href: "/spain11",
  },
  {
    label: "After the Fair - On to Saint Louis!",
    href: "/spain12",
  },
  {
    label: "Fund Raising for the Pavilion in Saint Louis",
    href: "/spain13",
  },
  {
    label: "A Visit to the Spanish Pavilion in Saint Louis",
    href: "/spain14",
  },
];
