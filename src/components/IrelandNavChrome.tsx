"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { IRELAND_MENU_TOPICS } from "@/data/irelandMenu";

/**
 * ireland menu chrome — nav bar + shared **ireland menu**.
 * Use on every page whose route begins with `ireland`.
 */
export function IrelandNavChrome() {
  return (
    <AttractionNavChrome topics={IRELAND_MENU_TOPICS} navLabel="Ireland" />
  );
}
