"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CITSERV_MENU_TOPICS } from "@/data/citservMenu";

/**
 * Cities Service Band menu chrome — nav bar + shared **citserv menu**.
 * Use on every page whose route begins with `citserv`.
 */
export function CitservNavChrome() {
  return (
    <AttractionNavChrome
      topics={CITSERV_MENU_TOPICS}
      navLabel="Cities Service Band"
    />
  );
}
