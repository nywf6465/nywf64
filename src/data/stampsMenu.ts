import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Postage Stamps of the Fair menu — ordered by nav Page / NEXT chain.
 * Page 1 Overview → Page 2 intro → Page 3 Afghanistan–Burundi → Page 4 Congo–Guatemala.
 */
export const STAMPS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/stampsoverview",
  },
  {
    label: "The 1964-1965 New York World's Fair in Postage Stamps",
    href: "/stamps01",
  },
  {
    label: "Afghanistan - Brundi",
    href: "/stamps02",
  },
  {
    label: "Congo - Guatemala",
    href: "/stamps03",
  },
];
