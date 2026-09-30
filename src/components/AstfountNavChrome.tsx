"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { ASTFOUNT_MENU_TOPICS } from "@/data/astfountMenu";

/**
 * Astfount menu chrome — nav bar (ASTRAL FOUNTAIN) + shared **astfount menu**.
 * Use on every page whose route begins with `astfount`.
 */
export function AstfountNavChrome() {
  return (
    <AttractionNavChrome
      topics={ASTFOUNT_MENU_TOPICS}
      navLabel="Astral Fountain"
    />
  );
}
