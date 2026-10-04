"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { TWRLIT_MENU_TOPICS } from "@/data/twrlitMenu";

/**
 * Tower of Light menu chrome — nav bar + shared **twrlit menu**.
 * Use on every page whose route begins with `twrlit`.
 */
export function TwrlitNavChrome() {
  return (
    <AttractionNavChrome
      topics={TWRLIT_MENU_TOPICS}
      navLabel="Tower of Light"
    />
  );
}
