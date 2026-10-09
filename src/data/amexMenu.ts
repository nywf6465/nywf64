import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Amex menu — nav-menu topics for all routes beginning with `amex`.
 * Labels match the amex-menu-topics mockup; Overview at top.
 * Non-Overview routes: `amex01`…`amex12`.
 */
export const AMEX_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/amexoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/amex01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/amex02",
  },
  {
    label: "Postcards",
    href: "/amex03",
  },
  {
    label: "Advertising",
    href: "/amex04",
  },
  {
    label: "Photograph Album",
    href: "/amex05",
  },
  {
    label: "Pamphlet: World Press Announcement Ceremony",
    href: "/amex06",
  },
  {
    label: "Brochure: Handi-Facts",
    href: "/amex07",
  },
  {
    label: "The Money Tree",
    href: "/amex08",
  },
  {
    label: "ART 1965",
    href: "/amex09",
  },
  {
    label: "Rob Bianco's Model",
    href: "/amex10",
  },
  {
    label: "A Tribute to Rob Bianco",
    href: "/amex11",
  },
  {
    label: "Essay: We're Going to Need Some Really Detailed Models",
    href: "/amex12",
    parts: [
      { text: "Essay: " },
      {
        text: "We're Going to Need Some Really Detailed Models",
        italic: true,
      },
    ],
  },
];
