import type { FountainsCard } from "@/data/fountainsCards";

/**
 * V-page link cards — fountains-model layout.
 * V-specific rows: Vatican … Venezuela.
 */
export type VCard = FountainsCard;

export const V_CARDS: VCard[] = [
  {
    id: "the-vatican",
    href: "/vaticanguidebook",
    title: "Vatican",
    body: "The main exhibit is the Fair's most important work of art: the 'Pieta,' Michelangelo's 466-year-old masterpiece in Carrara marble.",
    pavilionSrc: "/images/vatican/vatican-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Vatican",
  },
  {
    id: "venezuela",
    href: "/veneze01",
    title: "Venezuela",
    body: "Among the pavilion's features are guitar and dance recitles, memorabilia of Simon Bolivar and early and modern Venezuelan art.",
    pavilionSrc: "/images/veneze/venezuela-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 330,
    pavilionAlt: "Venezuela",
  },
];
