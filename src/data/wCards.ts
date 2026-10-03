import type { FountainsCard } from "@/data/fountainsCards";

/**
 * W-page link cards — fountains-model layout.
 * W-specific rows: Walter's Wax Museum … World's Fair Pavilion (empty until cards arrive).
 */
export type WCard = FountainsCard;

export const W_CARDS: WCard[] = [
  {
    id: "west-virginia",
    href: "/wesviroverview",
    title: "West Virginia",
    body: "Highlights include a trip through a coal mine, an exhibition of glassblowing and a chance to win a mountaintop vacation home.",
    pavilionSrc: "/images/wesvir/west-virginia-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "West Virginia",
  },
];
