"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { LOGFLU_MENU_TOPICS } from "@/data/logfluMenu";

/**
 * Flume Ride menu chrome — nav bar + shared **logflu menu**.
 * Use on every page whose route begins with `logflu`.
 */
export function LogfluNavChrome() {
  return (
    <AttractionNavChrome topics={LOGFLU_MENU_TOPICS} navLabel="Flume Ride" />
  );
}
