"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { HAWAII_MENU_TOPICS } from "@/data/hawaiiMenu";

/**
 * Hawaii menu chrome — nav bar + shared **hawaii menu**.
 * Use on every page whose route begins with `hawaii`.
 */
export function HawaiiNavChrome() {
  return (
    <AttractionNavChrome topics={HAWAII_MENU_TOPICS} navLabel="Hawaii" />
  );
}
