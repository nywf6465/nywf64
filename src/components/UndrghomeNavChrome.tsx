"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { UNDRGHOME_MENU_TOPICS } from "@/data/undrghomeMenu";

/**
 * Underground World Home menu chrome — nav bar + shared **undrghome menu**.
 * Use on every page whose route begins with `undrghome`.
 */
export function UndrghomeNavChrome() {
  return (
    <AttractionNavChrome
      topics={UNDRGHOME_MENU_TOPICS}
      navLabel="Underground World Home"
    />
  );
}
