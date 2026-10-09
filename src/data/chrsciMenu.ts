import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Chrsci menu — nav-menu topics for all routes beginning with `chrsci`.
 * Labels match the chrsci-menu-topics mockup; Overview at top.
 * Non-Overview routes: `chrsci01`…`chrsci13`.
 */
export const CHRSCI_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/chrscioverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/chrsci01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/chrsci02",
  },
  {
    label: "Postcards",
    href: "/chrsci03",
  },
  {
    label: "Advertising",
    href: "/chrsci04",
  },
  {
    label: "Photograph Album",
    href: "/chrsci05",
  },
  {
    label: "Pamphlet: Groundbreaking",
    href: "/chrsci06",
  },
  {
    label: "Newsletter: Progress Report #1",
    href: "/chrsci07",
  },
  {
    label: "Newsletter: Progress Report #2",
    href: "/chrsci08",
  },
  {
    label: "Newsletter: Progress Report #3",
    href: "/chrsci09",
  },
  {
    label: "Newsletter: Progress Report #4",
    href: "/chrsci10",
  },
  {
    label: "Brochure: Christian Science at the World's Fair 1964-1965",
    href: "/chrsci11",
  },
  {
    label: "Article: Christian Scientists swap one landmark for another",
    href: "/chrsci12",
    parts: [
      { text: "Article: " },
      {
        text: "Christian Scientists swap one landmark for another",
        italic: true,
      },
    ],
  },
  {
    label: "Epilogue: Distinctive Church Meets Wrecking Ball",
    href: "/chrsci13",
    parts: [
      { text: "Epilogue: " },
      { text: "Distinctive Church Meets Wrecking Ball", italic: true },
    ],
  },
];
