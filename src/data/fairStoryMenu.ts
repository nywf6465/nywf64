import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * The Story of the Fair / fair_story menu — 2 topic cards.
 * Card 1 label matches the edited fair_story01 title bar (Essay: …).
 */
export const FAIR_STORY_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Essay: The Story of the 1964/1965 New York World's Fair",
    href: "/fair_story01",
    parts: [
      { text: "Essay: " },
      {
        text: "The Story of the 1964/1965 New York World's Fair",
        italic: true,
      },
    ],
  },
  {
    label: "Photograph Album",
    href: "/fair_story02",
  },
];
