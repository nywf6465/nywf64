"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { LUNFOUNT_MENU_TOPICS } from "@/data/lunfountMenu";

/**
 * Lunfount menu chrome — nav bar (LUNAR FOUNTAIN) + shared
 * **lunfount menu**. Use on every page whose route begins with `lunfount`.
 */
export function LunfountNavChrome() {
  return (
    <AttractionNavChrome
      topics={LUNFOUNT_MENU_TOPICS}
      navLabel="Lunar Fountain"
    />
  );
}
