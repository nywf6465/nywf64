import type { FountainsCard } from "@/data/fountainsCards";

/**
 * O-page link cards — fountains-model layout.
 * O-specific rows: Oklahoma … Oregon.
 */
export type OCard = FountainsCard;

const OKLAHOMA: OCard = {
  id: "oklahoma",
  href: "/oklahomaoverview",
  title: "Oklahoma",
  body: 'This "pavilion" is actually a park with winding pathways arranged around a lake and a large outdoor map of the state.',
  pavilionSrc: "/images/oklahoma/oklahoma-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Oklahoma",
};

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

export const O_CARDS: OCard[] = [OKLAHOMA, OREGON];
