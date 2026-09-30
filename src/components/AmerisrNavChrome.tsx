"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AMERISR_MENU_TOPICS } from "@/data/amerisrMenu";

/**
 * Amerisr menu chrome — nav bar (**AMERICAN-ISRAEL**) + shared
 * **amerisr menu**. Use on every page whose route begins with `amerisr`.
 */
export function AmerisrNavChrome() {
  return (
    <AttractionNavChrome
      topics={AMERISR_MENU_TOPICS}
      navLabel="American-Israel"
    />
  );
}
