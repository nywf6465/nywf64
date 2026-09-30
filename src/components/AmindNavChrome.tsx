"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AMIND_MENU_TOPICS } from "@/data/amindMenu";

/**
 * Amind menu chrome — nav bar (**AMERICAN INDIAN EXPOSITION**) + amind menu.
 * Use on every page whose route begins with `amind`.
 */
export function AmindNavChrome() {
  return (
    <AttractionNavChrome
      topics={AMIND_MENU_TOPICS}
      navLabel="American Indian Exposition"
    />
  );
}
