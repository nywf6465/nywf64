import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Japan menu — nav-menu topics for all routes beginning with `japan`.
 * Labels match `media/japan-menu-topics-source.jpg` (+ Overview at top).
 * Both “Photograph Album” rows kept on distinct routes (`japan04` / `japan05`).
 * Non-Overview routes: `japan01`…`japan14`.
 */
export const JAPAN_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/japan01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/japan02",
  },
  {
    label: "Postcards",
    href: "/japan03",
  },
  {
    label: "Photograph Album",
    href: "/japan04",
  },
  {
    label: "Photograph Album",
    href: "/japan05",
  },
  {
    label: "Groundbreaking",
    href: "/japan06",
  },
  {
    label: "Brochure: Concrete at the Fair",
    href: "/japan07",
  },
  {
    label: "Pamphlet: Visit Japan at the New York World's Fair",
    href: "/japan08",
  },
  {
    label: "Pamphlet: Japan",
    href: "/japan09",
  },
  {
    label: "List of Exhibitors and Their Exhibits",
    href: "/japan10",
  },
  {
    label: "Brochure: SAKURA Odori",
    href: "/japan11",
  },
  {
    label: "1964 Pavilion Guide",
    href: "/japan12",
  },
  {
    label: "1965 Pavilion Guide",
    href: "/japan13",
  },
  {
    label: "Stone Crazy: A World's Fair Legacy / A World's Fair Mystery",
    href: "/japan14",
    parts: [
      {
        text: "Stone Crazy: A World's Fair Legacy / A World's Fair Mystery",
        italic: true,
      },
    ],
  },
];
