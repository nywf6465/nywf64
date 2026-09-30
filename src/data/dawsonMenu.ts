import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Greg Dawson topic menu — from legacy dawson01.shtml “What Can You See Here?”
 * Routes match legacy dawson01–05 filenames for the first shipped page.
 */
export const DAWSON_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Introduction",
    href: "/dawson01",
  },
  {
    label: "An Interview with Greg Dawson",
    href: "/dawson02",
  },
  {
    label: "An Interview with Greg Dawson - Page 2",
    href: "/dawson03",
  },
  {
    label: "An Interview with Greg Dawson - Page 3",
    href: "/dawson04",
  },
  {
    label: "Greg Dawson, in Memorium",
    href: "/dawson05",
  },
];
