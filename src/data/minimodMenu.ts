import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Miniature Models of the Fair / minimod menu — 3 topic cards.
 * Card 1 is Overview; cards 2–3 labels/routes will be filled when
 * those pages are created.
 */
export const MINIMOD_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/minimodsoverview",
  },
  {
    label: "…",
    href: "/minimod01",
  },
  {
    label: "…",
    href: "/minimod02",
  },
];
