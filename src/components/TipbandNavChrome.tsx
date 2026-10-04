"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { TIPBAND_MENU_TOPICS } from "@/data/tipbandMenu";

/**
 * Tipband menu chrome — nav bar (TIPARILLO BAND PAVILION) + shared
 * **tipband menu**. Use on every page whose route begins with `tipband`.
 */
export function TipbandNavChrome() {
  return (
    <AttractionNavChrome
      topics={TIPBAND_MENU_TOPICS}
      navLabel="Tiparillo Band Pavilion"
    />
  );
}
