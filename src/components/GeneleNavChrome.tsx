"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { GENELE_MENU_TOPICS } from "@/data/geneleMenu";

/**
 * Genele menu chrome — nav bar (GENERAL ELECTRIC) + the shared **genele menu**.
 * Use on every page whose route begins with `genele`.
 */
export function GeneleNavChrome() {
  return (
    <AttractionNavChrome
      topics={GENELE_MENU_TOPICS}
      navLabel="General Electric"
    />
  );
}
