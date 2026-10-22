import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Postcard Collection / pcards menu.
 * Overview (legacy pcards01 Introduction) is Page 1 on the nav bar.
 * Gallery routes (Official, Exhibitor, …) will be added as those pages ship.
 */
export const PCARDS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/pcardsoverview",
  },
];
