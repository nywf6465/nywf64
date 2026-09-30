"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { NCR_MENU_TOPICS } from "@/data/ncrMenu";

/**
 * NCR menu chrome — nav bar + shared **ncr menu**.
 * Use on every page whose route begins with `ncr`.
 */
export function NcrNavChrome() {
  return (
    <AttractionNavChrome
      topics={NCR_MENU_TOPICS}
      navLabel="NCR"
    />
  );
}
