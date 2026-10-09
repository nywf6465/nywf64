import type { FountainsCard } from "@/data/fountainsCards";

/**
 * N-page link cards — fountains-model layout.
 * N-specific rows: National Cash Register … New York State.
 */
export type NCard = FountainsCard;

const NCR: NCard = {
  id: "ncr",
  href: "/ncr01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "NCR",
  // TEXT (to the right of ICON) — exact from ncr-n-card-text-source.jpg
  body: "Among the displays are a giant children's abacus, a microscopic Bible and a computer that answers a variety of questions.",
  pavilionSrc: "/images/ncr/ncr-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "NCR",
};

const NATMARPAR: NCard = {
  id: "natmarpar",
  href: "/natmarpar01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "National Maritime Union Park",
  // TEXT (to the right of ICON) — exact from natmarpar-n-card-text-source.jpg
  // Guidebook quirk: double period at end preserved
  body: "A quiet, restful spot away from the Fair's noise and bustle, this small, landscaped park is a tribute to American seamen..",
  pavilionSrc: "/images/natmarpar/natmarpar-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "National Maritime Union Park",
};

const NEWENG: NCard = {
  id: "neweng",
  href: "/neweng01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "New England",
  // TEXT (to the right of ICON) — exact from neweng-n-card-text-source.jpg
  // Guidebook quirk: "buildngs" typo + straight quotes around village green
  body: 'A series of hexagonal buildngs around a "village green" includes a country store, a restaurant and exhibits of individual states.',
  pavilionSrc: "/images/neweng/neweng-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "New England",
};

const NEWJER: NCard = {
  id: "newjer",
  href: "/newjer01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "New Jersey",
  // TEXT (to the right of ICON) — exact from newjer-n-card-text-source.jpg
  body: "A cluster of peaked roofs suspended from soaring booms shelters many displays: craftsmen, Edison mementos, model trains.",
  pavilionSrc: "/images/newjer/newjer-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "New Jersey",
};

const NEWMEX: NCard = {
  id: "newmex",
  href: "/newmex01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "New Mexico",
  // TEXT (to the right of ICON) — exact from newmex-n-card-text-source.jpg
  body: "A pueblo of five buildings recreates the adobe construction, the spicy foods and the Indian handicrafts of the state.",
  pavilionSrc: "/images/newmex/newmex-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "New Mexico",
};

const NEWYORCIT: NCard = {
  id: "newyorcit",
  href: "/newyorcit01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "New York City",
  // TEXT (to the right of ICON) — exact from newyorcit-n-card-text-source.jpg
  body: "The Fair's host city presents a simulated helicopter ride over a huge scale model of the Greater New York area.",
  pavilionSrc: "/images/newyorcit/newyorcit-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "New York City",
};

const NEWYOR: NCard = {
  id: "newyor",
  href: "/newyorguidebook",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "New York State",
  // TEXT (to the right of ICON) — exact from newyorsta-n-card-text-source.jpg
  // Guidebook: straight double quotes around "Tent of Tomorrow"
  body: 'Above a huge "Tent of Tomorrow," housing state exhibits and shows, rise three towers, one of them an observation tower 226 feet high.',
  pavilionSrc: "/images/newyor/newyor-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "New York State",
};

export const N_CARDS: NCard[] = [
  NCR,
  NATMARPAR,
  NEWENG,
  NEWJER,
  NEWMEX,
  NEWYORCIT,
  NEWYOR,
];
