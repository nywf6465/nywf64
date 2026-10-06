import type { FountainsCard } from "@/data/fountainsCards";

/**
 * J-page link cards — fountains-model layout.
 * J-specific rows: Japan, Jaycopter Ride, …
 */
export type JCard = FountainsCard;

const JAPAN: JCard = {
  id: "japan",
  href: "/japan01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Japan",
  // TEXT (to the right of ICON) — exact from japan-card-text-source.jpg
  body: "Executive aircraft, cameras and a high-speed computer share space with ancient tea ceremonies befind a finely sculptured stone wall.",
  pavilionSrc: "/images/japan/japan-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Japan",
};


const JAYCOP: JCard = {
  id: "jaycop",
  href: "/jaycop01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Jaycopter Ride",
  // TEXT (to the right of ICON) — exact from jaycop-card-text-source.jpg
  body: "The sensations of a real helicopter flight are simulated in this high-flying machine, attached by a long boom to a tall tower.",
  pavilionSrc: "/images/jaycop/jaycop-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Jaycopter Ride",
};


const JOHWAX: JCard = {
  id: "johwax",
  href: "/johwax01",
  // DESCRIPTION (italic under ICON) — exact registered icon name
  title: "Johnson Wax",
  // TEXT (to the right of ICON) — exact from johnsonwax-card-text-source.jpg
  body: '"To Be Alive," an 18-minute film that has been one of the Fair\'s great hits, depicts the joys of living shared by all people.',
  pavilionSrc: "/images/johwax/johwax-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Johnson Wax",
};


const JORDAN: JCard = {
  id: "jordan",
  href: "/jordan01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Jordan",
  // TEXT (to the right of ICON) — exact from jordan-card-text-source.jpg
  body: "The age-old cultures of this land -- a seedbed of civilizations and religions -- are graphically displayed in an unusual pavilion.",
  pavilionSrc: "/images/jordan/jordan-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Jordan",
};


const JULFAR: JCard = {
  id: "julfar",
  href: "/julfar01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Julimar Farm",
  // TEXT (to the right of ICON) — exact from julfar-card-text-source.jpg
  body: "Gardens from many lands are featured at this pavilion.",
  pavilionSrc: "/images/julfar/julfar-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Julimar Farm",
};

export const J_CARDS: JCard[] = [
  JAPAN,
  JAYCOP,
  JOHWAX,
  JORDAN,
  JULFAR,
];
