"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { TRUE_FAIR_MENU_TOPICS } from "@/data/trueFairMenu";

/**
 * An Unofficial World’s Fair menu chrome — nav bar (“EXPLORE THIS TOPIC”)
 * + true_fair topic cards. Use on every page whose route begins with
 * `true_fair`.
 */
export function TrueFairNavChrome() {
  return (
    <AttractionNavChrome
      topics={TRUE_FAIR_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
