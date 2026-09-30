import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Robert Moses topic menu — from legacy rm01.shtml “What Can You See Here?”
 */
export const RM_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "My Encounter with Robert Moses ... by Bill Young",
    href: "/rm01",
    parts: [
      { text: "My Encounter with Robert Moses", italic: true },
      { text: " ... by Bill Young" },
    ],
  },
  {
    label: "The Promised Land of Mr. Moses ... by Ogden Nash",
    href: "/rm03",
    parts: [
      { text: "The Promised Land of Mr. Moses", italic: true },
      { text: " ... by Ogden Nash" },
    ],
  },
  {
    label: "Booklet: The Fair, The City and The Critics",
    href: "/rm04",
  },
];
