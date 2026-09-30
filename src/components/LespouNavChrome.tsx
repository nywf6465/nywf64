"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { LESPOU_MENU_TOPICS } from "@/data/lespouMenu";

/**
 * Les Poupees de Paris menu chrome — nav bar + shared **lespou menu**.
 * Use on every page whose route begins with `lespou`.
 */
export function LespouNavChrome() {
  return (
    <AttractionNavChrome
      topics={LESPOU_MENU_TOPICS}
      navLabel="Les Poupees de Paris"
    />
  );
}
