import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Our Books on the Fair / books menu — 3 topic cards.
 * Overview + Page 1 (legacy book02) + Page 2 (legacy book03, stub until built).
 */
export const BOOKS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/booksoverview",
  },
  {
    label: "Author! Author!",
    href: "/books01",
  },
  {
    label: "Book Excerpt and Ordering Information",
    href: "/books02",
  },
];
