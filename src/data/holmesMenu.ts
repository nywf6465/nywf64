import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Gary Holmes topic menu — from legacy holmes01.shtml “What Can You See Here?”
 * Introduction omitted (same pattern as Robert Moses / Albert Fisher).
 */
export const HOLMES_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "To the Fair or Bust by Bike or by Bus! ... an essay by Gary Holmes",
    href: "/holmes01",
    parts: [
      { text: "To the Fair or Bust by Bike or by Bus!", italic: true },
      { text: " ... an essay by Gary Holmes" },
    ],
  },
];
