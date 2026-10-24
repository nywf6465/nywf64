"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SCRAPBOOK_MENU_TOPICS } from "@/data/scrapbookMenu";

/**
 * World’s Fair Scrapbook menu chrome — nav bar
 * (“EXPLORE THIS TOPIC”) + topic cards.
 * Overview `/scrapbookoverview` shows Page 1. Use on every `scrapbook*` route.
 */
export function ScrapbookNavChrome() {
  return (
    <AttractionNavChrome
      topics={SCRAPBOOK_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
