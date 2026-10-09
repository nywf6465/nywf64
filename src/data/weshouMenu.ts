import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Westinghouse menu — nav-menu topics for all routes beginning with `weshou`.
 * Labels match uploaded menu topics (+ Overview at top).
 * Non-Overview routes: `weshou01`…`weshou15`.
 */
export const WESHOU_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/weshouoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/weshou01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/weshou02",
  },
  {
    label: "Postcards",
    href: "/weshou03",
  },
  {
    label: "Advertising",
    href: "/weshou04",
  },
  {
    label: "Photograph Album",
    href: "/weshou05",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/weshou06",
  },
  {
    label: "The Story Begins",
    href: "/weshou07",
  },
  {
    label: "The Story of the Westinghouse Timecapsule",
    href: "/weshou08",
  },
  {
    label: "The Book of Record",
    href: "/weshou09",
    parts: [{ text: "The Book of Record", italic: true }],
  },
  {
    label: "The Contents of the 1938 Time Capsule",
    href: "/weshou10",
  },
  {
    label: "Brochure: The Westinghouse Time Capsules (Version 1)",
    href: "/weshou11",
  },
  {
    label: "Brochure: The Westinghouse Time Capsules (Version 2)",
    href: "/weshou12",
  },
  {
    label: "The Contents of the 1964 Time Capsule",
    href: "/weshou13",
  },
  {
    label:
      "Essay: A Monestary in Tibet. A Library in Manhattan. A Drawer in your Home?",
    href: "/weshou14",
    parts: [
      { text: "Essay: " },
      {
        text: "A Monestary in Tibet. A Library in Manhattan. A Drawer in your Home?",
        italic: true,
      },
    ],
  },
  {
    label: "Essay: New York's sacred meadow",
    href: "/weshou15",
    parts: [
      { text: "Essay: " },
      { text: "New York's sacred meadow", italic: true },
    ],
  },
];
