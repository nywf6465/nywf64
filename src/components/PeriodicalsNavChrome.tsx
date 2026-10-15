"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PERIODICALS_MENU_TOPICS } from "@/data/periodicalsMenu";

/**
 * Magazine Articles / Periodicals menu chrome — nav bar
 * (“EXPLORE THE PERIODICALS”) + topic cards.
 * Use on periodicals / life / look magazine index and article pages.
 */
export function PeriodicalsNavChrome() {
  return (
    <AttractionNavChrome
      topics={PERIODICALS_MENU_TOPICS}
      exploreLabel="EXPLORE THE PERIODICALS"
      menuTitle="Explore The Periodicals"
    />
  );
}
