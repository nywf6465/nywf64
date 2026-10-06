import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Illinois menu — nav-menu topic list for all routes beginning with `illinois`.
 * Labels match the illinois-menu-topics mockup (italics via `parts` where needed).
 */
export const ILLINOIS_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/illinoisguidebook",
  },
  {
    label: "World's Fair Information Manual",
    href: "/illinoismanual",
  },
  {
    label: "Postcards",
    href: "/illinoispostcards",
  },
  {
    label: "Photograph Album",
    href: "/illinoisphotographalbum",
  },
  {
    label: 'Illinois "Land of Lincoln"',
    href: "/illinoislandoflincoln",
  },
  {
    label: "The Lincoln Photo Exhibit",
    href: "/illinoislincolnphotoexhibit",
  },
  {
    label: "Gettysburg Address Manuscript",
    href: "/illinoisgettysburg",
  },
  {
    label: "Lincoln Returns to Illinois",
    href: "/illinoislincolnreturns",
  },
  {
    label: "Great Moments with Mr. Lincoln",
    href: "/illinoisgreatmoments",
    parts: [{ text: "Great Moments with Mr. Lincoln", italic: true }],
  },
  {
    label: "Building Mr. Lincoln",
    href: "/illinoisbuildinglincoln",
  },
  {
    label: "Article: Preview of Disney's World's Fair Shows",
    href: "/illinoisdisneypreview",
    parts: [
      { text: "Article: " },
      { text: "Preview of Disney's World's Fair Shows", italic: true },
    ],
  },
  {
    label: "Vocal Talent",
    href: "/illinoisvocaltalent",
  },
  {
    label: "Mr. Lincoln Goes to Disneyland",
    href: "/illinoisdisneyland",
    parts: [{ text: "Mr. Lincoln Goes to Disneyland", italic: true }],
  },
];
