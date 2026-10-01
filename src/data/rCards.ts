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

/** Identical to the Russian Orthodox row on the Religions links page. */
const RUSSIAN_ORTHODOX: RCard = {
  id: "russian-orthodox",
  href: "/rusortoverview",
  title: "Russian Orthodox Greek-Catholic Church of America",
  body: "A valuable jeweled icon is shown in a replica of a Russian chapel built in California in 1823.",
  pavilionSrc: "/images/religions/russian-orthodox-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Russian Orthodox Church",
};

export const R_CARDS: RCard[] = [RCA, RUSSIAN_ORTHODOX];
