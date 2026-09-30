"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { LOWENGAR_MENU_TOPICS } from "@/data/lowengarMenu";

/**
 * Lowenbrau Gardens menu chrome — nav bar + shared **lowengar menu**.
 * Use on every page whose route begins with `lowengar`.
 */
export function LowengarNavChrome() {
  return (
    <AttractionNavChrome
      topics={LOWENGAR_MENU_TOPICS}
      navLabel="Lowenbrau Gardens"
    />
  );
}
