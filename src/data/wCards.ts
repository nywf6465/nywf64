import type { FountainsCard } from "@/data/fountainsCards";

/**
 * W-page link cards — fountains-model layout.
 * W-specific rows: Walter's Wax Museum … World's Fair Pavilion (empty until cards arrive).
 */
export type WCard = FountainsCard;

export const W_CARDS: WCard[] = [
  {
    id: "walters-international-wax-museum",
    href: "/walwaxoverview",
    title: "Walter's International Wax Museum",
    body: "Figures in this collection of life-sized images range from Lady Godiva to the Beatles.",
    pavilionSrc: "/images/walwax/walters-international-wax-museum-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 330,
    pavilionAlt: "Walter's International Wax Museum",
  },
];
