"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { INTPLA_MENU_TOPICS } from "@/data/intplaMenu";

/**
 * International Plaza menu chrome — nav bar + shared **intpla menu**.
 * Use on every page whose route begins with `intpla`.
 */
export function IntplaNavChrome() {
  return (
    <AttractionNavChrome
      topics={INTPLA_MENU_TOPICS}
      navLabel="International Plaza"
    />
  );
}
