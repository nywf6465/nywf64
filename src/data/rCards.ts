import type { FountainsCard } from "@/data/fountainsCards";

/**
 * R-page link cards — fountains-model layout.
 * R-specific rows: RCA … Russian Orthodox Church.
 */
export type RCard = FountainsCard;

const RCA: RCard = {
  id: "rca",
  href: "/rcaoverview",
  title: "RCA",
  body: "Fairgoers may see themselves on color television and watch a working TV station broadcasting programs to the Fair.",
  pavilionSrc: "/images/rca/rca-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "RCA",
};

export const R_CARDS: RCard[] = [RCA];
