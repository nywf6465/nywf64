import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * See the Fair from the Air / fair_air menu — 46 topic cards.
 * Overview + Page 1 (legacy fair_air02) + stubs for remaining photographs.
 */
export const FAIR_AIR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/fair_airoverview",
  },
  {
    label: "Transportation Area",
    href: "/fair_air01",
  },
  ...Array.from({ length: 44 }, (_, i) => {
    const n = i + 2;
    const slug = `fair_air${String(n).padStart(2, "0")}`;
    return {
      label: `Photograph ${n}`,
      href: `/${slug}`,
    };
  }),
];
