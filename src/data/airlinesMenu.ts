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
  {
    label: "Northwest Orient Airlines",
    href: "/airlines02",
  },
  {
    label: "Trans World Airlines",
    href: "/airlines03",
  },
  {
    label: "Allegheny Airlines",
    href: "/airlines04",
  },
  {
    label: "United Air Lines",
    href: "/airlines05",
  },
];