"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { JULFAR_MENU_TOPICS } from "@/data/julfarMenu";

/**
 * julfar menu chrome — nav bar + shared **julfar menu**.
 * Use on every page whose route begins with `julfar`.
 */
export function JulfarNavChrome() {
  return (
    <AttractionNavChrome topics={JULFAR_MENU_TOPICS} navLabel="Julimar Farm" />
  );
}
