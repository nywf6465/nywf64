import type { FountainsCard } from "@/data/fountainsCards";

/**
 * T-page link cards — fountains-model layout.
 * T-specific rows: Texas Pavilions … Two Thousand Tribes (empty until cards arrive).
 */
export type TCard = FountainsCard;

/** Same ICON/TEXT/title/href as Religions “Two Thousand Tribes” row. */
const TWO_THOUSAND_TRIBES: TCard = {
  id: "two-thousand-tribes",
  href: "/twothooverview",
  title: "Two Thousand Tribes",
  body: "The ancient artifacts and modern progress of tribal groups around the world are shown in a large stylized aboriginal hut.",
  pavilionSrc: "/images/religions/two-thousand-tribes-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Two Thousand Tribes",
};

export const T_CARDS: TCard[] = [TWO_THOUSAND_TRIBES];
