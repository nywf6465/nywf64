"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BOOKS_MENU_TOPICS } from "@/data/booksMenu";

/**
 * Our Books on the Fair menu chrome — nav bar (**EXPLORE THE BOOKS**)
 * + books topic cards. Use on every page whose route begins with `books`.
 */
export function BooksNavChrome() {
  return (
    <AttractionNavChrome
      topics={BOOKS_MENU_TOPICS}
      exploreLabel="EXPLORE THE BOOKS"
      menuTitle="Explore the Books"
    />
  );
}
