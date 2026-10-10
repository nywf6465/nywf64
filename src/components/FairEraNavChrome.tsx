"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FAIR_ERA_MENU_TOPICS } from "@/data/fairEraMenu";

/**
 * 1964/1965 The Era of the Fair menu chrome — nav bar (“EXPLORE THIS TOPIC”)
 * + fair_era topic cards. Use on every page whose route begins with
 * `fair_era`.
 */
export function FairEraNavChrome() {
  return (
    <AttractionNavChrome
      topics={FAIR_ERA_MENU_TOPICS}
      exploreNoun="TOPIC"
      menuTitle="Explore This Topic"
    />
  );
}
