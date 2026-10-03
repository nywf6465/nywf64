import type { FountainsCard } from "@/data/fountainsCards";

/**
 * T-page link cards — fountains-model layout.
 * T-specific rows: Texas Pavilions … Two Thousand Tribes (empty until cards arrive).
 */
export type TCard = FountainsCard;

export const T_CARDS: TCard[] = [
  {
    id: "travelers-insurance",
    href: "/travelersoverview",
    title: "Travelers Insurance",
    body: "Visitors walk past dioramas that dramatize the story of life on earth, from the first cell to man's leap into space.",
    pavilionSrc: "/images/travelers/travelers-insurance-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Travelers Insurance",
  },
];
