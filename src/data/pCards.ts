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

export const P_CARDS: PCard[] = [
  PAKISTAN,
  PAN_AMERICAN_HIGHWAY_GARDENS,
  PARKER_PEN,
  PAVILION_OF_AMERICAN_INTERIORS,
];
