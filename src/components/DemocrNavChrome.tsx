"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { DEMOCR_MENU_TOPICS } from "@/data/democrMenu";

/**
 * Demonstration Center menu chrome — nav bar + shared **democr menu**.
 * Use on every page whose route begins with `democr`.
 */
export function DemocrNavChrome() {
  return (
    <AttractionNavChrome
      topics={DEMOCR_MENU_TOPICS}
      navLabel="Demonstration Center"
    />
  );
}
