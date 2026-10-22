import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Postcard Collection / pcards menu.
 * Overview (legacy pcards01) is Page 1; Official Postcards galleries:
 * legacy pcards02 → /pcards01 (Page 2) … pcards07 → /pcards06 (Page 7).
 */
export const PCARDS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/pcardsoverview",
  },
  {
    label: "Official Post Cards",
    href: "/pcards01",
  },
  {
    label: "Official Post Cards (2)",
    href: "/pcards02",
  },
  {
    label: "Official Post Cards (3)",
    href: "/pcards03",
  },
  {
    label: "Official Post Cards (4)",
    href: "/pcards04",
  },
  {
    label: "Official Post Cards (5)",
    href: "/pcards05",
  },
  {
    label: "Official Post Cards (6)",
    href: "/pcards06",
  },
];
