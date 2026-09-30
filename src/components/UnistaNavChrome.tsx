"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { UNISTA_MENU_TOPICS } from "@/data/unistaMenu";

/**
 * Unista menu chrome — nav bar (UNITED STATES) + the shared **unista menu**.
 * Use on every page whose route begins with `unista`.
 */
export function UnistaNavChrome() {
  return (
    <AttractionNavChrome
      topics={UNISTA_MENU_TOPICS}
      navLabel="United States"
    />
  );
}
