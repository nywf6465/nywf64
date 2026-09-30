"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CONCIR_MENU_TOPICS } from "@/data/concirMenu";

/**
 * Continental Circus menu chrome — nav bar + shared **concir menu**.
 * Use on every page whose route begins with `concir`.
 */
export function ConcirNavChrome() {
  return (
    <AttractionNavChrome
      topics={CONCIR_MENU_TOPICS}
      navLabel="Continental Circus"
    />
  );
}
