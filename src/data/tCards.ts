import type { FountainsCard } from "@/data/fountainsCards";

/**
 * T-page link cards — fountains-model layout.
 * T-specific rows: Texas Pavilions … Two Thousand Tribes.
 */
export type TCard = FountainsCard;

const THRILL_RIDES: TCard = {
  id: "thrill-rides",
  href: "/thrridoverview",
  title: "Thrill Rides",
  body: "Three different rides provide the traditional fun of a fair.",
  pavilionSrc: "/images/thrrid/thrill-rides-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Thrill Rides",
};

export const T_CARDS: TCard[] = [THRILL_RIDES];
