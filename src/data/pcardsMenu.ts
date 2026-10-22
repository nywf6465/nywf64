import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Postcard Collection / pcards menu.
 * Overview (legacy pcards01) is Page 1; Official Postcards galleries:
 * legacy pcards02 → /pcards01 (Page 2), pcards03 → /pcards02 (Page 3),
 * pcards04 → /pcards03 (Page 4). Further galleries follow later.
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
];
