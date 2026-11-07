"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AIRLINES_MENU_TOPICS } from "@/data/airlinesMenu";

/**
 * Airlines & The Fair menu chrome — nav bar (“EXPLORE THIS TOPIC”) + topic cards.
 * Overview `/airlinesoverview` shows Page 1.
 * Use on every `airlines*` route.
 */
export function AirlinesNavChrome() {
  return (
    <AttractionNavChrome
      topics={AIRLINES_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
