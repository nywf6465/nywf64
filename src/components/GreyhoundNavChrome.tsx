"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { GREYHOUND_MENU_TOPICS } from "@/data/greyhoundMenu";

/**
 * Greyhound menu chrome — nav bar + shared **greyhound menu**.
 * Use on every page whose route begins with `greyhound`.
 */
export function GreyhoundNavChrome() {
  return (
    <AttractionNavChrome topics={GREYHOUND_MENU_TOPICS} navLabel="Greyhound" />
  );
}
