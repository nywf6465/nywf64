"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { KOREA_MENU_TOPICS } from "@/data/koreaMenu";

/**
 * Korea menu chrome — nav bar + shared **Korea menu**.
 * Use on every page whose route begins with `korea`.
 */
export function KoreaNavChrome() {
  return (
    <AttractionNavChrome
      topics={KOREA_MENU_TOPICS}
      navLabel="Korea, Republic of"
    />
  );
}
