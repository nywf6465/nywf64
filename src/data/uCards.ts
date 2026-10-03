import type { FountainsCard } from "@/data/fountainsCards";

/**
 * U-page link cards — fountains-model layout.
 * U-specific rows (empty until cards arrive).
 */
export type UCard = FountainsCard;

export const U_CARDS: UCard[] = [
  {
    id: "united-nations",
    href: "/unoverview",
    title: "United Nations",
    body: "The United Nations exhibit features materials from the UN Secretariat and a display of stamps from the UN Postal Administration is shown.",
    pavilionSrc: "/images/un/united-nations-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "United Nations",
  },
];
