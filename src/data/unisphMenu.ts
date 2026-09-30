import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Unisph menu — nav-menu topic list for all routes beginning with `unisph`.
 * Labels match the unisph-menu-topics mockup; non-Overview routes are sequential
 * `unisph01`…`unisph14`. Duplicate Photograph Album kept as two topics.
 * Italic essay title via `parts` where the mockup marks it.
 */
export const UNISPH_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/unisphoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/unisph01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/unisph02",
  },
  {
    label: "Postcards",
    href: "/unisph03",
  },
  {
    label: "Advertising",
    href: "/unisph04",
  },
  {
    label: "Photograph Album",
    href: "/unisph05",
  },
  {
    label: "Photograph Album",
    href: "/unisph06",
  },
  {
    label: "Pamphlet: United States Steel Unisphere Ceremonies",
    href: "/unisph07",
  },
  {
    label: "Filmstrip: UNISPHERE Biggest World on Earth",
    href: "/unisph08",
  },
  {
    label: "Presentation: How to Make a Unisphere",
    href: "/unisph09",
  },
  {
    label: "Brochure: Building a Unisphere",
    href: "/unisph10",
  },
  {
    label: "Brochure: Graphic Standards Manual",
    href: "/unisph11",
  },
  {
    label: "Why Unisphere?",
    href: "/unisph12",
  },
  {
    label: 'Essay: "I Think we Have a Light Out!"',
    href: "/unisph13",
    parts: [
      { text: 'Essay: "I Think we Have a Light Out!"', italic: true },
    ],
  },
  {
    label: "Epilogue: A Permanent Gift",
    href: "/unisph14",
  },
];
