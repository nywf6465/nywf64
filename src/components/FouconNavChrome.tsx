"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FOUCON_MENU_TOPICS } from "@/data/fouconMenu";

/**
 * Foucon menu chrome — nav bar (FOUNTAIN OF THE CONTINENTS) + shared
 * **foucon menu**. Use on every page whose route begins with `foucon`.
 */
export function FouconNavChrome() {
  return (
    <AttractionNavChrome
      topics={FOUCON_MENU_TOPICS}
      navLabel="Fountain of the Continents "
    />
  );
}
