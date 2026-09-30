"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { HERTZ_MENU_TOPICS } from "@/data/hertzMenu";

/**
 * Hertz Travel Center menu chrome — nav bar + shared **hertz menu**.
 * Use on every page whose route begins with `hertz`.
 */
export function HertzNavChrome() {
  return (
    <AttractionNavChrome
      topics={HERTZ_MENU_TOPICS}
      navLabel="Hertz Travel Center"
    />
  );
}
