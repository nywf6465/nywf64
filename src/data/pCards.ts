import type { FountainsCard } from "@/data/fountainsCards";

/**
 * P-page link cards — fountains-model layout.
 * P-specific rows: Pakistan … Protestant Center.
 */
export type PCard = FountainsCard;

const PAKISTAN: PCard = {
  id: "pakistan",
  href: "/pakistoverview",
  title: "Pakistan",
  body: "An ancient land's history and hopes are refelcted in priceless relics and models of modern industrial projects.",
  pavilionSrc: "/images/pakist/pakist-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Pakistan",
};

const PAN_AMERICAN_HIGHWAY_GARDENS: PCard = {
  id: "panamg",
  href: "/panamgoverview",
  title: "Pan American Highway Gardens",
  body: "Fairgoers stroll past large paintings of scenes along the new Pan American Highway through Latin America.",
  pavilionSrc: "/images/panamg/panamg-icon.png",
  pavilionWidth: 866,
  pavilionHeight: 291,
  pavilionAlt: "Pan American Highway Gardens",
};

const PARKER_PEN: PCard = {
  id: "parpen",
  href: "/parpenoverview",
  title: "Parker Pen",
  body: "Visitors to the pavilion are put in touch with 'pen friends' of similar age and interests in many parts of the world.",
  pavilionSrc: "/images/parpen/parpen-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Parker Pen",
};

const PAVILION_OF_AMERICAN_INTERIORS: PCard = {
  id: "pavami",
  href: "/pavamioverview",
  title: "Pavilion of American Interiors",
  body: "More than 120 manufacturers and interior designers display a wide range of house furnishings and fittings.",
  pavilionSrc: "/images/pavami/pavami-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Pavilion of American Interiors",
};

const PAVILION_OF_PARIS: PCard = {
  id: "pavpar",
  href: "/pavparoverview",
  title: "Pavilion of Paris",
  body: "A sidewalk cafe, a well-stocked wine cellar and charming shops help recreate the lighthearted atmosphere of Paris.",
  pavilionSrc: "/images/pavpar/pavpar-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Pavilion of Paris",
};

const PENNSYLVANIA: PCard = {
  id: "pennsy",
  href: "/pennsyoverview",
  title: "Pennsylvania",
  body: "The Pennsylvania exhibit features a full-sized replica of the Liberty Bell. The bell can be rung by visitors.",
  pavilionSrc: "/images/pennsy/pennsy-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Pennsylvania",
};

/** Identical to the Pepsi-Cola row on The Disney Shows links page. */
const PEPSI_COLA: PCard = {
  id: "pepsi",
  href: "/pepsioverview",
  title: 'Pepsi-Cola — "It\'s a Small World"',
  body: "A salute to the children of the world, designed by Walt Disney, presents animated figures frolicking in miniature settings of many lands.",
  pavilionSrc: "/images/disney-shows/pepsi01-pavilion.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Pepsi-Cola",
};

const PHILIPPINES: PCard = {
  id: "philip",
  href: "/philipoverview",
  title: "Philippines",
  body: "Folk dance, music and wood carvings illustrate the history and culture of this island republic",
  pavilionSrc: "/images/philip/philip-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Philippines",
};

const POLYNESIA: PCard = {
  id: "polyne",
  href: "/polyneoverview",
  title: "Polynesia",
  body: "Life in a South Seas village is recreated by fire dancers and pearl divers amid thatch-roofed huts and a palm-shaded lagoon.",
  pavilionSrc: "/images/polyne/polyne-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Polynesia",
};

/** Identical to the Pool of Industry row on the Fountains links page. */
const POOL_OF_INDUSTRY: PCard = {
  id: "pool-of-industry",
  href: "/poolinoverview",
  title: "Pool of Industry ",
  body: "A gigantic symphony of fireworks, water, color and music occurs every evening.",
  pavilionSrc: "/images/fountains/pool-of-industry-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Pool of Industry ",
};

/** Identical to the Pool of Reflections row on the Fountains links page. */
const POOL_OF_REFLECTIONS: PCard = {
  id: "pool-of-reflections",
  href: "/poorefoverview",
  title: "Pool of Reflections",
  body: "The Pool of Reflections is a series of five water ponds at stepped heights with water flowing from higher to lower levels forming a long cascading type pool.",
  pavilionSrc: "/images/fountains/pool-of-reflections-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Pool of Reflections",
};

export const P_CARDS: PCard[] = [
  PAKISTAN,
  PAN_AMERICAN_HIGHWAY_GARDENS,
  PARKER_PEN,
  PAVILION_OF_AMERICAN_INTERIORS,
  PAVILION_OF_PARIS,
  PENNSYLVANIA,
  PEPSI_COLA,
  PHILIPPINES,
  POLYNESIA,
  POOL_OF_INDUSTRY,
  POOL_OF_REFLECTIONS,
];







