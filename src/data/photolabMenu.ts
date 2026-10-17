import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Photo Lab Slide Set menu — Overview plus three slide trays.
 * Tray routes are the pages that follow this overview.
 */
export const PHOTOLAB_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/photolaboverview",
  },
  {
    label: "Slide Tray #1",
    href: "/photolabtray1",
  },
  {
    label: "Slide Tray #2",
    href: "/photolabtray2",
  },
  {
    label: "Slide Tray #3",
    href: "/photolabtray3",
  },
];
