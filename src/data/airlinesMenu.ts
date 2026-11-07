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
    label: "Essay: To the FAir ... by Bill Young",
    href: "/airlines01",
    parts: [
      { text: "Essay: " },
      { text: "To the FAir", italic: true },
      { text: " ... by Bill Young" },
    ],
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
  {
    label: "Eastern Air Lines",
    href: "/airlines06",
  },
  {
    label: "American Airlines",
    href: "/airlines07",
  },
  {
    label: "Delta Air Lines",
    href: "/airlines08",
  },
  {
    label: "Continental Airlines",
    href: "/airlines09",
  },
];