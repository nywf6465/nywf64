import type { FountainsCard } from "@/data/fountainsCards";

/**
 * T-page link cards — fountains-model layout.
 * T-specific rows: Texas Pavilions … Two Thousand Tribes.
 */
export type TCard = FountainsCard;

const TIPARILLO_BAND_PAVILION: TCard = {
  id: "tiparillo-band-pavilion",
  href: "/tipbandoverview",
  title: "Tiparillo Band Pavilion",
  body: "Free concerts and dancing are offered at a bandshell and large outdoor dance floor.",
  pavilionSrc: "/images/tipband/tiparillo-band-pavilion-icon.jpg",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Tiparillo Band Pavilion",
};

export const T_CARDS: TCard[] = [TIPARILLO_BAND_PAVILION];
