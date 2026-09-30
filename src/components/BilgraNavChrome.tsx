"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { BILGRA_MENU_TOPICS } from "@/data/bilgraMenu";

/**
 * Bilgra menu chrome — nav bar (**BILLY GRAHAM**) + shared **bilgra menu**.
 * Use on every page whose route begins with `bilgra`.
 */
export function BilgraNavChrome() {
  return (
    <AttractionNavChrome topics={BILGRA_MENU_TOPICS} navLabel="Billy Graham" />
  );
}
