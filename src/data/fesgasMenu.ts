import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Festival of Gas menu — nav-menu topics for all routes beginning with `fesgas`.
 * Labels match `media/fesgasoverview/04-menu-topics.jpg` (+ Overview at top).
 * Non-Overview routes: `fesgas01`…`fesgas14`.
 */
export const FESGAS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/fesgasoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/fesgas01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/fesgas02",
  },
  {
    label: "Postcards",
    href: "/fesgas03",
  },
  {
    label: "Advertising",
    href: "/fesgas04",
  },
  {
    label: "Photograph Album",
    href: "/fesgas05",
  },
  {
    label: "Conception and Design of the Gas Pavilion",
    href: "/fesgas06",
    parts: [{ text: "Conception and Design of the Gas Pavilion", italic: true }],
  },
  {
    label: "Press Releases",
    href: "/fesgas07",
  },
  {
    label: "Wonderful World Magazine",
    href: "/fesgas08",
  },
  {
    label: "Article: Energy Vista",
    href: "/fesgas09",
  },
  {
    label: "Brochure: See the Festival of Gas First at the New York World's Fair",
    href: "/fesgas10",
  },
  {
    label: "Brochure: Welcome to the Festival of Gas",
    href: "/fesgas11",
  },
  {
    label: "Brochure: How to See the Fair",
    href: "/fesgas12",
  },
  {
    label: "Brochure: Tempting New Recipes from the Theater of Food",
    href: "/fesgas13",
  },
  {
    label: "Brochure: Step into Tomorrow with NORGE",
    href: "/fesgas14",
  },
];
