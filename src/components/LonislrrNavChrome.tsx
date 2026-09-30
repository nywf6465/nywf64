"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { LONISLRR_MENU_TOPICS } from "@/data/lonislrrMenu";

/**
 * Long Island Rail Road menu chrome — nav bar + shared **lonislrr menu**.
 * Use on every page whose route begins with `lonislrr`.
 */
export function LonislrrNavChrome() {
  return (
    <AttractionNavChrome
      topics={LONISLRR_MENU_TOPICS}
      navLabel="Long Island Rail Road"
    />
  );
}
