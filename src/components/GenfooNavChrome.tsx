"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { GENFOO_MENU_TOPICS } from "@/data/genfooMenu";

/**
 * General Foods Arches menu chrome — nav bar + shared **genfoo menu**.
 * Use on every page whose route begins with `genfoo`.
 */
export function GenfooNavChrome() {
  return (
    <AttractionNavChrome
      topics={GENFOO_MENU_TOPICS}
      navLabel="General Foods Arches"
    />
  );
}
