"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { WESVIR_MENU_TOPICS } from "@/data/wesvirMenu";

/**
 * West Virginia menu chrome — nav bar + shared **wesvir menu**.
 * Use on every page whose route begins with `wesvir`.
 */
export function WesvirNavChrome() {
  return (
    <AttractionNavChrome
      topics={WESVIR_MENU_TOPICS}
      navLabel="West Virginia"
    />
  );
}
