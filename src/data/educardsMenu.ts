import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * The “Edu-Cards” Set menu — ordered by nav Page / NEXT chain.
 * Page 1 Overview → Page 2 Official Souvenir Flash Card Set →
 * Page 3 Official Souvenir Flash Card Set (2) → …
 */
export const EDUCARDS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/educardsoverview",
  },
  {
    label: "Official Souvenir Flash Card Set",
    href: "/educards01",
  },
  {
    label: "Official Souvenir Flash Card Set (2)",
    href: "/educards02",
  },
];
