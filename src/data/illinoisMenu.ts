import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Illinois menu — nav-menu topic list for all routes beginning with `illinois`.
 * Labels match the illinois-menu-topics mockup (italics via `parts` where needed).
 */
export const ILLINOIS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "Overview",
    href: "/illinoisoverview",
  },
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/illinois01",
  },
  {
    label: "World's Fair Information Manual",
    href: "/illinois02",
  },
  {
    label: "Postcards",
    href: "/illinois03",
  },
  {
    label: "Photograph Album",
    href: "/illinois04",
  },
  {
    label: 'Illinois "Land of Lincoln"',
    href: "/illinois05",
  },
  {
    label: "The Lincoln Photo Exhibit",
    href: "/illinois06",
  },
  {
    label: "Gettysburg Address Manuscript",
    href: "/illinois07",
  },
  {
    label: "Lincoln Returns to Illinois",
    href: "/illinois08",
  },
  {
    label: "Great Moments with Mr. Lincoln",
    href: "/illinois09",
    parts: [{ text: "Great Moments with Mr. Lincoln", italic: true }],
  },
  {
    label: "Building Mr. Lincoln",
    href: "/illinois10",
  },
  {
    label: "Article: Preview of Disney's World's Fair Shows",
    href: "/illinois11",
    parts: [
      { text: "Article: " },
      { text: "Preview of Disney's World's Fair Shows", italic: true },
    ],
  },
  {
    label: "Vocal Talent",
    href: "/illinois12",
  },
  {
    label: "Mr. Lincoln Goes to Disneyland",
    href: "/illinois13",
    parts: [{ text: "Mr. Lincoln Goes to Disneyland", italic: true }],
  },
];
