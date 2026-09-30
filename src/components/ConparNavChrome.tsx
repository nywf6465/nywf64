"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CONPAR_MENU_TOPICS } from "@/data/conparMenu";

/**
 * Continental Park menu chrome — nav bar + shared **conpar menu**.
 * Use on every page whose route begins with `conpar`.
 */
export function ConparNavChrome() {
  return (
    <AttractionNavChrome
      topics={CONPAR_MENU_TOPICS}
      navLabel="Continental Park"
    />
  );
}
