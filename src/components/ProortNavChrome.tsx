"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PROORT_MENU_TOPICS } from "@/data/proortMenu";

/**
 * Proort menu chrome — nav bar (**PROTESTANT & ORTHODOX CENTER**) + shared
 * **proort menu**. Use on every page whose route begins with `proort`.
 */
export function ProortNavChrome() {
  return (
    <AttractionNavChrome
      topics={PROORT_MENU_TOPICS}
      navLabel="Protestant & Orthodox Center"
    />
  );
}
