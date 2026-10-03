import type { FountainsCard } from "@/data/fountainsCards";

/**
 * W-page link cards — fountains-model layout.
 * W-specific rows: Walter's Wax Museum … World's Fair Pavilion (empty until cards arrive).
 */
export type WCard = FountainsCard;

export const W_CARDS: WCard[] = [
  {
    id: "worlds-fair-pavilion",
    href: "/wfpavoverview",
    title: "World's Fair Pavilion",
    body: "This is the Fair's major indoor assembly hall. The light latticework structure is a geodesic dome composed of 1,250 interconnected pieces of aluminum tubing.",
    pavilionSrc: "/images/wfpav/worlds-fair-pavilion-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "World's Fair Pavilion",
  },
];
