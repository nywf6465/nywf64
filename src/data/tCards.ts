import type { FountainsCard } from "@/data/fountainsCards";

/**
 * T-page link cards — fountains-model layout.
 * T-specific rows: Texas Pavilions … Two Thousand Tribes.
 */
export type TCard = FountainsCard;

const TEXAS_PAVILIONS: TCard = {
  id: "texas-pavilions",
  href: "/texasoverview",
  title: "Texas Pavilions & Music Hall",
  body: '"Friendship at the Fair" is the theme of an exuberant multiple exhibit which has been produced for the state by Dallas showman Angus G. Wynne Jr., in association with Compass Fair, Inc.',
  pavilionSrc: "/images/texas/texas-pavilions-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Texas Pavilions & Music Hall",
};

export const T_CARDS: TCard[] = [TEXAS_PAVILIONS];
