"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { NPROGFOUNT_MENU_TOPICS } from "@/data/nprogfountMenu";

/**
 * Nprogfount menu chrome — nav bar (FOUNTAIN OF PROGRESS NORTH) + shared
 * **nprogfount menu**. Use on every page whose route begins with `nprogfount`.
 */
export function NprogfountNavChrome() {
  return (
    <AttractionNavChrome
      topics={NPROGFOUNT_MENU_TOPICS}
      navLabel="Fountain of Progress North"
    />
  );
}
