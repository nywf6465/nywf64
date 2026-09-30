"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FOUCAULT_MENU_TOPICS } from "@/data/foucaultMenu";

/**
 * Foucault menu chrome — nav bar (FOUNTAINS OF THE FAIRS) + shared
 * **Foucault menu**. Use on `/Foucault`, `/foufaioverview`, and `Foucault01`…`04`.
 */
export function FoucaultNavChrome() {
  return (
    <AttractionNavChrome
      topics={FOUCAULT_MENU_TOPICS}
      navLabel="Fountains of the Fairs"
    />
  );
}
