import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Press Building & Public Relations menu — topics for `prebui*` / `prebuilt*` routes.
 * Labels match the prebui menu-topics mockup; Overview at top.
 * Non-Overview routes: `prebuilt01`…`prebuilt08`.
 */
export const PREBUI_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/prebuioverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map Entries",
    href: "/prebuilt01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/prebuilt02",
  },
  {
    label: "Construction",
    href: "/prebuilt03",
  },
  {
    label: "Dedication & Purpose",
    href: "/prebuilt04",
  },
  {
    label: "The Communications & Public Relations Department",
    href: "/prebuilt05",
  },
  {
    label: "An Interview with Greg Dawson",
    href: "/prebuilt06",
  },
  {
    label: "The End of World's Fairs or Just Bad Press?",
    href: "/prebuilt07",
  },
  {
    label: "Demolition of the Press Building",
    href: "/prebuilt08",
  },
];
