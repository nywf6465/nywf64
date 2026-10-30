"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ODYSSEY_MENU_TOPICS } from "@/data/odysseyMenu";

/**
 * A World’s Fair Odyssey menu chrome — nav bar
 * (“EXPLORE THIS TOPIC”) + topic cards.
 * Overview `/odysseyoverview` shows Page 1.
 * Use on every `odyssey*` route.
 */
export function OdysseyNavChrome() {
  return (
    <AttractionNavChrome
      topics={ODYSSEY_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
