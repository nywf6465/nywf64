import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * IBM menu — nav-menu topic list for all routes beginning with `ibm`.
 * Labels match the ibm-menu-topics mockup; non-Overview routes are sequential
 * `ibm01`…`ibm18`. Italic segments via `parts` where the mockup marks them.
 */
export const IBM_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/ibm01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/ibm02",
  },
  {
    label: "Postcards",
    href: "/ibm03",
  },
  {
    label: "Advertising",
    href: "/ibm04",
  },
  {
    label: "Photograph Album",
    href: "/ibm05",
  },
  {
    label: "Press Release: From IBM (1965)",
    href: "/ibm06",
  },
  {
    label: "Construction",
    href: "/ibm07",
  },
  {
    label: "Booklet: IBM Fair",
    href: "/ibm08",
  },
  {
    label: "Brochure: Welcome to the IBM Pavilion (Version 1)",
    href: "/ibm09",
  },
  {
    label: "Brochure: Welcome to the IBM Pavilion (Version 2)",
    href: "/ibm10",
  },
  {
    label: "Brochure: Welcome to the IBM Pavilion (Version 3)",
    href: "/ibm11",
  },
  {
    label: "Booklet: Automatic Language Translation",
    href: "/ibm12",
  },
  {
    label: 'Listen to Audio of the "Information Machine" Show!',
    href: "/ibm13",
    parts: [
      { text: "Listen to Audio", italic: true },
      { text: ' of the "Information Machine" Show!' },
    ],
  },
  {
    label: "Souvenir Cards from Optical Scanning Exhibit",
    href: "/ibm14",
  },
  {
    label: "Article: IBM Creates an Information Machine",
    href: "/ibm15",
  },
  {
    label: "Article: People in Motion",
    href: "/ibm16",
  },
  {
    label: "Essay: My IBM at the Fair",
    href: "/ibm17",
    parts: [
      { text: "Essay: " },
      { text: "My IBM at the Fair", italic: true },
    ],
  },
  {
    label: "The End of the Fair",
    href: "/ibm18",
  },
];
