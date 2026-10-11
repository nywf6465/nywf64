import type { AttractionTopic } from "@/components/AttractionTopicsMenu";
import { FAIR_AIR_GALLERY_ITEMS } from "@/data/fairAirGallery";

/**
 * See the Fair from the Air / fair_air menu — 47 topic cards.
 * Overview + Page 1 index (legacy fair_air01) + Pages 2–46 (legacy fair_air02–46).
 */
export const FAIR_AIR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/fair_airoverview",
  },
  {
    label: "Photograph Index",
    href: "/fair_air01",
  },
  ...FAIR_AIR_GALLERY_ITEMS.map((item) => ({
    label: item.title,
    href: `/fair_air${String(item.num).padStart(2, "0")}`,
  })),
];
