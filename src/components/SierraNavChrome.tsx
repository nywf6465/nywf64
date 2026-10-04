"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SIERRA_MENU_TOPICS } from "@/data/sierraMenu";

/**
 * Sierra menu chrome — nav bar (**SIERRA LEONE**) + sierra menu.
 * Use on every page whose route begins with `sierra`.
 */
export function SierraNavChrome() {
  return (
    <AttractionNavChrome topics={SIERRA_MENU_TOPICS} navLabel="Sierra Leone" />
  );
}
