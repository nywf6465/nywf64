"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PERSPECTIVE_MENU_TOPICS } from "@/data/perspectiveMenu";

/**
 * Perisphere’s Perspective menu chrome — nav bar
 * (“EXPLORE THIS TOPIC”) + topic cards.
 * Overview `/perspectiveoverview` shows Page 1.
 * Use on every `perspective*` route.
 */
export function PerspectiveNavChrome() {
  return (
    <AttractionNavChrome
      topics={PERSPECTIVE_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
