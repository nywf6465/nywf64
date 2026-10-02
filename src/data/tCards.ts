import type { FountainsCard } from "@/data/fountainsCards";

/**
 * T-page link cards — fountains-model layout.
 * T-specific rows: Texas Pavilions … Two Thousand Tribes.
 */
export type TCard = FountainsCard;

const THAILAND: TCard = {
  id: "thailand",
  href: "/thaioverview",
  title: "Thailand",
  body: "Inspired by a Buddhist shrine, this ornate pavilion houses the ancient treasures and modern products of an exotic land.",
  pavilionSrc: "/images/thai/thailand-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Thailand",
};

export const T_CARDS: TCard[] = [THAILAND];
