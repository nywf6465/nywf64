"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MATCHBOOKS_MENU_TOPICS } from "@/data/matchbooksMenu";

/**
 * World’s Fair Matchbook Collection menu chrome — nav bar
 * (“EXPLORE THIS TOPIC”) + topic cards.
 * Overview `/matchbooksoverview` shows Page 1; `/matchbooks01` → Page 2…
 * Use on every page whose route begins with `matchbooks`.
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
