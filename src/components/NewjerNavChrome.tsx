"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { NEWJER_MENU_TOPICS } from "@/data/newjerMenu";

/**
 * New Jersey menu chrome — nav bar + shared **newjer menu**.
 * Use on every page whose route begins with `newjer`.
 */
export function NewjerNavChrome() {
  return (
    <AttractionNavChrome
      topics={NEWJER_MENU_TOPICS}
      navLabel="New Jersey"
    />
  );
}
