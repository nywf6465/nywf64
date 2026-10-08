import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Sinclair menu — nav-menu topics for all routes beginning with `sinclair`.
 * Labels match the sinclair-menu-topics mockup; Overview at top.
 * Non-Overview routes: `sinclair01`…`sinclair14`.
 */
export const SINCLAIR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/sinclairoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/sinclair01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/sinclair02",
  },
  {
    label: "Postcards",
    href: "/sinclair03",
  },
  {
    label: "Advertising",
    href: "/sinclair04",
  },
  {
    label: "Photograph Album",
    href: "/sinclair05",
  },
  {
    label: "Experience Dinoland with AUDIO!",
    href: "/sinclair06",
    parts: [
      { text: "Experience Dinoland " },
      { text: "with AUDIO!", italic: true },
    ],
  },
  {
    label: "Pamphlet: Model Unveiling",
    href: "/sinclair07",
  },
  {
    label: "The Dinosaurs Come to the Fair",
    href: "/sinclair08",
  },
  {
    label: "Dinoland Guidebook",
    href: "/sinclair09",
  },
  {
    label: "Dealer Details",
    href: "/sinclair10",
  },
  {
    label: "THE Souvenir of the Fair",
    href: "/sinclair11",
  },
  {
    label: "The End of the Fair",
    href: "/sinclair12",
  },
  {
    label: "Dinosaur Tour 1966",
    href: "/sinclair13",
  },
  {
    label: "The Dinosaurs Today",
    href: "/sinclair14",
  },
];
