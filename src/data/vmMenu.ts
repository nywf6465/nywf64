import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * The View-Masters Reels menu — ordered by nav Page / NEXT chain.
 * Page 1 Overview → Page 2 General Tour (legacy vm02 → /vm01) →
 * Page 3 Night Scenes & Amusement (legacy vm03 → /vm02) →
 * Page 4 International Area (legacy vm04 → /vm03) →
 * Page 5 Federal & State Area (legacy vm05 → /vm04) →
 * Page 6 Industrial Area (legacy vm06 → /vm05) →
 * Page 7 Transportation Area (legacy vm07 → /vm06).
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
  {
    label: "Night Scenes & Amusement",
    href: "/vm02",
  },
  {
    label: "International Area",
    href: "/vm03",
  },
  {
    label: "Federal & State Area",
    href: "/vm04",
  },
  {
    label: "Industrial Area",
    href: "/vm05",
  },
  {
    label: "Transportation Area",
    href: "/vm06",
  },
];
