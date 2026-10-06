import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Travelers Insurance menu — nav-menu topics for all routes beginning with `travelers`.
 * Labels match uploaded menu topics.
 * Non-Overview routes: `travelers01`…`travelers18`.
 */
export const TRAVELERS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/travelers01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/travelers02",
  },
  {
    label: "Postcards",
    href: "/travelers03",
  },
  {
    label: "Advertising",
    href: "/travelers04",
  },
  {
    label: "Photograph Album",
    href: "/travelers05",
  },
  {
    label: "Photograph Album: Travelers' Promotional Slideshow",
    href: "/travelers06",
  },
  {
    label: "Photograph Album: COSI Columbus Museum",
    href: "/travelers07",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/travelers08",
  },
  {
    label: "Brochure: You're Invited",
    href: "/travelers09",
  },
  {
    label: "Brochure: The Travelers at the New York World's Fair",
    href: "/travelers10",
  },
  {
    label: "Brochure: Your Guide to the Fair",
    href: "/travelers11",
  },
  {
    label: 'Brochure: "The Triumph of Man" at the COSI Columbus',
    href: "/travelers12",
  },
  {
    label:
      'The Red Record: Souvenir of "The Triumph of Man" | Transcript with audio!',
    href: "/travelers13",
    parts: [
      {
        text: 'The Red Record: Souvenir of "The Triumph of Man" | Transcript ',
      },
      { text: "with audio!", italic: true },
    ],
  },
  {
    label: "Article: A New Concept in Space Structures",
    href: "/travelers14",
  },
  {
    label: "Article: Under the Bright Red Roof",
    href: "/travelers15",
  },
  {
    label: "Article: Lighting at the Fair - Travelers Pavilion",
    href: "/travelers16",
  },
  {
    label: "Article: Signs of Progress",
    href: "/travelers17",
  },
  {
    label: 'The Demise of "The Triumph of Man"',
    href: "/travelers18",
  },
];
