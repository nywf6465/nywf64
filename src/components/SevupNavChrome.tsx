"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SEVUP_MENU_TOPICS } from "@/data/sevupMenu";

/**
 * Sevup menu chrome — nav bar (**SEVEN-UP**) + sevup menu.
 * Use on every page whose route begins with `sevup`.
 */
export function SevupNavChrome() {
  return (
    <AttractionNavChrome topics={SEVUP_MENU_TOPICS} navLabel="Seven-Up" />
  );
}
