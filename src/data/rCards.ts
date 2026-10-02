import type { FountainsCard } from "@/data/fountainsCards";

/**
 * R-page link cards — fountains-model layout.
 * R-specific rows: RCA, Rheingold, Rocket Thrower, Russian Orthodox Church.
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

const RHEINGOLD: RCard = {
  id: "rheingold",
  href: "/rheingoverview",
  title: "Rheingold",
  body: "Gas lamps cast a glow on a cobblestone street where a tavern, a restaurant and an outdoor cafe' recreate the New York of 1904.",
  pavilionSrc: "/images/rheing/rheing-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Rheingold",
};

const ROCKET_THROWER: RCard = {
  id: "rocket-thrower",
  href: "/rocthroverview",
  title: "The Rocket Thrower",
  body: "Second only to Unisphere in prominence and importance, The Rocket Thrower is a bronze sculpture of a stylized figure balanced on an ascending curve reaching toward a constellation of stars.",
  pavilionSrc: "/images/rocthr/rocthr-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "The Rocket Thrower",
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

export const R_CARDS: RCard[] = [
  RCA,
  RHEINGOLD,
  ROCKET_THROWER,
  RUSSIAN_ORTHODOX,
];
