"use client";

import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { AMF_MENU_TOPICS } from "@/data/amfMenu";

/**
 * Monorail (AMF) menu chrome — nav bar + shared **amf menu**.
 * Use on every page whose route begins with `amf`.
 */
export function AmfNavChrome() {
  return (
    <AttractionNavChrome
      topics={AMF_MENU_TOPICS}
      navLabel="Monorail (AMF)"
    />
  );
}
