"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { FOUPLA_MENU_TOPICS } from "@/data/fouplaMenu";

/**
 * Foupla menu chrome — nav bar (FOUNTAIN OF THE PLANETS) + shared
 * **foupla menu**. Use on every page whose route begins with `foupla`.
 */
export function FouplaNavChrome() {
  return (
    <AttractionNavChrome
      topics={FOUPLA_MENU_TOPICS}
      navLabel="Fountain of the Planets"
    />
  );
}
