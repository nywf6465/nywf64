import type { FountainsCard } from "@/data/fountainsCards";

/**
 * T-page link cards — fountains-model layout.
 * T-specific rows: Texas Pavilions … Two Thousand Tribes (empty until cards arrive).
 */
export type TCard = FountainsCard;

export const T_CARDS: TCard[] = [
  {
    id: "transportation-and-travel",
    href: "/trantravoverview",
    title: "Transportation & Travel",
    body: "All modes of travel, from underwater to lunar, are explored in exhibits by various industries and agencies.",
    pavilionSrc: "/images/trantrav/transportation-and-travel-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Transportation & Travel",
  },
];
