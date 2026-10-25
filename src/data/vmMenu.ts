import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * The View-Masters Reels menu — ordered by nav Page / NEXT chain.
 * Page 1 Overview → Page 2 General Tour (legacy vm02 → /vm01).
 * Remaining packets follow as they are converted.
 */
export const VM_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/vmoverview",
  },
  {
    label: "General Tour",
    href: "/vm01",
  },
];
