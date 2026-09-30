"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { CHINA_MENU_TOPICS } from "@/data/chinaMenu";

/**
 * China menu chrome — nav bar + shared **china menu**.
 * Use on every page whose route begins with `china`.
 */
export function ChinaNavChrome() {
  return (
    <AttractionNavChrome
      topics={CHINA_MENU_TOPICS}
      navLabel="China"
    />
  );
}
