"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { USRUB_MENU_TOPICS } from "@/data/usrubMenu";

/**
 * U.S. Rubber menu chrome — nav bar (**U.S. RUBBER**) + usrub menu.
 * Use on every page whose route begins with `usrub`.
 */
export function UsrubNavChrome() {
  return (
    <AttractionNavChrome topics={USRUB_MENU_TOPICS} navLabel="U.S. Rubber" />
  );
}
