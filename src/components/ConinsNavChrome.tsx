"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CONINS_MENU_TOPICS } from "@/data/coninsMenu";

/**
 * Continental Insurance menu chrome — nav bar + shared **conins menu**.
 * Use on every page whose route begins with `conins`.
 */
export function ConinsNavChrome() {
  return (
    <AttractionNavChrome
      topics={CONINS_MENU_TOPICS}
      navLabel="Continental Insurance"
    />
  );
}
