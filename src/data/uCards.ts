import type { FountainsCard } from "@/data/fountainsCards";

/**
 * U-page link cards — fountains-model layout.
 * U-specific rows (empty until cards arrive).
 */
export type UCard = FountainsCard;

export const U_CARDS: UCard[] = [
  {
    id: "united-arab-republic",
    href: "/uaroverview",
    title: "United Arab Republic",
    body: "Models of the Aswan Dam and the Suez Canal are among many displays that emphasize progress in this ancient land.",
    pavilionSrc: "/images/uar/united-arab-republic-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "United Arab Republic",
  },
];
