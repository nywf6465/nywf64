import type { FountainsCard } from "@/data/fountainsCards";

/**
 * D-page link cards — fountains-model layout.
 * D-specific rows: Dancing Waters, Demonstration Center, Denmark, DuPont,
 * Dynamic Maturity, …
 */
export type DCard = FountainsCard;

const DANCING_WATERS: DCard = {
  id: "dancing-waters",
  href: "/danwat01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Dancing Waters",
  // TEXT (to the right of ICON) — exact from danwatoverview/06-d-card-text.jpg
  body: "Colored lights, music and 4,000 moving jets of water are combined to create a variety of unusual effects.",
  pavilionSrc: "/images/danwat/dancing-waters-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Dancing Waters",
};

const DEMONSTRATION_CENTER: DCard = {
  id: "demonstration-center",
  href: "/democr01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Demonstration Center",
  // TEXT (to the right of ICON) — exact from democroverview/06-d-card-text.jpg
  body: "Everything from shoes to school equipment is on view in the modernistic structure.",
  pavilionSrc: "/images/democr/demonstration-center-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Demonstration Center",
};

const DENMARK: DCard = {
  id: "denmark",
  href: "/denmark01",
  // DESCRIPTION (italic under ICON) — exact icon name (trimmed trailing space)
  title: "Denmark",
  // TEXT (to the right of ICON) — exact from denmarkoverview/01-text.jpg
  body: "Children can romp in a novel playground while parents sample fine Danish products in shops, restaurants and sidewalk cafe.",
  pavilionSrc: "/images/denmark/denmark-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Denmark",
};

const DUPONT: DCard = {
  id: "dupont",
  href: "/dupont01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "DuPont",
  // TEXT (to the right of ICON) — exact from dupontoverview/06-d-card-text.jpg
  body: "A lively musical revue, new fashions and some startling demonstrations are devoted to progress in chemistry today.",
  pavilionSrc: "/images/dupont/dupont-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "DuPont",
};

const DYNAMIC_MATURITY: DCard = {
  id: "dynamic-maturity",
  href: "/dynmat01",
  // DESCRIPTION (italic under ICON) — exact icon name (trimmed trailing space)
  title: "Dynamic Maturity",
  // TEXT (to the right of ICON) — exact from dynmatoverview/06-d-card-text.jpg
  body: "Older visitors are offered hospitality, a patio to relax in and help in planning their Fair tour.",
  pavilionSrc: "/images/dynmat/dynamic-maturity-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Dynamic Maturity",
};

export const D_CARDS: DCard[] = [
  DANCING_WATERS,
  DEMONSTRATION_CENTER,
  DENMARK,
  DUPONT,
  DYNAMIC_MATURITY,
];
