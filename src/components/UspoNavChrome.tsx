"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { USPO_MENU_TOPICS } from "@/data/uspoMenu";

/**
 * U.S. Post Office menu chrome — nav bar (**U.S. POST OFFICE**) + uspo menu.
 * Use on every page whose route begins with `uspo`.
 */
export function UspoNavChrome() {
  return (
    <AttractionNavChrome
      topics={USPO_MENU_TOPICS}
      navLabel="U.S. Post Office"
    />
  );
}
