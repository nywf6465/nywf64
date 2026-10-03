"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { VENEZE_MENU_TOPICS } from "@/data/venezeMenu";

/**
 * Venezuela menu chrome — nav bar + shared **veneze menu**.
 * Use on `/veneerview` and every page whose route begins with `veneze`.
 */
export function VenezeNavChrome() {
  return (
    <AttractionNavChrome topics={VENEZE_MENU_TOPICS} navLabel="Venezuela" />
  );
}
