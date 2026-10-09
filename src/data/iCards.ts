import type { FountainsCard } from "@/data/fountainsCards";

/**
 * I-page link cards — fountains-model layout.
 * I-specific rows: Illinois, …
 */
export type ICard = FountainsCard;

const ILLINOIS: ICard = {
  id: "illinois",
  href: "/illinoisguidebook",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Illinois",
  // TEXT (to the right of ICON) — exact from illinois-card-text-source.jpg
  body: "The highlight of a collection of Lincolniana and state lore is Walt Disney's moving, talking figure of Abe Lincoln himself.",
  pavilionSrc: "/images/illinois/illinois-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Illinois",
};


const INDIA: ICard = {
  id: "india",
  href: "/india01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "India",
  // TEXT (to the right of ICON) — exact from india-card-text-source.jpg
  body: "Old cultures and new industry are portrayed in this pavilion, set behind a cascade of water.",
  pavilionSrc: "/images/india/india-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "India",
};


const INDONESIA: ICard = {
  id: "indones",
  href: "/indones01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Indonesia",
  // TEXT (to the right of ICON) — exact from indonesia-card-text-source.jpg
  body: "Highlights among many displays is a large theater-restaurant where Javanese and Balinese dancers and musicians perform.",
  pavilionSrc: "/images/indones/indonesia-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Indonesia",
};


const IBM: ICard = {
  id: "ibm",
  href: "/ibm01",
  // DESCRIPTION (italic under ICON) — exact registered icon name
  title: "International Business Machines",
  // TEXT (to the right of ICON) — exact from ibm-card-text-source.jpg
  body: "A moving 500-seat \"People Wall\" lifts visitors into an egg-shaped theater for a captivating multi-screen show.",
  pavilionSrc: "/images/ibm/ibm-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "International Business Machines",
};


const INTPLA: ICard = {
  id: "intpla",
  href: "/atoz",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "International Plaza",
  // TEXT (to the right of ICON) — exact from intpla-card-text-source.jpg
  body: "A host of small exhibits, food stands and shops lends a festive air to this bazaar of many lands.",
  pavilionSrc: "/images/intpla/intpla-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "International Plaza",
};


const IRELAND: ICard = {
  id: "ireland",
  href: "/ireland01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Ireland",
  // TEXT (to the right of ICON) — exact from ireland-card-text-source.jpg
  body: "The nation's arts and way of life are shown in displays of fine products, poetry recordings and a scenic aerial film.",
  pavilionSrc: "/images/ireland/ireland-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Ireland",
};

export const I_CARDS: ICard[] = [
  ILLINOIS,
  INDIA,
  INDONESIA,
  IBM,
  INTPLA,
  IRELAND,
];
