"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { EDUCARDS_MENU_TOPICS } from "@/data/educardsMenu";

/**
 * The “Edu-Cards” Set menu chrome — nav bar
 * (“EXPLORE THE CARDS”) + topic cards.
 * Overview `/educardsoverview` shows Page 1. Use on every `educards*` route.
 */
export function EducardsNavChrome() {
  return (
    <AttractionNavChrome
      topics={EDUCARDS_MENU_TOPICS}
      exploreLabel="EXPLORE THE CARDS"
      menuTitle="Explore The Cards"
    />
  );
}
