import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Amerisr menu — nav-menu topics for all routes beginning with `amerisr`.
 * Labels match the amerisr-menu-topics mockup.
 * Non-Overview routes: `amerisr01`…`amerisr05`.
 */
export const AMERISR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/amerisr01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/amerisr02",
  },
  {
    label: "Postcards",
    href: "/amerisr03",
  },
  {
    label: "Photograph Album",
    href: "/amerisr04",
  },
  {
    label: "Pamphlet: Dedication Ceremony",
    href: "/amerisr05",
  },
];
