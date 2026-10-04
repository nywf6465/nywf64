"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { WISCONSIN_MENU_TOPICS } from "@/data/wisconsinMenu";

/**
 * Wisconsin menu chrome — nav bar + shared **wisconsin menu**.
 * Use on every page whose route begins with `wisconsin`.
 */
export function WisconsinNavChrome() {
  return (
    <AttractionNavChrome
      topics={WISCONSIN_MENU_TOPICS}
      navLabel="Wisconsin"
    />
  );
}
