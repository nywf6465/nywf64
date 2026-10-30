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
    label: "Fire Departments of City and Fair Agree on Mutual Aid Plans",
    href: "/wffd01",
  },
  {
    label: "World's Fair Fire Department",
    href: "/wffd02",
  },
  {
    label: "One of the Finest Days",
    href: "/wffd03",
  },
];
