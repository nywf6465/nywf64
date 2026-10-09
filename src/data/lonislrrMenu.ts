import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * lonislrr menu — nav-menu topics for all routes beginning with `lonislrr`.
 * Labels match `media/lonislrr-menu-topics-source.jpg`.
 * Guidebook & Souvenir Map Entries is one topic (wrapped in source).
 * Non-Overview routes: `lonislrr01`…`lonislrr06`.
 */
export const LONISLRR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/lonislrr01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/lonislrr02",
  },
  {
    label: "Photograph Album",
    href: "/lonislrr03",
  },
  {
    label: "Brochure: Best Way to the Fair",
    href: "/lonislrr04",
  },
  {
    label: "Brochure: Long Island Exhibit",
    href: "/lonislrr05",
  },
  {
    label: "A Legacy Restored",
    href: "/lonislrr06",
  },
];
