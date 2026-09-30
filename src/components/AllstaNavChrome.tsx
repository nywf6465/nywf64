"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ALLSTA_MENU_TOPICS } from "@/data/allstaMenu";

/**
 * Allsta menu chrome — nav bar (**ALL-STATE PROPERTIES & MACY'S**) +
 * overview-only menu until full allsta menu topics arrive.
 */
export function AllstaNavChrome() {
  return (
    <AttractionNavChrome
      topics={ALLSTA_MENU_TOPICS}
      navLabel="All-State Properties & Macy's"
    />
  );
}
