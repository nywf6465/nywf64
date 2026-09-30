"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { DANWAT_MENU_TOPICS } from "@/data/danwatMenu";

/**
 * Dancing Waters menu chrome — nav bar + shared **danwat menu**.
 * Use on every page whose route begins with `danwat`.
 */
export function DanwatNavChrome() {
  return (
    <AttractionNavChrome
      topics={DANWAT_MENU_TOPICS}
      navLabel="Dancing Waters"
    />
  );
}
