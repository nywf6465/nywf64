"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MOROCO_MENU_TOPICS } from "@/data/morocoMenu";

/**
 * Morocco (moroco) menu chrome — nav bar + shared **moroco menu**.
 * Use on every page whose route begins with `moroco`.
 */
export function MorocoNavChrome() {
  return (
    <AttractionNavChrome
      topics={MOROCO_MENU_TOPICS}
      navLabel="Morocco"
    />
  );
}
