"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MISSOURI_MENU_TOPICS } from "@/data/missouriMenu";

/**
 * Missouri menu chrome — nav bar + shared **missouri menu**.
 * Use on every page whose route begins with `missouri`.
 */
export function MissouriNavChrome() {
  return (
    <AttractionNavChrome
      topics={MISSOURI_MENU_TOPICS}
      navLabel="Missouri"
    />
  );
}
