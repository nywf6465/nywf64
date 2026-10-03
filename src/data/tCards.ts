import type { FountainsCard } from "@/data/fountainsCards";

/**
 * T-page link cards — fountains-model layout.
 * T-specific rows: Texas Pavilions … Two Thousand Tribes (empty until cards arrive).
 */
export type TCard = FountainsCard;

export const T_CARDS: TCard[] = [
  {
    id: "tower-of-light",
    href: "/twrlitoverview",
    title: "Tower of Light",
    body: "A musical show depicts the benefits of electricity. Pointing skyward from the pavilion is the world's most powerful searchlight.",
    pavilionSrc: "/images/twrlit/tower-of-light-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Tower of Light",
  },
];
