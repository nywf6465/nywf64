"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { OKLAHOMA_MENU_TOPICS } from "@/data/oklahomaMenu";

/**
 * Oklahoma menu chrome — nav bar + shared **oklahoma menu**.
 * Use on every page whose route begins with `oklahoma`.
 */
export function OklahomaNavChrome() {
  return (
    <AttractionNavChrome topics={OKLAHOMA_MENU_TOPICS} navLabel="Oklahoma" />
  );
}
