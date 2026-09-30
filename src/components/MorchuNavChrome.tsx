"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MORCHU_MENU_TOPICS } from "@/data/morchuMenu";

/**
 * Morchu menu chrome — nav bar (**MORMON CHURCH**) + shared **morchu menu**.
 * Use on every page whose route begins with `morchu`.
 */
export function MorchuNavChrome() {
  return (
    <AttractionNavChrome topics={MORCHU_MENU_TOPICS} navLabel="Mormon Church" />
  );
}
