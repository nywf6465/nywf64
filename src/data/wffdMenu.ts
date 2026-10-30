import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * World’s Fair Fire & Police Departments menu — Overview first, then
 * feature pages remapped: legacy wffd02→/wffd01, wffd03→/wffd02, …
 */
export const WFFD_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/wffdoverview",
  },
  {
    label: "FAIR NEWS Information",
    href: "/wffd01",
  },
  {
    label: "Badges of the Bravest Excerpt",
    href: "/wffd02",
  },
  {
    label: "Police Gazette Excerpts",
    href: "/wffd03",
  },
];
