import type { FountainsCard } from "@/data/fountainsCards";

/**
 * L-page link cards — fountains-model layout.
 * L-specific rows: Lake Cruise, Lebanon, Les Poupees de Paris,
 * Lighting & Effects, Lithuanian Wayside Cross, Louisiana,
 * Long Island Rail Road, Lowenbrau Gardens, Lunar Fountain.
 */
export type LCard = FountainsCard;

const LAKCRU: LCard = {
  id: "lakcru",
  href: "/lakcru01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Lake Cruise",
  // TEXT (to the right of ICON) — exact from lakcru-card-text-source.jpg
  body: "A leisurely 20-minute ride on Meadow Lake provides various scenic views of the Fair.",
  pavilionSrc: "/images/lakcru/lakcru-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Lake Cruise",
};

const LEBANO: LCard = {
  id: "lebano",
  href: "/lebano01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Lebanon",
  // TEXT (to the right of ICON) — exact from lebano-card-text-source.jpg
  body: 'Cubelike "houses" resembling a Lebanese village contain displays of artifacts, moden industry and the country\'s tourist attractions.',
  pavilionSrc: "/images/lebano/lebano-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Lebanon",
};

const LESPOU: LCard = {
  id: "lespou",
  href: "/lespou01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Les Poupees de Paris",
  // TEXT (to the right of ICON) — exact from lespou-card-text-source.jpg
  body: "A cast of 200 puppets plays among spectacular settings in a 40-minute musical revue.",
  pavilionSrc: "/images/lespou/lespou-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Les Poupees de Paris",
};

const LIGHTING: LCard = {
  id: "lighting-and-effects",
  href: "/lighting01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Lighting & Effects",
  // TEXT (to the right of ICON) — exact from liteff-card-text-source.jpg
  // Curly apostrophe in Fair’s; italic in source; no trailing period.
  body: "The Fair\u2019s spectacular lighting and effects made the Fair a wonderland of color at night",
  bodyItalic: true,
  pavilionSrc: "/images/lighting-and-effects/lighting-and-effects-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Lighting & Effects",
};

const LITWAYCRO: LCard = {
  id: "litwaycro",
  href: "/litwaycro01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Lithuanian Wayside Cross",
  // TEXT (to the right of ICON) — exact from litway-card-text-source.jpg
  body: "A carved wooden cross memorializes those who have given their lives in defense of Lithuanian freedom.",
  pavilionSrc: "/images/lithuanian-wayside-cross/lithuanian-wayside-cross-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Lithuanian Wayside Cross",
};

const LOUISIA: LCard = {
  id: "louisia",
  href: "/louisia01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Louisiana",
  // TEXT (to the right of ICON) — exact from louisia-card-text-source.jpg
  body: "A reconstruction of New Orleans' famous Bourbon Street features well-known jazz musicians, Creole food and sidewalk shops.",
  pavilionSrc: "/images/louisia/louisia-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Louisiana",
};

const LONISLRR: LCard = {
  id: "lonislrr",
  href: "/lonislrr01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Long Island Rail Road",
  // TEXT (to the right of ICON) — exact from lonislrr-card-text-source.jpg
  body: "Open-sided tents, a duck pond and a variety of railroad displays give this exhibit the atmosphere of an old-fashioned county fair.",
  pavilionSrc: "/images/lonislrr/lonislrr-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Long Island Rail Road",
};

const LOWENGAR: LCard = {
  id: "lowengar",
  href: "/lowengar01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Lowenbrau Gardens",
  // TEXT (to the right of ICON) — exact from lowengar-card-text-source.jpg
  body: "Bavarian food and beer are served in a replica of an open-air cafe in a village square.",
  pavilionSrc: "/images/lowengar/lowengar-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Lowenbrau Gardens",
};

const LUNFOUNT: LCard = {
  id: "lunfount",
  href: "/lunfount01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Lunar Fountain",
  // TEXT (to the right of ICON) — exact from lunfount-card-text-source.jpg
  body: "Parabolic jet streams of water, reaching heights of 30 feet, radiate from 16 nozzles on the top of an elliptical dome.",
  pavilionSrc: "/images/lunar-fountain/lunar-fountain-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Lunar Fountain",
};

export const L_CARDS: LCard[] = [
  LAKCRU,
  LEBANO,
  LESPOU,
  LIGHTING,
  LITWAYCRO,
  LOUISIA,
  LONISLRR,
  LOWENGAR,
  LUNFOUNT,
];




