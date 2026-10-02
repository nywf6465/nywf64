import type { FountainsCard } from "@/data/fountainsCards";

/**
 * S-page link cards — fountains-model layout.
 * S-specific rows: Santa Maria … Switzerland.
 */
export type SCard = FountainsCard;

const SOLAR_FOUNTAIN: SCard = {
  id: "solar-fountain",
  href: "/solfountoverview",
  title: "Solar Fountain",
  body: "A central dome supports a 30-foot high column of water while a starburst circles around the dome. Wobbling jets of water surrounding the dome simulate the sun's gases.",
  pavilionSrc: "/images/fountains/solar-fountain-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Solar Fountain",
};

export const S_CARDS: SCard[] = [SOLAR_FOUNTAIN];
