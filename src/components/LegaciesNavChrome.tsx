"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { LEGACIES_MENU_TOPICS } from "@/data/legaciesMenu";

/**
 * The Fair that Survived menu chrome — nav bar (“EXPLORE THIS TOPIC”)
 * + legacies topic cards. Use on every page whose route begins with
 * `legacies`.
 */
export function LegaciesNavChrome() {
  return (
    <AttractionNavChrome
      topics={LEGACIES_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
