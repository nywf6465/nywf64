"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MATCHBOOKS_MENU_TOPICS } from "@/data/matchbooksMenu";

/**
 * World’s Fair Matchbook Collection menu chrome — nav bar
 * (“EXPLORE THIS TOPIC”) + topic cards.
 * Overview `/matchbooksoverview` shows Page 1; `/matchbooks01`…`/matchbooks08`
 * show Pages 2–9 in NEXT order. Use on every `matchbooks*` route.
 */
export function MatchbooksNavChrome() {
  return (
    <AttractionNavChrome
      topics={MATCHBOOKS_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
