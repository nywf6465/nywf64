import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Fair from the Air menu — nav-menu topics for all routes beginning with `fair_air`.
 * Overview first; 45 photograph cards follow (labels filled as photo pages ship).
 */
const PHOTO_PLACEHOLDERS: AttractionTopic[] = Array.from(
  { length: 45 },
  (_, index) => {
    const n = String(index + 1).padStart(2, "0");
    return {
      label: `Photo ${n}`,
      href: `/fair_air${n}`,
    };
  },
);

export const FAIR_AIR_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/fair_airoverview",
  },
  ...PHOTO_PLACEHOLDERS,
];
