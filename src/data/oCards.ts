import type { FountainsCard } from "@/data/fountainsCards";

/**
 * O-page link cards — fountains-model layout.
 * O-specific rows: Oklahoma … Oregon.
 */
export type OCard = FountainsCard;

const OREGON: OCard = {
  id: "oregon",
  href: "/oregonoverview",
  title: "Oregon",
  body: "A continuous carnival of the Northwest includes log-rolling, canoe tilting and a wrestling match between a man and a bear.",
  pavilionSrc: "/images/oregon/oregon-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Oregon",
};

export const O_CARDS: OCard[] = [OREGON];
