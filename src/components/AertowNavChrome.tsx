"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AERTOW_MENU_TOPICS } from "@/data/aertowMenu";

/**
 * Aertow menu chrome — nav bar (**AERIAL TOWER RIDE**) + overview-only menu
 * until full aertow menu topics arrive.
 */
export function AertowNavChrome() {
  return (
    <AttractionNavChrome
      topics={AERTOW_MENU_TOPICS}
      navLabel="Aerial Tower Ride"
    />
  );
}
