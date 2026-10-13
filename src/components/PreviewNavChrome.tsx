"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { PREVIEW_MENU_TOPICS } from "@/data/previewMenu";

/**
 * Official Preview Book menu chrome.
 * Use on every page whose route begins with `preview`.
 */
export function PreviewNavChrome() {
  return (
    <AttractionNavChrome
      topics={PREVIEW_MENU_TOPICS}
      exploreLabel="EXPLORE THE BOOK"
      menuTitle="Explore The Book"
    />
  );
}
