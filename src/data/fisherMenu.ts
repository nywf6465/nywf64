import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Albert Fisher topic menu — from legacy fisher01.shtml “What Can You See Here?”
 * Introduction omitted (same pattern as Robert Moses / rmMenu).
 */
export const FISHER_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "New York World's Fair Memories ... an essay by Albert Fisher",
    href: "/fisher01",
    parts: [
      { text: "New York World's Fair Memories", italic: true },
      { text: " ... an essay by Albert Fisher" },
    ],
  },
  {
    label: "New York World's Fair Memories (… continued)",
    href: "/fisher02",
    parts: [
      { text: "New York World's Fair Memories", italic: true },
      { text: " (… continued)" },
    ],
  },
];
