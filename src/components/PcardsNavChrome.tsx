"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PCARDS_MENU_TOPICS } from "@/data/pcardsMenu";

/**
 * World’s Fair Postcard Collection menu chrome — nav bar
 * (“EXPLORE THIS TOPIC”) + topic cards.
 * Overview `/pcardsoverview` shows Page 1.
 * Use on every page whose route begins with `pcards`.
 */
export function PcardsNavChrome() {
  return (
    <AttractionNavChrome
      topics={PCARDS_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
