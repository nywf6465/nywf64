import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * See the Fair from the Air / fair_air menu — 46 topic cards.
 * Card 1 is Overview; cards 2–46 (fair_air01–45) are filled when those
 * photograph pages are created.
 */
export const FAIR_AIR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/fair_airoverview",
  },
  ...Array.from({ length: 45 }, (_, i) => {
    const n = i + 1;
    const slug = `fair_air${String(n).padStart(2, "0")}`;
    return {
      label: `Photograph ${n}`,
      href: `/${slug}`,
    };
  }),
];
