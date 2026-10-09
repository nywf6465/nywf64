import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Jordan menu — nav-menu topics for all routes beginning with `jordan`.
 * Labels match `media/jordan-menu-topics-source.jpg` (+ Overview at top).
 * Three “Photograph Album” rows kept on distinct routes
 * (`jordan03` / `jordan04` / `jordan05`).
 * Non-Overview routes: `jordan01`…`jordan10`.
 */
export const JORDAN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/jordanoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/jordan01",
  },
  {
    label: "Postcards",
    href: "/jordan02",
  },
  {
    label: "Photograph Album",
    href: "/jordan03",
  },
  {
    label: "Photograph Album",
    href: "/jordan04",
  },
  {
    label: "Photograph Album",
    href: "/jordan05",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/jordan06",
  },
  {
    label: "Fair News",
    href: "/jordan07",
    parts: [{ text: "Fair News", italic: true }],
  },
  {
    label: "Jordan News and Views",
    href: "/jordan08",
    parts: [{ text: "Jordan News and Views", italic: true }],
  },
  {
    label: "Mural of a Refugee",
    href: "/jordan09",
    parts: [{ text: "Mural of a Refugee", italic: true }],
  },
  {
    label: "War through Misunderstanding",
    href: "/jordan10",
    parts: [{ text: "War through Misunderstanding", italic: true }],
  },
];
