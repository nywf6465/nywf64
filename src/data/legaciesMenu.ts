import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * The Fair that Survived / legacies menu — 6 topic cards.
 * Card 1 is Overview; cards 2–6 map to /legacies01–05 (legacy
 * legacies02–06) and are filled when those pages are created.
 */
export const LEGACIES_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/legaciesoverview",
  },
  {
    label: '"The List"',
    href: "/legacies01",
  },
  {
    label: "Legacies Locations I",
    href: "/legacies02",
  },
  {
    label: "Legacies Locations II",
    href: "/legacies03",
  },
  {
    label: "The Ottilio Building",
    href: "/legacies04",
  },
  {
    label: "Glide-a-Rides",
    href: "/legacies05",
  },
];
