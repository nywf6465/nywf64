"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MALAYSIA_MENU_TOPICS } from "@/data/malaysiaMenu";

/**
 * Malaysia menu chrome — nav bar + shared **malaysia menu**.
 * Use on every page whose route begins with `malaysia`.
 */
export function MalaysiaNavChrome() {
  return (
    <AttractionNavChrome
      topics={MALAYSIA_MENU_TOPICS}
      navLabel="Malaysia"
    />
  );
}
