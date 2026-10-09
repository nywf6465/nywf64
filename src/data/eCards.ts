import type { FountainsCard } from "@/data/fountainsCards";

/**
 * E-page link cards — fountains-model layout.
 * E-specific rows: Eastern Air Lines, Eastman Kodak, …
 */
export type ECard = FountainsCard;

const EASTERN_AIR_LINES: ECard = {
  id: "eastern-air-lines",
  href: "/easternoverview",
  // DESCRIPTION (italic under ICON) — exact icon name (trimmed trailing space)
  title: "Eastern Air Lines",
  // TEXT (to the right of ICON) — exact from easternoverview/06-e-card-text.jpg
  body: "This building is a terminal for buses to local airports.",
  pavilionSrc: "/images/eastern/eastern-air-lines-icon.png",
  pavilionWidth: 763,
  pavilionHeight: 330,
  pavilionAlt: "Eastern Air Lines",
};

const EASTMAN_KODAK: ECard = {
  id: "eastman-kodak",
  href: "/easkodoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Eastman Kodak",
  // TEXT (to the right of ICON) — exact from kodakoverview/06-e-card-text.jpg
  body: 'Atop the pavilion are huge colored prints and a "moondeck" for picture-taking; inside are exhibits and an award-winning film.',
  pavilionSrc: "/images/kodak/eastman-kodak-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Eastman Kodak",
};

const ENTRANCE_BUILDING: ECard = {
  id: "entrance-building",
  href: "/entbuioverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Entrance Building",
  // TEXT (to the right of ICON) — exact from entbuioverview/06-e-card-text.jpg
  body: "The Entrance Building connects arriving and departing subway trains with the Fairgrounds. It houses many of the various service facilities of the Fair and provides comfort stations for Fairgoers.",
  pavilionSrc: "/images/entbui/entrance-building-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Entrance Building",
};

const ENTRANCE_TOWERS: ECard = {
  id: "entrance-towers",
  href: "/towersoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Entrance Towers",
  // TEXT (to the right of ICON) — exact from towersoverview/06-e-card-text.jpg
  body: "The five entrance towers serve as landmarks to locate the entrances to the Fairgrounds.",
  pavilionSrc: "/images/towers/entrance-towers-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Entrance Towers",
};

const EQUITABLE_LIFE: ECard = {
  id: "equitable-life",
  href: "/equitoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Equitable Life Assurance Society of the United States",
  // TEXT (to the right of ICON) — exact from equitoverview/06-e-card-text.jpg
  body: "A tabulator flashes the exact U.S. population every 12 seconds; displays chart population trends around the world.",
  pavilionSrc:
    "/images/equit/equitable-life-assurance-society-of-the-united-states-icon.png",
  pavilionWidth: 826,
  pavilionHeight: 304,
  pavilionAlt: "Equitable Life Assurance Society of the United States",
};

export const E_CARDS: ECard[] = [
  EASTERN_AIR_LINES,
  EASTMAN_KODAK,
  ENTRANCE_BUILDING,
  ENTRANCE_TOWERS,
  EQUITABLE_LIFE,
];
