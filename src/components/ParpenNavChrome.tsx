"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PARPEN_MENU_TOPICS } from "@/data/parpenMenu";

/**
 * Parker Pen menu chrome — nav bar + shared **parpen menu**.
 * Use on every page whose route begins with `parpen`.
 */
export function ParpenNavChrome() {
  return (
    <AttractionNavChrome topics={PARPEN_MENU_TOPICS} navLabel="Parker Pen" />
  );
}
