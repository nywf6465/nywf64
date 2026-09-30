"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CHUKININN_MENU_TOPICS } from "@/data/chukininnMenu";

/**
 * Chukin Inn menu chrome — nav bar + shared **chukininn menu**.
 * Use on every page whose route begins with `chukininn`.
 */
export function ChukininnNavChrome() {
  return (
    <AttractionNavChrome
      topics={CHUKININN_MENU_TOPICS}
      navLabel="Chukin Inn"
    />
  );
}
