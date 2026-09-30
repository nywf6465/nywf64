"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { LITWAYCRO_MENU_TOPICS } from "@/data/litwaycroMenu";

/**
 * Litwaycro menu chrome — nav bar (**LITHUANIAN WAYSIDE CROSS**) + shared
 * **litwaycro menu**. Use on every page whose route begins with `litwaycro`.
 */
export function LitwaycroNavChrome() {
  return (
    <AttractionNavChrome
      topics={LITWAYCRO_MENU_TOPICS}
      navLabel="Lithuanian Wayside Cross"
    />
  );
}
