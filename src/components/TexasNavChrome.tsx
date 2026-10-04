"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { TEXAS_MENU_TOPICS } from "@/data/texasMenu";

/**
 * Texas menu chrome — nav bar (TEXAS PAVILIONS & MUSIC HALL) + shared
 * **texas menu**. Use on every page whose route begins with `texas`.
 */
export function TexasNavChrome() {
  return (
    <AttractionNavChrome
      topics={TEXAS_MENU_TOPICS}
      navLabel="Texas Pavilions & Music Hall"
    />
  );
}
