"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { MINNESOTA_MENU_TOPICS } from "@/data/minnesotaMenu";

/**
 * Minnesota menu chrome — nav bar + shared **minnesota menu**.
 * Use on every page whose route begins with `minnesota`.
 */
export function MinnesotaNavChrome() {
  return (
    <AttractionNavChrome
      topics={MINNESOTA_MENU_TOPICS}
      navLabel="Minnesota"
    />
  );
}
