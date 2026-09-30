import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Flume Ride menu — nav-menu topics for all routes beginning with `logflu`.
 * Labels match `media/logflu-menu-topics-source.jpg` (+ Overview at top).
 * Non-Overview routes: `logflu01`…`logflu03`.
 */
export const LOGFLU_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/logfluoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/logflu01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/logflu02",
  },
  {
    label: "Photograph Album",
    href: "/logflu03",
  },
];
