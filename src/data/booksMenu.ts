import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Our Books on the Fair / books menu — 3 topic cards.
 * Card 1 is Overview; cards 2–3 are filled when books pages are created.
 */
export const BOOKS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/booksoverview",
  },
  {
    label: "Images of America",
    href: "/books01",
  },
  {
    label: "Creation and Legacy",
    href: "/books02",
  },
];
