"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MINIMOD_MENU_TOPICS } from "@/data/minimodMenu";

/**
 * Miniature Models of the Fair menu chrome — nav bar (“EXPLORE THIS TOPIC”)
 * + minimod topic cards. Use on every page whose route begins with
 * `minimod`.
 */
export function MinimodNavChrome() {
  return (
    <AttractionNavChrome
      topics={MINIMOD_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
