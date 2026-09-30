"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { HOLLYWOOD_MENU_TOPICS } from "@/data/hollywoodMenu";

/**
 * Hollywood menu chrome — nav bar + shared **hollywood menu**.
 * Use on every page whose route begins with `hollywood`.
 */
export function HollywoodNavChrome() {
  return (
    <AttractionNavChrome
      topics={HOLLYWOOD_MENU_TOPICS}
      navLabel="Hollywood"
    />
  );
}
