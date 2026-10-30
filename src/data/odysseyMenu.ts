import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * A World’s Fair Odyssey menu — Overview (legacy Introduction) then essay pages
 * remapped: legacy odyssey02→/odyssey01, odyssey03→/odyssey02, odyssey04→/odyssey03.
 */
export const ODYSSEY_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/odysseyoverview",
  },
  {
    label: "A World's Fair Odyssey & An Afternoon of Delight",
    href: "/odyssey01",
    parts: [
      { text: "A World's Fair Odyssey & An Afternoon of Delight", italic: true },
    ],
  },
  {
    label: "A World's Fair Odyssey & An Afternoon of Delight (Page 2)",
    href: "/odyssey02",
    parts: [
      { text: "A World's Fair Odyssey & An Afternoon of Delight", italic: true },
      { text: " (Page 2)" },
    ],
  },
  {
    label: "A World's Fair Odyssey & An Afternoon of Delight (Page 3)",
    href: "/odyssey03",
    parts: [
      { text: "A World's Fair Odyssey & An Afternoon of Delight", italic: true },
      { text: " (Page 3)" },
    ],
  },
];
