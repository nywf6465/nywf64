"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { HEARTLAND_MENU_TOPICS } from "@/data/heartlandMenu";

/**
 * Heartland States U.S.A. menu chrome — nav bar + shared **heartland menu**.
 * Use on every page whose route begins with `heartland`.
 */
export function HeartlandNavChrome() {
  return (
    <AttractionNavChrome
      topics={HEARTLAND_MENU_TOPICS}
      navLabel="Heartland States U.S.A."
    />
  );
}
