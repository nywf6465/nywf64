import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Postcard Collection / pcards menu.
 * Overview (legacy pcards01 Introduction) is Page 1; Official Postcards
 * (legacy pcards02 → /pcards01) is Page 2. Further galleries follow later.
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
];
