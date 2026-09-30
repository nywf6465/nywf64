"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SPROGFOUNT_MENU_TOPICS } from "@/data/sprogfountMenu";

/**
 * Sprogfount menu chrome — nav bar (FOUNTAIN OF PROGRESS SOUTH) + shared
 * **sprogfount menu**. Use on every page whose route begins with `sprogfount`.
 */
export function SprogfountNavChrome() {
  return (
    <AttractionNavChrome
      topics={SPROGFOUNT_MENU_TOPICS}
      navLabel="Fountain of Progress South"
    />
  );
}
