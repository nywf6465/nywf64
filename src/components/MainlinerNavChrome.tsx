"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MAINLINER_MENU_TOPICS } from "@/data/mainlinerMenu";

/**
 * Blackhawk Films / MAINLINER menu chrome — nav bar (“EXPLORE THIS TOPIC”)
 * + topic cards. Overview has no Page notation.
 */
export function MainlinerNavChrome() {
  return (
    <AttractionNavChrome
      topics={MAINLINER_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
