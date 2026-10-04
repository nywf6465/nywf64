"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SINCLAIR_MENU_TOPICS } from "@/data/sinclairMenu";

/**
 * Sinclair menu chrome — nav bar (**SINCLAIR**) + sinclair menu.
 * Use on every page whose route begins with `sinclair`.
 */
export function SinclairNavChrome() {
  return (
    <AttractionNavChrome topics={SINCLAIR_MENU_TOPICS} navLabel="Sinclair" />
  );
}
