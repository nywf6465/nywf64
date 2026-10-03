import type { FountainsCard } from "@/data/fountainsCards";

/**
 * W-page link cards — fountains-model layout.
 * W-specific rows: Walter's Wax Museum … World's Fair Pavilion (empty until cards arrive).
 */
export type WCard = FountainsCard;

export const W_CARDS: WCard[] = [
  {
    id: "wisconsin",
    href: "/wisconsinoverview",
    title: "Wisconsin",
    body: "A big, stylized tepee rises above state exhibits, including the world's largest cheese.",
    pavilionSrc: "/images/wisconsin/wisconsin-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Wisconsin",
  },
];
