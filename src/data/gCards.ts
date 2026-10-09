import type { FountainsCard } from "@/data/fountainsCards";

/**
 * G-page link cards — fountains-model layout.
 * G-specific rows: Garden of Meditation, …
 */
export type GCard = FountainsCard;

const GARDEN_OF_MEDITATION: GCard = {
  id: "garmed",
  href: "/garmedoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Garden of Meditation",
  // TEXT (to the right of ICON) — exact from garmed-g-card-text-source.jpg
  body: "A two-acre park set aside by the Fair provides a quiet spot for relaxation.",
  pavilionSrc: "/images/garmed/garden-of-meditation-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Garden of Meditation",
};

const GENERAL_CIGAR: GCard = {
  id: "gencig",
  href: "/gencigoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "General Cigar",
  // TEXT (to the right of ICON) — exact from gencig-g-card-text-source.jpg
  body: "There are two highlights: a live magic show in which people disappear, and spectacular aerial movies of sprts events.",
  pavilionSrc: "/images/gencig/general-cigar-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "General Cigar",
};

const GENERAL_ELECTRIC: GCard = {
  id: "genele",
  href: "/geneleoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "General Electric",
  // TEXT (to the right of ICON) — exact from genelec-g-card-text-source.jpg
  body: "In a one-hour show, the changes electricity has brought in American living are dramatized by life-sized animated figures created by Walt Disney.",
  pavilionSrc: "/images/genele/genele-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "General Electric",
};

const GENERAL_FOODS_ARCHES: GCard = {
  id: "genfoo",
  href: "/genfoooverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "General Foods Arches",
  // TEXT (to the right of ICON) — exact from genfoo-g-card-text-source.jpg
  body: 'Eleven giant "Archways to Understanding" straddle the roadways at strategic locations throughout the Fairgrounds.',
  pavilionSrc: "/images/genfoo/general-foods-arches-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "General Foods Arches",
};

const GENERAL_MOTORS: GCard = {
  id: "gm",
  href: "/gmoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "General Motors",
  // TEXT (to the right of ICON) — exact from genmot-g-card-text-source.jpg
  body: "In the Futurama, Fairgoers are taken on visits to the moon, to a year-round commercial harbor in the Antarctic, to an underwater resort and to a city of tomorrow.",
  pavilionSrc: "/images/gm/gm-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "General Motors",
};

const GREECE: GCard = {
  id: "greece",
  href: "/greeceoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Greece",
  // TEXT (to the right of ICON) — exact from greece-g-card-text-source.jpg
  body: "A sound-and-light show dramatizes Greek contributions to Western thought; a terrace restaurant serves national specialties.",
  pavilionSrc: "/images/greece/greece-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Greece",
};

const GREYHOUND: GCard = {
  id: "greyhound",
  href: "/greyhoundoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Greyhound",
  // TEXT (to the right of ICON) — exact from greyhound-g-card-text-source.jpg
  body: "Among the highlights are travel exhibits, regional cooking and a canine fashion show.",
  pavilionSrc: "/images/greyhound/greyhound-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Greyhound",
};

const GUINEA: GCard = {
  id: "guinea",
  href: "/guineaoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Guinea",
  // TEXT (to the right of ICON) — exact from guinea-g-card-text-source.jpg
  body: "Three African huts house industrial displays, souvenirs and a theater-restaurant.",
  pavilionSrc: "/images/guinea/guinea-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Guinea",
};

export const G_CARDS: GCard[] = [
  GARDEN_OF_MEDITATION,
  GENERAL_CIGAR,
  GENERAL_ELECTRIC,
  GENERAL_FOODS_ARCHES,
  GENERAL_MOTORS,
  GREECE,
  GREYHOUND,
  GUINEA,
];
