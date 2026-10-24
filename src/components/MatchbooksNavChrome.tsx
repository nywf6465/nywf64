"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MATCHBOOKS_MENU_TOPICS } from "@/data/matchbooksMenu";

/**
 * World’s Fair Matchbook Collection menu chrome — nav bar
 * (“EXPLORE THIS TOPIC”) + topic cards.
 * Overview `/matchbooksoverview` shows Page 1; remaining galleries show
 * Pages 2–7 in NEXT order. Use on every `matchbooks*` route.
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
