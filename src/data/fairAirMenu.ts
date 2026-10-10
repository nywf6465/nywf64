import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * See the Fair from the Air / fair_air menu — 46 topic cards.
 * Overview + Page 1 (legacy fair_air02) + Page 2 (legacy fair_air03) + stubs.
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
  {
    label: "International Area",
    href: "/fair_air02",
  },
  ...Array.from({ length: 43 }, (_, i) => {
    const n = i + 3;
    const slug = `fair_air${String(n).padStart(2, "0")}`;
    return {
      label: `Photograph ${n}`,
      href: `/${slug}`,
    };
  }),
];
