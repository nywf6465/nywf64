"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FESGAS_MENU_TOPICS } from "@/data/fesgasMenu";

/**
 * Festival of Gas menu chrome — nav bar + shared **fesgas menu**.
 * Use on every page whose route begins with `fesgas`.
 */
export function FesgasNavChrome() {
  return (
    <AttractionNavChrome
      topics={FESGAS_MENU_TOPICS}
      navLabel="Festival of Gas"
    />
  );
}
