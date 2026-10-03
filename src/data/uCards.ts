import type { FountainsCard } from "@/data/fountainsCards";

/**
 * U-page link cards — fountains-model layout.
 * U-specific rows (empty until cards arrive).
 */
export type UCard = FountainsCard;

export const U_CARDS: UCard[] = [
  {
    id: "underground-world-home",
    href: "/undrghomeoverview",
    title: "Underground World Home",
    body: "The advantages of underground living are realistically displayed in an ultramodern 10-room house built below the earth's surface.",
    pavilionSrc: "/images/undrghome/underground-world-home-icon.jpg",
    pavilionWidth: 829,
    pavilionHeight: 303,
    pavilionAlt: "Underground World Home",
  },
];
