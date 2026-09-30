"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { GREECE_MENU_TOPICS } from "@/data/greeceMenu";

/**
 * Greece menu chrome — nav bar + shared **greece menu**.
 * Use on every page whose route begins with `greece`.
 */
export function GreeceNavChrome() {
  return (
    <AttractionNavChrome topics={GREECE_MENU_TOPICS} navLabel="Greece" />
  );
}
