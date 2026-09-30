"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { LOUISIA_MENU_TOPICS } from "@/data/louisiaMenu";

/**
 * Louisiana menu chrome — nav bar + shared **louisia menu**.
 * Use on every page whose route begins with `louisia`.
 */
export function LouisiaNavChrome() {
  return (
    <AttractionNavChrome
      topics={LOUISIA_MENU_TOPICS}
      navLabel="Louisiana"
    />
  );
}
