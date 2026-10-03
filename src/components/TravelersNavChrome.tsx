"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { TRAVELERS_MENU_TOPICS } from "@/data/travelersMenu";

/**
 * Travelers Insurance menu chrome — nav bar + shared **travelers menu**.
 * Use on every page whose route begins with `travelers`.
 */
export function TravelersNavChrome() {
  return (
    <AttractionNavChrome
      topics={TRAVELERS_MENU_TOPICS}
      navLabel="Travelers Insurance"
    />
  );
}
