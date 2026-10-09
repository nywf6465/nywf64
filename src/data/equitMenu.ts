import type { AttractionTopic } from "@/components/AttractionTopicsMenu";

/**
 * Equitable Life menu — nav-menu topics for all routes beginning with `equit`.
 * Labels match `media/equitoverview/04-menu-topics.jpg`.
 * OCR spelling preserved (incl. “Slections”). Non-Overview: `equit01`…`equit09`.
 */
export const EQUIT_MENU_TOPICS: AttractionTopic[] = [
  {
    label: "1964 & 1965 Official Guidebook & Souvenir Map",
    href: "/equit01",
  },
  {
    label: "Postcards",
    href: "/equit02",
  },
  {
    label: "Advertising",
    href: "/equit03",
  },
  {
    label: "Photograph Album",
    href: "/equit04",
  },
  {
    label: "Brochure: The Equitable at the New York World's Fair",
    href: "/equit05",
  },
  {
    label: "Brochure: Equitable Salutes Pennsylvania",
    href: "/equit06",
  },
  {
    label: "Brochure: Equitable Salutes Wisconsin",
    href: "/equit07",
  },
  {
    label: "Brochure: America Sings at the Fair",
    href: "/equit08",
  },
  {
    label: "Transcript Slections from the Demograph Soundtrack",
    href: "/equit09",
  },
];
