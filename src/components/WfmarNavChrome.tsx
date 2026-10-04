"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { WFMAR_MENU_TOPICS } from "@/data/wfmarMenu";

/**
 * World's Fair Marina menu chrome — nav bar + shared **wfmar menu**.
 * Use on every page whose route begins with `wfmar`.
 */
export function WfmarNavChrome() {
  return (
    <AttractionNavChrome
      topics={WFMAR_MENU_TOPICS}
      navLabel="World's Fair Marina"
    />
  );
}
