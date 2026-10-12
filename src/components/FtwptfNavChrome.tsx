"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FTWPTF_MENU_TOPICS } from "@/data/ftwptfMenu";

/**
 * For Those Who Produced the Fair menu chrome — nav bar (“EXPLORE THE BOOK”)
 * + ftwptf topic cards. Use on every page whose route begins with `ftwptf`.
 */
export function FtwptfNavChrome() {
  return (
    <AttractionNavChrome
      topics={FTWPTF_MENU_TOPICS}
      exploreLabel="EXPLORE THE BOOK"
      menuTitle="Explore The Book"
    />
  );
}
