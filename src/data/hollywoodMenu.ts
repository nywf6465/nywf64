import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Hollywood menu — nav-menu topics for all routes beginning with `hollywood`.
 * Labels match `media/hollywood-menu-topics-source.jpg`.
 * Non-Overview routes: `hollywood01`…`hollywood15`.
 * Overview path is `/hollywoodoverview`.
 */
export const HOLLYWOOD_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/hollywood01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/hollywood02",
  },
  {
    label: "Postcards",
    href: "/hollywood03",
  },
  {
    label: "Gallery of Photographs I",
    href: "/hollywood04",
  },
  {
    label: "Gallery of Photographs II",
    href: "/hollywood05",
  },
  {
    label: "Welcome",
    href: "/hollywood06",
  },
  {
    label: "Cleopatra",
    href: "/hollywood07",
  },
  {
    label: "Seven Days in May",
    href: "/hollywood08",
  },
  {
    label: "The King and I",
    href: "/hollywood09",
  },
  {
    label: "West Side Story",
    href: "/hollywood10",
  },
  {
    label: "The Fall of the Roman Empire",
    href: "/hollywood11",
  },
  {
    label: "South Pacific",
    href: "/hollywood12",
  },
  {
    label: "Dr. Kildare",
    href: "/hollywood13",
  },
  {
    label: "The Unsinkable Molly Brown",
    href: "/hollywood14",
  },
  {
    label: "Visit the General Store",
    href: "/hollywood15",
  },
];
