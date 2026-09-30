"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SOLFOUNT_MENU_TOPICS } from "@/data/solfountMenu";

/**
 * Solfount menu chrome — nav bar (SOLAR FOUNTAIN) + shared
 * **solfount menu**. Use on every page whose route begins with `solfount`.
 */
export function SolfountNavChrome() {
  return (
    <AttractionNavChrome
      topics={SOLFOUNT_MENU_TOPICS}
      navLabel="Solar Fountain"
    />
  );
}
