"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AMPRID_MENU_TOPICS } from "@/data/ampridMenu";

/**
 * Amprid menu chrome — nav bar (**AMPHICAR RIDE**) + amprid menu.
 * Use on every page whose route begins with `amprid`.
 */
export function AmpridNavChrome() {
  return (
    <AttractionNavChrome
      topics={AMPRID_MENU_TOPICS}
      navLabel="Amphicar Ride"
    />
  );
}
