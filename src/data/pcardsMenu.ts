import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Postcard Collection / pcards menu.
 * Overview (legacy pcards01) is Page 1; Official Postcards /pcards01–06
 * (Pages 2–7); Exhibitor Postcards at /pcards07–11 (Pages 8–12).
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
  {
    label: "Exhibitor Post Cards",
    href: "/pcards07",
  },
  {
    label: "Exhibitor Post Cards (2)",
    href: "/pcards08",
  },
  {
    label: "Exhibitor Post Cards (3)",
    href: "/pcards09",
  },
  {
    label: "Exhibitor Post Cards (4)",
    href: "/pcards10",
  },
  {
    label: "Exhibitor Post Cards (5)",
    href: "/pcards11",
  },
];
