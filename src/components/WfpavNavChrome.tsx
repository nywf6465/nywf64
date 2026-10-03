"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { WFPAV_MENU_TOPICS } from "@/data/wfpavMenu";

/**
 * World's Fair Pavilion menu chrome — nav bar + shared **wfpav menu**.
 * Use on every page whose route begins with `wfpav`.
 */
export function WfpavNavChrome() {
  return (
    <AttractionNavChrome
      topics={WFPAV_MENU_TOPICS}
      navLabel="World's Fair Pavilion"
    />
  );
}
