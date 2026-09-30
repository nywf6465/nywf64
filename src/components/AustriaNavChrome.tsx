"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AUSTRIA_MENU_TOPICS } from "@/data/austriaMenu";

/**
 * Austria menu chrome — nav bar (**AUSTRIA**) + Austria menu.
 * Use on every page whose route begins with `austria`.
 */
export function AustriaNavChrome() {
  return (
    <AttractionNavChrome topics={AUSTRIA_MENU_TOPICS} navLabel="Austria" />
  );
}
