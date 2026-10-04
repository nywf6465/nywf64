"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { THRRID_MENU_TOPICS } from "@/data/thrridMenu";

/**
 * Thrrid menu chrome — nav bar (THRILL RIDES) + shared
 * **thrrid menu**. Use on every page whose route begins with `thrrid`.
 */
export function ThrridNavChrome() {
  return (
    <AttractionNavChrome
      topics={THRRID_MENU_TOPICS}
      navLabel="Thrill Rides"
    />
  );
}
