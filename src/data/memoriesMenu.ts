import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Katherine Khalife / Memories topic menu — from legacy memories01.shtml.
 * Single-essay topic (Introduction omitted when remapping, same as holmes/fisher).
 */
export const MEMORIES_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Essay: Memories of the 1964 World's Fair ... by Katherine Khalife",
    href: "/memories01",
    parts: [
      { text: "Essay: " },
      { text: "Memories of the 1964 World's Fair", italic: true },
      { text: " ... by Katherine Khalife" },
    ],
  },
];
