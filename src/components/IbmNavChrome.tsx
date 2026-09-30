"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { IBM_MENU_TOPICS } from "@/data/ibmMenu";

/**
 * IBM menu chrome — nav bar (IBM) + the shared **ibm menu**.
 * Use on every page whose route begins with `ibm`.
 */
export function IbmNavChrome() {
  return <AttractionNavChrome topics={IBM_MENU_TOPICS} navLabel="IBM" />;
}
