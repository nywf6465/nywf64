"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { NEWENG_MENU_TOPICS } from "@/data/newengMenu";

/**
 * New England menu chrome — nav bar + shared **neweng menu**.
 * Use on every page whose route begins with `neweng`.
 */
export function NewengNavChrome() {
  return (
    <AttractionNavChrome
      topics={NEWENG_MENU_TOPICS}
      navLabel="New England"
    />
  );
}
