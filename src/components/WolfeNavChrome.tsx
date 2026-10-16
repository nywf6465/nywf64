"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { WOLFE_MENU_TOPICS } from "@/data/wolfeMenu";

/**
 * Wolfe Worldwide Films menu chrome — nav bar (“EXPLORE THIS TOPIC”)
 * + topic cards. Overview has no Page notation.
 */
export function WolfeNavChrome() {
  return (
    <AttractionNavChrome
      topics={WOLFE_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
