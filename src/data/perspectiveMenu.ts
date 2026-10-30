import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Perisphere’s Perspective / The Fairs and Flushing Meadows menu —
 * Overview first, then essay pages remapped: legacy perspective02→/perspective01,
 * perspective03→/perspective02, perspective04→/perspective03.
 */
export const PERSPECTIVE_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/perspectiveoverview",
  },
  {
    label: "A Moment in Time",
    href: "/perspective01",
  },
];
