"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { SINGER_MENU_TOPICS } from "@/data/singerMenu";

/**
 * Singer menu chrome — nav bar (**SINGER BOWL**) + singer menu.
 * Use on every page whose route begins with `singer`.
 */
export function SingerNavChrome() {
  return (
    <AttractionNavChrome topics={SINGER_MENU_TOPICS} navLabel="Singer Bowl" />
  );
}
