"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SKF_MENU_TOPICS } from "@/data/skfMenu";

/**
 * SKF menu chrome — nav bar (**SKF**) + skf menu.
 * Use on every page whose route begins with `skf`.
 */
export function SkfNavChrome() {
  return <AttractionNavChrome topics={SKF_MENU_TOPICS} navLabel="SKF" />;
}
