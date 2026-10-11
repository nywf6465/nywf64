import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * The End of the Fair / farewell menu — 11 topic cards.
 * Card 1 is Overview; cards 2–11 map to /farewell01–10 (legacy
 * farewell02–11) and are filled when those pages are created.
 */
export const FAREWELL_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/farewelloverview",
  },
  {
    label: "Remembering the Final Days",
    href: "/farewell01",
  },
  {
    label: "The Fair on Sale",
    href: "/farewell02",
  },
  {
    label: "A Source of Regret",
    href: "/farewell03",
  },
  {
    label: "... an essay by Craig Bavaro",
    href: "/farewell04",
  },
  {
    label: "On Shaky Ground",
    href: "/farewell05",
  },
  {
    label: "The End of the Fair",
    href: "/farewell06",
  },
  {
    label: "Consigned to Oblivion",
    href: "/farewell07",
  },
  {
    label: "Gallery of Photographs",
    href: "/farewell08",
  },
  {
    label: "Webmaster's note...",
    href: "/farewell09",
  },
  {
    label: "Epilogue",
    href: "/farewell10",
  },
];
