"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CENGRI_MENU_TOPICS } from "@/data/cengriMenu";

/**
 * Cengri menu chrome — nav bar + shared **cengri menu**.
 * Use on every page whose route begins with `cengri`.
 */
export function CengriNavChrome() {
  return (
    <AttractionNavChrome
      topics={CENGRI_MENU_TOPICS}
      navLabel="Century Grill"
    />
  );
}
