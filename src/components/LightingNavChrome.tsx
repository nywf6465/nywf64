"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { LIGHTING_MENU_TOPICS } from "@/data/lightingMenu";

/**
 * Lighting menu chrome — nav bar (LIGHTING & EFFECTS) + shared
 * **lighting menu**. Use on every page whose route begins with `lighting`.
 */
export function LightingNavChrome() {
  return (
    <AttractionNavChrome
      topics={LIGHTING_MENU_TOPICS}
      navLabel="Lighting & Effects"
    />
  );
}
