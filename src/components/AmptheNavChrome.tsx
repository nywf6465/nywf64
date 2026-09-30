"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AMPTHE_MENU_TOPICS } from "@/data/amptheMenu";

/**
 * Ampthe menu chrome — nav bar (**AMPHITHEATRE**) + ampthe menu.
 * Use on every page whose route begins with `ampthe`.
 */
export function AmptheNavChrome() {
  return (
    <AttractionNavChrome topics={AMPTHE_MENU_TOPICS} navLabel="Amphitheatre" />
  );
}
