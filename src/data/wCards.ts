import type { FountainsCard } from "@/data/fountainsCards";

/**
 * W-page link cards — fountains-model layout.
 * W-specific rows: Walter's Wax Museum … World's Fair Pavilion (empty until cards arrive).
 */
export type WCard = FountainsCard;

export const W_CARDS: WCard[] = [
  {
    id: "world-of-food",
    href: "/worfoooverview",
    title: "World of Food",
    body: "The World of Food pavilion was to have housed exhibits relating to nutrition and the food industry. The pavillion was started, steel framework was erected, but was never completed.",
    pavilionSrc: "/images/worfoo/world-of-food-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "World of Food",
  },
];
