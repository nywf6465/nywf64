"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BRILION_MENU_TOPICS } from "@/data/brilionMenu";

/**
 * Brilion menu chrome — nav bar + shared **brilion menu**.
 * Use on every page whose route begins with `brilion`.
 */
export function BrilionNavChrome() {
  return (
    <AttractionNavChrome
      topics={BRILION_MENU_TOPICS}
      navLabel="British Lion Pub"
    />
  );
}
