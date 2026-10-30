import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Airlines & The Fair menu — Overview first, then feature pages remapped:
 * legacy airlines02→/airlines01, airlines03→/airlines02, …
 */
export const AIRLINES_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/airlinesoverview",
  },
  {
    label: "To the FAir",
    href: "/airlines01",
    parts: [{ text: "To the FAir", italic: true }],
  },
];
